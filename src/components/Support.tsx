import { Handshake, Users, DollarSign, GraduationCap, Building2, Copy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const { toast } = useToast();
  
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyToClipboard = (text: string, currency: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${currency} account number copied to clipboard`,
    });
  };

  const supportWays = [
    {
      icon: DollarSign,
      title: "Financial Support",
      description: "Your funding enables us to expand legal awareness campaigns, provide safe spaces, and enhance girls' school retention.",
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "Collaborate with us in driving social transformation at the grassroots level across Greater Kapoeta and beyond.",
    },
    {
      icon: GraduationCap,
      title: "Technical Expertise",
      description: "Share your knowledge and skills through capacity building, mentorship, and training programs.",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Join us in working alongside traditional leaders, schools, government institutions, and development partners.",
    },
  ];

  return (
    <section id="support" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Partner With Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
        </div>

        <Card className="border-none shadow-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground mb-12">
          <CardContent className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Call for Strategic and Financial Support
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              NAWAI calls upon development partners, donors, philanthropic institutions, and all 
              advocates of human dignity to collaborate with us in driving social transformation at 
              the grassroots level.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our mission to address entrenched gender inequalities, harmful cultural practices, and 
              barriers to education and protection for girls and vulnerable communities requires both 
              strategic partnerships and sustained financial investment.
            </p>
            <p className="text-lg leading-relaxed font-semibold">
              Together, we can build a future where every girl and woman has the opportunity to 
              thrive, lead, and contribute meaningfully to her community.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {supportWays.map((way, index) => {
            const Icon = way.icon;
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {way.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {way.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-none shadow-xl bg-card mb-12">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Bank Transfer Details
              </h3>
            </div>
            <p className="text-muted-foreground mb-8 text-lg">
              You can support NAWAI directly through bank transfer to either of our accounts:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-foreground">USD Account</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("6940062883", "USD")}
                    className="hover:bg-primary/10"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Account Number</p>
                  <p className="text-2xl font-bold text-foreground font-mono">6940062883</p>
                  <p className="text-sm text-muted-foreground mt-4">Currency: United States Dollar (USD)</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-6 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-foreground">SSP Account</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("6940062884", "SSP")}
                    className="hover:bg-primary/10"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Account Number</p>
                  <p className="text-2xl font-bold text-foreground font-mono">6940062884</p>
                  <p className="text-sm text-muted-foreground mt-4">Currency: South Sudanese Pound (SSP)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Support;
