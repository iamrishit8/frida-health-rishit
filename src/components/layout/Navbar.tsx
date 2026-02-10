import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLink } from "@/components/NavLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Updated navLinks: Removed Contact, added Events
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Research", path: "/research" },
    { name: "Advocacy", path: "/advocacy" },
    { name: "Parliamentary Forum", path: "/parliamentary-forum" },
    { name: "Community", path: "/community" },
    { name: "Impact", path: "/impact" },
    { name: "Featured", path: "/featured" },
    { name: "Events", path: "/events" }, 
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-primary/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <img 
               src="/logo.png" 
               alt="FRIDA Logo" 
               className="h-10 w-auto transition-transform group-hover:scale-105"
               onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <span className="text-2xl font-serif font-bold text-primary tracking-tight group-hover:opacity-80 transition-opacity">
              FRIDA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                activeClassName="text-primary font-bold"
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary p-2 hover:bg-primary/5 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="xl:hidden absolute top-20 left-0 w-full bg-white border-b border-primary/10 shadow-lg animate-fade-in-up h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 pt-4 pb-8 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "block px-4 py-4 text-lg font-medium rounded-lg transition-colors border-b border-dashed border-primary/10 last:border-0",
                  location.pathname === link.path
                    ? "bg-primary/5 text-primary font-bold"
                    : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;