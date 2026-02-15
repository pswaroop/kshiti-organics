import React from "react";
import { ArrowDown, Leaf, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const logoUrl = "https://i.ibb.co/xtFw6kxF/olg.png";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Fresh organic products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-leaves opacity-50 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 py-8 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center">
          
          {/* Logo - First on mobile, right on desktop */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative animate-breathe">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl" />
              
              {/* Logo */}
              <div className="relative">
                <img 
                  src={logoUrl} 
                  alt="Organic Products Logo" 
                  className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[30rem] lg:h-[30rem] object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2 lg:order-1 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-leaf-light rounded-full mb-6 animate-fade-in">
              <Leaf className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                100% Natural & Organic
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Pure & Fresh{" "}
              <span className="text-gradient">Organic Products</span> Delivered
            </h1>

            {/* Description */}
            <p
              className="text-lg text-muted-foreground mb-6 lg:mb-8 max-w-lg animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Discover farm-fresh organic products sourced directly from local farmers. 
              From exotic mangoes to pure honey, we bring nature's best to your doorstep.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 mb-6 lg:mb-12 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                size="lg"
                className="btn-primary text-lg px-8 py-6 rounded-full group"
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              >
                Shop Now
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 rounded-full border-2 border-primary/30 hover:bg-primary/10"
                onClick={() => {
                  const aboutSection = document.getElementById("about");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Learn More
              </Button>
            </div>

            {/* Features */}
            <div
              className="flex flex-wrap gap-6 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="p-2 bg-leaf-light rounded-full">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Quality Assured</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="p-2 bg-leaf-light rounded-full">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="p-2 bg-leaf-light rounded-full">
                  <Leaf className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Farm Fresh</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-soft">
        <div className="w-8 h-12 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>

      {/* Animations */}
      <style>{`
        /* Smooth breathing fade effect */
        @keyframes breathe {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .animate-breathe {
          animation: breathe 3s ease-in-out infinite;
        }
      `}</style>

    </section>
  );
};

export default Hero;