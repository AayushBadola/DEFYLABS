import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, ExternalLink, BookOpen, Award, Brain, Code, Target, Star, TrendingUp, Shield, Search, Github } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBackground from "@/components/FloatingBackground";

const About = () => {
  const certifications = [
    "Harvard University - Data Science",
    "Google Cloud - Machine Learning",
    "IBM - AI Engineering",
    "Microsoft - Azure AI",
    "LinkedIn Learning - Multiple Courses"
  ];

  const books = [
    "Skin in the Game - Nassim Nicholas Taleb",
    "The Black Swan - Nassim Nicholas Taleb",
    "The Billion Dollar Weekend",
    "Millionaire Highway",
    "And many more..."
  ];

  const projects = [
    {
      title: "Market Trend Predictor",
      description: "AI-powered system that analyzes market data, stock movements, and economic indicators to predict future trends. Helps businesses make informed investment decisions and strategic planning.",
      tech: "Machine Learning, Financial Data Analysis, Predictive Modeling",
      icon: TrendingUp,
      link: "https://calendly.com/aayush-badola2/consultationmeet"
    },
    {
      title: "Financial Fraud Detection",
      description: "Advanced ML models that identify anomalies in financial transactions and credit card usage patterns. Real-time fraud prevention system with high accuracy rates.",
      tech: "Anomaly Detection, Real-time Processing, Security AI",
      icon: Shield,
      link: "https://calendly.com/aayush-badola2/consultationmeet"
    },
    {
      title: "Product Market Predictor",
      description: "AI system that analyzes public company share prices and product release timelines to predict market suitability and success potential for new products.",
      tech: "Market Analysis, Timeline Correlation, Business Intelligence",
      icon: Search,
      link: "https://calendly.com/aayush-badola2/consultationmeet"
    }
  ];

  const achievements = [
    "1.8 Trillion Parameter AI Development",
    "Multiple Harvard Certifications",
    "Published Research in AI/ML",
    "200+ Successful Client Projects",
    "Advanced Pattern Recognition Expert"
  ];

  return (
    <div className="min-h-screen pt-20 relative">
      <FloatingBackground variant="neural" />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="text-center lg:text-center">
                <Badge variant="secondary" className="px-8 py-4 text-xl floating-founder">
                  Founder & AI Visionary
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-space font-bold text-foreground text-center lg:text-left">
                Meet <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Aayush Badola</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                A visionary AI engineer and business strategist with a passion for transforming businesses 
                through cutting-edge technology. With multiple certifications from Harvard, Google, IBM, 
                and Microsoft, I bring a unique perspective to digital growth.
              </p>

              <div className="flex flex-wrap gap-4 relative z-10">
                <Button 
                  asChild 
                  className="gradient-bg hover:shadow-lg hover:shadow-sky-500/25"
                >
                  <a href="https://www.linkedin.com/in/aayush-badola-0a7b2b343/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  asChild
                >
                  <a href="https://github.com/AayushBadola" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub Profile
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  asChild
                >
                  <a href="https://aayush-portfolio-main.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Portfolio Website
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  asChild
                >
                  <a href="mailto:aayush.badola2@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="glass-effect rounded-3xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&q=80" 
                  alt="Professional workspace" 
                  className="rounded-2xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <FloatingBackground variant="neural" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-space font-bold text-foreground mb-6">
              Vision & <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Mission</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 animate-slide-up">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To democratize access to advanced AI technology, enabling businesses of all sizes 
                  to achieve exponential growth through intelligent automation and data-driven insights.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To leverage our perspective mind and pattern recognition expertise to help businesses 
                  identify opportunities, optimize operations, and create sustainable competitive advantages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Personal Projects */}
      <section className="py-20">
        <FloatingBackground variant="data" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-space font-bold text-foreground mb-6">
              Notable <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-powered solutions designed to help businesses grow, predict market trends, and optimize performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 transform hover:-translate-y-2 border-0 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => window.open(project.link, '_blank')}
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-sky-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <Badge variant="secondary" className="text-xs">
                    {project.tech}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">And many more innovative business solutions...</p>
            <Button asChild variant="outline" className="border-sky-500 text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950">
              <a href="https://calendly.com/aayush-badola2/consultationmeet" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Schedule Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Certifications & Education */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <FloatingBackground variant="circuit" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div className="animate-fade-in">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Certifications & Education</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 animate-slide-up group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Star className="w-4 h-4 text-sky-500 flex-shrink-0 group-hover:rotate-180 transition-all duration-300" />
                    <span className="text-foreground font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Books & Learning */}
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Influential Books</h3>
              </div>
              
              <div className="space-y-4">
                {books.map((book, index) => (
                  <div 
                    key={book}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 animate-slide-up group"
                    style={{ animationDelay: `${(index + 5) * 100}ms` }}
                  >
                    <Star className="w-4 h-4 text-sky-500 flex-shrink-0 group-hover:rotate-180 transition-all duration-300" />
                    <span className="text-foreground font-medium">{book}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20">
        <FloatingBackground variant="minimal" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-space font-bold text-foreground mb-6">
              Key <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The perspective mind to know and find patterns and loops to help businesses improve and evolve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement}
                className="flex items-center space-x-3 p-6 rounded-xl bg-gradient-to-r from-sky-50 to-transparent dark:from-sky-950 dark:to-transparent group hover:from-sky-100 dark:hover:from-sky-900 hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-white group-hover:rotate-180 transition-all duration-300" />
                </div>
                <span className="font-medium text-foreground">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <FloatingBackground variant="default" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-space font-bold text-foreground mb-6 animate-fade-in floating-connect">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Let's leverage AI technology to transform your business and achieve extraordinary results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button 
              size="lg"
              className="gradient-bg hover:shadow-xl hover:shadow-sky-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-6"
              asChild
            >
              <a href="https://calendly.com/aayush-badola2/consultationmeet" target="_blank" rel="noopener noreferrer">
                Schedule Consultation
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-sky-500 text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950 px-8 py-6"
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

export default About;
