import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000, { message: "Message must be less than 1000 characters" })
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    const subject = encodeURIComponent(`Contact from ${data.name}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
    window.location.href = `mailto:info@nalimlimwomen.org?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client",
      description: "Your message will be sent via your email client.",
    });
    reset();
  };

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
          <Card className="border-none shadow-xl mb-8">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input 
                    id="name" 
                    {...register("name")}
                    placeholder="Your full name"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email"
                    {...register("email")}
                    placeholder="your.email@example.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    {...register("message")}
                    placeholder="Tell us about your inquiry..."
                    className={errors.message ? "border-destructive" : ""}
                    rows={6}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

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
