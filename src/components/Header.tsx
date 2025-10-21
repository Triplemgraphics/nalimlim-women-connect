import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import nawaiLogo from "@/assets/nawai-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={nawaiLogo} 
            alt="NAWAI Logo" 
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary">NAWAI</span>
            <span className="text-xs text-muted-foreground hidden sm:block">
              Nalimlim Women Alliance Initiative
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <button 
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("programs")}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Programs
          </button>
          <button 
            onClick={() => scrollToSection("impact")}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Impact
          </button>
          <Link to="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            Blog
          </Link>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </button>
          <Link to="/admin/blog" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            Admin
          </Link>
          <Button 
            onClick={() => scrollToSection("support")}
            className="bg-primary hover:bg-primary/90"
          >
            Support Us
          </Button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col gap-4 py-4">
            <Link 
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-left transition-colors hover:text-primary"
            >
              Home
            </Link>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-left transition-colors hover:text-primary"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("programs")}
              className="text-sm font-medium text-left transition-colors hover:text-primary"
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection("impact")}
              className="text-sm font-medium text-left transition-colors hover:text-primary"
            >
              Impact
            </button>
            <Link 
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-left transition-colors hover:text-primary"
            >
              Blog
            </Link>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-left transition-colors hover:text-primary"
            >
              Contact
            </button>
            <Link 
              to="/admin/blog"
              onClick={() => setIsMenuOpen(false)}
              className="text-xs text-muted-foreground text-left hover:text-primary transition-colors"
            >
              Admin
            </Link>
            <Button 
              onClick={() => scrollToSection("support")}
              className="bg-primary hover:bg-primary/90 w-full"
            >
              Support Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
