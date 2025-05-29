
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Users, 
  Zap, 
  Brain,
  Eye
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import FloatingBackground from "@/components/FloatingBackground";

const Services = () => {
  const services = [
    {
      title: "SEO Optimization",
      description: "Dominate search rankings with AI-assisted SEO strategies that drive organic traffic and boost visibility.",
      icon: Search,
      features: [
        "AI-assisted keyword research",
        "Technical SEO audits", 
        "Content optimization",
        "Competitor analysis",
        "Performance tracking",
        "Local SEO optimization",
        "Schema markup implementation",
        "Site speed optimization"
      ],
      benefits: [
        "Increase organic traffic by 200-400%",
        "Improve search rankings significantly",
        "Drive qualified leads consistently",
        "Boost brand visibility online"
      ],
      process: [
        "Comprehensive SEO audit and analysis",
        "AI-assisted strategy development",
        "On-page optimization implementation", 
        "Content creation and optimization",
        "Technical SEO improvements",
        "Ongoing monitoring and adjustments"
      ],
      gradient: "from-green-400 to-green-600"
    },
    {
      title: "Funnel Optimization",
      description: "Convert more visitors into customers with AI-enhanced funnel analysis and optimization strategies.",
      icon: TrendingUp,
      features: [
        "Conversion rate analysis",
        "A/B testing implementation",
        "User behavior tracking",
        "Landing page optimization",
        "Customer journey mapping",
        "Revenue optimization",
        "Cart abandonment reduction",
        "Lead nurturing sequences"
      ],
      benefits: [
        "Increase conversion rates by 150-300%",
        "Reduce customer acquisition costs",
        "Maximize revenue per visitor",
        "Improve customer lifetime value"
      ],
      process: [
        "Funnel analysis and identification of bottlenecks",
        "User behavior and heatmap analysis",
        "AI-assisted testing strategy development",
        "Optimization implementation",
        "Performance monitoring and iteration"
      ],
      gradient: "from-blue-400 to-blue-600"
    },
    {
      title: "Competitor Investigation",
      description: "Gain competitive advantages through AI-enhanced analysis of your opponents' strategies and weaknesses.",
      icon: Eye,
      features: [
        "Competitive intelligence",
        "Market positioning analysis",
        "Strategy identification",
        "Weakness discovery",
        "Opportunity mapping",
        "Performance benchmarking",
        "Content gap analysis",
        "Pricing strategy insights"
      ],
      benefits: [
        "Identify market opportunities",
        "Stay ahead of competition",
        "Optimize pricing strategies",
        "Discover content gaps to exploit"
      ],
      process: [
        "Competitor identification and mapping",
        "Deep analysis of strategies and tactics",
        "Performance benchmarking",
        "Opportunity identification",
        "Strategic recommendations"
      ],
      gradient: "from-red-400 to-red-600"
    },
    {
      title: "AI-Enhanced Marketing",
      description: "Leverage our 1.8 trillion parameter AI for personalized marketing campaigns that deliver results.",
      icon: Brain,
      features: [
        "AI-assisted campaigns",
        "Personalization at scale",
        "Predictive analytics",
        "Automated optimization",
        "Customer segmentation",
        "Performance prediction",
        "Dynamic content generation",
        "Smart bidding strategies"
      ],
      benefits: [
        "Achieve 300%+ ROI on campaigns",
        "Reduce marketing spend waste",
        "Increase customer engagement",
        "Scale personalization effortlessly"
      ],
      process: [
        "AI model training on your data",
        "Campaign strategy development",
        "Automated campaign deployment",
        "Real-time optimization",
        "Performance analysis and scaling"
      ],
      gradient: "from-purple-400 to-purple-600"
    },
    {
      title: "Target Market Research",
      description: "Identify and understand your ideal customers with comprehensive AI-assisted market research and analysis.",
      icon: Target,
      features: [
        "Market segmentation",
        "Customer persona development",
        "Behavioral analysis",
        "Market opportunity assessment",
        "Trend identification",
        "Competitive landscape mapping",
        "Consumer survey design",
        "Focus group analysis"
      ],
      benefits: [
        "Identify high-value customer segments",
        "Improve product-market fit",
        "Optimize marketing messages",
        "Reduce customer acquisition costs"
      ],
      process: [
        "Market landscape analysis",
        "Customer research and surveys",
        "Data analysis and insights",
        "Persona development",
        "Strategy recommendations"
      ],
      gradient: "from-orange-400 to-orange-600"
    },
    {
      title: "Performance Analytics",
      description: "Make data-driven decisions with comprehensive analytics and AI-powered reporting dashboards.",
      icon: BarChart3,
      features: [
        "Real-time dashboards",
        "Custom KPI tracking",
        "ROI measurement",
        "Performance insights",
        "Automated reporting",
        "Predictive forecasting",
        "Attribution modeling",
        "Cross-channel analysis"
      ],
      benefits: [
        "Make informed business decisions",
        "Track ROI accurately",
        "Identify growth opportunities",
        "Optimize resource allocation"
      ],
      process: [
        "Analytics setup and configuration",
        "Custom dashboard development",
        "KPI definition and tracking",
        "Regular reporting and insights",
        "Strategic recommendations"
      ],
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
      title: "AI-Enhanced Strategy",
      description: "Our 1.8T parameter AI assists us in developing a comprehensive plan tailored to your specific needs."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the strategy with precision, monitoring every detail for optimal performance."
    },
    {
      step: "04",
      title: "Optimization & Growth",
      description: "Continuous monitoring and AI-assisted optimization ensure sustainable growth and maximum ROI."
    }
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      <FloatingBackground variant="data" />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge variant="secondary" className="px-4 py-2 mb-6">
            AI-Enhanced Solutions
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-space font-bold text-foreground mb-6 animate-slide-down">
            Our <span className="ai-precision-text">Services</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            Comprehensive digital solutions enhanced by cutting-edge AI technology to accelerate your business growth.
          </p>

          <Button 
            size="lg"
            className="gradient-bg modern-hover px-8 py-6"
            asChild
          >
            <a href="https://calendly.com/aayush-badola2/consultationmeet" target="_blank" rel="noopener noreferrer">
              Get Started Today
            </a>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative">
        <FloatingBackground variant="circuit" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                benefits={service.benefits}
                process={service.process}
                gradient={service.gradient}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <FloatingBackground variant="neural" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-slide-down">
            <h2 className="text-3xl md:text-5xl font-space font-bold text-foreground mb-6">
              Our <span className="ai-precision-text">Process</span>
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
                  <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto group-hover:scale-105 transition-all duration-300 smooth-glow">
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
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-down">
            <h2 className="text-3xl md:text-5xl font-space font-bold text-foreground mb-6">
              Why Choose <span className="ai-precision-text">ProNarrative</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group service-card-hover transition-all duration-500 border-0 animate-slide-right">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-all duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">AI-Enhanced Intelligence</h3>
                <p className="text-muted-foreground">
                  Our 1.8 trillion parameter AI assists us in providing insights and optimizations impossible with traditional methods.
                </p>
              </CardContent>
            </Card>

            <Card className="group service-card-hover transition-all duration-500 border-0 animate-scale-in" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-all duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Proven Results</h3>
                <p className="text-muted-foreground">
                  200+ successful projects with an average growth rate of 340% for our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="group service-card-hover transition-all duration-500 border-0 animate-slide-left" style={{ animationDelay: '400ms' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-all duration-300">
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
        <FloatingBackground variant="default" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-space font-bold text-foreground mb-6 animate-slide-down">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Join hundreds of businesses that have transformed their results with our AI-enhanced solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button 
              size="lg"
              className="gradient-bg modern-hover px-8 py-6"
              asChild
            >
              <a href="https://calendly.com/aayush-badola2/consultationmeet" target="_blank" rel="noopener noreferrer">
                Book Free Consultation
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-sky-500 text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950 px-8 py-6 outline-hover"
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
