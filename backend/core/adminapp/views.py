from rest_framework import viewsets
from rest_framework.response import Response
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
import razorpay
from django.conf import settings
from rest_framework import viewsets, status, views
from rest_framework.response import Response
from rest_framework.decorators import action
from django.db import transaction

from .models import Product, Category, Order, OrderItem
from .serializers import (
    ProductSerializer, CategorySerializer, 
    OrderSerializer, CreateOrderSerializer
)

# Initialize Razorpay Client
client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows categories to be viewed.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows products to be viewed.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        """
        Optionally restricts the returned products to active ones,
        unless 'all=true' is passed in query params for admin debugging.
        """
        queryset = Product.objects.all()
        show_all = self.request.query_params.get('all', None)
        
        if show_all is None:
            queryset = queryset.filter(active=True)
            
        return queryset

class OrderViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Order.objects.all().order_by('-created_at')
    serializer_class = OrderSerializer

class PaymentView(views.APIView):
    @transaction.atomic
    def post(self, request, *args, **kwargs):
        # 1. Validate Input
        serializer = CreateOrderSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        data = serializer.validated_data
        cart_items = data['items']
        payment_mode = data['payment_mode']

        # 2. Calculate Total
        total_amount = 0
        for item in cart_items:
            total_amount += item.get('totalPrice', 0)
        
        razorpay_order_id = None

        # 3. Conditional Logic: Only create Razorpay order if mode is ONLINE
        if payment_mode == 'ONLINE':
            amount_in_paise = int(total_amount * 100)
            try:
                razorpay_order = client.order.create({
                    "amount": amount_in_paise,
                    "currency": "INR",
                    "payment_capture": "1"
                })
                razorpay_order_id = razorpay_order['id']
            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        # 4. Save Order to DB
        order = Order.objects.create(
            full_name=data['full_name'],
            phone_number=data['phone_number'],
            address=data['address'],
            total_amount=total_amount,
            payment_mode=payment_mode, # Save the mode
            razorpay_order_id=razorpay_order_id, # Can be None for COD
            payment_status=False # Always false initially
        )

        # 5. Save Items
        for item in cart_items:
            try:
                product_instance = Product.objects.get(id=item.get('id'))
            except Product.DoesNotExist:
                product_instance = None

            OrderItem.objects.create(
                order=order,
                product=product_instance,
                product_name=item.get('name'),
                quantity=item.get('quantity'),
                selected_weight=item.get('selectedWeight'),
                price=item.get('totalPrice')
            )

        # 6. Response
        response_data = {
            "order_id": order.id,
            "amount": total_amount,
            "payment_mode": payment_mode,
        }

        # Add Razorpay details only if Online
        if payment_mode == 'ONLINE':
            response_data.update({
                "razorpay_order_id": razorpay_order_id,
                "currency": "INR",
                "key_id": settings.RAZORPAY_KEY_ID
            })

        return Response(response_data, status=status.HTTP_201_CREATED)


class VerifyPaymentView(views.APIView):
    """
    Verifies the payment signature returned by Razorpay
    """
    def post(self, request):
        data = request.data
        
        try:
            razorpay_order_id = data.get('razorpay_order_id')
            razorpay_payment_id = data.get('razorpay_payment_id')
            razorpay_signature = data.get('razorpay_signature')

            # Verify Signature
            params_dict = {
                'razorpay_order_id': razorpay_order_id,
                'razorpay_payment_id': razorpay_payment_id,
                'razorpay_signature': razorpay_signature
            }
            
            # This will raise a SignatureVerificationError if verification fails
            client.utility.verify_payment_signature(params_dict)

            # Update Order Status
            order = Order.objects.get(razorpay_order_id=razorpay_order_id)
            order.payment_status = True
            order.order_status = 'Paid'
            order.razorpay_payment_id = razorpay_payment_id
            order.razorpay_signature = razorpay_signature
            order.save()

            return Response({"status": "Payment Verified"}, status=status.HTTP_200_OK)

        except razorpay.errors.SignatureVerificationError:
            return Response({"error": "Invalid Signature"}, status=status.HTTP_400_BAD_REQUEST)
        except Order.DoesNotExist:
            return Response({"error": "Order Not Found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)