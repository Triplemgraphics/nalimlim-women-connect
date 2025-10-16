import { Heart, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Equity and Inclusion",
      description: "Ensuring all individuals, especially women and girls, have equal opportunities and are fully included in social and economic development.",
    },
    {
      icon: Target,
      title: "Empowerment",
      description: "Building the capacity of individuals and communities to take charge of their lives and advocate for their rights.",
    },
    {
      icon: Users,
      title: "Community Ownership",
      description: "Sustainable change comes from within. Our work is rooted in the voices, leadership, and participation of the communities we serve.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About NAWAI
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Nalimlim Women Alliance Initiative (NAWAI) is a registered national, women-led 
            non-governmental organization (Reg. No. 6010), legally established on 21st July 2025, 
            and based in Kapoeta, Eastern Equatoria State, South Sudan.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Founded by a group of determined young women who were inspired to give back to their 
            community by creating a platform that uplifts girls and women facing systemic 
            marginalization. Driven by a deep understanding of local challenges and a shared 
            passion for social justice, NAWAI is committed to advancing gender equality, 
            promoting girls' education, and fostering inclusive development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To foster a just and inclusive society where women, children, and underserved 
                communities have equal access to education, resources, and opportunities to live 
                empowered, dignified, and meaningful lives.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To support and uplift vulnerable communities—especially women and girls—by 
                promoting equal access to education, justice, and basic social services. We use 
                community-led approaches to reduce inequality and build a more fair and resilient 
                society.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
