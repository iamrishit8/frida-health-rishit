import { useEffect } from "react";
import { Activity, Users, Landmark } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { siteImages } from "@/lib/site-images";

const Impact = () => {
  useEffect(() => {
    document.title = "Impact | FRIDA";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Impact"
        image={siteImages.impact.hero}
        alt="Impact"
        align="center"
      />

      <section className="py-12 md:py-16">
        <div className="section-container text-center">
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
            <article className="overflow-hidden rounded-3xl border border-primary/10 bg-primary/5">
              <img src={siteImages.impact.qualitative} alt="Qualitative impact" className="h-52 w-full object-cover" loading="lazy" decoding="async" />
              <div className="p-7 md:p-9">
                <h2 className="mb-4 text-3xl font-bold text-primary">Qualitative Impact</h2>
                <p className="text-foreground/75">
                  Frida's work is helping center women's health in policy dialogue and public discourse through stronger evidence translation, cross-sector partnerships, and consistent engagement with communities.
                </p>
              </div>
            </article>
            <article className="overflow-hidden rounded-3xl border border-primary/10 bg-primary/5">
              <img src={siteImages.impact.systems} alt="Systems change" className="h-52 w-full object-cover" loading="lazy" decoding="async" />
              <div className="p-7 md:p-9">
                <h2 className="mb-4 text-3xl font-bold text-primary">Systems Change</h2>
                <p className="text-foreground/75">
                  Across research, advocacy, and field engagement, we are contributing to more responsive systems that better recognize autonomy, access, and dignity in women's health.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
