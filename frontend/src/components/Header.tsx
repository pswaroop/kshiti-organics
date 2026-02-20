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
//     className="h-50 w-50 mt-2 sm:h-48 sm:w-48  object-contain transition-transform duration-300 group-hover:scale-105"
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

import React, { useState, useEffect } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, isMenuOpen }) => {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
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
        // Since the logo is a JPG (solid background), we use a white header 
        // even at the top to make it blend seamlessly.
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-1"
          : "bg-white py-2" 
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-20 md:h-28">
        
        {/* LOGO SECTION */}
        <a href="/" className="flex-shrink-0 flex items-center">
          <img
            // Ensure this file is in your 'public' folder
            src="/kshitilogonobg.jpeg" 
            alt="Kshiti Organics - Grown By Farmers, Loved By All"
            // Mobile: h-16 (64px) | Desktop: h-24 (96px)
            // This size ensures the tagline is readable without breaking layout
            className="h-16 w-auto md:h-24 object-contain transition-transform duration-300 hover:scale-105"
          />

          <div className="hidden sm:block">
     <h1 className="font-display text-xl font-bold text-black leading-tight">
       <span className="text-green-800">K</span>shiti Organics
     </h1>
     <p className="text-xs text-muted-foreground -mt-1">
       Grown By Farmers. Loved By All!
     </p>
   </div>
        </a>

        {/* NAVIGATION - DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Products", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-green-700 font-medium text-sm tracking-wide transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-full hover:bg-green-50 transition-all duration-300 group"
            aria-label="Open cart"
          >
            <ShoppingCart className="h-6 w-6 text-gray-700 group-hover:text-green-700 transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center animate-in zoom-in shadow-sm border-2 border-white">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-center">
              <span
                className={cn(
                  "w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center",
                  isMenuOpen && "rotate-45 translate-y-2.5"
                )}
              />
              <span
                className={cn(
                  "w-full h-0.5 bg-current rounded-full transition-all duration-300",
                  isMenuOpen && "opacity-0 scale-0"
                )}
              />
              <span
                className={cn(
                  "w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center",
                  isMenuOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col p-6 gap-4">
          {["Home", "Products", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50 last:border-0 hover:text-green-700 hover:pl-2 transition-all duration-300"
              onClick={onMenuClick}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
