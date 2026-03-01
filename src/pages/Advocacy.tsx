import { useEffect } from "react";

const policyImages = [
  "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1603201667230-bd139210db18?auto=format&fit=crop&q=80&w=1200",
];

const communityImages = [
  "https://images.unsplash.com/photo-1593113598332-cd59a93ad5a5?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1596079890744-2c5af4120ebc?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&q=80&w=1200",
];

const Advocacy = () => {
  useEffect(() => {
    document.title = "Advocacy | FRIDA";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary/5 pb-16 pt-28 md:pt-36">
        <div className="section-container">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-primary md:text-6xl">Advocacy</h1>
            <p className="mb-4 text-lg leading-relaxed text-foreground/75 md:text-xl">
              Frida advances women's health by bridging the gap between policy discourse and community-grounded insights.
            </p>
            <p className="text-lg leading-relaxed text-foreground/75 md:text-xl">
              We bring to policy makers research, data, knowledge as well as stories, and lived realities of women and girls across India. We believe women's health policy must be evidence-based, community-informed, and shaped by those it affects most.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="mb-10 rounded-3xl border border-primary/10 bg-primary/5 p-6 text-center md:p-8">
            <p className="text-lg font-medium leading-relaxed text-foreground/80 md:text-xl">
              Our advocacy works on two fronts: inside the halls of policy, and within the communities we serve.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-primary/10 bg-white p-7 shadow-sm md:p-9">
              <h2 className="mb-4 text-3xl font-bold text-primary">Policy Advocacy</h2>
              <p className="mb-6 text-foreground/75">
                Influencing the systems that shape women's health. We engage directly with policymakers, government bodies, and institutional stakeholders to ensure that women's health agendas are grounded in rigorous evidence and real-world experience.
              </p>
              <p className="text-foreground/75">
                From equipping Parliamentarians with research, shaping drafting of policies and Bills, to building coalitions and partnerships, we work to make policy more responsive, inclusive, and effective.
              </p>
              <div className="mt-7 grid grid-cols-3 gap-3">
                {policyImages.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`Policy advocacy ${index + 1}`}
                    className="h-24 w-full rounded-xl object-cover md:h-28"
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-primary/10 bg-white p-7 shadow-sm md:p-9">
              <h2 className="mb-4 text-3xl font-bold text-primary">Community Advocacy</h2>
              <p className="mb-6 text-foreground/75">
                Building awareness, shifting norms. We work with communities, civil society, and the wider public to raise awareness, shift norms, enable behaviour change, and build collective demand for better women's health.
              </p>
              <p className="text-foreground/75">
                Policy change is only meaningful and effective when it translates to the ground, amidst communities.
              </p>
              <div className="mt-7 grid grid-cols-3 gap-3">
                {communityImages.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`Community advocacy ${index + 1}`}
                    className="h-24 w-full rounded-xl object-cover md:h-28"
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
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
