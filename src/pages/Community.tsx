import { useEffect } from "react";
import { CloudSun, Droplets, ClipboardList } from "lucide-react";

const Community = () => {
  useEffect(() => {
    document.title = "Community Engagement | FRIDA";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary/5 pb-16 pt-28 md:pt-36">
        <div className="section-container text-center">
          <h1 className="mb-6 text-4xl font-bold text-primary md:text-6xl">Community Engagement</h1>
          <p className="mx-auto max-w-5xl text-lg leading-relaxed text-foreground/75 md:text-xl">
            We partner with women, girls, and local communities to understand how health challenges are experienced in everyday life. Through collaboration, education, field research, and participatory learning, we turn shared knowledge into practical action and policy recommendations that strengthen agency and awareness.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="mb-10 text-center text-4xl font-bold text-primary">Community Engagement Initiatives</h2>

          <div className="space-y-6">
            <article className="grid gap-6 rounded-3xl border border-primary/10 bg-white p-6 shadow-sm md:grid-cols-[220px_1fr] md:p-8">
              <div className="h-44 overflow-hidden rounded-2xl md:h-full">
                <img
                  src="https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&q=80&w=1200"
                  alt="Gendered climate impacts"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <div className="mb-3 inline-flex rounded-full bg-primary/10 p-2 text-primary">
                  <CloudSun className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-primary">Gendered Impacts of Climate</h3>
                <p className="text-foreground/75">
                  A community-based field interviews documenting how climate stress affects women's health, safety, and daily responsibilities. This work centers lived experiences to inform more responsive local and regional health strategies.
                </p>
              </div>
            </article>

            <article className="grid gap-6 rounded-3xl border border-primary/10 bg-white p-6 shadow-sm md:grid-cols-[220px_1fr] md:p-8">
              <div className="h-44 overflow-hidden rounded-2xl md:h-full">
                <img
                  src="https://images.unsplash.com/photo-1516589091380-5d60138dbf5d?auto=format&fit=crop&q=80&w=1200"
                  alt="Menstrual health education"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <div className="mb-3 inline-flex rounded-full bg-primary/10 p-2 text-primary">
                  <Droplets className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-primary">Menstrual Health Education</h3>
                <p className="text-foreground/75">
                  Interactive education programs that build bodily literacy, reduce stigma, and support informed menstrual care. These sessions equip adolescents and women with practical knowledge while creating safe spaces for open conversation.
                </p>
              </div>
            </article>

            <article className="grid gap-6 rounded-3xl border border-primary/10 bg-white p-6 shadow-sm md:grid-cols-[220px_1fr] md:p-8">
              <div className="h-44 overflow-hidden rounded-2xl md:h-full">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                  alt="Community surveys"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <div className="mb-3 inline-flex rounded-full bg-primary/10 p-2 text-primary">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-primary">Community Surveys & Listening Initiatives</h3>
                <p className="text-foreground/75">
                  Ongoing surveys and participatory assessments that capture women's health needs directly from communities. These insights shape our research priorities and ensure our work reflects real experiences rather than assumptions.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
