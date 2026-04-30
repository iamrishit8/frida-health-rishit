import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import Reveal from "@/components/ui/Reveal";

const ImpactNumbers = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_42%)]" />
      <div className="section-container">
        <Reveal className="relative z-10 mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">Impact Numbers</p>
        </Reveal>

        <div className="relative z-10 grid gap-8 text-center md:grid-cols-3">
          {[
            { value: 5, suffix: "+", label: "Research Outputs" },
            { value: 20, suffix: "+", label: "policymakers engaged" },
            { value: 5000, suffix: "+", label: "community members reached" },
          ].map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <div className="rounded-[2.2rem] border border-white/18 bg-white/8 p-10 shadow-[0_24px_80px_rgba(0,0,0,0.14)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/12 md:p-12">
                <div className="mb-3 text-5xl font-serif font-bold md:text-7xl">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </div>
                <p className="font-ui text-sm uppercase tracking-[0.2em] text-white/80">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
