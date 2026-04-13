import { useState } from "react";
import { Link } from "react-router-dom";
import { Twitter, Instagram, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const LINKEDIN_URL = "https://www.linkedin.com/company/fridahealth/posts/?feedView=all";

const Footer = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-20">
          
          {/* Brand & Description */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
               {/* Use text fallback if logo fails, or prioritize logo if it exists */}
               <div className="flex items-center gap-3">
                 <img 
                    src="/logo.png" 
                    alt="FRIDA Logo" 
                    className="h-12 w-auto bg-white rounded-md p-1" // Added white bg to ensure logo visibility on maroon
                    onError={(e) => { e.currentTarget.style.display = 'none'; }} // Hide if missing
                 />
                 <span className="text-3xl font-serif font-bold tracking-tight">FRIDA</span>
               </div>
            </Link>
            <p className="max-w-sm text-base leading-relaxed text-white/85 md:text-lg">
              Fostering Research, Impact, Development & Advocacy.
              Empowering communities through evidence-based policy to build a healthier, more equitable future.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="mb-6 inline-block border-b border-white/20 pb-2 text-xl font-serif font-bold text-white">Contact Us</h3>
            <ul className="space-y-4 text-base text-white/85 md:text-lg">
              <li className="flex items-start gap-4 group">
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                   <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:contact@frida.org" className="mt-1 hover:text-white transition-colors">
                  contact@frida.org
                </a>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                   <MapPin className="w-4 h-4" />
                </div>
                <span className="mt-1">
                  123 Policy Avenue,<br />
                  New Delhi, India 110001
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
             <h3 className="mb-6 inline-block border-b border-white/20 pb-2 text-xl font-serif font-bold text-white">Follow Us</h3>
             <div className="flex gap-4">
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
                  <Instagram className="w-5 h-5" />
                </a>
             </div>

             <form className="mt-6 flex gap-2">
               <input
                 type="email"
                 required
                 placeholder="Email for updates"
                 className="w-full rounded-full border border-white/25 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
               />
               <button type="submit" className="rounded-full bg-white px-5 py-3 text-base font-medium text-primary hover:bg-white/90">
                 Join
               </button>
             </form>
          </div>

        </div>

        <div className="mb-16 max-w-5xl rounded-[1.75rem] border border-white/14 bg-white/8 p-5 backdrop-blur-md md:p-6">
          <div className="mb-5 max-w-2xl">
            <h3 className="text-2xl font-semibold text-white md:text-3xl">Get in touch</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/85 md:text-base">
              Whether you're interested in partnering with us, joining our network, or learning more about our work, we'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-4xl space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="footer-name" className="text-sm text-white/90">Full Name *</Label>
                <Input id="footer-name" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} required className="h-10 rounded-xl border-white/20 bg-white/10 text-sm text-white placeholder:text-white/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="footer-email" className="text-sm text-white/90">Email *</Label>
                <Input id="footer-email" type="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} required className="h-10 rounded-xl border-white/20 bg-white/10 text-sm text-white placeholder:text-white/50" />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="footer-organization" className="text-sm text-white/90">Organization</Label>
                <Input id="footer-organization" value={formState.organization} onChange={(e) => setFormState({ ...formState, organization: e.target.value })} className="h-10 rounded-xl border-white/20 bg-white/10 text-sm text-white placeholder:text-white/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="footer-subject" className="text-sm text-white/90">Subject *</Label>
                <Input id="footer-subject" value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} required className="h-10 rounded-xl border-white/20 bg-white/10 text-sm text-white placeholder:text-white/50" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="footer-message" className="text-sm text-white/90">Message *</Label>
              <Textarea id="footer-message" rows={3} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} required className="rounded-[1rem] border-white/20 bg-white/10 text-sm text-white placeholder:text-white/50" />
            </div>

            <Button type="submit" className="rounded-full bg-white px-6 py-3 text-sm text-primary hover:bg-white/90">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-light">
          <p>&copy; {new Date().getFullYear()} FRIDA Health Hub. All rights reserved.</p>
          <div className="flex gap-8">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
