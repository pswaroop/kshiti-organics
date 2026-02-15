import React, { useState, useMemo } from "react";
import { Search, Filter, Grid, List, } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { products, categories, categoryIcons, } from "@/data/products";
import ProductCard from "./ProductCard";
import CategoryFloatButton from "./CategoryFloatButton";
import { cn } from "@/lib/utils";

const Menu: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showMobileCategories, setShowMobileCategories] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const productCounts = useMemo(() => {
    const counts: Record<string, number> = { All: products.length };
    products.forEach((product) => {
      counts[product.category] = (counts[product.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <section id="products" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-leaf-light text-primary text-sm font-medium rounded-full mb-4">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Fresh From The Farm
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our collection of organic products sourced directly from trusted farmers
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 rounded-xl border-2 border-border focus:border-primary/50 bg-card text-base"
            />
          </div>

          {/* View Toggle */}
          <div className="hidden md:flex items-center gap-2 p-1 bg-card rounded-xl border-2 border-border">
            <button
              onClick={() => setViewMode("grid")}
              className={cn(
                "p-2 rounded-lg transition-colors",
                viewMode === "grid"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={cn(
                "p-2 rounded-lg transition-colors",
                viewMode === "list"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Categories Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-card rounded-2xl p-4 shadow-soft max-h-[calc(100vh-7rem)] overflow-y-auto">
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <Filter className="h-5 w-5 text-primary" />
                Categories
              </h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 text-left",
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "hover:bg-muted text-foreground/80"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{categoryIcons[category]}</span>
                      <span className="text-sm font-medium truncate">
                        {category}
                      </span>
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
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing{" "}
                <span className="font-semibold text-foreground">
                  {filteredProducts.length}
                </span>{" "}
                products
              </p>
              {selectedCategory !== "All" && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedCategory("All")}
                  className="text-primary"
                >
                  Clear filter
                </Button>
              )}
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div
                className={cn(
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "flex flex-col gap-4"
                )}
              >
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  No products found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Category Float Button */}
      <CategoryFloatButton
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        categoryIcons={categoryIcons}
        productCounts={productCounts}
      />
    </section>
  );
};

export default Menu;