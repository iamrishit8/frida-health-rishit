import { useEffect } from "react";
import PageHero from "@/components/ui/PageHero";
import { siteImages } from "@/lib/site-images";

const Advocacy = () => {
  useEffect(() => {
    document.title = "Advocacy | FRIDA";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Advocacy"
        image={siteImages.advocacy.hero}
        alt="Advocacy"
        align="right"
      />

      <section className="pb-6 pt-12 md:pb-8 md:pt-16">
        <div className="section-container">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-lg leading-relaxed text-foreground/75 md:text-xl">
              Frida advances women's health by bridging the gap between policy discourse and community-grounded insights.
            </p>
            <p className="text-lg leading-relaxed text-foreground/75 md:text-xl">
              We bring to policy makers research, data, knowledge as well as stories, and lived realities of women and girls across India. We believe women's health policy must be evidence-based, community-informed, and shaped by those it affects most.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 pt-2 md:pb-20 md:pt-4">
        <div className="section-container">
          <div className="mb-10 rounded-[2rem] border border-primary/10 bg-[linear-gradient(180deg,rgba(100,13,20,0.06),rgba(255,255,255,0.96))] p-7 text-center shadow-[0_18px_52px_rgba(100,13,20,0.05)] md:p-9">
            <p className="text-lg font-medium leading-relaxed text-foreground/80 md:text-xl">
              Our advocacy works on two fronts: inside the halls of policy, and within the communities we serve.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-primary/10 bg-[linear-gradient(180deg,rgba(100,13,20,0.04),rgba(255,255,255,1))] p-8 shadow-[0_18px_56px_rgba(100,13,20,0.06)] transition-transform duration-500 hover:-translate-y-1 md:p-10">
              <h2 className="mb-4 text-3xl font-bold text-primary">Policy Advocacy</h2>
              <p className="mb-6 text-foreground/75">
                Influencing the systems that shape women's health. We engage directly with policymakers, government bodies, and institutional stakeholders to ensure that women's health agendas are grounded in rigorous evidence and real-world experience.
              </p>
              <p className="text-foreground/75">
                From equipping Parliamentarians with research, shaping drafting of policies and Bills, to building coalitions and partnerships, we work to make policy more responsive, inclusive, and effective.
              </p>
            </article>

            <article className="rounded-[2rem] border border-primary/10 bg-[linear-gradient(180deg,rgba(100,13,20,0.04),rgba(255,255,255,1))] p-8 shadow-[0_18px_56px_rgba(100,13,20,0.06)] transition-transform duration-500 hover:-translate-y-1 md:p-10">
              <h2 className="mb-4 text-3xl font-bold text-primary">Community Advocacy</h2>
              <p className="mb-6 text-foreground/75">
                Building awareness, shifting norms. We work with communities, civil society, and the wider public to raise awareness, shift norms, enable behaviour change, and build collective demand for better women's health.
              </p>
              <p className="text-foreground/75">
                Policy change is only meaningful and effective when it translates to the ground, amidst communities.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary/5">
        <div className="section-container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siteImages.advocacy.gallery.map((img, index) => (
              <img
                key={`${img}-${index}`}
                src={img}
                alt={`Advocacy gallery ${index + 1}`}
                className="h-56 w-full rounded-[1.5rem] object-cover shadow-[0_16px_48px_rgba(100,13,20,0.08)]"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advocacy;
