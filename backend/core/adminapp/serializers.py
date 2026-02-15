from rest_framework import serializers
from .models import Product, Category
from .models import Order, OrderItem

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'icon', 'slug']

class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model = Product
        fields = [
            'id', 
            'name', 
            'category_name',  # Returns string name for frontend compatibility
            'category',       # Returns ID for relations
            'price_per_kg', 
            'price_per_unit', 
            'image', 
            'description', 
            'active', 
            'out_of_stock'
        ]
        
    def to_representation(self, instance):
        # Flatten structure to match your TypeScript Product interface exactly
        data = super().to_representation(instance)
        return {
            "id": str(data['id']),
            "name": data['name'],
            "category": data['category_name'], # Flattened string
            "pricePerKg": float(data['price_per_kg']) if data['price_per_kg'] else None,
            "pricePerUnit": data['price_per_unit'],
            "image": data['image'],
            "description": data['description'],
            "active": data['active'],
            "outOfStock": data['out_of_stock']
        }

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['product', 'product_name', 'quantity', 'selected_weight', 'price']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = [
            'id', 'full_name', 'phone_number', 'address', 
            'total_amount', 'razorpay_order_id', 'payment_status', 
            'order_status', 'items', 'created_at'
        ]
        read_only_fields = ['total_amount', 'razorpay_order_id', 'payment_status', 'order_status']

class CreateOrderSerializer(serializers.Serializer):
    """
    Serializer specifically for receiving checkout data from frontend
    """
    full_name = serializers.CharField()
    phone_number = serializers.CharField()
    address = serializers.CharField()
    payment_mode = serializers.ChoiceField(choices=['ONLINE', 'COD'])
    items = serializers.ListField(child=serializers.DictField())

    def validate_items(self, items):
        if not items:
            raise serializers.ValidationError("Cart cannot be empty")
        return items