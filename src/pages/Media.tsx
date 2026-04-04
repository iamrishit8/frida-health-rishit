import { useEffect } from "react";
import { ArrowUpRight, Newspaper, Podcast, Video } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { siteImages } from "@/lib/site-images";

const features = [
  {
    type: "Press Release",
    date: "December 2025",
    title: "Frida launches Parliamentarians' Forum on Women's Health",
    href: "https://www.linkedin.com/company/fridahealth/posts/?feedView=all",
    icon: Newspaper,
  },
  {
    type: "Interview",
    date: "October 2025",
    title: "Digital safety, SRHR access, and policy conversations in India",
    href: "https://www.linkedin.com/company/fridahealth/posts/?feedView=all",
    icon: Video,
  },
  {
    type: "Podcast",
    date: "May 2025",
    title: "Community narratives and feminist health futures",
    href: "https://www.linkedin.com/company/fridahealth/posts/?feedView=all",
    icon: Podcast,
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
              <article key={item.title} className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
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
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
