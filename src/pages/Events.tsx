import { useEffect } from "react";
import { CalendarDays } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { siteImages } from "@/lib/site-images";

const events = [
  {
    title: "Winter Session 2025 Parliamentary Roundtable",
    date: "December 8, 2025",
    image: siteImages.events.winterSession[0],
    gallery: siteImages.events.winterSession,
    description: [
      "During the Parliament Winter Session of 2025, Frida convened a Parliamentary Roundtable bringing together members of our Parliamentarians' Forum to strengthen dialogue around women's health priorities and evidence-based policy pathways.",
      "The session launched three critical research outputs: Policy Brief on Strengthening India's Cervical Cancer Response, Policy Brief on Strengthening India's Breast Cancer Response, and Women's Health in India - Landscape Report.",
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
      "Panel titled Bodies, Bans, and Algorithms: Reclaiming SRHR Access in the Age of Digital Censorship and Control examined how digital censorship, content moderation systems, and algorithmic regulation shape access to sexual and reproductive health information.",
      "Speakers included Aparjita Bharti, Vithika Yadav, Saachi Malhotra, and Zoya Ali. The session was moderated by our founder, Prakshi Saha.",
    ],
  },
  {
    title: "Period Party",
    date: "May 28, 2025",
    image: siteImages.events.periodParty[0],
    gallery: siteImages.events.periodParty,
    description: [
      "To mark World Menstrual Health Day, Frida hosted its first-ever Period Party, a creative, liberating, feminist space with 50+ participants for conversation, art, storytelling, and reflection around menstruation and bodily autonomy.",
      "The event featured the panel Bloody Hell and included voices from Swarnima Bhattacharya, Laetitia Bruce Warjri, Sachee Malhotra, and Sumedha Pal.",
      "The evening included a writing workshop facilitated by a trauma informed psychotherapist, and a participatory vulva art activity, marking an ongoing commitment to joyful, radical, and inclusive spaces.",
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
              <div className="grid gap-0 md:grid-cols-[1fr_1.25fr]">
                <div className="h-72 md:h-[420px] overflow-hidden bg-primary/5">
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
                        <CarouselItem key={`${event.title}-main-${idx}`} className="h-full pl-0">
                          <img
                            src={photo}
                            alt={`${event.title} photo ${idx + 1}`}
                            className="h-72 w-full object-cover md:h-[420px]"
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

                <div className="p-6 md:p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-primary/80">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1">
                      <CalendarDays className="h-4 w-4" /> {event.date}
                    </span>
                    {event.subtitle ? <span className="text-xs uppercase tracking-wider">{event.subtitle}</span> : null}
                  </div>

                  <h2 className="mb-4 text-3xl font-bold text-primary">{event.title}</h2>
                  <div className="space-y-3 text-foreground/75">
                    {event.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
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
