// // Menu.tsx
// import React, { useState, useMemo } from "react";
// import { Search, Filter, Grid, List } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { products, categories, categoryIcons } from "@/data/products";
// import ProductCard from "./ProductCard";
// import CategoryFloatButton from "./CategoryFloatButton";
// import { cn } from "@/lib/utils";

// const Menu: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
//   // const [showMobileCategories, setShowMobileCategories] = useState(false); // Unused in your snippet, kept if needed

//   // 1. Filter products based on search, category, AND active status
//   const filteredProducts = useMemo(() => {
//     return products.filter((product) => {
//       // If product is not active, hide it completely
//       if (!product.active) return false;

//       const matchesSearch = product.name
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase());
//       const matchesCategory =
//         selectedCategory === "All" || product.category === selectedCategory;
//       return matchesSearch && matchesCategory;
//     });
//   }, [searchQuery, selectedCategory]);

//   // 2. Calculate counts based only on ACTIVE products
//   const productCounts = useMemo(() => {
//     // Filter active products first
//     const activeProducts = products.filter((p) => p.active);

//     const counts: Record<string, number> = { All: activeProducts.length };
//     activeProducts.forEach((product) => {
//       counts[product.category] = (counts[product.category] || 0) + 1;
//     });
//     return counts;
//   }, []);

//   return (
//     <section id="products" className="py-16 bg-muted/30">
//       <div className="container mx-auto px-4">
//         {/* ... (Header and Search section remains unchanged) ... */}

//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <span className="inline-block px-4 py-1 bg-leaf-light text-primary text-sm font-medium rounded-full mb-4">
//             Our Products
//           </span>
//           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
//             Fresh From The Farm
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Browse our collection of organic products sourced directly from
//             trusted farmers
//           </p>
//         </div>

//         {/* Search and Filter Bar */}
//         <div className="flex flex-col md:flex-row gap-4 mb-8">
//           {/* Search */}
//           <div className="relative flex-1">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//             <Input
//               type="text"
//               placeholder="Search products..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pl-12 pr-4 py-6 rounded-xl border-2 border-border focus:border-primary/50 bg-card text-base"
//             />
//           </div>

//           {/* View Toggle */}
//           <div className="hidden md:flex items-center gap-2 p-1 bg-card rounded-xl border-2 border-border">
//             <button
//               onClick={() => setViewMode("grid")}
//               className={cn(
//                 "p-2 rounded-lg transition-colors",
//                 viewMode === "grid"
//                   ? "bg-primary text-primary-foreground"
//                   : "hover:bg-muted",
//               )}
//             >
//               <Grid className="h-5 w-5" />
//             </button>
//             <button
//               onClick={() => setViewMode("list")}
//               className={cn(
//                 "p-2 rounded-lg transition-colors",
//                 viewMode === "list"
//                   ? "bg-primary text-primary-foreground"
//                   : "hover:bg-muted",
//               )}
//             >
//               <List className="h-5 w-5" />
//             </button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex gap-8">
//           {/* Categories Sidebar - Desktop */}
//           <aside className="hidden lg:block w-64 flex-shrink-0">
//             <div className="sticky top-24 bg-card rounded-2xl p-4 shadow-soft max-h-[calc(100vh-7rem)] overflow-y-auto">
//               <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
//                 <Filter className="h-5 w-5 text-primary" />
//                 Categories
//               </h3>
//               <div className="space-y-1">
//                 {categories.map((category) => (
//                   <button
//                     key={category}
//                     onClick={() => setSelectedCategory(category)}
//                     className={cn(
//                       "w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 text-left",
//                       selectedCategory === category
//                         ? "bg-primary text-primary-foreground shadow-md"
//                         : "hover:bg-muted text-foreground/80",
//                     )}
//                   >
//                     <span className="flex items-center gap-2">
//                       <span className="text-lg">{categoryIcons[category]}</span>
//                       <span className="text-sm font-medium truncate">
//                         {category}
//                       </span>
//                     </span>
//                     <span
//                       className={cn(
//                         "text-xs px-2 py-0.5 rounded-full",
//                         selectedCategory === category
//                           ? "bg-primary-foreground/20"
//                           : "bg-muted",
//                       )}
//                     >
//                       {productCounts[category] || 0}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </aside>

//           {/* Products Grid */}
//           <div className="flex-1">
//             <div className="flex items-center justify-between mb-6">
//               <p className="text-muted-foreground">
//                 Showing{" "}
//                 <span className="font-semibold text-foreground">
//                   {filteredProducts.length}
//                 </span>{" "}
//                 products
//               </p>
//               {selectedCategory !== "All" && (
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={() => setSelectedCategory("All")}
//                   className="text-primary"
//                 >
//                   Clear filter
//                 </Button>
//               )}
//             </div>

