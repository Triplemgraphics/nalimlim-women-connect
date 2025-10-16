import { TrendingUp, Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Impact = () => {
  const impacts = [
    {
      icon: Award,
      title: "Enhanced Girls' Education",
      description: "Improved school enrolment and retention rates for girls with reduced barriers to access and safe, inclusive learning environments.",
    },
    {
      icon: CheckCircle,
      title: "Strengthened Gender Equality",
      description: "Women actively participate in governance, leadership, and community decision-making with increased awareness and prevention of GBV.",
    },
    {
      icon: TrendingUp,
      title: "Economic Inclusion",
      description: "Women-led enterprises thrive through access to finance, markets, and entrepreneurship development contributing to local economies and household resilience.",
    },
  ];

  return (
    <section id="impact" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Strategic Impact Goals
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Our work is designed to create lasting, measurable change in the lives of women, girls, and communities across South Sudan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {impact.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {impact.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-none shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              The Problem We Address
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Across South Sudan, girls and women continue to face deeply rooted inequalities in 
                access to education, protection, and leadership opportunities. Harmful cultural 
                practices such as early and forced marriages, gender-based violence (GBV), and the 
                prioritization of dowry over girls' education persist, despite national laws and policies.
              </p>
              <p>
                In Eastern Equatoria State, particularly in Greater Kapoeta, these issues are especially 
                severe. Girls are often withdrawn from school for marriage or labour, resulting in 
                critically low enrolment and completion rates. Community-level awareness of legal 
                protections remains low, and informal systems tend to favour perpetrators.
              </p>
              <p className="font-semibold text-foreground">
                Without targeted, culturally sensitive advocacy and empowerment, these patterns will 
                continue to marginalize girls and women and obstruct meaningful progress in the region.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Impact;
