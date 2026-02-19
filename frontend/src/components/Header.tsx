// import React, { useState } from "react";
// import { ShoppingCart, Menu, X, Leaf } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { cn } from "@/lib/utils";
// //import logo from "favicon.svg";

// interface HeaderProps {
//   onMenuClick: () => void;
//   isMenuOpen: boolean;
// }

// const Header: React.FC<HeaderProps> = ({ onMenuClick, isMenuOpen }) => {
//   const { totalItems, setIsCartOpen } = useCart();
//   const [isScrolled, setIsScrolled] = useState(false);

//   React.useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//         isScrolled
//           ? "bg-card/95 backdrop-blur-md shadow-soft py-1"
//           : "bg-transparent py-1"
//       )}
//     >
//       <div className="container mx-auto px-4 flex items-center justify-between h-20">
//         {/* Logo */}
//         <a href="/" className="flex items-center gap-2 group relative h-20">
//   {/* Logo */}
//  <img
//     //src="https://i.ibb.co/xtFw6kxF/olg.png"
//     src="/favicon.svg"
//     alt="Kshiti Organics Logo"
//     className="h-40 w-40 mt-2 sm:h-48 sm:w-48  object-contain transition-transform duration-300 group-hover:scale-105"
//   />

//   {/* Text */}
//   <div className="hidden sm:block">
//     <h1 className="font-display text-xl font-bold text-black leading-tight">
//       <span className="text-green-800">K</span>shiti Organics
//     </h1>
//     <p className="text-xs text-muted-foreground -mt-1">
//       Grown By Farmers. Loved By All!
//     </p>
//   </div>
// </a>



//         {/* Navigation - Desktop */}
//         <nav className="hidden md:flex items-center gap-8">
//           <a
//             href="#home"
//             className="text-foreground/80 hover:text-primary transition-colors font-medium"
//           >
//             Home
//           </a>
//           <a
//             href="#products"
//             className="text-foreground/80 hover:text-primary transition-colors font-medium"
//           >
//             Products
//           </a>
//           <a
//             href="#about"
//             className="text-foreground/80 hover:text-primary transition-colors font-medium"
//           >
//             About
//           </a>
//           <a
//             href="#contact"
//             className="text-foreground/80 hover:text-primary transition-colors font-medium"
//           >
//             Contact
//           </a>
//         </nav>

//         {/* Actions */}
//         <div className="flex items-center gap-4">
//           {/* Cart Button */}
//           <button
//             onClick={() => setIsCartOpen(true)}
//             className="relative p-2  hover:bg-leaf/20 transition-all duration-300 group"
//             aria-label="Open cart"
//           >
//             <ShoppingCart className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
//             {totalItems > 0 && (
//               <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
//                 {totalItems}
//               </span>
//             )}
//           </button>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={onMenuClick}
//             className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
//             aria-label="Toggle menu"
//           >
//             <div className="w-6 h-5 flex flex-col justify-between items-center">
//               <span
//                 className={cn(
//                   "w-full h-0.5 bg-foreground transition-all duration-300 origin-center",
//                   isMenuOpen && "rotate-45 translate-y-2"
//                 )}
//               />
//               <span
//                 className={cn(
//                   "w-3 h-0.5 bg-foreground transition-all duration-300",
//                   isMenuOpen && "opacity-0 scale-0"
//                 )}
//               />
//               <span
//                 className={cn(
//                   "w-full h-0.5 bg-foreground transition-all duration-300 origin-center",
//                   isMenuOpen && "-rotate-45 -translate-y-2"
//                 )}
//               />
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={cn(
//           "md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden",
//           isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
//         )}
//       >
//         <nav className="flex flex-col p-4 gap-2">
//           <a
//             href="#home"
//             className="py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium"
//             onClick={onMenuClick}
//           >
//             Home
//           </a>
//           <a
//             href="#products"
//             className="py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium"
//             onClick={onMenuClick}
//           >
//             Products
//           </a>
//           <a
//             href="#about"
//             className="py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium"
//             onClick={onMenuClick}
//           >
//             About
//           </a>
//           <a
//             href="#contact"
//             className="py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium"
//             onClick={onMenuClick}
//           >
//             Contact
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

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
        {/* Logo Section */}
        <a href="/" className="flex items-center gap-2 group relative h-20">
          {/* Logo Image */}
          <img
            src="/favicon.svg"
            alt="Kshiti Organics Logo"
            // Adjusted size: h-20 (80px) on mobile, slightly larger on desktop
            className="h-40 w-40 mt-2 sm:h-48 sm:w-48  object-contain transition-transform duration-300 group-hover:scale-105"
          />

          {/* Text - Visible on ALL screens now (Removed 'hidden sm:block') */}
          <div className="flex flex-col justify-center">
            <h1 className="font-display text-lg sm:text-xl font-bold text-black leading-tight whitespace-nowrap">
              <span className="text-green-800">K</span>shiti Organics
            </h1>
            <p className="text-[10px] sm:text-xs text-muted-foreground font-medium -mt-0.5">
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
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-leaf/20 transition-all duration-300 group"
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

      {/* Mobile Menu Dropdown */}
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
