from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    icon = models.CharField(max_length=10, help_text="Emoji or Icon class", default="📦")
    slug = models.SlugField(unique=True, blank=True)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

class Product(models.Model):
    # Basic Info
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    description = models.TextField(blank=True, null=True)
    #image = models.URLField(max_length=500, help_text="URL to external image")
    image = models.ImageField(upload_to='products/', help_text="Upload product image")
    # Pricing
    price_per_kg = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    price_per_unit = models.CharField(max_length=100, blank=True, null=True, help_text="e.g. '₹20 per piece'")

    # Status Flags
    active = models.BooleanField(default=True)
    out_of_stock = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Order(models.Model):
    STATUS_CHOICES = (
        ('Pending', 'Pending'),
        ('Paid', 'Paid'),
        ('Shipped', 'Shipped'),
        ('Delivered', 'Delivered'),
        ('Cancelled', 'Cancelled'),
    )
    PAYMENT_MODES = (
        ('ONLINE', 'Online Payment'),
        ('COD', 'Cash on Delivery'),
    )

    # Customer Details
    full_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    address = models.TextField()
    
    # Payment Details
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_mode = models.CharField(max_length=10, choices=PAYMENT_MODES, default='ONLINE') # NEW FIELD
    razorpay_order_id = models.CharField(max_length=100, unique=True, null=True, blank=True) # Made nullable for COD orders
    razorpay_payment_id = models.CharField(max_length=100, blank=True, null=True)
    razorpay_signature = models.CharField(max_length=255, blank=True, null=True)
    
    # Order Status
    payment_status = models.BooleanField(default=False)
    order_status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Order #{self.id} - {self.full_name}"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey('Product', on_delete=models.SET_NULL, null=True)
    
    # Snapshot of product details at time of purchase
    product_name = models.CharField(max_length=255) 
    quantity = models.PositiveIntegerField()
    selected_weight = models.CharField(max_length=50) # e.g., "1kg", "500g"
    price = models.DecimalField(max_digits=10, decimal_places=2) # Price per item * quantity

    def __str__(self):
        return f"{self.quantity} x {self.product_name}"
