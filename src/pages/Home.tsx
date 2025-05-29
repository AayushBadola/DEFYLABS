
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Star, Users, Zap, Target, TrendingUp, Brain } from "lucide-react";

const Home = () => {
  const stats = [
    { label: "AI Parameters", value: "1.8T", icon: Brain },
    { label: "Success Rate", value: "97%", icon: Target },
    { label: "Growth Average", value: "340%", icon: TrendingUp },
    { label: "Happy Clients", value: "200+", icon: Users },
  ];

  const services = [
    {
      title: "SEO Optimization",
      description: "AI-powered SEO strategies that dominate search rankings",
      icon: "🚀"
    },
    {
      title: "Funnel Optimization",
      description: "Convert more visitors with data-driven funnel analysis",
      icon: "🎯"
    },
    {
      title: "Market Research",
      description: "Deep competitor analysis and market intelligence",
      icon: "🔍"
    },
    {
      title: "AI Marketing",
      description: "Cutting-edge marketing powered by our custom AI",
      icon: "🤖"
    }
  ];

  const features = [
    "1.8 Trillion Parameter Custom AI",
    "Real-time Analytics & Insights",
    "Automated Optimization",
    "24/7 Performance Monitoring",
    "Personalized Strategy Development",
    "Competitive Intelligence"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-5"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              Powered by 1.8 Trillion Parameter AI
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-space font-bold text-foreground leading-tight">
              Digital Growth with
              <span className="block bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text text-transparent animate-glow">
                AI Precision
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Revolutionize your business with our cutting-edge AI-powered solutions. 
              From SEO domination to funnel optimization, we deliver results that matter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="gradient-bg hover:shadow-xl hover:shadow-sky-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
                asChild
              >
                <a href="https://calendly.com/aayush-badola2/consultationmeet" target="_blank" rel="noopener noreferrer">
                  Start Your Transformation
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-sky-500 text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950 px-8 py-6 text-lg"
                asChild
              >
                <a href="/services">
                  Explore Services
                </a>
              </Button>
            </div>
          </div>
          
          {/* Floating Animation Element */}
          <div className="absolute top-1/2 right-10 w-64 h-64 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-full blur-3xl animate-float hidden lg:block"></div>
          <div className="absolute top-1/4 left-10 w-48 h-48 bg-gradient-to-br from-sky-300/15 to-sky-500/15 rounded-full blur-2xl animate-float animation-delay-2000 hidden lg:block"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-sky-500" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-space font-bold text-foreground mb-6">
              Why We're <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Unique</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another digital agency. We're pioneers using the world's most advanced AI technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">1.8 Trillion Parameter AI</h3>
                  <p className="text-muted-foreground">
                    Our custom-curated AI model processes data at unprecedented scale, 
                    delivering insights that traditional tools simply cannot match.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Real-time Optimization</h3>
                  <p className="text-muted-foreground">
                    Our AI continuously monitors and optimizes your campaigns, 
                    making micro-adjustments 24/7 for maximum performance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Precision Targeting</h3>
                  <p className="text-muted-foreground">
                    Advanced pattern recognition helps us identify and target 
                    your ideal customers with surgical precision.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="glass-effect rounded-3xl p-8 backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
                  alt="AI Technology" 
                  className="rounded-2xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-space font-bold text-foreground mb-6">
              Our <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions powered by cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 transform hover:-translate-y-2 animate-scale-in border-0 bg-white dark:bg-gray-800"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-sky-500 transition-colors">
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
              className="border-sky-500 text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950 px-8 py-6"
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-space font-bold text-foreground mb-6">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature}
                className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-sky-50 to-transparent dark:from-sky-950 dark:to-transparent group hover:from-sky-100 dark:hover:from-sky-900 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Star className="w-5 h-5 text-sky-500 flex-shrink-0" />
                <span className="font-medium text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-space font-bold text-foreground mb-6 animate-fade-in">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Join hundreds of businesses that have revolutionized their growth with our AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button 
              size="lg"
              className="gradient-bg hover:shadow-xl hover:shadow-sky-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
              asChild
            >
              <a href="https://calendly.com/aayush-badola2/consultationmeet" target="_blank" rel="noopener noreferrer">
                Book Free Consultation
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-sky-500 text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950 px-8 py-6 text-lg"
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
