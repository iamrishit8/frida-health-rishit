import { Leaf, ShieldPlus, Droplets, SunMedium, BrainCircuit, HeartPulse } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const areas = [
  { name: "Adolescent Health", icon: HeartPulse },
  { name: "Sexual and Reproductive Health", icon: ShieldPlus },
  { name: "Breast and Cervical Cancer Prevention", icon: Leaf },
  { name: "Nutrition, Water, Sanitation and Hygiene", icon: Droplets },
  { name: "Climate Change and Women's Health", icon: SunMedium },
  { name: "Technology & AI in Women's Health", icon: BrainCircuit },
];

const AreasOfWork = () => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="section-container">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-5 text-4xl font-bold text-primary md:text-5xl">Priority Areas</h2>
          <p className="text-lg text-foreground/70 md:text-xl">
            Focused action on urgent and emerging priorities shaping women's health outcomes.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <Reveal key={area.name} delay={index * 0.06}>
              <article
                className={`group rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  index % 3 === 1 ? "lg:translate-y-3" : ""
                }`}
              >
                <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <area.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{area.name}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasOfWork;
