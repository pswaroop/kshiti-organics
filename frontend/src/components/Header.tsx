import React, { useState } from "react";
import { ShoppingCart, Menu, X, Leaf } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
//import logo from "favicon.svg";

interface HeaderProps {
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, isMenuOpen }) => {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-1"
          : "bg-transparent py-1"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group relative h-20">
  {/* Logo */}
 <img
    //src="https://i.ibb.co/xtFw6kxF/olg.png"
    src="/kshitilogo.jpeg"
    alt="Kshiti Organics Logo"
    className="h-50 w-50 mt-2 sm:h-48 sm:w-48  object-contain transition-transform duration-300 group-hover:scale-105"
  />

  {/* Text */}
  <div className="hidden sm:block">
    <h1 className="font-display text-xl font-bold text-black leading-tight">
      <span className="text-green-800">K</span>shiti Organics
    </h1>
    <p className="text-xs text-muted-foreground -mt-1">
      Grown By Farmers. Loved By All!
    </p>
  </div>
</a>



        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Home
          </a>
          <a
            href="#products"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Products
          </a>
          <a
            href="#about"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2  hover:bg-leaf/20 transition-all duration-300 group"
            aria-label="Open cart"
          >
            <ShoppingCart className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-center">
              <span
                className={cn(
                  "w-full h-0.5 bg-foreground transition-all duration-300 origin-center",
                  isMenuOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "w-3 h-0.5 bg-foreground transition-all duration-300",
                  isMenuOpen && "opacity-0 scale-0"
                )}
              />
              <span
                className={cn(
                  "w-full h-0.5 bg-foreground transition-all duration-300 origin-center",
                  isMenuOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col p-4 gap-2">
          <a
            href="#home"
            className="py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium"
            onClick={onMenuClick}
          >
            Home
          </a>
          <a
            href="#products"
            className="py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium"
            onClick={onMenuClick}
          >
            Products
          </a>
          <a
            href="#about"
            className="py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium"
            onClick={onMenuClick}
          >
            About
          </a>
          <a
            href="#contact"
            className="py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium"
            onClick={onMenuClick}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// import React, { useState, useEffect } from "react";
// import { ShoppingCart } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { cn } from "@/lib/utils";

// interface HeaderProps {
//   onMenuClick: () => void;
//   isMenuOpen: boolean;
// }

// const Header: React.FC<HeaderProps> = ({ onMenuClick, isMenuOpen }) => {
//   const { totalItems, setIsCartOpen } = useCart();
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
//         isScrolled
//           ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-2"
//           : "bg-transparent py-4"
//       )}
//     >
//       <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
//         {/* LOGO & BRAND SECTION */}
//         <a href="/" className="flex items-center gap-3 group relative z-50">
//           {/* Logo Container - slightly larger but constrained */}
//           <div className="relative h-16 w-16 md:h-20 md:w-20 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
//             <img
//               src="/favicon.svg"
//               alt="Kshiti Organics Logo"
//               className="h-full w-full object-contain"
//             />
//           </div>

//           {/* Brand Text - Elegant & Centered Vertically */}
//           <div className="flex flex-col justify-center">
//             <h1 className="font-display text-xl md:text-2xl font-bold text-gray-900 leading-none tracking-tight">
//               <span className="text-green-700">K</span>shiti Organics
//             </h1>
//             <p className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wide uppercase mt-1 opacity-90 group-hover:opacity-100 transition-opacity">
//               Grown By Farmers. Loved By All!
//             </p>
//           </div>
//         </a>

//         {/* DESKTOP NAVIGATION - Centered styling */}
//         <nav className="hidden md:flex items-center gap-10">
//           {["Home", "Products", "About", "Contact"].map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors relative group/link py-2"
//             >
//               {item}
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover/link:w-full opacity-80" />
//             </a>
//           ))}
//         </nav>

//         {/* ACTIONS SECTION */}
//         <div className="flex items-center gap-3 md:gap-6">
//           {/* Cart Button with sophisticated badge */}
//           <button
//             onClick={() => setIsCartOpen(true)}
//             className="relative p-2.5 rounded-full hover:bg-green-50 transition-all duration-300 group/cart"
//             aria-label="Open cart"
//           >
//             <ShoppingCart className="h-6 w-6 text-gray-700 group-hover/cart:text-green-700 transition-colors" />
//             {totalItems > 0 && (
//               <span className="absolute top-0 right-0 bg-green-600 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-sm border-2 border-white animate-in zoom-in">
//                 {totalItems}
//               </span>
//             )}
//           </button>

//           {/* Mobile Menu Hamburger - Custom animated */}
//           <button
//             onClick={onMenuClick}
//             className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             <div className="w-6 h-5 flex flex-col justify-between items-center relative">
//               <span
//                 className={cn(
//                   "w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center",
//                   isMenuOpen && "rotate-45 translate-y-2.5 bg-red-500"
//                 )}
//               />
//               <span
//                 className={cn(
//                   "w-4 h-0.5 bg-current rounded-full transition-all duration-300 ml-auto",
//                   isMenuOpen && "opacity-0 translate-x-4"
//                 )}
//               />
//               <span
//                 className={cn(
//                   "w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center",
//                   isMenuOpen && "-rotate-45 -translate-y-2 bg-red-500"
//                 )}
//               />
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU DROPDOWN */}
//       <div
//         className={cn(
//           "md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
//           isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
//         )}
//       >
//         <nav className="flex flex-col p-6 gap-3">
//           {["Home", "Products", "About", "Contact"].map((item, idx) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="text-lg font-medium text-gray-800 py-3 border-b border-gray-50 last:border-0 hover:text-green-700 hover:pl-2 transition-all duration-300"
//               style={{ transitionDelay: `${idx * 50}ms` }}
//               onClick={onMenuClick}
//             >
//               {item}
//             </a>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
