
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Brain, Target, Search, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import AIPrecisionText from "./AIPrecionText";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Market Trend Predictor",
      description: "AI-powered system that analyzes market data and stock movements to predict future trends, helping businesses make informed investment decisions.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
      icon: TrendingUp,
      tags: ["AI/ML", "Market Analysis", "Predictive Analytics"],
      color: "from-blue-400 to-indigo-600",
    },
    {
      title: "Financial Fraud Detection",
      description: "Advanced ML models that identify anomalies in financial transactions and credit card usage patterns to prevent fraud in real-time.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      icon: Shield,
      tags: ["Machine Learning", "Fraud Detection", "Security"],
      color: "from-red-400 to-pink-600",
    },
    {
      title: "Content Hook Optimizer",
      description: "Deep learning algorithms that analyze successful content patterns to generate compelling headlines, taglines, and copy that drives user engagement.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      icon: Brain,
      tags: ["Deep Learning", "Content Strategy", "User Engagement"],
      color: "from-purple-400 to-violet-600",
    },
    {
      title: "Conversion Funnel AI",
      description: "Intelligent optimization system that uses AI to improve SEO rankings, landing page performance, and user-to-customer conversion rates.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      icon: Target,
      tags: ["AI Optimization", "SEO", "Conversion Rate"],
      color: "from-green-400 to-emerald-600",
    },
    {
      title: "Product Market Predictor",
      description: "AI system that analyzes public company share prices and product release timelines to predict market suitability and success potential.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
      icon: Search,
      tags: ["Market Research", "AI Analysis", "Product Strategy"],
      color: "from-orange-400 to-red-600",
    },
    {
      title: "Business Growth Accelerator",
      description: "Comprehensive AI-enhanced platform that combines all our tools to accelerate business growth through data-driven insights and optimization.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80",
      icon: Zap,
      tags: ["AI Platform", "Business Growth", "Analytics"],
      color: "from-cyan-400 to-blue-600",
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animationType="slideDown">
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
              animationType={index % 2 === 0 ? 'slideLeft' : 'slideRight'}
              delay={index * 0.2}
              duration={0.8}
            >
              <Card className="group service-card-hover transition-all duration-700 border-0 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
