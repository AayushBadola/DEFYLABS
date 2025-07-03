
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
  Eye,
  Layout,
  Calendar
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import FloatingBackground from "@/components/FloatingBackground";
import AnimatedSection from "@/components/AnimatedSection";

const Services = () => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/aayush-badola2/consultationmeet'
      });
    }
  };

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
      title: "Landing Page Optimization",
      description: "Create high-converting landing pages with AI-assisted design and optimization strategies.",
      icon: Layout,
      features: [
        "AI-powered design optimization",
        "Copy optimization and testing",
        "Visual hierarchy improvement",
        "Mobile responsiveness",
        "Load speed optimization",
        "CTA placement optimization",
        "Form optimization",
        "Trust signal implementation"
      ],
      benefits: [
        "Increase conversion rates by 200-500%",
        "Reduce bounce rates significantly",
        "Improve user engagement",
        "Maximize campaign ROI"
      ],
      process: [
        "Current page analysis and audit",
        "AI-assisted design recommendations",
        "A/B testing implementation",
        "Performance optimization",
        "Continuous monitoring and improvements"
      ],
      gradient: "from-teal-400 to-teal-600"
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
      title: "Future Planning",
      description: "Strategic business planning with AI-powered market forecasting and trend analysis for long-term success.",
      icon: Calendar,
      features: [
        "Market trend forecasting",
        "Business growth modeling",
        "Strategic roadmap development",
        "Risk assessment and mitigation",
        "Resource allocation planning",
        "Technology adoption strategies",
        "Competitive positioning",
        "ROI projections"
      ],
      benefits: [
        "Anticipate market changes",
        "Make informed strategic decisions",
        "Minimize business risks",
        "Maximize growth opportunities"
      ],
      process: [
        "Current business assessment",
        "Market trend analysis with AI",
        "Strategic planning sessions",
        "Roadmap development",
        "Implementation guidance"
      ],
      gradient: "from-indigo-400 to-indigo-600"
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/30 dark:to-pink-950/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection animationType="fade" delay={0.2}>
            <Badge variant="secondary" className="px-4 py-2 mb-6">
              AI-Enhanced Solutions
            </Badge>
          </AnimatedSection>
          
          <AnimatedSection animationType="slideUp" delay={0.4}>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade" delay={0.6}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive digital solutions enhanced by cutting-edge AI technology to accelerate your business growth.
            </p>

            <Button 
              size="lg"
              className="defy-gradient hover:shadow-lg hover:shadow-purple-500/25 px-8 py-6 transition-all duration-300"
              onClick={openCalendly}
            >
              Get Started Today
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/50 dark:from-gray-900 dark:to-purple-950/30 relative">
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
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <FloatingBackground variant="neural" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection animationType="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A proven methodology that delivers exceptional results for every client.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection lines */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-purple-500 z-0" style={{ left: '12.5%', right: '12.5%' }}></div>
            
            {processSteps.map((step, index) => (
              <AnimatedSection
                key={step.step}
                animationType="slideUp"
                delay={index * 0.2}
              >
                <div className="text-center group relative z-10">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 defy-gradient rounded-full flex items-center justify-center mx-auto group-hover:scale-105 transition-all duration-300 relative z-20 border-4 border-white dark:border-gray-900">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-purple-500 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/50 dark:from-gray-900 dark:to-purple-950/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animationType="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">DEFY LABS</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Enhanced Intelligence",
                description: "Our 1.8 trillion parameter AI assists us in providing insights and optimizations impossible with traditional methods."
              },
              {
                icon: Users,
                title: "Proven Results",
                description: "Multiple successful projects with an average growth rate of 70% for our clients."
              },
              {
                icon: Zap,
                title: "24/7 Optimization",
                description: "Continuous monitoring and real-time optimization ensure maximum performance around the clock."
              }
            ].map((item, index) => (
              <AnimatedSection
                key={item.title}
                animationType="slideUp"
                delay={index * 0.2}
              >
                <Card className="group transition-all duration-500 border-0 hover:scale-105 hover:shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 defy-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-all duration-300">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
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
          <AnimatedSection animationType="slideUp">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of businesses that have transformed their results with our AI-enhanced solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="defy-gradient hover:shadow-lg hover:shadow-purple-500/25 px-8 py-6 transition-all duration-300"
                onClick={openCalendly}
              >
                Book Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-purple-500 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950 px-8 py-6 hover:shadow-lg transition-all duration-300"
                onClick={openCalendly}
              >
                Get Custom Quote
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
