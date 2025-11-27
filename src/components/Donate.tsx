import { Heart, GraduationCap, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Donate = () => {
  const impactHighlights = [
    {
      icon: GraduationCap,
      title: "Education Access",
      description: "Keeping girls in school and breaking the cycle of early marriage",
    },
    {
      icon: Shield,
      title: "Safety & Protection",
      description: "Providing safe spaces and support for survivors of violence",
    },
    {
      icon: Users,
      title: "Women's Leadership",
      description: "Empowering women to lead and contribute meaningfully to their communities",
    },
    {
      icon: Heart,
      title: "Community Support",
      description: "Building sustainable programs that transform lives across Greater Kapoeta",
    },
  ];

  const scrollToSupport = () => {
    const el = document.getElementById('bank-details');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="donate" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Support Women and Girls in South Sudan
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Together, we can break barriers and build equality.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Your donation helps girls stay in school, empowers survivors of violence, and supports women to lead and thrive.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            onClick={scrollToSupport}
          >
            <Heart className="mr-2 h-5 w-5" />
            Donate Now
          </Button>
        </div>

        {/* Why Your Support Matters */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Every contribution transforms lives.
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In Greater Kapoeta and across Eastern Equatoria, girls face early marriage, lack of education, and gender-based violence. 
              Your donation directly supports community programs that provide education, safety, and hope for women and girls.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={scrollToSupport}
          >
            Make a Difference Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Donate;