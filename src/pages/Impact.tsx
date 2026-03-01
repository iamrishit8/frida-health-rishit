import { useEffect } from "react";
import { Activity, Users, Landmark } from "lucide-react";

const Impact = () => {
  useEffect(() => {
    document.title = "Impact | FRIDA";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary/5 pb-16 pt-28 md:pt-36">
        <div className="section-container text-center">
          <h1 className="mb-6 text-4xl font-bold text-primary md:text-6xl">Impact</h1>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-foreground/75 md:text-xl">
            Our impact combines quantitative progress and qualitative change by connecting research, policy, and community-grounded action for women's health.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-primary/10 bg-white p-7 shadow-sm">
              <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                <Activity className="h-5 w-5" />
              </div>
              <p className="text-5xl font-bold text-primary">5+</p>
              <p className="mt-2 uppercase tracking-wider text-foreground/65">Research Outputs</p>
            </article>
            <article className="rounded-2xl border border-primary/10 bg-white p-7 shadow-sm">
              <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                <Landmark className="h-5 w-5" />
              </div>
              <p className="text-5xl font-bold text-primary">20+</p>
              <p className="mt-2 uppercase tracking-wider text-foreground/65">Policymakers Engaged</p>
            </article>
            <article className="rounded-2xl border border-primary/10 bg-white p-7 shadow-sm">
              <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                <Users className="h-5 w-5" />
              </div>
              <p className="text-5xl font-bold text-primary">5000+</p>
              <p className="mt-2 uppercase tracking-wider text-foreground/65">Community Members Reached</p>
            </article>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-primary/10 bg-primary/5 p-7 md:p-9">
              <h2 className="mb-4 text-3xl font-bold text-primary">Qualitative Impact</h2>
              <p className="text-foreground/75">
                Frida's work is helping center women's health in policy dialogue and public discourse through stronger evidence translation, cross-sector partnerships, and consistent engagement with communities.
              </p>
            </article>
            <article className="rounded-3xl border border-primary/10 bg-primary/5 p-7 md:p-9">
              <h2 className="mb-4 text-3xl font-bold text-primary">Systems Change</h2>
              <p className="text-foreground/75">
                Across research, advocacy, and field engagement, we are contributing to more responsive systems that better recognize autonomy, access, and dignity in women's health.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
