import { Link } from "react-router-dom";
import { Twitter, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/company/fridahealth/posts/?feedView=all";

const Footer = () => {
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
                <a href="mailto:iamrishit8@gmail.com" className="mt-1 hover:text-white transition-colors">
                  iamrishit8@gmail.com
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
