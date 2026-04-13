import { useEffect } from "react";
import { CloudSun, Droplets, ClipboardList } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { siteImages } from "@/lib/site-images";

const Community = () => {
  useEffect(() => {
    document.title = "Community Engagement | FRIDA";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Community Engagement"
        image={siteImages.community.hero}
        alt="Community engagement"
      />

      <section className="py-12 md:py-16">
        <div className="section-container text-center">
          <p className="mx-auto max-w-5xl text-lg leading-relaxed text-foreground/75 md:text-xl">
            We partner with women, girls, and local communities to understand how health challenges are experienced in everyday life. Through collaboration, education, field research, and participatory learning, we turn shared knowledge into practical action and policy recommendations that strengthen agency and awareness.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="mb-10 text-center text-4xl font-bold text-primary">Community Engagement Initiatives</h2>

          <div className="space-y-6">
            <article className="grid items-center gap-8 rounded-3xl border border-primary/10 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
              <div className="relative h-[300px] overflow-hidden rounded-2xl md:h-[360px]">
                <img
                  src={siteImages.community.initiatives.climate}
                  alt="Gendered climate impacts"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/45 to-transparent" />
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

            <article className="grid items-center gap-8 rounded-3xl border border-primary/10 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
              <div className="relative order-1 h-[300px] overflow-hidden rounded-2xl md:order-2 md:h-[360px]">
                <img
                  src={siteImages.community.initiatives.menstrual}
                  alt="Menstrual health education"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/45 to-transparent" />
              </div>
              <div className="order-2 md:order-1">
                <div className="mb-3 inline-flex rounded-full bg-primary/10 p-2 text-primary">
                  <Droplets className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-primary">Menstrual Health Education</h3>
                <p className="text-foreground/75">
                  Interactive education programs that build bodily literacy, reduce stigma, and support informed menstrual care. These sessions equip adolescents and women with practical knowledge while creating safe spaces for open conversation.
                </p>
              </div>
            </article>

            <article className="grid items-center gap-8 rounded-3xl border border-primary/10 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
              <div className="relative h-[300px] overflow-hidden rounded-2xl md:h-[360px]">
                <img
                  src={siteImages.community.initiatives.surveys}
                  alt="Community surveys"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/45 to-transparent" />
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
