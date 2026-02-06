import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary/5">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-women-community.jpg" 
          alt="Community Impact"
          className="w-full h-full object-cover opacity-90" 
        />
        {/* REDUCED TRANSPARENCY: Changed from primary/90 to primary/70 and primary/40 to primary/20 */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/20 mix-blend-multiply" />
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-white border border-white/30 rounded-full uppercase bg-white/10 backdrop-blur-sm">
            Fostering Research, Impact, Development & Advocacy
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
            Bridging Policy <br className="hidden sm:block" /> with People's Reality
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light max-w-2xl drop-shadow-md">
            We are a think-tank and advocacy group dedicated to transforming health outcomes through evidence-based research and community-led action.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto font-bold rounded-sm w-full sm:w-auto backdrop-blur-sm transition-all">
                What We Do
              </Button>
            </Link>
            <Link to="/impact">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto font-bold rounded-sm w-full sm:w-auto backdrop-blur-sm transition-all">
                Our Impact <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce hidden md:block">
        <div className="w-0.5 h-16 bg-gradient-to-b from-transparent via-white to-transparent opacity-50"></div>
      </div>
    </div>
  );
};

export default Hero;