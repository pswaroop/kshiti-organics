import React, { useState } from "react";
import { X, Send, User, Phone, MapPin, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface CheckoutFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ isOpen, onClose }) => {
  const { items, totalPrice, clearCart, setIsCartOpen } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Format order details for WhatsApp
    const orderDetails = items
      .map(
        (item) =>
          `• ${item.name} (${item.selectedWeight}) x${item.quantity} - ₹${item.totalPrice}`
      )
      .join("\n");

    const message = ` *New Order from Kshiti Organics*\n\n` +
      `*Customer Details:*\n` +
      ` Name: ${formData.name}\n` +
      ` Phone: ${formData.phone}\n` +
      ` Address: ${formData.address}\n\n` +
      `*Order Details:*\n${orderDetails}\n\n` +
      `*Total Amount: ₹${totalPrice}*\n\n` +
      `Thank you for ordering! `;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919000228212?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // Clear cart and close modals
    setTimeout(() => {
      clearCart();
      setIsCartOpen(false);
      onClose();
      setFormData({ name: "", phone: "", address: "" });
      setIsSubmitting(false);

      toast({
        title: "Order Sent!",
        description: "Your order has been sent via WhatsApp. We'll contact you shortly!",
      });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-foreground/60 backdrop-blur-sm z-[60] transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[60] transition-all duration-300",
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <div className="bg-card rounded-2xl shadow-2xl m-4 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-leaf p-6 text-primary-foreground">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold">Checkout</h2>
                <p className="text-primary-foreground/80 text-sm">
                  Complete your order
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-primary-foreground/20 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="p-4 bg-muted/50 border-b border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">Items ({items.length})</span>
              <span className="font-semibold">₹{totalPrice}</span>
            </div>
            <div className="text-xs text-muted-foreground max-h-20 overflow-y-auto">
              {items.map((item, index) => (
                <div key={index} className="truncate">
                  {item.name} ({item.selectedWeight}) x{item.quantity}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1.5">
                <User className="inline h-4 w-4 mr-1 text-primary" />
                Full Name
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={cn(
                  "py-5 rounded-xl",
                  errors.name && "border-destructive focus:ring-destructive"
                )}
              />
              {errors.name && (
                <p className="text-destructive text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1.5">
                <Phone className="inline h-4 w-4 mr-1 text-primary" />
                Phone Number
              </label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your 10-digit phone number"
                type="tel"
                className={cn(
                  "py-5 rounded-xl",
                  errors.phone && "border-destructive focus:ring-destructive"
                )}
              />
              {errors.phone && (
                <p className="text-destructive text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium mb-1.5">
                <MapPin className="inline h-4 w-4 mr-1 text-primary" />
                Delivery Address
              </label>
              <Textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your complete delivery address"
                rows={3}
                className={cn(
                  "rounded-xl resize-none",
                  errors.address && "border-destructive focus:ring-destructive"
                )}
              />
              {errors.address && (
                <p className="text-destructive text-xs mt-1">{errors.address}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-6 text-lg rounded-xl flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Sending Order...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Order via WhatsApp
                </>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Your order will be sent directly to our WhatsApp for quick processing
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
