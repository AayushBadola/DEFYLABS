
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Users, 
  Zap, 
  Brain,
  Eye,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "SEO Optimization",
      description: "Dominate search rankings with AI-powered SEO strategies that drive organic traffic and boost visibility.",
      icon: Search,
      features: [
        "AI-driven keyword research",
        "Technical SEO audits",
        "Content optimization",
        "Competitor analysis",
        "Performance tracking",
        "Local SEO optimization"
      ],
      pricing: "Starting from $2,500/month",
      gradient: "from-green-400 to-green-600"
    },
    {
      title: "Funnel Optimization",
      description: "Convert more visitors into customers with data-driven funnel analysis and optimization strategies.",
      icon: TrendingUp,
      features: [
        "Conversion rate analysis",
        "A/B testing implementation",
        "User behavior tracking",
        "Landing page optimization",
        "Customer journey mapping",
        "Revenue optimization"
      ],
      pricing: "Starting from $3,000/month",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      title: "Competitor Investigation",
      description: "Gain competitive advantages through deep analysis of your opponents' strategies and weaknesses.",
      icon: Eye,
      features: [
        "Competitive intelligence",
        "Market positioning analysis",
        "Strategy identification",
        "Weakness discovery",
        "Opportunity mapping",
        "Performance benchmarking"
      ],
      pricing: "Starting from $1,500/month",
      gradient: "from-red-400 to-red-600"
    },
    {
      title: "AI Marketing",
      description: "Leverage our 1.8 trillion parameter AI for personalized marketing campaigns that deliver results.",
      icon: Brain,
      features: [
        "AI-powered campaigns",
        "Personalization at scale",
        "Predictive analytics",
        "Automated optimization",
        "Customer segmentation",
        "Performance prediction"
      ],
      pricing: "Starting from $4,000/month",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      title: "Target Market Research",
      description: "Identify and understand your ideal customers with comprehensive market research and analysis.",
      icon: Target,
      features: [
        "Market segmentation",
        "Customer persona development",
        "Behavioral analysis",
        "Market opportunity assessment",
        "Trend identification",
        "Competitive landscape mapping"
      ],
      pricing: "Starting from $2,000/month",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      title: "Performance Analytics",
      description: "Make data-driven decisions with comprehensive analytics and reporting dashboards.",
      icon: BarChart3,
      features: [
        "Real-time dashboards",
        "Custom KPI tracking",
        "ROI measurement",
        "Performance insights",
        "Automated reporting",
        "Predictive forecasting"
      ],
      pricing: "Starting from $1,800/month",
      gradient: "from-sky-400 to-sky-600"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your current situation, goals, and challenges to create a customized strategy."
    },
    {
      step: "02", 
      title: "AI-Powered Strategy",
      description: "Our 1.8T parameter AI develops a comprehensive plan tailored to your specific needs."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the strategy with precision, monitoring every detail for optimal performance."
    },
    {
      step: "04",
      title: "Optimization & Growth",
      description: "Continuous monitoring and optimization ensure sustainable growth and maximum ROI."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="px-4 py-2 mb-6 animate-fade-in">
            AI-Powered Solutions
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-space font-bold text-foreground mb-6 animate-fade-in">
            Our <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Services</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            Comprehensive digital solutions powered by cutting-edge AI technology to accelerate your business growth.
          </p>

          <Button 
            size="lg"
            className="gradient-bg hover:shadow-xl hover:shadow-sky-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-6 animate-scale-in"
            asChild
          >
            <a href="https://calendly.com/aayush-badola2/consultationmeet" target="_blank" rel="noopener noreferrer">
              Get Started Today
            </a>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="group hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 transform hover:-translate-y-3 border-0 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="relative pb-0">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-sky-500 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-6">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <Badge variant="outline" className="mb-4">
                      {service.pricing}
                    </Badge>
                    
                    <Button 
                      size="sm" 
                      className="w-full gradient-bg hover:shadow-lg hover:shadow-sky-500/25"
                      asChild
                    >
                      <a href="https://calendly.com/aayush-badola2/consultationmeet" target="_blank" rel="noopener noreferrer">
                        Learn More
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-space font-bold text-foreground mb-6">
              Our <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that delivers exceptional results for every client.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.step}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-sky-300 to-sky-500 transform -translate-x-1/2"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-sky-500 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-space font-bold text-foreground mb-6">
              Why Choose <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">ProNarrative</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">AI-Powered Intelligence</h3>
                <p className="text-muted-foreground">
                  Our 1.8 trillion parameter AI provides insights and optimizations impossible with traditional methods.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 animate-scale-in" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Proven Results</h3>
                <p className="text-muted-foreground">
                  200+ successful projects with an average growth rate of 340% for our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 animate-scale-in" style={{ animationDelay: '400ms' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">24/7 Optimization</h3>
                <p className="text-muted-foreground">
                  Continuous monitoring and real-time optimization ensure maximum performance around the clock.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-space font-bold text-foreground mb-6 animate-fade-in">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Join hundreds of businesses that have transformed their results with our AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button 
              size="lg"
              className="gradient-bg hover:shadow-xl hover:shadow-sky-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-6"
              asChild
            >
              <a href="https://calendly.com/aayush-badola2/consultationmeet" target="_blank" rel="noopener noreferrer">
                Book Free Consultation
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-sky-500 text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950 px-8 py-6"
              asChild
            >
              <a href="/contact">
                Get Custom Quote
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
