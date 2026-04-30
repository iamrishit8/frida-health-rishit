import { useEffect } from "react";
import { CalendarDays } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { siteImages } from "@/lib/site-images";

const events = [
  {
    title: "ECOSOC Youth Forum 2026 Side Event by FRIDA",
    date: "April 16, 2026",
    image: siteImages.events.hero,
    gallery: siteImages.events.ecosocYouthForum,
    link: "https://ecosoc.un.org/sites/default/files/2026-04/2026%20EYF%20Side%20Events%2016%20April%202026.pdf",
    description: [
      "Panel titled Reimagining Climate-Resilient Cities for Adolescent Girls’ Health, Hygiene and Wellbeing brought together experts: Aditi Arora (Regional Director, APAC Region, GirlUp), Apekshita Varshney (Founder, HeatWatch), Dina Chaerani (Founder, Sexdugram), Saleha Sapra (Co-Founder, CitySabha), moderated by our Founder, Prakshi Saha.",
      "Climate change is accelerating the breakdown of urban infrastructure and young women and adolescents bear the disproportionate burden. When water systems fail and sanitation networks collapse, it is girls who lose access to menstrual hygiene, safe toilets, and reproductive health services first. Yet urban climate resilience planning consistently fails to centre their needs.",
      "This side event extends that work to a critical and underexplored nexus: climate resilience, urban sustainability, and the health and hygiene needs of adolescents, particularly girls. Bringing together youth advocates, urban health experts, and WaSH specialists, this session will examine how cities can be governed to protect the health, sanitation, hygiene and dignity of young women even as climate pressures mount.",
    ],
  },
  {
    title: "Winter Session 2025 Parliamentary Roundtable",
    date: "December 8, 2025",
    image: siteImages.events.winterSession[0],
    gallery: siteImages.events.winterSession,
    description: [
      "During the Parliament Winter Session of 2025, Frida convened a Parliamentary Roundtable bringing together members of our Parliamentarians' Forum to strengthen dialogue around women's health priorities and evidence-based policy pathways.",
      "Launched 3 critical research outputs",
      "Policy Brief on Strengthening India's Cervical Cancer Response",
      "Policy Brief on Strengthening India's Breast Cancer Response",
      "Women's Health in India- Landscape Report",
      "The roundtable created space for structured exchange on prevention, access, and systems reform, reinforcing the members' continued commitment to women's health advocacy.",
    ],
  },
  {
    title: "Trust and Safety India Festival 2025",
    date: "October 7, 2025",
    subtitle: "Official Pre-Summit Event of the AI Impact Summit 2026",
    image: siteImages.events.trustAndSafety[0],
    gallery: siteImages.events.trustAndSafety,
    description: [
      "Frida partnered with the Trust and Safety India Festival (TASI) 2025 and hosted a side event, contributing a women's health lens to the global conversation on digital trust, safety, and governance.",
      "Panel titled Bodies, Bans, and Algorithms: Reclaiming SRHR Access in the Age of Digital Censorship and Control examined how digital censorship, content moderation systems, and algorithmic regulation shape access to sexual and reproductive health information and what it means to protect autonomy and access in online spaces.",
      "Speakers included Aparjita Bharti, Vithika Yadav, Saachi Malhotra, and Zoya Ali. The session was moderated by our founder, Prakshi Saha.",
    ],
  },
  {
    title: "Period Party",
    date: "May 28, 2025",
    image: siteImages.events.periodParty[0],
    gallery: siteImages.events.periodParty,
    description: [
      "To mark World Menstrual Health Day, Frida hosted its first-ever Period Party, a unique, never seen before, creative, liberating, feminist space.",
      "A gathering of 50+ participants, the evening created a safe and intentional space for conversation, art, storytelling, and reflection around menstruation and bodily autonomy.",
      "The event featured a bold and unapologetic panel, Bloody Hell, bringing together diverse voices to share stories, rage, hope, and joy in reclaiming menstrual narratives.",
      "Panelists included: Swarnima Bhattacharya (Co-founder, Gytree), Laetitia Bruce Warjri (Director of Partnerships & Stakeholder Engagement, UAE India CEPA Council), Sachee Malhotra (Co-founder, That’s Sassy Thing), Sumedha Pal (Journalist, BBC India)",
      "The evening centered community, creativity, and reclamation, with a writing workshop facilitated by a trauma informed psychotherapist, and a participatory vulva art activity.",
      "Period Party marked the beginning of an ongoing commitment to building joyful, radical, and inclusive spaces where we show up unapologetically, decentering shame and stigma.",
    ],
  },
];

const Events = () => {
  useEffect(() => {
    document.title = "Events | FRIDA";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Events"
        image={siteImages.events.hero}
        alt="Events"
        align="right"
      />

      <section className="py-12 md:py-16">
        <div className="section-container text-center">
          <p className="mx-auto max-w-5xl text-lg leading-relaxed text-foreground/75 md:text-xl">
            Frida convenes and contributes to spaces that bring together policymakers, researchers, advocates, and communities to advance critical conversations on women's health.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container space-y-8">
          {events.map((event) => (
            <article key={event.title} className="overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm">
              <div className="grid items-start gap-0 md:grid-cols-[1.32fr_1fr]">
                <div className="h-72 overflow-hidden bg-primary/5 md:h-[360px]">
                  <Carousel
                    opts={{ loop: true, align: "start" }}
                    plugins={[
                      Autoplay({
                        delay: 3200,
                        stopOnInteraction: true,
                      }),
                    ]}
                    className="h-full"
                  >
                    <CarouselContent className="h-full">
                      {event.gallery.map((photo, idx) => (
                        <CarouselItem key={`${event.title}-main-${idx}`} className="h-full min-h-[18rem] pl-0 md:h-[360px] md:min-h-[360px]">
                          <img
                            src={photo}
                            alt={`${event.title} photo ${idx + 1}`}
                            className="h-full w-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious
                      className="left-3 top-1/2 z-20 -translate-y-1/2 border-white/40 bg-black/35 text-white hover:bg-black/55 hover:text-white"
                    />
                    <CarouselNext
                      className="right-3 top-1/2 z-20 -translate-y-1/2 border-white/40 bg-black/35 text-white hover:bg-black/55 hover:text-white"
                    />
                  </Carousel>
                </div>

                <div className="h-full p-5 md:h-[360px] md:overflow-y-auto md:p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-primary/80">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1">
                      <CalendarDays className="h-4 w-4" /> {event.date}
                    </span>
                    {event.subtitle ? <span className="text-xs uppercase tracking-wider">{event.subtitle}</span> : null}
                  </div>

                  <h2 className="mb-3 text-[1.8rem] font-bold leading-tight text-primary md:text-[2rem]">{event.title}</h2>
                  <div className="space-y-2.5 text-[1rem] leading-relaxed text-foreground/75 md:text-[1.02rem]">
                    {event.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {"link" in event && event.link ? (
                      <p>
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-primary underline underline-offset-4 transition-opacity hover:opacity-75"
                        >
                          View official event listing
                        </a>
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
