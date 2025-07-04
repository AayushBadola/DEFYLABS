
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Star, Users, Zap, Target, TrendingUp, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const stats = [
    { label: "AI Parameters", value: "1.8T", icon: Brain },
    { label: "Success Rate", value: "97%", icon: Target },
    { label: "Growth Average", value: "70%", icon: TrendingUp },
    { label: "Happy Clients", value: "Multiple", icon: Users },
  ];

  const services = [
    {
      title: "SEO Optimization",
      description: "AI-assisted SEO strategies that dominate search rankings",
      icon: "🚀"
    },
    {
      title: "Funnel Optimization",
      description: "Convert more visitors with AI-powered funnel analysis",
      icon: "🎯"
    },
    {
      title: "Landing Page Optimization",
      description: "AI-enhanced landing page optimization for maximum conversions",
      icon: "📄"
    },
    {
      title: "Future Planning",
      description: "Strategic future planning with AI-driven market insights",
      icon: "🔮"
    },
    {
      title: "Market Research",
      description: "Deep competitor analysis with AI-enhanced insights",
      icon: "🔍"
    },
    {
      title: "AI-Enhanced Marketing",
      description: "Advanced marketing strategies powered by our custom AI",
      icon: "🤖"
    }
  ];

  const features = [
    "1.8 Trillion Parameter Custom AI Assistant",
    "Real-time Analytics & Insights",
    "AI-Assisted Optimization",
    "24/7 Performance Monitoring",
    "Personalized Strategy Development",
    "Competitive Intelligence"
  ];

  const openCalendly = () => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/aayush-badola2/consultationmeet'
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/20" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/30 dark:to-pink-950/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              Powered by 1.8 Trillion Parameter AI
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Digital Growth with
              <span className="block text-6xl md:text-8xl font-extrabold py-4 my-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                AI PRECISION
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Revolutionize your business with our cutting-edge AI-enhanced solutions. 
              From SEO domination to funnel optimization, we deliver results that matter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-6 text-lg"
                onClick={openCalendly}
              >
                Start Your Transformation
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-purple-500 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950 px-8 py-6 text-lg"
                asChild
              >
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-purple-500" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/50 dark:from-gray-900 dark:to-purple-950/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl mb-4 group-hover:scale-105 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "E-commerce Growth", description: "300% increase in conversions", image: "/lovable-uploads/3cd5938c-5a92-4f55-b8eb-9b7885d98182.png" },
                { title: "SaaS Optimization", description: "250% boost in user engagement", image: "/lovable-uploads/4c2e7546-a069-4556-b79c-691f655d35a3.png" },
                { title: "Local Business", description: "400% growth in local searches", image: "/lovable-uploads/5a0ce522-32ea-4dcd-a78d-f2cbb619c65c.png" }
              ].map((project, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/50 dark:from-gray-900 dark:to-purple-950/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions enhanced by cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="group transition-all duration-300 border-0 bg-white dark:bg-gray-800 hover:scale-105 hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-all duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-purple-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950 px-8 py-6"
              asChild
            >
              <Link to="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={feature} className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-950 dark:to-transparent group hover:from-purple-100 dark:hover:from-purple-900 hover:scale-105 transition-all duration-300">
                <Star className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="font-medium text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-pink-100/50 dark:from-purple-950/50 dark:to-pink-950/50"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of businesses that have revolutionized their growth with our AI-enhanced solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-6 text-lg"
              onClick={openCalendly}
            >
              Book Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-purple-500 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950 px-8 py-6 text-lg"
              asChild
            >
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
