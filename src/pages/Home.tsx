import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Star, Users, Zap, Target, TrendingUp, Brain } from "lucide-react";
import FloatingBackground from "@/components/FloatingBackground";
import ProjectsSection from "@/components/ProjectsSection";

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

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingBackground variant="minimal" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/30 dark:to-pink-950/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-slide-down">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium floating-badge">
              Powered by 1.8 Trillion Parameter AI
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Digital Growth with
              <span className="block ai-precision-text text-6xl md:text-8xl font-extrabold py-6 my-4">
                AI Precision
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Revolutionize your business with our cutting-edge AI-enhanced solutions. 
              From SEO domination to funnel optimization, we deliver results that matter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Button 
                size="lg"
                className="defy-gradient modern-button-hover px-8 py-6 text-lg"
                asChild
              >
                <a href="https://calendly.com/aayush-badola2/consultationmeet" target="_blank" rel="noopener noreferrer">
                  Start Your Transformation
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-purple-500 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950 px-8 py-6 text-lg modern-button-hover"
                asChild
              >
                <a href="/services">
                  Explore Services
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-purple-500" />
        </div>
      </section>

      {/* Stats Section - Fixed animations */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/50 dark:from-gray-900 dark:to-purple-950/30 relative">
        <FloatingBackground variant="data" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center group"
              >
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

      {/* Why We're Unique Section */}
      <section className="py-20 relative">
        <FloatingBackground variant="neural" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-slide-down">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Why We're <span className="ai-precision-text">Unique</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another digital agency. We're pioneers using AI to enhance our expertise and deliver superior results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 defy-gradient rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">1.8 Trillion Parameter AI Assistant</h3>
                  <p className="text-muted-foreground">
                    Our custom-curated AI assists us in processing data at unprecedented scale, 
                    helping us deliver insights that traditional methods simply cannot match.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 defy-gradient rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">AI-Enhanced Optimization</h3>
                  <p className="text-muted-foreground">
                    Using AI to assist in continuously monitoring and optimizing your campaigns, 
                    we make data-driven adjustments 24/7 for maximum performance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 defy-gradient rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Precision Targeting</h3>
                  <p className="text-muted-foreground">
                    Advanced AI-assisted pattern recognition helps us identify and target 
                    your ideal customers with surgical precision.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="glass-effect rounded-3xl p-8 backdrop-blur-sm group hover:scale-105 transition-all duration-500">
                <img 
                  src="/lovable-uploads/af53e2ec-1d90-428b-9862-95c85dbcc7fc.png" 
                  alt="AI Brain Technology" 
                  className="rounded-2xl w-full h-80 object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/50 dark:from-gray-900 dark:to-purple-950/30 relative">
        <FloatingBackground variant="circuit" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="ai-precision-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions enhanced by cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group transition-all duration-500 border-0 bg-white dark:bg-gray-800 hover:scale-105"
              >
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
              className="border-purple-500 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950 px-8 py-6 modern-button-hover"
              asChild
            >
              <a href="/services">
                View All Services
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <FloatingBackground variant="minimal" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-down">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature}
                className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-950 dark:to-transparent group hover:from-purple-100 dark:hover:from-purple-900 hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Star className="w-5 h-5 text-purple-500 flex-shrink-0 group-hover:rotate-180 transition-all duration-300" />
                <span className="font-medium text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-pink-100/50 dark:from-purple-950/50 dark:to-pink-950/50"></div>
        <FloatingBackground variant="default" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 animate-slide-down">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Join hundreds of businesses that have revolutionized their growth with our AI-enhanced solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button 
              size="lg"
              className="defy-gradient modern-button-hover px-8 py-6 text-lg"
              asChild
            >
              <a href="https://calendly.com/aayush-badola2/consultationmeet" target="_blank" rel="noopener noreferrer">
                Book Free Consultation
              </a>
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
        </div>
      </section>
    </div>
  );
};

export default Home;
