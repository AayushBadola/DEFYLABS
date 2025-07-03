import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Clock, 
  Phone, 
  Calendar,
  Send,
  MessageSquare,
  ExternalLink,
  ChevronDown
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/aayush-badola2/consultationmeet'
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceSelect = (service: string) => {
    setFormData({
      ...formData,
      service: service
    });
    setIsServiceDropdownOpen(false);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Send me a direct email",
      value: "aayush.badola2@gmail.com",
      action: "mailto:aayush.badola2@gmail.com",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect professionally",
      value: "Aayush Badola",
      action: "https://www.linkedin.com/in/aayush-badola-0a7b2b343/",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a consultation call",
      value: "Calendly",
      action: "calendly",
      gradient: "from-green-400 to-green-600"
    },
    {
      icon: ExternalLink,
      title: "Portfolio",
      description: "View my work",
      value: "Portfolio Website",
      action: "https://aayush-portfolio-main.vercel.app/",
      gradient: "from-purple-400 to-purple-600"
    }
  ];

  const services = [
    "SEO Optimization",
    "Funnel Optimization", 
    "Competitor Investigation",
    "AI Marketing",
    "Target Market Research",
    "Performance Analytics",
    "Custom AI Solutions",
    "Other"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/30 dark:to-pink-950/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animationType="fade" delay={0.2}>
            <Badge variant="secondary" className="px-4 py-2 mb-6">
              Let's Connect
            </Badge>
          </AnimatedSection>
          
          <AnimatedSection animationType="slideUp" delay={0.4}>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Get In <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade" delay={0.6}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Ready to transform your business with AI-powered solutions? Let's discuss your project and explore how we can achieve exceptional results together.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <AnimatedSection
                key={method.title}
                animationType="slideUp"
                delay={index * 0.1}
              >
                <Card 
                  className="group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 border-0 cursor-pointer hover:-translate-y-2"
                  onClick={() => {
                    if (method.action === "calendly") {
                      openCalendly();
                    } else {
                      window.open(method.action, method.title === "Email" ? "_self" : "_blank");
                    }
                  }}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-purple-500 transition-colors">
                      {method.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {method.description}
                    </p>
                    
                    <Badge variant="outline" className="text-xs">
                      {method.value}
                    </Badge>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animationType="slideLeft">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                    <MessageSquare className="w-6 h-6 mr-2 text-purple-500" />
                    Send a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                        />
                      </div>
                      
                      <div className="relative">
                        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                          Service Interest
                        </label>
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 flex items-center justify-between hover:border-purple-300"
                          >
                            <span className={formData.service ? "text-foreground" : "text-muted-foreground"}>
                              {formData.service || "Select a service"}
                            </span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServiceDropdownOpen ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {isServiceDropdownOpen && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-input rounded-md shadow-lg z-50 animate-fade-in">
                              <div className="py-1 max-h-60 overflow-y-auto">
                                {services.map((service, index) => (
                                  <button
                                    key={service}
                                    type="button"
                                    onClick={() => handleServiceSelect(service)}
                                    className="w-full px-3 py-2 text-left hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors duration-200 text-foreground hover:text-purple-600"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                  >
                                    {service}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell me about your project, goals, and how I can help..."
                        className="focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full defy-gradient hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 py-6"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection animationType="slideRight" delay={0.3}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Let's Start a <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Conversation</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Whether you're looking to dominate search rankings, optimize your funnels, or leverage AI for marketing, 
                    I'm here to help you achieve extraordinary results.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-950 dark:to-transparent">
                    <div className="w-12 h-12 defy-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                      <p className="text-muted-foreground">I typically respond within 24 hours, often much sooner.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-950 dark:to-transparent">
                    <div className="w-12 h-12 defy-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Free Consultation</h3>
                      <p className="text-muted-foreground mb-3">
                        Book a complimentary strategy session to discuss your goals and explore opportunities.
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-purple-500 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950 transition-all duration-300"
                        onClick={openCalendly}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Now
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-950 dark:to-transparent">
                    <div className="w-12 h-12 defy-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Global Reach</h3>
                      <p className="text-muted-foreground">
                        Working with clients worldwide, leveraging AI technology to deliver results across time zones.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-400/10 to-purple-600/10 border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-foreground mb-2">Quick Links</h3>
                  <div className="space-y-2">
                    <a 
                      href="mailto:aayush.badola2@gmail.com" 
                      className="flex items-center text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      aayush.badola2@gmail.com
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/aayush-badola-0a7b2b343/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn Profile
                    </a>
                    <a 
                      href="https://aayush-portfolio-main.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Portfolio Website
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animationType="slideUp">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't wait to transform your business. The best time to start is now.
            </p>
            <Button 
              size="lg"
              className="defy-gradient hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-6"
              onClick={openCalendly}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Free Consultation
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
