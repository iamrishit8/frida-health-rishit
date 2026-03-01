import { useEffect } from "react";
import { CalendarDays } from "lucide-react";

const events = [
  {
    title: "Winter Session 2025 Parliamentary Roundtable",
    date: "December 8, 2025",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=1200",
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
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&q=80&w=1200",
    description: [
      "Frida partnered with the Trust and Safety India Festival (TASI) 2025 and hosted a side event, contributing a women's health lens to the global conversation on digital trust, safety, and governance.",
      "Panel titled Bodies, Bans, and Algorithms: Reclaiming SRHR Access in the Age of Digital Censorship and Control examined how digital censorship, content moderation systems, and algorithmic regulation shape access to sexual and reproductive health information.",
      "Speakers included Aparjita Bharti, Vithika Yadav, Saachi Malhotra, and Zoya Ali. The session was moderated by our founder, Prakshi Saha.",
    ],
  },
  {
    title: "Period Party",
    date: "May 28, 2025",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200",
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
      <section className="bg-primary/5 pb-16 pt-28 md:pt-36">
        <div className="section-container text-center">
          <h1 className="mb-6 text-4xl font-bold text-primary md:text-6xl">Events</h1>
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
                <div className="h-64 md:h-full">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
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

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((slot) => (
                      <div
                        key={`${event.title}-${slot}`}
                        className="rounded-xl border border-primary/15 bg-primary/5 p-4 text-center text-xs uppercase tracking-wider text-primary/65"
                      >
                        Photo {slot}
                      </div>
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
