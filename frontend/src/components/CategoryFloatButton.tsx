import React, { useState } from "react";
import {  NotebookText, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryFloatButtonProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  categoryIcons: Record<string, string>;
  productCounts: Record<string, number>;
}

const CategoryFloatButton: React.FC<CategoryFloatButtonProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  categoryIcons,
  productCounts,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (category: string) => {
    onSelectCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden fixed bottom-6 right-6 z-40">
      {/* Category Panel */}
      <div
        className={cn(
          "absolute bottom-16 right-0 w-72 max-h-[60vh] overflow-y-auto bg-card rounded-2xl shadow-card transition-all duration-300 origin-bottom-right",
          isOpen
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-90 opacity-0 pointer-events-none"
        )}
      >
        <div className="p-4">
          <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
            < NotebookText className="h-5 w-5 text-primary" />
            Categories
          </h3>
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleSelect(category)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 text-left",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-foreground/80"
                )}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base">{categoryIcons[category]}</span>
                  <span className="text-sm font-medium">{category}</span>
                </span>
                <span
                  className={cn(
                    "text-xs px-2 py-0.5 rounded-full",
                    selectedCategory === category
                      ? "bg-primary-foreground/20"
                      : "bg-muted"
                  )}
                >
                  {productCounts[category] || 0}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Float Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full shadow-card flex items-center justify-center transition-all duration-300",
          isOpen
            ? "bg-foreground text-background rotate-90"
            : "bg-primary text-primary-foreground"
        )}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          < NotebookText className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default CategoryFloatButton;
