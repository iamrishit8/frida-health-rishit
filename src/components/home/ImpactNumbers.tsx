import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const ImpactNumbers = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-serif font-bold flex justify-center items-center">
              <AnimatedCounter value={10} suffix="+" />
            </div>
            <p className="text-white/80 text-sm uppercase tracking-widest">MPs Engaged</p>
          </div>

          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-serif font-bold flex justify-center items-center">
              <AnimatedCounter value={50} suffix="+" />
            </div>
            <p className="text-white/80 text-sm uppercase tracking-widest">Research Papers</p>
          </div>

          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-serif font-bold flex justify-center items-center">
              <AnimatedCounter value={6} />
            </div>
            <p className="text-white/80 text-sm uppercase tracking-widest">States Covered</p>
          </div>

          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-serif font-bold flex justify-center items-center">
              <AnimatedCounter value={15} suffix="k" />
            </div>
            <p className="text-white/80 text-sm uppercase tracking-widest">Lives Impacted</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;