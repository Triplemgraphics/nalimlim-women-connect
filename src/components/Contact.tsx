import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            We welcome collaboration in funding, technical expertise, mentorship, and capacity building. 
            Reach out to us to discuss how we can work together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <a 
                  href="mailto:info@nalimlimwomen.org"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@nalimlimwomen.org
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <a 
                  href="tel:+211922246366"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +211 922 246 366
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Kapoeta, EES<br />
                  South Sudan
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-xl bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                Organization Details
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="text-center">
                  <span className="font-semibold text-foreground">Registration Number:</span> 6010
                </p>
                <p className="text-center">
                  <span className="font-semibold text-foreground">Founded:</span> July 21, 2025
                </p>
                <p className="text-center">
                  <span className="font-semibold text-foreground">CEO:</span> Lucy Chepar Lokeno
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