//             {filteredProducts.length > 0 ? (
//               <div
//                 className={cn(
//                   viewMode === "grid"
//                     ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
//                     : "flex flex-col gap-4",
//                 )}
//               >
//                 {filteredProducts.map((product, index) => (
//                   <ProductCard
//                     key={product.id}
//                     product={product}
//                     viewMode={viewMode}
//                     index={index}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-16">
//                 <div className="text-6xl mb-4">🔍</div>
//                 <h3 className="font-display text-xl font-semibold mb-2">
//                   No products found
//                 </h3>
//                 <p className="text-muted-foreground">
//                   Try adjusting your search or filter to find what you're
//                   looking for.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <CategoryFloatButton
//         categories={categories}
//         selectedCategory={selectedCategory}
//         onSelectCategory={setSelectedCategory}
//         categoryIcons={categoryIcons}
//         productCounts={productCounts}
//       />
//     </section>
//   );
// };

// export default Menu;
import React, { useState, useMemo, useEffect } from "react";
import { Search, Filter, Grid, List, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// Rename imports to avoid conflict with state variables
import {
  products as defaultProducts,
  categories as defaultCategories,
  categoryIcons as defaultCategoryIcons,
} from "@/data/products";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import CategoryFloatButton from "./CategoryFloatButton";
import { cn } from "@/lib/utils";

// Define shape for backend category response
interface BackendCategory {
  id: number;
  name: string;
  icon: string;
  slug: string;
}

const Menu: React.FC = () => {
  // State for Data (Initialize with defaults)
  const [products, setProducts] = useState<Product[]>(defaultProducts);
  const [categoryList, setCategoryList] = useState<string[]>(defaultCategories);
  const [categoryIconMap, setCategoryIconMap] =
    useState<Record<string, string>>(defaultCategoryIcons);

  // UI State
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Fetch Data from Backend
  useEffect(() => {
    const fetchBackendData = async () => {
      try {
        // Run fetches in parallel
        const [catRes, prodRes] = await Promise.all([
          // Note: Ensure your Django server is running on port 8000

          fetch(`${import.meta.env.VITE_API_BASE_URL}/api/categories/`).catch(
            () => null,
          ),
          fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products/`).catch(
            () => null,
          ),
        ]);

        // Process Categories
        if (catRes && catRes.ok) {
          const catData: BackendCategory[] = await catRes.json();

          if (catData.length > 0) {
            // 1. Create list of names (prepend "All")
            const newCatList = ["All", ...catData.map((c) => c.name)];
            setCategoryList(newCatList);

            // 2. Create Icon Map
            const newIconMap: Record<string, string> = { All: "🌿" };
            catData.forEach((c) => {
              newIconMap[c.name] = c.icon;
            });
            setCategoryIconMap(newIconMap);
          }
        }

        // Process Products
        if (prodRes && prodRes.ok) {
          const prodData: Product[] = await prodRes.json();
          if (prodData.length > 0) {
            setProducts(prodData);
          }
        }
      } catch (error) {
        console.error("Backend integration failed, using default data.", error);
        // No action needed: state is already set to defaults
      } finally {
        setIsLoading(false);
      }
    };

    fetchBackendData();
  }, []);

  // 1. Filter products based on search, category, AND active status
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // If product is not active, hide it completely
      if (!product.active) return false;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, products]); // Added 'products' dependency

  // 2. Calculate counts based only on ACTIVE products
  const productCounts = useMemo(() => {
    // Filter active products first
    const activeProducts = products.filter((p) => p.active);

    const counts: Record<string, number> = { All: activeProducts.length };
    activeProducts.forEach((product) => {
      counts[product.category] = (counts[product.category] || 0) + 1;
    });
    return counts;
  }, [products]); // Added 'products' dependency

  return (
    <section id="products" className="py-16 bg-muted/30 min-h-screen">
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
            Browse our collection of organic products sourced directly from
            trusted farmers
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
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

          <div className="hidden md:flex items-center gap-2 p-1 bg-card rounded-xl border-2 border-border">
            <button
              onClick={() => setViewMode("grid")}
              className={cn(
                "p-2 rounded-lg transition-colors",
                viewMode === "grid"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted",
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
                  : "hover:bg-muted",
              )}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
          </div>
        ) : (
          <div className="flex gap-8">
            {/* Categories Sidebar - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 bg-card rounded-2xl p-4 shadow-soft max-h-[calc(100vh-7rem)] overflow-y-auto">
                <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                  <Filter className="h-5 w-5 text-primary" />
                  Categories
                </h3>
                <div className="space-y-1">
                  {categoryList.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 text-left",
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "hover:bg-muted text-foreground/80",
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-lg">
                          {categoryIconMap[category] || "📦"}
                        </span>
                        <span className="text-sm font-medium truncate">
                          {category}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "text-xs px-2 py-0.5 rounded-full",
                          selectedCategory === category
                            ? "bg-primary-foreground/20"
                            : "bg-muted",
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

              {filteredProducts.length > 0 ? (
                <div
                  className={cn(
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                      : "flex flex-col gap-4",
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
                    Try adjusting your search or filter to find what you're
                    looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Category Float Button */}
      {!isLoading && (
        <CategoryFloatButton
          categories={categoryList}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categoryIcons={categoryIconMap}
          productCounts={productCounts}
        />
      )}
    </section>
  );
};

export default Menu;
