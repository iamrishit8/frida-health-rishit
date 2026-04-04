import { useEffect } from "react";
import { siteImages } from "@/lib/site-images";

const Advocacy = () => {
  useEffect(() => {
    document.title = "Advocacy | FRIDA";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20">
        <div className="grid min-h-[45vh] md:grid-cols-2">
          <img
            src={siteImages.advocacy.hero}
            alt="Advocacy"
            className="h-full min-h-[260px] w-full object-cover"
          />
          <div className="flex items-center bg-primary/5 px-6 py-10 md:px-12">
            <div>
              <h1 className="mb-5 text-4xl font-bold text-primary md:text-6xl">Advocacy</h1>
              <p className="mb-4 text-lg leading-relaxed text-foreground/75 md:text-xl">
                Frida advances women's health by bridging the gap between policy discourse and community-grounded insights.
              </p>
              <p className="text-lg leading-relaxed text-foreground/75 md:text-xl">
                We bring to policy makers research, data, knowledge as well as stories, and lived realities of women and girls across India. We believe women's health policy must be evidence-based, community-informed, and shaped by those it affects most.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
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
          <h2 className="mb-10 text-center text-4xl font-bold text-primary">Campaigns</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Policy to Practice",
                text: "Turning evidence into actionable public commitments for women's health outcomes across states.",
              },
              {
                title: "Health Equity Dialogues",
                text: "Public dialogues that connect researchers, communities, and institutions around pressing women's health priorities.",
              },
              {
                title: "Evidence for Action",
                text: "Bringing data, stories, and lived realities into policy conversations that shape inclusive health systems.",
              },
            ].map((campaign) => (
              <article key={campaign.title} className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-2xl font-bold text-primary">{campaign.title}</h3>
                <p className="text-foreground/75">{campaign.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advocacy;
