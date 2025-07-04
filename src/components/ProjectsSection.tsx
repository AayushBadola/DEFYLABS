
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Brain, Target, Search, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import AIPrecisionText from "./AIPrecionText";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Growth",
      description: "AI-powered system that analyzes market data and customer behavior to boost e-commerce conversions by 300% through personalized recommendations.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      icon: TrendingUp,
      tags: ["AI/ML", "E-commerce", "Conversion Optimization"],
      color: "from-blue-400 to-indigo-600",
      stats: "300% increase in conversions"
    },
    {
      title: "SaaS Optimization",
      description: "Advanced ML models that analyze user behavior patterns and optimize SaaS platforms for maximum engagement and retention rates.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      icon: Shield,
      tags: ["Machine Learning", "SaaS", "User Analytics"],
      color: "from-red-400 to-pink-600",
      stats: "250% boost in user engagement"
    },
    {
      title: "Local Business",
      description: "Deep learning algorithms that optimize local search visibility and customer acquisition for small businesses through AI-enhanced SEO strategies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      icon: Brain,
      tags: ["Deep Learning", "Local SEO", "Business Growth"],
      color: "from-purple-400 to-violet-600",
      stats: "400% growth in local searches"
    },
    {
      title: "Conversion Funnel AI",
      description: "Intelligent optimization system that uses AI to improve landing page performance and user-to-customer conversion rates across all touchpoints.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      icon: Target,
      tags: ["AI Optimization", "Conversion Rate", "Landing Pages"],
      color: "from-green-400 to-emerald-600",
      stats: "185% improvement in conversions"
    },
    {
      title: "Market Intelligence",
      description: "AI system that analyzes competitor strategies and market trends to predict optimal positioning and pricing strategies for maximum market share.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
      icon: Search,
      tags: ["Market Research", "AI Analysis", "Competitive Intelligence"],
      color: "from-orange-400 to-red-600",
      stats: "92% prediction accuracy"
    },
    {
      title: "Business Growth Accelerator",
      description: "Comprehensive AI-enhanced platform that combines all our tools to accelerate business growth through data-driven insights and continuous optimization.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80",
      icon: Zap,
      tags: ["AI Platform", "Business Growth", "Analytics"],
      color: "from-cyan-400 to-blue-600",
      stats: "Average 70% growth rate"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Continuous Background Animations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-32 w-3 h-3 bg-pink-400 rounded-full animate-bounce animation-delay-4000"></div>
        <div className="absolute bottom-40 right-16 w-1 h-1 bg-green-400 rounded-full animate-ping animation-delay-8000"></div>
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-2xl animate-bounce animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection animationType="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Featured <AIPrecisionText>Projects</AIPrecisionText>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing our cutting-edge AI solutions that help businesses grow and thrive
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              animationType="slideUp"
              delay={index * 0.1}
              duration={0.8}
            >
              <Card className="group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border-0 overflow-hidden hover:-translate-y-2 hover:scale-105 transform-gpu">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  
                  {/* Floating Icon with Continuous Animation */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center shadow-lg animate-pulse group-hover:animate-bounce transition-all duration-300`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Animated Stats Badge */}
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/90 text-black font-semibold animate-pulse group-hover:animate-bounce">
                      {project.stats}
                    </Badge>
                  </div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                  </div>
                </div>
                
                <CardContent className="p-6 relative">
                  {/* Continuous Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple-500 transition-colors duration-300 relative z-10">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed relative z-10">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 relative z-10">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="text-xs hover:bg-purple-100 transition-colors duration-300"
                        style={{ animationDelay: `${tagIndex * 100}ms` }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Continuous Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-purple-300 to-transparent animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/4 right-0 w-px h-24 bg-gradient-to-b from-transparent via-blue-300 to-transparent animate-pulse animation-delay-2000"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
