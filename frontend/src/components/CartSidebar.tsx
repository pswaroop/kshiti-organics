import React from "react";
import { X, Plus, Minus, ShoppingBag, Trash2, Truck, MapPin } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Product images mapping
import mangoImg from "@/assets/products/mango.jpg";
import eggsImg from "@/assets/products/eggs.jpg";
import honeyImg from "@/assets/products/honey.jpg";
import spicesImg from "@/assets/products/spices.jpg";
import oilsImg from "@/assets/products/oils.jpg";
import flourImg from "@/assets/products/flour.jpg";
import riceImg from "@/assets/products/rice.jpg";
import milletsImg from "@/assets/products/millets.jpg";
import dryfruitsImg from "@/assets/products/dryfruits.jpg";
import powderImg from "@/assets/products/powder.jpg";
import beveragesImg from "@/assets/products/beverages.jpg";

const categoryImages: Record<string, string> = {
  "Fruits & Vegetables": mangoImg,
  "Chicken & Eggs": eggsImg,
  "Natural Sweeteners": honeyImg,
  "Masala (Spices)": spicesImg,
  "Edible Oils": oilsImg,
  "Flours": flourImg,
  "Rice & Rice Products": riceImg,
  "Millets": milletsImg,
  "Dry Fruits & Nuts": dryfruitsImg,
  "Powders": powderImg,
  "Beverages": beveragesImg,
};

interface CartSidebarProps {
  onCheckout: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ onCheckout }) => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  const getProductImage = (category: string) => {
    return categoryImages[category] || mangoImg;
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 transition-opacity duration-300",
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-96 bg-card z-50 shadow-2xl transition-transform duration-300 flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <h2 className="font-display text-xl font-bold">Your Cart</h2>
            {totalItems > 0 && (
              <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Delivery Information */}
        <div className="p-4 bg-primary/5 border-b border-border space-y-2">
          <div className="flex items-start gap-2">
            <Truck className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Free delivery</span> on orders above ₹1000
            </p>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              Delivery available from <span className="font-medium text-foreground">Patancheruvu to Balanagar</span> and <span className="font-medium text-foreground">Gandimaisamma to Manikonda</span>
            </p>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="font-display text-xl font-semibold mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-6">
                Add some organic goodness to your cart!
              </p>
              <Button onClick={() => setIsCartOpen(false)} className="btn-primary">
                Start Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.selectedWeight}`}
                  className="flex gap-3 bg-muted/50 rounded-xl p-3 animate-fade-in"
                >
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={getProductImage(item.category)}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.selectedWeight}</p>
                    <p className="font-bold text-primary mt-1">₹{item.totalPrice}</p>
                    
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.selectedWeight, item.quantity - 1)
                        }
                        className="w-7 h-7 flex items-center justify-center bg-card rounded-full hover:bg-muted transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.selectedWeight, item.quantity + 1)
                        }
                        className="w-7 h-7 flex items-center justify-center bg-card rounded-full hover:bg-muted transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.selectedWeight)}
                    className="self-start p-1.5 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-bold text-xl">₹{totalPrice}</span>
            </div>
            <Button
              onClick={onCheckout}
              className="w-full btn-primary py-6 text-lg rounded-xl"
            >
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;