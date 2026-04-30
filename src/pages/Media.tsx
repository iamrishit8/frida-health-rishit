import { useEffect } from "react";
import { ArrowUpRight, Newspaper, Podcast, Video } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { siteImages } from "@/lib/site-images";

const features = [
  {
    type: "The Print",
    date: "2025",
    title: "Putting women first: inter-party forum of MPs to bring women’s health into focus from winter session",
    href: "https://theprint.in/health/putting-women-first-inter-party-forum-of-mps-to-bring-womens-health-into-focus-from-winter-session/2732210/",
    icon: Newspaper,
    image: siteImages.media.previews.thePrint,
  },
  {
    type: "The New Indian Express",
    date: "2025",
    title: "First-ever intra-party parliamentarian forum on women’s health to push for cervical cancer vaccine",
    href: "https://www.newindianexpress.com/nation/2025/Aug/30/first-ever-intra-party-parliamentarian-forum-on-womens-health-to-push-for-cervical-cancer-vaccine",
    icon: Video,
    image: siteImages.media.previews.newIndianExpress,
  },
  {
    type: "YouTube",
    date: "Video",
    title: "Featured video conversation",
    href: "https://youtu.be/82NW-l0bIUU?si=eSHkkcFhFFF80hG0",
    icon: Podcast,
    image: siteImages.media.previews.youtube,
  },
];

const Media = () => {
  useEffect(() => {
    document.title = "Featured | FRIDA";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Featured & Media"
        image={siteImages.media.hero}
        alt="Featured media"
        align="right"
      />

      <section className="py-12 md:py-16">
        <div className="section-container text-center">
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-foreground/75 md:text-xl">
            A curated snapshot of Frida in media, public conversations, and featured external platforms.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-[0_18px_52px_rgba(100,13,20,0.06)] transition-transform duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden bg-primary/5 p-4 pt-6">
                  <div className="absolute left-1/2 top-4 h-12 w-[74%] -translate-x-1/2 rounded-full bg-primary/12" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-56 w-full rounded-[1.5rem] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = siteImages.media.hero;
                    }}
                  />
                  <div className="absolute inset-x-4 bottom-4 rounded-[1.25rem] bg-primary/74 p-3 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm font-medium leading-snug">Open publication preview</p>
                  </div>
                </div>
                <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs uppercase tracking-wider text-primary">{item.type}</span>
                  <item.icon className="h-5 w-5 text-primary/50" />
                </div>
                <p className="mb-2 text-xs uppercase tracking-widest text-foreground/55">{item.date}</p>
                <h2 className="mb-5 text-2xl font-bold text-primary">{item.title}</h2>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-medium text-primary hover:text-primary/80"
                >
                  Open Link <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
