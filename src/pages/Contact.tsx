import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formState);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding gradient-cream">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
              Contact
            </span>
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you're interested in partnering with us, joining our network, or learning 
              more about our work, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:info@fridahealth.org" className="text-muted-foreground hover:text-accent transition-colors">
                      info@fridahealth.org
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:+911234567890" className="text-muted-foreground hover:text-accent transition-colors">
                      +91 123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Office</h4>
                    <p className="text-muted-foreground">
                      123 Health Avenue<br />
                      New Delhi, 110001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-terracotta" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Office Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday<br />
                      9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="p-8 bg-card rounded-2xl border border-border">
                <h2 className="text-2xl mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        placeholder="Your organization"
                        value={formState.organization}
                        onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="How can we help?"
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
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="btn-primary rounded-full px-8">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-muted flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
          <p className="text-muted-foreground">Map integration coming soon</p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
