import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, Sparkles } from "lucide-react";
import logo from "../assets/flexc_logo.png";

const navigation = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Why Choose Us", href: "#digital-offerings" },
  { name: "Digital Offerings", href: "#why-choose" },
  { name: "AI Tools", href: "#ai-tools" },
  { name: "Tech Stats", href: "#tech-stats" },
  { name: "Process", href: "#process" },
  { name: "Transform Your Business with AI Excellence", href: "#contact", isContact: true },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      const sections = navigation.map(item => item.href.slice(1));
      const scrollPositionWithOffset = scrollPosition + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPositionWithOffset >= offsetTop && scrollPositionWithOffset < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const scrollToSection = (href: string) => {
  const elementId = href.slice(1);
  const element = document.getElementById(elementId);
  if (element) {
    const headerOffset = 80; 
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
  setIsOpen(false);
};

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/20 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-primary/5' 
        : 'bg-transparent'
    }`}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-50"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-1/4 w-1 h-1 bg-primary rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-4 right-1/3 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000 opacity-40"></div>
        <div className="absolute top-1 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse delay-500 opacity-70"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center h-20">
          <a href="https://www.flexc.work/" className="mr-10 cursor-pointer" target="_blank">
            <img 
              src={logo}   
              alt="Logo" 
              className="h-10 w-auto"
            />
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 group ${
                  item.isContact 
                    ? "text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/30 hover:shadow-primary/50"
                    : activeSection === item.href.slice(1)
                    ? "text-primary bg-primary/10 shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:text-primary hover:bg-white/5"
                }`}
              >
                {/* Hover effect background */}
                {!item.isContact && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
                
                {/* Active indicator */}
                {activeSection === item.href.slice(1) && !item.isContact && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                )}
                
                <span className="relative z-10">{item.name}</span>
              </button>
            ))}
          </nav>

      

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative z-10">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-6">
            <div className="bg-background/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-primary/10 overflow-hidden">
              <div className="p-6 space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      item.isContact
                        ? "text-white bg-gradient-to-r from-primary to-secondary shadow-md"
                        : activeSection === item.href.slice(1)
                        ? "text-primary bg-primary/10 shadow-md"
                        : "text-muted-foreground hover:text-primary hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};