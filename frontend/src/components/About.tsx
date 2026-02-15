import React from "react";
import { Leaf, Heart, Users, Award, Sprout, Shield } from "lucide-react";

const About: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Organic",
      description: "All our products are certified organic, grown without harmful pesticides or chemicals.",
    },
    {
      icon: Heart,
      title: "Farm Fresh",
      description: "Directly sourced from local farmers, ensuring maximum freshness and quality.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Supporting local farming communities and promoting sustainable agriculture.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Every product undergoes rigorous quality checks to meet the highest standards.",
    },
    {
      icon: Sprout,
      title: "Sustainable",
      description: "Committed to eco-friendly practices that protect our planet for future generations.",
    },
    {
      icon: Shield,
      title: "Trusted Brand",
      description: "Building trust through transparency, integrity, and consistent excellence.",
    },
  ];

  const stats = [
    { value: "500+", label: "Happy Customers" },
    { value: "50+", label: "Organic Products" },
    { value: "20+", label: "Partner Farmers" },
    { value: "100%", label: "Satisfaction Rate" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <Leaf className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            About <span className="text-primary">Kshiti Organic</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bringing nature's finest organic produce from local farms directly to your doorstep
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold text-foreground">
              Our Story
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Founded with a passion for healthy living and sustainable agriculture, Kshiti Organic 
              has been connecting communities with premium organic products since our inception. We 
              believe that everyone deserves access to pure, chemical-free food that nourishes both 
              body and soul.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Working closely with dedicated local farmers, we ensure that every product meets our 
              strict organic standards. Our commitment goes beyond just selling products—we're building 
              a movement towards healthier lifestyles and a more sustainable future.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Shield className="h-5 w-5" />
                <span>Certified Organic</span>
              </div>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Heart className="h-5 w-5" />
                <span>Farmer Direct</span>
              </div>
            </div>
          </div>

          <div className="relative h-[250px] md:h-[300px]">
            <div className="h-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=1200&fit=crop"
                alt="Organic farming"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card shadow-lg rounded-xl p-6 max-w-xs">
              <p className="text-sm text-muted-foreground mb-2">Our Mission</p>
              <p className="font-semibold text-foreground">
                "Making organic living accessible to everyone"
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-display font-bold text-center mb-12">
            Why Choose Us
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg text-foreground">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

     
      </div>
    </section>
  );
};

export default About;