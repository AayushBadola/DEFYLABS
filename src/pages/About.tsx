import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  LayoutDashboard,
  BarChartBig,
  Code,
  Settings,
  User,
  Book,
  GraduationCap,
  Award,
  Briefcase,
  Lightbulb,
  Rocket,
  TrendingUp,
  MessageSquare,
  HelpCircle,
  CheckCircle,
  ShieldCheck,
  Heart,
  Eye,
  Star,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 defy-gradient opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="px-4 py-2 floating-badge">
                About Me
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-space font-bold text-foreground">
                Meet the Mind Behind{" "}
                <span className="ai-precision-text">AI Precision</span>
              </h1>
              
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground floating-founder">
                  Aayush Badola
                </h2>
                <p className="text-xl md:text-2xl text-sky-500 font-semibold">
                  Founder & AI Visionary
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                A seasoned AI specialist and digital marketing expert, driving innovation and delivering
                exceptional results through cutting-edge AI solutions.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/AayushBadola" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/aayush-badola-0a7b2b343/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://twitter.com/AayushBadola_">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:aayush.badola2@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src="/images/aayush-badola.png"
              alt="Aayush Badola"
              className="rounded-full shadow-2xl floating-orb"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="ai-precision-text">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Guiding principles that drive our mission to deliver exceptional AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value Card 1 */}
            <Card className="group service-card-hover transition-all duration-700 border-0 overflow-hidden">
              <div className="p-6">
                <div className="w-16 h-16 defy-gradient rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple-500 transition-colors">
                  Innovation
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We embrace cutting-edge technologies and creative solutions to drive progress.
                </p>
              </div>
            </Card>

            {/* Value Card 2 */}
            <Card className="group service-card-hover transition-all duration-700 border-0 overflow-hidden">
              <div className="p-6">
                <div className="w-16 h-16 defy-gradient rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple-500 transition-colors">
                  Excellence
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We strive for the highest standards in quality, performance, and client satisfaction.
                </p>
              </div>
            </Card>

            {/* Value Card 3 */}
            <Card className="group service-card-hover transition-all duration-700 border-0 overflow-hidden">
              <div className="p-6">
                <div className="w-16 h-16 defy-gradient rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple-500 transition-colors">
                  Integrity
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We uphold honesty, transparency, and ethical practices in all our interactions.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              My <span className="ai-precision-text">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A diverse skill set honed through years of experience in AI and digital marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Skill Card 1 */}
            <Card className="group service-card-hover transition-all duration-700 border-0 overflow-hidden">
              <div className="p-6">
                <div className="w-16 h-16 defy-gradient rounded-full flex items-center justify-center mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple-500 transition-colors">
                  AI Development
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Expertise in creating custom AI models and solutions tailored to specific business needs.
                </p>
              </div>
            </Card>

            {/* Skill Card 2 */}
            <Card className="group service-card-hover transition-all duration-700 border-0 overflow-hidden">
              <div className="p-6">
                <div className="w-16 h-16 defy-gradient rounded-full flex items-center justify-center mb-4">
                  <LayoutDashboard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple-500 transition-colors">
                  Digital Strategy
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Crafting comprehensive digital strategies that align with business goals and drive growth.
                </p>
              </div>
            </Card>

            {/* Skill Card 3 */}
            <Card className="group service-card-hover transition-all duration-700 border-0 overflow-hidden">
              <div className="p-6">
                <div className="w-16 h-16 defy-gradient rounded-full flex items-center justify-center mb-4">
                  <BarChartBig className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple-500 transition-colors">
                  Data Analytics
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Transforming raw data into actionable insights that inform strategic decisions and optimize performance.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              My <span className="ai-precision-text">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A timeline of key experiences and achievements that have shaped my career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience Card 1 */}
            <Card className="group service-card-hover transition-all duration-700 border-0 overflow-hidden">
              <div className="p-6">
                <div className="w-16 h-16 defy-gradient rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple-500 transition-colors">
                  AI Consultant
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Providing expert guidance and solutions to businesses seeking to leverage AI technologies.
                </p>
              </div>
            </Card>

            {/* Experience Card 2 */}
            <Card className="group service-card-hover transition-all duration-700 border-0 overflow-hidden">
              <div className="p-6">
                <div className="w-16 h-16 defy-gradient rounded-full flex items-center justify-center mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple-500 transition-colors">
                  Digital Marketing Specialist
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Developing and implementing digital marketing strategies that drive growth and engagement.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What People <span className="ai-precision-text">Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kind words from clients and colleagues who have experienced my expertise firsthand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial Card 1 */}
            <Card className="group service-card-hover transition-all duration-700 border-0 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  "Aayush is a true AI visionary. His expertise and innovative solutions have transformed our business."
                </p>
                <div className="flex items-center">
                  <User className="w-6 h-6 mr-2 text-muted-foreground" />
                  <span className="font-semibold text-foreground">John Doe, CEO</span>
                </div>
              </div>
            </Card>

            {/* Testimonial Card 2 */}
            <Card className="group service-card-hover transition-all duration-700 border-0 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  "His digital marketing strategies are top-notch. We've seen a significant increase in engagement and conversions."
                </p>
                <div className="flex items-center">
                  <User className="w-6 h-6 mr-2 text-muted-foreground" />
                  <span className="font-semibold text-foreground">Jane Smith, Marketing Manager</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how AI-powered solutions can drive your business forward.
          </p>
          <Button size="lg" className="defy-gradient hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-6">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
