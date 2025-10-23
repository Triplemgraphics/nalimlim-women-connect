import { BookOpen, Users, Shield, Heart, Sprout, Droplet, HandHeart, Leaf, Accessibility, CloudRain, Route } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import educationImg from "@/assets/education-program.jpg";
import womenEmpowermentImg from "@/assets/women-empowerment.jpg";
import childProtectionImg from "@/assets/child-protection.jpg";

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Girls' Education and Empowerment",
      description: "Championing equal access to quality education for girls through advocacy, retention support, life skills training, and community sensitization.",
      image: educationImg,
    },
    {
      icon: Users,
      title: "Gender Equality and Women's Rights",
      description: "Advancing the rights and dignity of women through legal empowerment, GBV prevention, community advocacy, and promoting inclusive participation in decision-making.",
      image: womenEmpowermentImg,
    },
    {
      icon: Shield,
      title: "Child Protection and Safeguarding",
      description: "Preventing abuse, neglect, exploitation, and early marriage through safe spaces, child protection networks, and awareness campaigns.",
      image: childProtectionImg,
    },
    {
      icon: Users,
      title: "Reintegration of Returnees",
      description: "NAWAI addresses the needs of people returning to their communities after displacement, migration or rehabilitation. It focuses on promoting social inclusion, economic empowerment and psychosocial support to enable successful reintegration and active participation in community.",
      image: null,
    },
    {
      icon: Heart,
      title: "Community Health and Psychosocial Support",
      description: "Addressing women's and girls' health and wellbeing through reproductive health education, mental health care, and trauma-informed support.",
      image: null,
    },
    {
      icon: Sprout,
      title: "Food Security & Livelihood",
      description: "Strengthening resilience through sustainable agriculture and income generation opportunities for communities.",
      image: null,
    },
    {
      icon: Droplet,
      title: "Water, Sanitation and Hygiene (WASH)",
      description: "Ensuring access to safe water, sanitation, and hygiene services with a focus on women's and girls' needs.",
      image: null,
    },
    {
      icon: HandHeart,
      title: "Peacebuilding and Conflict Resolution",
      description: "Promoting social cohesion through community dialogue, mediation, and women-led peace initiatives.",
      image: null,
    },
    {
      icon: Leaf,
      title: "Environmental Biodiversity",
      description: "Supporting ecosystem protection, climate-smart practices, and community awareness on sustainable natural resource use.",
      image: null,
    },
    {
      icon: Accessibility,
      title: "Inclusion of Persons With Special Needs",
      description: "Ensuring equitable access, participation and empowerment of individuals with disabilities in all community development initiatives.",
      image: null,
    },
    {
      icon: CloudRain,
      title: "Climate Change and Adaptation",
      description: "Supporting pastoralist communities across the border to adapt to climate variability through resilient livelihood strategies, sustainable rangeland management, and climate-smart livestock practices that enhance food security and environmental sustainability.",
      image: null,
    },
    {
      icon: Route,
      title: "Opening of Feeder Roads for Connection",
      description: "Improving rural accessibility and economic integration by facilitating the construction and rehabilitation of feeder roads that connect remote communities to markets, essential services, and opportunities for trade and development.",
      image: null,
    },
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Program Areas
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            NAWAI works across multiple thematic areas to create comprehensive and sustainable impact in communities across South Sudan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {program.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
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

export default Programs;
