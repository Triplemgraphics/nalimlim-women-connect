import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-secondary/70" />
      </div>
      
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Empowering Women and Girls in South Sudan
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/95 mb-8 leading-relaxed">
            Building a just and inclusive society where women, children, and underserved 
            communities have equal access to education, resources, and opportunities to live 
            empowered, dignified, and meaningful lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              onClick={() => scrollToSection("bank-details")}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="bg-background/20 backdrop-blur border-primary-foreground/30 text-primary-foreground hover:bg-background/30"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
