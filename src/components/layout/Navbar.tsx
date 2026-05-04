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
    { name: "Community Engagement", path: "/community" },
    { name: "Events", path: "/events" },
    { name: "Impact", path: "/impact" },
    { name: "Featured", path: "/featured" },
  ];

  return (
    <nav
      className={cn(
        "fixed z-50 w-full transition-all duration-500",
        scrolled ? "glass-nav border-b border-primary/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-22 items-center justify-between md:h-24">
          {/* Logo Section */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <img 
               src="/logo.png" 
               alt="FRIDA Logo" 
               className="h-14 w-auto transition-transform group-hover:scale-105 md:h-16"
               onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 xl:flex">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className="font-ui hover-underline text-lg font-medium tracking-[0.01em] text-foreground/80 transition-colors hover:text-primary"
                activeClassName="font-ui text-primary font-semibold"
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
        <div className="xl:hidden absolute left-0 top-22 w-full overflow-y-auto border-b border-primary/10 bg-white shadow-lg animate-fade-in-up md:top-24 h-[calc(100vh-5.5rem)] md:h-[calc(100vh-6rem)]">
          <div className="px-4 pt-4 pb-8 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "font-ui block rounded-lg border-b border-dashed border-primary/10 px-4 py-4 text-2xl font-medium transition-colors last:border-0",
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
