import React, { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import CartSidebar from "@/components/CartSidebar";
import CheckoutForm from "@/components/CheckoutForm";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header
          onMenuClick={() => setIsMenuOpen(prev => !prev)}
          isMenuOpen={isMenuOpen}
        />

        <main>
          <Hero />
          <About />
          <Menu />
          <Contact />
          <Reviews />
        </main>

        <Footer />

        <CartSidebar onCheckout={() => setIsCheckoutOpen(true)} />

        <CheckoutForm
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
        />
      </div>
    </CartProvider>
  );
};

export default Index;
