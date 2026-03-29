import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-shell relative min-h-[60vh] overflow-hidden md:min-h-[64vh]">
      <div className="absolute inset-0">
        <img
          src="/images/home/hero-main.jpg"
          alt="Girls in a community setting"
          className="hero-image h-full w-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?auto=format&fit=crop&q=80&w=2200";
          }}
        />
        <div className="hero-overlay animate-hero-shift absolute inset-0 opacity-50" />
        <div className="hero-vignette absolute inset-0" />
        <div className="hero-frame absolute inset-4 rounded-[1.75rem] border border-white/18 md:inset-6" />
      </div>

      <div className="section-container relative z-10 flex min-h-[60vh] flex-col justify-between py-8 md:min-h-[64vh] md:py-10">
        <div className="animate-fade-in-up pt-4 md:pt-8">
          <h1 className="text-balance max-w-2xl text-left text-3xl font-bold leading-[1.02] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.28)] md:text-5xl lg:text-6xl">
            Healthy and resilient futures for women and girls
          </h1>
        </div>

        <div className="pointer-events-none flex flex-1 items-end justify-center pb-8 md:pb-12">
          <Link to="/about" className="pointer-events-auto">
            <Button
              size="lg"
              className="hero-cta h-auto rounded-full border border-white/40 bg-white/92 px-8 py-4 text-base font-semibold text-primary shadow-[0_18px_60px_rgba(100,13,20,0.22)] hover:bg-white"
            >
              Learn About FRIDA
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
