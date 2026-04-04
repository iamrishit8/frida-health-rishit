import { Link } from "react-router-dom";
import { siteImages } from "@/lib/site-images";

const Hero = () => {
  return (
    <section className="hero-shell relative min-h-[66vh] overflow-hidden md:min-h-[76vh]">
      <div className="absolute inset-0">
        <img
          src={siteImages.home.heroMain}
          alt="Girls in a community setting"
          className="hero-image animate-kenburns h-full w-full object-cover object-[center_34%]"
          fetchPriority="high"
          decoding="async"
          onError={(e) => {
            e.currentTarget.src = siteImages.home.heroFallback;
          }}
        />
        <div className="hero-overlay animate-hero-shift absolute inset-0 opacity-44" />
        <div className="hero-vignette absolute inset-0" />
        <div className="hero-glow absolute -left-24 top-10 h-64 w-64 rounded-full blur-3xl md:h-80 md:w-80" />
        <div className="hero-grain absolute inset-0" />
      </div>

      <div className="section-container relative z-10 flex min-h-[66vh] flex-col justify-between py-8 md:min-h-[76vh] md:py-12">
        <div className="animate-fade-in-up pt-6 md:pt-10">
          <p className="font-ui mb-5 inline-flex rounded-full border border-white/20 bg-white/12 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/80 backdrop-blur-md md:text-xs">
            Research. Advocacy. Community.
          </p>
          <h1 className="text-balance max-w-4xl text-left text-4xl font-semibold leading-[0.96] text-white drop-shadow-[0_16px_45px_rgba(0,0,0,0.34)] md:text-6xl lg:text-7xl">
            Healthy and resilient futures for women and girls
          </h1>
        </div>

        <div className="pointer-events-none flex flex-1 items-end justify-center pb-10 md:pb-14">
          <Link to="/about" className="pointer-events-auto">
            <span className="hero-cta group">
              <span className="hero-cta__label">Learn About FRIDA</span>
              <span className="hero-cta__icon" aria-hidden="true">
                ↗
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
