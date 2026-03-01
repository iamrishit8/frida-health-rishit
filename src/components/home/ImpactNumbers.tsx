import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import Reveal from "@/components/ui/Reveal";

const ImpactNumbers = () => {
  return (
    <section className="bg-primary py-20 text-white">
      <div className="section-container">
        <Reveal className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">Impact Numbers</p>
        </Reveal>

        <div className="grid gap-8 text-center md:grid-cols-3">
          {[
            { value: 5, suffix: "+", label: "Research Outputs" },
            { value: 20, suffix: "+", label: "Policymakers Engaged" },
            { value: 5000, suffix: "+", label: "Community Members Reached" },
          ].map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                <div className="mb-2 text-5xl font-serif font-bold md:text-6xl">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </div>
                <p className="text-sm uppercase tracking-wider text-white/80">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
