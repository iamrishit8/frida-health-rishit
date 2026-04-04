import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { siteImages } from "@/lib/site-images";

const workAreas = [
  {
    title: "Research",
    description: "Generating practical evidence that helps improve policy, services, and everyday health decisions for women and girls.",
    link: "/research",
    image: siteImages.home.whatWeDo.research,
  },
  {
    title: "Advocacy",
    description: "Partnering with decision-makers to prioritize women's health and wellbeing through inclusive, data-backed policy action.",
    link: "/advocacy",
    image: siteImages.home.whatWeDo.advocacy,
  },
  {
    title: "Community Engagement",
    description: "Working with communities to strengthen awareness, trust, and equitable access to health information and services.",
    link: "/community",
    image: siteImages.home.whatWeDo.community,
  },
];

const WhatWeDo = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-[linear-gradient(180deg,rgba(100,13,20,0.04),rgba(255,255,255,1)_26%)]">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_center,_rgba(100,13,20,0.08),_transparent_60%)]" />
      <div className="section-container">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-5 text-4xl font-bold text-primary md:text-5xl">What do we do?</h2>
          <p className="text-lg text-foreground/70 md:text-xl">
            We combine evidence, advocacy, and field engagement to drive durable systems change in women's health.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3 md:[grid-auto-rows:1fr]">
          {workAreas.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.08}>
              <Link
                to={area.link}
                className="group lift-card relative flex min-h-full flex-col overflow-hidden rounded-[2.1rem] border border-primary/10 bg-white/97 p-5 shadow-[0_26px_82px_rgba(100,13,20,0.08)] transition-all duration-500 hover:border-primary/20"
              >
                <div className="mb-5 flex min-h-[7rem] items-center justify-center rounded-[1.65rem] border border-primary/10 bg-gradient-to-b from-primary/5 to-primary/8 px-5 py-6 text-center">
                  <h3 className="font-ui text-center text-[1.9rem] font-medium leading-[1.05] tracking-[-0.02em] text-primary">{area.title}</h3>
                </div>

                <div className="relative overflow-hidden rounded-[1.8rem] bg-primary/5 pt-8">
                  <div className="absolute left-1/2 top-4 h-14 w-[72%] -translate-x-1/2 rounded-[999px] bg-primary/14 blur-[1px]" />
                  <div className="absolute left-1/2 top-8 h-14 w-[82%] -translate-x-1/2 rounded-[999px] bg-primary/8" />
                  <img
                    src={area.image}
                    alt={area.title}
                    className="animate-card-pan h-[26rem] w-full rounded-[1.8rem] object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 rounded-[1.8rem] bg-gradient-to-t from-primary/12 via-transparent to-white/6" />
                </div>

                <div className="flex min-h-[17rem] flex-1 flex-col p-4 pt-7">
                  <p className="mb-8 text-[1.75rem] leading-[1.34] text-foreground/82">{area.description}</p>
                  <div className="font-ui mt-auto inline-flex items-center gap-2 text-base font-medium text-primary">
                    Explore <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
