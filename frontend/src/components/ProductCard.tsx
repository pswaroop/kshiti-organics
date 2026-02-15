// ProductCard.tsx
import React, { useState } from "react";
import { ShoppingCart, Plus, Check } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const weightOptions = [
  { label: "100g", multiplier: 0.1 },
  { label: "250g", multiplier: 0.25 },
  { label: "500g", multiplier: 0.5 },
  { label: "1kg", multiplier: 1 },
];

interface ProductCardProps {
  product: Product;
  viewMode: "grid" | "list";
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  viewMode,
  index,
}) => {
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState("1kg");
  const [isAdded, setIsAdded] = useState(false);

  const calculatePrice = (multiplier: number) => {
    if (!product.pricePerKg) return null;
    return Math.round(product.pricePerKg * multiplier);
  };

  const currentPrice = () => {
    if (product.pricePerUnit) return product.pricePerUnit;
    const weight = weightOptions.find((w) => w.label === selectedWeight);
    if (!weight || !product.pricePerKg) return "Price on request";
    return `₹${calculatePrice(weight.multiplier)}`;
  };

  const handleAddToCart = () => {
    // Prevent adding if out of stock
    if (product.outOfStock) return;

    const weight = weightOptions.find((w) => w.label === selectedWeight);
    const price =
      weight && product.pricePerKg
        ? calculatePrice(weight.multiplier) || 0
        : 20; // Default for per-piece items

    addToCart(product, selectedWeight, price);
    setIsAdded(true);

    toast({
      title: "Added to cart!",
      description: `${product.name} (${selectedWeight}) has been added to your cart.`,
    });

    setTimeout(() => setIsAdded(false), 2000);
  };

  if (viewMode === "list") {
    return (
      <div
        className={cn(
          "flex gap-4 bg-card rounded-2xl p-4 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in",
          product.outOfStock && "opacity-75 grayscale-[0.5]", // Visual dimming for list view
        )}
        style={{ animationDelay: `${index * 0.05}s` }}
      >
        <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.outOfStock && (
            <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
              <span className="text-[10px] font-bold bg-muted px-2 py-1 rounded-full uppercase">
                OOS
              </span>
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs text-primary font-medium">
            {product.category}
          </span>
          <h3 className="font-display font-semibold text-foreground truncate">
            {product.name}
          </h3>
          <p className="text-lg font-bold text-primary mt-1">
            {currentPrice()}
          </p>
        </div>
        <Button
          onClick={handleAddToCart}
          disabled={product.outOfStock}
          className={cn(
            "self-center transition-all",
            isAdded ? "bg-leaf" : "btn-primary",
            product.outOfStock &&
              "bg-muted text-muted-foreground hover:bg-muted cursor-not-allowed",
          )}
        >
          {product.outOfStock ? (
            <span className="text-xs">Out of Stock</span>
          ) : isAdded ? (
            <Check className="h-5 w-5" />
          ) : (
            <Plus className="h-5 w-5" />
          )}
        </Button>
      </div>
    );
  }

  // Grid View
  return (
    <div
      className={cn(
        "group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover-lift animate-fade-in",
        product.outOfStock && "pointer-events-none lg:pointer-events-auto", // Optional: reduce interactivity
      )}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
            product.outOfStock && "grayscale-[0.8] opacity-80",
          )}
        />

        {/* Hover Gradient (Hidden if OOS for cleaner look, or kept) */}
        {!product.outOfStock && (
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        )}

        {/* Out of Stock Overlay */}
        {product.outOfStock && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/10">
            <span className="bg-card/95 text-foreground px-4 py-2 rounded-lg text-sm font-bold shadow-sm uppercase tracking-wider">
              Out of Stock
            </span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
            {product.category}
          </span>
        </div>

        {/* Quick Add Button - Hide if Out of Stock */}
        {!product.outOfStock && (
          <button
            onClick={handleAddToCart}
            className={cn(
              "absolute bottom-3 right-3 p-3 rounded-full transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-20",
              isAdded
                ? "bg-leaf text-primary-foreground"
                : "bg-primary text-primary-foreground hover:bg-primary/90",
            )}
          >
            {isAdded ? (
              <Check className="h-5 w-5" />
            ) : (
              <ShoppingCart className="h-5 w-5" />
            )}
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display font-semibold text-foreground mb-2 line-clamp-2 min-h-[3rem]">
          {product.name}
        </h3>

        {/* Weight Selection - Disabled visual if OOS */}
        {product.pricePerKg && (
          <div
            className={cn(
              "flex flex-wrap gap-1.5 mb-3",
              product.outOfStock && "opacity-50 pointer-events-none",
            )}
          >
            {weightOptions.map((weight) => (
              <button
                key={weight.label}
                onClick={() => setSelectedWeight(weight.label)}
                className={cn(
                  "px-2.5 py-1 rounded-lg text-xs font-medium transition-all",
                  selectedWeight === weight.label
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80",
                )}
              >
                {weight.label}
              </button>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className={cn(product.outOfStock && "opacity-50")}>
            <p className="text-xl font-bold text-primary">{currentPrice()}</p>
            {product.pricePerKg && (
              <p className="text-xs text-muted-foreground">
                ₹{product.pricePerKg}/kg
              </p>
            )}
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={product.outOfStock}
            size="sm"
            className={cn(
              "rounded-full transition-all",
              isAdded ? "bg-leaf hover:bg-leaf/90" : "btn-primary",
              product.outOfStock &&
                "bg-muted text-muted-foreground hover:bg-muted cursor-not-allowed border border-border",
            )}
          >
            {product.outOfStock ? (
              <span className="text-xs">Out of Stock</span>
            ) : isAdded ? (
              <>
                <Check className="h-4 w-4 mr-1" />
                Added
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-1" />
                Add
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
