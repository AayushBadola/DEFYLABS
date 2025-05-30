
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="defy-logo scale-75">
                <span className="defy-text">DEFY</span>
                <span className="labs-text">L.A.B.S</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm">
              Empowering businesses with AI-driven digital solutions for exponential growth.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/aayush-badola-0a7b2b343/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:aayush.badola2@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-purple-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-purple-500 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-purple-500 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-purple-500 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">SEO Optimization</li>
              <li className="text-muted-foreground text-sm">Funnel Optimization</li>
              <li className="text-muted-foreground text-sm">Landing Page Optimization</li>
              <li className="text-muted-foreground text-sm">Future Planning</li>
              <li className="text-muted-foreground text-sm">AI Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                <a href="mailto:aayush.badola2@gmail.com" className="hover:text-purple-500 transition-colors">
                  aayush.badola2@gmail.com
                </a>
              </p>
              <Button 
                asChild
                size="sm"
                className="defy-gradient hover:shadow-lg hover:shadow-purple-500/25 w-full modern-button-hover"
              >
                <a href="https://calendly.com/aayush-badola2/consultationmeet" target="_blank" rel="noopener noreferrer">
                  Schedule Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} DEFY LABS. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">
              Powered by 1.8 Trillion Parameter AI Technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
