import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-shell relative min-h-[62vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-women-community.jpg"
          alt="Women and girls in community health settings"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-overlay animate-hero-shift absolute inset-0" />
      </div>

      <div className="section-container relative z-10 flex min-h-[62vh] items-center py-10">
        <div className="max-w-5xl animate-fade-in-up">
          <h1 className="text-balance mb-6 max-w-5xl text-4xl font-bold leading-[1.02] text-white drop-shadow md:text-6xl">
            Healthy and resilient futures for women and girls
          </h1>

          <div className="mb-10 flex flex-wrap gap-3 text-xs uppercase tracking-widest text-white/90 md:text-sm">
            <span className="animate-float rounded-full border border-white/35 bg-white/10 px-4 py-2 backdrop-blur">Research</span>
            <span className="animation-delay-200 animate-float rounded-full border border-white/35 bg-white/10 px-4 py-2 backdrop-blur">Advocacy</span>
            <span className="animation-delay-300 animate-float rounded-full border border-white/35 bg-white/10 px-4 py-2 backdrop-blur">Community Engagement</span>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link to="/about">
              <Button size="lg" className="h-auto rounded-full bg-white px-8 py-4 text-base font-semibold text-primary hover:bg-white/90">
                Learn About FRIDA
              </Button>
            </Link>
            <Link to="/research">
              <Button
                size="lg"
                variant="outline"
                className="h-auto rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-primary"
              >
                Explore Research <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
