import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Leaf, Quote } from "lucide-react";

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    review:
      "The Banginapalli mangoes were incredibly sweet and fresh. You can truly taste the difference when fruits are grown naturally. My kids loved them!",
    product: "Mangoes - Banginapalli",
    image: "PS",
    date: "1 week ago",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    rating: 5,
    review:
      "Cold-pressed groundnut oil is excellent. The aroma feels just like the oil we used to get in villages. Perfect for daily cooking.",
    product: "Groundnut Oil (Cold-Pressed)",
    image: "RK",
    date: "2 weeks ago",
  },
  {
    id: 3,
    name: "Anitha Reddy",
    rating: 5,
    review:
      "I switched to foxtail and little millets from here, and my digestion has improved a lot. Grains are clean, fresh, and well packed.",
    product: "Foxtail Millet",
    image: "AR",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Vikram Patel",
    rating: 4,
    review:
      "The turmeric and red chilli powder are very pure and aromatic. No artificial color at all. Great quality spices overall.",
    product: "Turmeric Powder",
    image: "VP",
    date: "5 days ago",
  },
  {
    id: 5,
    name: "Sneha Desai",
    rating: 5,
    review:
      "Putta Thene honey is authentic and thick, just like real forest honey. We now use it daily instead of sugar.",
    product: "Putta Thene (Tree Bark Honey)",
    image: "SD",
    date: "1 month ago",
  },
  {
    id: 6,
    name: "Karthik Rao",
    rating: 5,
    review:
      "Ordered brown eggs and they were genuinely farm fresh. Yolks are rich yellow and taste amazing. Highly recommended!",
    product: "Brown Eggs - Farm Fresh Naatu Kodi Gudlu",
    image: "KR",
    date: "3 days ago",
  },
];


  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length;
      visible.push(reviews[index]);
    }
    return visible;
  };

  return (
    <section
      id="reviews"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-leaf-light/20 to-background" />
      
      {/* Organic Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-leaf rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-leaf/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />
      </div>

      {/* Floating Leaves Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Leaf className="absolute top-32 left-16 w-10 h-10 text-primary/20 animate-float" />
        <Leaf className="absolute top-48 right-24 w-14 h-14 text-leaf/20 animate-float" style={{ animationDelay: "0.7s" }} />
        <Leaf className="absolute bottom-40 left-1/3 w-12 h-12 text-primary/20 animate-float" style={{ animationDelay: "1.2s" }} />
        <Leaf className="absolute bottom-28 right-1/4 w-16 h-16 text-leaf/20 animate-float" style={{ animationDelay: "1.8s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Star className="h-4 w-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary">Customer Reviews</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              What Our <span className="text-gradient">Customers Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of happy customers who trust us for their daily organic needs
            </p>
          </div>

          {/* Reviews Carousel */}
          <div className="relative">
            
            {/* Desktop View - 3 Cards */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-6">
              {getVisibleReviews().map((review, idx) => (
                <div
                  key={review.id}
                  className="group bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-primary/10 animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary/30" />
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                    {review.review}
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? "text-primary fill-primary"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Product Tag */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-leaf/10 text-leaf text-xs font-medium rounded-full">
                      <Leaf className="h-3 w-3" />
                      {review.product}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-4" />

                  {/* Customer Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-leaf rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                        {review.image}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          {review.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {review.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile/Tablet View - 1 Card */}
            <div className="lg:hidden">
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary/10">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {reviews[currentIndex].review}
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < reviews[currentIndex].rating
                          ? "text-primary fill-primary"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Product Tag */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-leaf/10 text-leaf text-xs font-medium rounded-full">
                    <Leaf className="h-3 w-3" />
                    {reviews[currentIndex].product}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-4" />

                {/* Customer Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-leaf rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                      {reviews[currentIndex].image}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {reviews[currentIndex].name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {reviews[currentIndex].date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 group"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 group"
              aria-label="Next review"
            >
              <ChevronRight className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-primary"
                    : "w-2 h-2 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
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

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .text-gradient {
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Reviews;