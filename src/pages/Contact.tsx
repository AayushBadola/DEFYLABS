
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
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      action: "https://calendly.com/aayush-badola2/consultationmeet",
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
        <div className="absolute inset-0 gradient-bg opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="px-4 py-2 mb-6 animate-fade-in">
            Let's Connect
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-space font-bold text-foreground mb-6 animate-fade-in">
            Get In <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            Ready to transform your business with AI-powered solutions? Let's discuss your project and explore how we can achieve exceptional results together.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title}
                className="group hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 transform hover:-translate-y-2 border-0 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => window.open(method.action, method.title === "Email" ? "_self" : "_blank")}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-sky-500 transition-colors">
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
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <MessageSquare className="w-6 h-6 mr-2 text-sky-500" />
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
                        className="focus:ring-sky-500 focus:border-sky-500"
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
                        className="focus:ring-sky-500 focus:border-sky-500"
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
                        className="focus:ring-sky-500 focus:border-sky-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-sky-500 focus:border-sky-500"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
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
                      className="focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full gradient-bg hover:shadow-lg hover:shadow-sky-500/25 transform hover:scale-105 transition-all duration-300 py-6"
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

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div>
                <h2 className="text-3xl font-space font-bold text-foreground mb-6">
                  Let's Start a <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Conversation</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Whether you're looking to dominate search rankings, optimize your funnels, or leverage AI for marketing, 
                  I'm here to help you achieve extraordinary results.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-sky-50 to-transparent dark:from-sky-950 dark:to-transparent">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                    <p className="text-muted-foreground">I typically respond within 24 hours, often much sooner.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-sky-50 to-transparent dark:from-sky-950 dark:to-transparent">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Free Consultation</h3>
                    <p className="text-muted-foreground mb-3">
                      Book a complimentary strategy session to discuss your goals and explore opportunities.
                    </p>
                    <Button asChild variant="outline" size="sm" className="border-sky-500 text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950">
                      <a href="https://calendly.com/aayush-badola2/consultationmeet" target="_blank" rel="noopener noreferrer">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Now
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-sky-50 to-transparent dark:from-sky-950 dark:to-transparent">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
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

              <div className="p-6 rounded-xl bg-gradient-to-br from-sky-400/10 to-sky-600/10 border border-sky-200 dark:border-sky-800">
                <h3 className="font-semibold text-foreground mb-2">Quick Links</h3>
                <div className="space-y-2">
                  <a 
                    href="mailto:aayush.badola2@gmail.com" 
                    className="flex items-center text-sky-600 hover:text-sky-700 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    aayush.badola2@gmail.com
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/aayush-badola-0a7b2b343/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sky-600 hover:text-sky-700 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </a>
                  <a 
                    href="https://aayush-portfolio-main.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sky-600 hover:text-sky-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Portfolio Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-space font-bold text-foreground mb-6 animate-fade-in">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Don't wait to transform your business. The best time to start is now.
          </p>
          <Button 
            size="lg"
            className="gradient-bg hover:shadow-xl hover:shadow-sky-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-6 animate-scale-in"
            asChild
          >
            <a href="https://calendly.com/aayush-badola2/consultationmeet" target="_blank" rel="noopener noreferrer">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Free Consultation
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
