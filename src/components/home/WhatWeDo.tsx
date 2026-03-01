import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const workAreas = [
  {
    title: "Research",
    description: "Generating practical evidence that helps improve policy, services, and everyday health decisions for women and girls.",
    link: "/research",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Advocacy",
    description: "Partnering with decision-makers to prioritize women's health and wellbeing through inclusive, data-backed policy action.",
    link: "/advocacy",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Community Engagement",
    description: "Working with communities to strengthen awareness, trust, and equitable access to health information and services.",
    link: "/community",
    image:
      "https://images.unsplash.com/photo-1469571486292-b53601020f70?auto=format&fit=crop&q=80&w=1200",
  },
];

const WhatWeDo = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-5 text-4xl font-bold text-primary md:text-5xl">What do we do?</h2>
          <p className="text-lg text-foreground/70 md:text-xl">
            We combine evidence, advocacy, and field engagement to drive durable systems change in women's health.
          </p>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-3">
          {workAreas.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.08}>
              <Link
                to={area.link}
                className="group block overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-md transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
                  <h3 className="absolute bottom-5 left-5 text-3xl font-bold text-white">{area.title}</h3>
                </div>

                <div className="p-6">
                  <p className="mb-4 text-base text-foreground/70">{area.description}</p>
                  <div className="inline-flex items-center font-medium text-primary">
                    Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
