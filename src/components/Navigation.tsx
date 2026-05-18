import { useState, useEffect } from "react";
import { Menu, X, Bug, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "About", href: "#about", isSection: true },
  { label: "Skills", href: "#skills", isSection: true },
  { label: "Experience", href: "#experience", isSection: true },
  { label: "QA Reports", href: "#qa-reports", isSection: true },
  { label: "Education", href: "#education", isSection: true },
  { label: "Projects", href: "#projects", isSection: true },
  { label: "Blog", href: "/blog", isSection: false },
  { label: "Contact", href: "#contact", isSection: true },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (location.pathname === "/") {
        const sections = navItems
          .filter((item) => item.isSection)
          .map((item) => document.querySelector(item.href) as HTMLElement | null);
        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navItems.filter((item) => item.isSection)[i].href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (href: string, isSection: boolean) => {
    setIsMobileMenuOpen(false);
    
    if (!isSection) {
      navigate(href);
      return;
    }

    if (location.pathname !== "/qa") {
      navigate("/qa");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/60 backdrop-blur-xl shadow-lg border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 hover:scale-105 transition-all duration-300"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent shadow-lg">
              <Bug className="w-5 h-5 text-primary-foreground" />
              <ShieldCheck className="w-3 h-3 text-primary-foreground absolute -bottom-0.5 -right-0.5" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hidden sm:inline">QA</span>
          </a>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 border transition-all duration-500 ${
            isScrolled 
              ? "bg-muted/30 backdrop-blur-sm border-border/30" 
              : "bg-white/10 backdrop-blur-sm border-white/20"
          }`}>
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href, item.isSection)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === item.href || (location.pathname === item.href)
                    ? "text-primary-foreground"
                    : isScrolled 
                      ? "text-muted-foreground hover:text-foreground" 
                      : "text-white/90 hover:text-white"
                }`}
              >
                {(activeSection === item.href || (location.pathname === item.href)) && (
                  <span className="absolute inset-0 bg-primary rounded-full animate-fade-in" />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full hover:bg-muted/50 border border-border/30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-muted/30 backdrop-blur-sm rounded-2xl border border-border/30 p-2 mt-2">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href, item.isSection)}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeSection === item.href || (location.pathname === item.href)
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
