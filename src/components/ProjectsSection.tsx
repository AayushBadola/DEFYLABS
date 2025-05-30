
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Brain, Baby, Globe } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Cancer Classifier",
      description: "AI-powered brain tumor detection and classification system using advanced neural networks for medical diagnostics.",
      image: "/lovable-uploads/e36ce433-650a-404c-a230-1eac896327d7.png",
      icon: Brain,
      tags: ["AI/ML", "Healthcare", "Neural Networks"],
      color: "from-red-400 to-pink-600"
    },
    {
      title: "Fetal Development Monitor",
      description: "Real-time fetal health monitoring system with predictive analytics for prenatal care optimization.",
      image: "/lovable-uploads/e3f74d56-a8ab-4ebb-b684-685b6ad7b641.png",
      icon: Baby,
      tags: ["Healthcare", "Monitoring", "Predictive Analytics"],
      color: "from-pink-400 to-purple-600"
    },
    {
      title: "Exoplanet Discovery",
      description: "Advanced space exploration and exoplanet identification system using machine learning algorithms.",
      image: "/lovable-uploads/3cd5938c-5a92-4f55-b8eb-9b7885d98182.png",
      icon: Globe,
      tags: ["Space Tech", "Discovery", "Machine Learning"],
      color: "from-blue-400 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="ai-precision-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our cutting-edge AI solutions across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group service-card-hover transition-all duration-700 border-0 overflow-hidden animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
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

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button 
                  size="sm" 
                  variant="outline"
                  className="w-full group-hover:bg-purple-50 dark:group-hover:bg-purple-950 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
