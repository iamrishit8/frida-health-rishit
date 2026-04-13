import { useEffect } from "react";
import { Linkedin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { siteImages } from "@/lib/site-images";

const LINKEDIN_URL = "https://www.linkedin.com/company/fridahealth/posts/?feedView=all";

type TeamMember = {
  id: string;
  name: string;
  designation: string;
  bio: string;
  photo: string;
  linkedin: string;
};

const teamMembers: TeamMember[] = [
  {
    id: "prakshi",
    name: "Prakshi Saha",
    designation: "Founder",
    photo: siteImages.about.team.prakshi,
    linkedin: LINKEDIN_URL,
    bio: "Leads FRIDA's vision, strategic partnerships, and institution-building to ensure women's health remains central to policy and systems change.",
  },
  {
    id: "anita",
    name: "Dr. Anita Sharma",
    designation: "Executive Director",
    photo: siteImages.about.team.anita,
    linkedin: LINKEDIN_URL,
    bio: "Drives organizational strategy and interdisciplinary execution across research, advocacy, and engagement initiatives.",
  },
  {
    id: "rahul",
    name: "Rahul Verma",
    designation: "Head of Research",
    photo: siteImages.about.team.rahul,
    linkedin: LINKEDIN_URL,
    bio: "Leads evidence generation, synthesis, and publication development focused on women and girls' health outcomes.",
  },
  {
    id: "priya",
    name: "Priya Singh",
    designation: "Advocacy Lead",
    photo: siteImages.about.team.priya,
    linkedin: LINKEDIN_URL,
    bio: "Leads policy engagement, campaigns, and coalition building to advance women's health priorities across institutions.",
  },
  {
    id: "sarah",
    name: "Sarah John",
    designation: "Community Engagement Manager",
    photo: siteImages.about.team.sarah,
    linkedin: LINKEDIN_URL,
    bio: "Designs community-centered programs and participatory approaches that translate local realities into meaningful action.",
  },
  {
    id: "amit",
    name: "Amit Patel",
    designation: "Policy Analyst",
    photo: siteImages.about.team.amit,
    linkedin: LINKEDIN_URL,
    bio: "Supports policy synthesis, systems analysis, and legislative tracking to strengthen evidence-informed advocacy outputs.",
  },
];

const About = () => {
  useEffect(() => {
    document.title = "About | FRIDA";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Who We Are"
        image={siteImages.about.hero}
        alt="FRIDA team"
      />

      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-5 text-lg leading-relaxed text-foreground/75 md:text-xl">
              FRIDA- Women's Health Advocacy Lab is a not for profit based in India, South Asia, working towards advancing women's health, wellbeing, and dignity.
            </p>
            <p className="mb-5 text-lg leading-relaxed text-foreground/75 md:text-xl">
              We use research, data, storytelling, policy advocacy, campaigns and community engagement to ensure women and girls have access to accurate knowledge, resources, and autonomy to make decisions about their bodies and health.
            </p>
            <p className="text-lg leading-relaxed text-foreground/75 md:text-xl">
              At Frida, we see women's health as deeply interconnected with the systems that shape everyday life. Our work bridges evidence and action, translating research into conversations, and conversations into change.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siteImages.about.gallery.map((img) => (
              <img key={img} src={img} alt="About gallery" className="h-44 w-full rounded-2xl object-cover md:h-52" loading="lazy" decoding="async" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-3xl border border-primary/10 bg-white p-8 shadow-md md:p-10">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-primary/70">Mission</p>
              <h2 className="mb-3 text-3xl font-bold text-primary">Prioritizing women's health and well being</h2>
              <p className="text-lg leading-relaxed text-foreground/75">
                We exist to advance and advocate for women's health, wellbeing, and dignity through evidence-based research, policy advocacy and community engagement.
              </p>
            </article>

            <article className="rounded-3xl border border-primary/10 bg-primary/5 p-8 shadow-md md:p-10">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-primary/70">Vision</p>
              <h2 className="mb-3 text-3xl font-bold text-primary">Healthy and resilient futures.</h2>
              <p className="text-lg leading-relaxed text-foreground/75">
                We envision a future where women and girls have equitable access to knowledge, care, and systems that respect their autonomy, enabling them to live healthier, safer, and more empowered lives.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="section-container">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="mb-5 text-4xl font-bold text-primary">Our Approach</h2>
            <p className="mb-5 text-lg text-foreground/75 md:text-xl">
              Frida employs evidence- based research, policy advocacy, and community engagement to achieve its development outcomes.
            </p>
            <p className="mb-5 text-lg text-foreground/75 md:text-xl">
              By grounding our work in both data and lived experiences, we forge partnerships and collaborations to build pathways that strengthen systems.
            </p>
            <p className="text-lg font-medium text-primary md:text-xl">We translate evidence to action.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="mb-12">
            <h2 className="mb-2 text-4xl font-bold text-primary">Team</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Reveal key={member.id} delay={index * 0.05}>
                <article className="group relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-white shadow-[0_20px_64px_rgba(100,13,20,0.07)] transition-transform duration-500 hover:-translate-y-2">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-[26rem] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/66 via-primary/22 to-transparent p-6 transition-opacity duration-300 group-hover:opacity-0">
                    <p className="text-lg font-semibold text-white">{member.name}</p>
                    <p className="font-ui text-sm uppercase tracking-wider text-white/80">{member.designation}</p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-ui mt-3 inline-flex items-center rounded-full border border-white/40 bg-primary/14 px-3 py-1 text-xs uppercase tracking-wider text-white"
                    >
                      <Linkedin className="mr-2 h-3 w-3" /> LinkedIn
                    </a>
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/80 via-primary/56 to-primary/26 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="translate-y-3 transition-transform duration-300 group-hover:translate-y-0">
                      <p className="text-lg font-semibold text-white">{member.name}</p>
                      <p className="font-ui mt-1 text-xs uppercase tracking-[0.18em] text-white/78">{member.designation}</p>
                      <p className="mt-4 text-base leading-relaxed text-white">{member.bio}</p>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-ui mt-5 inline-flex items-center rounded-full border border-white/40 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-colors hover:bg-white/18"
                      >
                        <Linkedin className="mr-2 h-3 w-3" /> LinkedIn
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
