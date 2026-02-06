import { Heart, Activity, Globe, Brain, Baby, Stethoscope } from "lucide-react";

const areas = [
  { name: "Maternal Health", icon: Baby },
  { name: "Digital Rights", icon: Globe },
  { name: "Climate & Health", icon: Activity },
  { name: "Mental Wellbeing", icon: Brain },
  { name: "Health Systems", icon: Stethoscope },
  { name: "Nutrition Policy", icon: Heart },
];

const AreasOfWork = () => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Priority Areas</h2>
          <p className="text-lg text-foreground/70">
            We focus our efforts where the gaps are widest, addressing systemic challenges through a multi-sectoral lens.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {areas.map((area, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-lg border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-default"
            >
              <div className="mb-4 p-3 bg-primary/5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <area.icon size={24} />
              </div>
              <h3 className="font-serif font-semibold text-primary">{area.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasOfWork;