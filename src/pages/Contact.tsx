import { useEffect, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PageHero from "@/components/ui/PageHero";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    document.title = "Contact | FRIDA";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Contact"
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1600"
        alt="Contact"
      />

      <section className="py-12 md:py-16">
        <div className="section-container text-center">
          <p className="mx-auto max-w-4xl text-lg text-foreground/75 md:text-xl">
            Whether you're interested in partnering with us, joining our network, or learning more about our work, we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container grid gap-8 lg:grid-cols-3">
          <aside className="rounded-3xl border border-primary/10 bg-primary/5 p-6 md:p-8 lg:col-span-1">
            <h2 className="mb-6 text-2xl font-bold text-primary">Get in touch</h2>
            <div className="space-y-5 text-foreground/75">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 text-primary" />
                <a href="mailto:info@fridahealth.org" className="hover:text-primary">info@fridahealth.org</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-primary" />
                <p>New Delhi, India</p>
              </div>
            </div>
          </aside>

          <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm md:p-8 lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold text-primary">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input
                    id="organization"
                    value={formState.organization}
                    onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  rows={6}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="rounded-full bg-primary px-7 text-white hover:bg-primary/90">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
