import { useState } from "react";
import { Link } from "react-router-dom";
import { Twitter, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const LINKEDIN_URL = "https://www.linkedin.com/company/fridahealth/posts/?feedView=all";
const CONTACT_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScUJEzY5B8uaOejJQ1k1sBrUs2bbpjkCZEwu8sbrE_cpmKn9w/formResponse";
const CONTACT_FIELD_NAME = "entry.1527096655";
const CONTACT_FIELD_CONTACT = "entry.255234840";
const CONTACT_FIELD_MESSAGE = "entry.1800016490";

const Footer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const handleSubmit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", contact: "", message: "" });
      toast.success("Message submitted successfully.");
    }, 1200);
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10 relative overflow-hidden">
      <iframe name="footer_contact_iframe" id="footer_contact_iframe" style={{ display: "none" }} />
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
                    className="h-24 w-auto rounded-md bg-white p-1.5 md:h-28" // Added white bg to ensure logo visibility on maroon
                    onError={(e) => { e.currentTarget.style.display = 'none'; }} // Hide if missing
                 />
               </div>
            </Link>
            <p className="max-w-sm text-base leading-relaxed text-white/85 md:text-lg">
              FRIDA is a not for profit organisation based in India, South Asia, working towards advancing women's health, wellbeing, and dignity
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
                <a href="mailto:contact.fridahealth@gmail.com" className="mt-1 hover:text-white transition-colors">
                  contact.fridahealth@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                   <MapPin className="w-4 h-4" />
                </div>
                <span className="mt-1">
                  Delhi
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

        <div className="mb-12 rounded-[1.65rem] border border-white/14 bg-white/8 p-5 backdrop-blur-md md:p-6">
          <div className="mb-4 max-w-2xl">
            <h3 className="text-2xl font-semibold text-white md:text-[2rem]">Send a message</h3>
          </div>

          <form
            action={CONTACT_FORM_ACTION_URL}
            method="POST"
            target="footer_contact_iframe"
            onSubmit={handleSubmit}
            className="grid gap-4 md:grid-cols-[1fr_1fr_1.3fr_auto]"
          >
            <div className="space-y-2">
              <Label htmlFor="footer-contact-name" className="text-sm text-white/90">Name</Label>
              <Input
                id="footer-contact-name"
                name={CONTACT_FIELD_NAME}
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-11 rounded-xl border-white/20 bg-white/10 text-sm text-white placeholder:text-white/50"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="footer-contact-details" className="text-sm text-white/90">Contact</Label>
              <Input
                id="footer-contact-details"
                name={CONTACT_FIELD_CONTACT}
                required
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="h-11 rounded-xl border-white/20 bg-white/10 text-sm text-white placeholder:text-white/50"
                placeholder="Email or phone"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="footer-contact-message" className="text-sm text-white/90">Message</Label>
              <Textarea
                id="footer-contact-message"
                name={CONTACT_FIELD_MESSAGE}
                required
                rows={1}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[44px] rounded-xl border-white/20 bg-white/10 text-sm text-white placeholder:text-white/50"
                placeholder="Type your message"
              />
            </div>

            <div className="flex items-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-11 w-full rounded-full bg-white px-6 text-sm text-primary hover:bg-white/90 md:w-auto"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </Button>
            </div>
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
