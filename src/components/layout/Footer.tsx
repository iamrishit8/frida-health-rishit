import { Link } from "react-router-dom";
import { Twitter, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/company/fridahealth/posts/?feedView=all";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-16">
          
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
            <p className="text-white/80 leading-relaxed text-sm max-w-sm font-light">
              Fostering Research, Impact, Development & Advocacy.
              Empowering communities through evidence-based policy to build a healthier, more equitable future.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4 text-sm text-white/80">
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
             <h3 className="text-lg font-serif font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">Follow Us</h3>
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
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-light">
          <p>&copy; {new Date().getFullYear()} FRIDA Health Hub. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to={LINKEDIN_URL} className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to={LINKEDIN_URL} className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;