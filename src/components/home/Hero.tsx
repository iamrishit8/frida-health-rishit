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
          <h1 className="max-w-[16ch] text-left text-[clamp(2.8rem,7vw,5.8rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white drop-shadow-[0_16px_45px_rgba(0,0,0,0.34)]">
            <span className="hero-keyword hero-keyword-delay-1">Healthy</span> and{" "}
            <span className="hero-keyword hero-keyword-delay-2">resilient</span>{" "}
            futures for <span className="hero-keyword hero-keyword-delay-3">women</span>{" "}
            and <span className="hero-keyword hero-keyword-delay-4">girls</span>
          </h1>
        </div>

        <div className="flex-1" />
      </div>
    </section>
  );
};

export default Hero;
