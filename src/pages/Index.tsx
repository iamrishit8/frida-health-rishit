import Hero from "@/components/home/Hero";
import ImpactNumbers from "@/components/home/ImpactNumbers";
import WhatWeDo from "@/components/home/WhatWeDo";
import AreasOfWork from "@/components/home/AreasOfWork";
import Partners from "@/components/home/Partners";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import Reveal from "@/components/ui/Reveal";

const Index = () => {
  useEffect(() => {
    document.title = "FRIDA | Women's Health Advocacy Lab";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />

      <section className="bg-white py-14 md:py-20">
        <div className="section-container">
          <Reveal className="mx-auto max-w-5xl rounded-3xl border border-primary/10 bg-primary/5 p-7 text-center shadow-sm md:p-10">
            <p className="mb-3 text-lg leading-relaxed text-foreground/80 md:text-2xl">
              By strengthening knowledge, care, and systems around women and girls, we create change that reaches families, communities, and future generations.
            </p>
            <p className="mb-3 text-lg leading-relaxed text-foreground/80 md:text-2xl">
              Advancing women's health through research, action, and systems change.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 md:text-2xl">
              Building evidence-driven solutions that strengthen lives, families, and futures.
            </p>
          </Reveal>
        </div>
      </section>

      <ImpactNumbers />
      <WhatWeDo />
      <AreasOfWork />
      <Partners />

      <section className="section-padding bg-gradient-to-b from-white to-primary/5">
        <div className="section-container">
          <Reveal>
            <div className="grid items-center gap-10 rounded-3xl border border-primary/10 bg-white p-6 shadow-xl shadow-primary/10 md:grid-cols-2 md:p-10">
              <div className="relative h-[340px] overflow-hidden rounded-2xl ring-1 ring-primary/10 md:h-[420px]">
                <img
                  src="/hero-women-community.jpg"
                  alt="Parliamentarians Forum on Women's Health"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/20 to-transparent" />
              </div>

              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-primary/70">Featured Initiative</p>
                <h2 className="mb-5 text-3xl font-bold text-primary md:text-4xl">
                  Parliamentarians' Forum on Women's Health
                </h2>
                <p className="mb-7 text-lg leading-relaxed text-foreground/75">
                  Built India's Parliamentarians' Forum on Women's Health, a cross-party network of legislators committed to prioritise women's health and well being.
                </p>
                <div className="mb-7 flex flex-wrap gap-2 text-xs uppercase tracking-wider text-primary/80">
                  <span className="rounded-full bg-primary/10 px-3 py-1">Cross-party</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1">Legislative network</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1">Women's health focus</span>
                </div>

                <Link to="/parliamentary-forum">
                  <Button className="rounded-full bg-primary px-6 text-white hover:bg-primary/90">
                    Explore the Forum <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
