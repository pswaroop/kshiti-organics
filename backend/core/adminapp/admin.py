from django.contrib import admin
from .models import Product, Category, Order, OrderItem

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'icon', 'slug')
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ('name',)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    # FIX: Added 'price_per_kg' and 'price_per_unit' to list_display
    list_display = ('name', 'category', 'price_per_kg', 'price_per_unit', 'active', 'out_of_stock')
    
    list_filter = ('category', 'active', 'out_of_stock')
    search_fields = ('name', 'category__name')
    
    # Now valid because 'price_per_kg' is in list_display above
    list_editable = ('price_per_kg', 'active', 'out_of_stock') 
    
    actions = ['mark_out_of_stock', 'mark_in_stock']

    @admin.action(description='Mark selected products as Out of Stock')
    def mark_out_of_stock(self, request, queryset):
        queryset.update(out_of_stock=True)

    @admin.action(description='Mark selected products as In Stock')
    def mark_in_stock(self, request, queryset):
        queryset.update(out_of_stock=False)

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0
    readonly_fields = ('product', 'product_name', 'quantity', 'selected_weight', 'price')

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'full_name', 'phone_number', 'total_amount', 'payment_status', 'order_status', 'created_at')
    list_filter = ('payment_status', 'order_status', 'created_at')
    search_fields = ('full_name', 'phone_number', 'razorpay_order_id')
    readonly_fields = ('razorpay_order_id', 'razorpay_payment_id', 'razorpay_signature')
    inlines = [OrderItemInline]