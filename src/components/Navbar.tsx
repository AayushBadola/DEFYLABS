
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="transform group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/lovable-uploads/ae781898-245f-4ffb-b4c0-1d4dd696fcfb.png" 
                alt="ProNarrative Logo" 
                className="h-10 w-auto dark:hidden"
              />
              <img 
                src="/lovable-uploads/5a0ce522-32ea-4dcd-a78d-f2cbb619c65c.png" 
                alt="ProNarrative Logo" 
                className="h-10 w-auto hidden dark:block"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-sky-500 ${
                  location.pathname === item.path
                    ? "text-sky-500"
                    : "text-foreground"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full" />
                )}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-sky-100 dark:hover:bg-sky-900"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            {/* CTA Button */}
            <Button 
              asChild
              className="gradient-bg modern-button-hover transition-all duration-300"
            >
              <a href="https://calendly.com/aayush-badola2/consultationmeet" target="_blank" rel="noopener noreferrer">
                Book Meeting
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border shadow-lg animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-sky-500 ${
                    location.pathname === item.path
                      ? "text-sky-500 bg-sky-50 dark:bg-sky-950 rounded-lg"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                asChild
                className="w-full gradient-bg modern-button-hover"
              >
                <a href="https://calendly.com/aayush-badola2/consultationmeet" target="_blank" rel="noopener noreferrer">
                  Book Meeting
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
