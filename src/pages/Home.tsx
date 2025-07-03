
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Star, Users, Zap, Target, TrendingUp, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBackground from "@/components/FloatingBackground";
import ProjectsSection from "@/components/ProjectsSection";
import AIPrecisionText from "@/components/AIPrecionText";
import AnimatedSection from "@/components/AnimatedSection";

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
      <FloatingBackground variant="minimal" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/30 dark:to-pink-950/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <AnimatedSection animationType="slideDown" delay={0.2}>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium floating-badge">
                Powered by 1.8 Trillion Parameter AI
              </Badge>
            </AnimatedSection>
            
            <AnimatedSection animationType="slideUp" delay={0.5}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Digital Growth with
                <span className="block text-6xl md:text-8xl font-extrabold py-4 my-6">
                  <AIPrecisionText />
                </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animationType="fade" delay={0.8}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Revolutionize your business with our cutting-edge AI-enhanced solutions. 
                From SEO domination to funnel optimization, we deliver results that matter.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animationType="scale" delay={1.1}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  className="defy-gradient modern-button-hover px-8 py-6 text-lg"
                  onClick={openCalendly}
                >
                  Start Your Transformation
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-purple-500 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950 px-8 py-6 text-lg modern-button-hover"
                  asChild
                >
                  <Link to="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection animationType="fade" delay={1.5}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-purple-500" />
          </div>
        </AnimatedSection>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/50 dark:from-gray-900 dark:to-purple-950/30 relative">
        <FloatingBackground variant="data" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                animationType="slideUp"
                delay={index * 0.2}
                duration={0.8}
              >
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl mb-4 group-hover:scale-105 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/50 dark:from-gray-900 dark:to-purple-950/30 relative">
        <FloatingBackground variant="circuit" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection animationType="slideDown">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Our <AIPrecisionText>Services</AIPrecisionText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive digital solutions enhanced by cutting-edge AI technology
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                animationType="scale"
                delay={index * 0.15}
              >
                <Card className="group transition-all duration-500 border-0 bg-white dark:bg-gray-800 hover:scale-105">
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
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animationType="fade" delay={1}>
            <div className="text-center mt-12">
              <Button 
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950 px-8 py-6 modern-button-hover"
                asChild
              >
                <Link to="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <FloatingBackground variant="minimal" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animationType="slideDown">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                What Sets Us Apart
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection 
                key={feature}
                animationType="slideLeft"
                delay={index * 0.1}
              >
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-950 dark:to-transparent group hover:from-purple-100 dark:hover:from-purple-900 hover:scale-105 transition-all duration-300">
                  <Star className="w-5 h-5 text-purple-500 flex-shrink-0 group-hover:rotate-180 transition-all duration-300" />
                  <span className="font-medium text-foreground">{feature}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-pink-100/50 dark:from-purple-950/50 dark:to-pink-950/50"></div>
        <FloatingBackground variant="default" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animationType="slideDown">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade" delay={0.3}>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of businesses that have revolutionized their growth with our AI-enhanced solutions.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animationType="scale" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="defy-gradient modern-button-hover px-8 py-6 text-lg"
                onClick={openCalendly}
              >
                Book Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-purple-500 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950 px-8 py-6 text-lg modern-button-hover"
                asChild
              >
                <a href="/contact">
                  Get in Touch
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
