import React from "react";
import { Mail, Phone, MapPin, Leaf, Send } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-leaf-light via-background to-leaf-light/30" />
      
      {/* Organic Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-leaf rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Floating Leaves Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Leaf className="absolute top-20 left-10 w-12 h-12 text-primary/20 animate-float" />
        <Leaf className="absolute top-40 right-20 w-16 h-16 text-leaf/20 animate-float" style={{ animationDelay: "0.5s" }} />
        <Leaf className="absolute bottom-32 left-1/4 w-10 h-10 text-primary/20 animate-float" style={{ animationDelay: "1s" }} />
        <Leaf className="absolute bottom-20 right-1/3 w-14 h-14 text-leaf/20 animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Leaf className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Contact <span className="text-gradient">Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our organic products? We're here to help you choose the best natural products for your needs.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Phone Card */}
            <div 
              className="group bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-primary/10 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="relative">
                {/* Icon Container */}
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-leaf rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                
                {/* Glow Effect */}
                <div className="absolute top-0 left-0 w-14 h-14 bg-primary/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                Call Us
              </h3>
              <p className="text-muted-foreground text-xs mb-3">
                Mon-Sat, 9AM to 7PM
              </p>
              <a 
                href="tel:9000228212"
                className="text-primary font-semibold text-base hover:text-leaf transition-colors duration-300 flex items-center gap-2 group"
              >
                9000228212
                <Send className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Email Card */}
            <div 
              className="group bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-primary/10 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative">
                {/* Icon Container */}
                <div className="w-14 h-14 bg-gradient-to-br from-leaf to-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                
                {/* Glow Effect */}
                <div className="absolute top-0 left-0 w-14 h-14 bg-leaf/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                Email Us
              </h3>
              <p className="text-muted-foreground text-xs mb-3">
                We'll respond within 24 hours
              </p>
              <a 
                href="mailto:kshitiorganics99@gmail.com"
                className="text-primary font-semibold text-sm hover:text-leaf transition-colors duration-300 flex items-center gap-2 group break-all"
              >
                kshitiorganics99@gmail.com
                <Send className="h-3 w-3 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
            </div>

            {/* Address Card */}
            <div 
              className="group bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-primary/10 animate-fade-in md:col-span-3 lg:col-span-1"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative">
                {/* Icon Container */}
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-leaf rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                
                {/* Glow Effect */}
                <div className="absolute top-0 left-0 w-14 h-14 bg-primary/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                Visit Us
              </h3>
              <p className="text-muted-foreground text-xs mb-3">
                Come see our organic collection
              </p>
              <a 
                href="https://maps.app.goo.gl/vtC1N4xV4znk97TU8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium text-sm leading-relaxed not-italic hover:text-leaf transition-colors duration-300 flex items-start gap-2 group cursor-pointer"
              >
                <span>
                  House no 5-96/256,<br />
                  Harivillu Township, Road no 8,<br />
                  Patelguda, Beeramguda,<br />
                  Hyderabad, SANGAREDDY,<br />
                  Telangana 502319
                </span>
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-0.5" />
              </a>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-leaf/10 rounded-full border border-primary/20">
              <Leaf className="h-5 w-5 text-primary animate-pulse" />
              <p className="text-muted-foreground font-medium">
                Fresh organic products delivered to your doorstep
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;