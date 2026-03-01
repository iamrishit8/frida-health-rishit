import { useEffect, useState } from "react";
import { ChevronDown, Linkedin } from "lucide-react";

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
    photo:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=900",
    linkedin: LINKEDIN_URL,
    bio: "Leads FRIDA's vision, strategic partnerships, and institution-building to ensure women's health remains central to policy and systems change.",
  },
  {
    id: "anita",
    name: "Dr. Anita Sharma",
    designation: "Executive Director",
    photo:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=900",
    linkedin: LINKEDIN_URL,
    bio: "Drives organizational strategy and interdisciplinary execution across research, advocacy, and engagement initiatives.",
  },
  {
    id: "rahul",
    name: "Rahul Verma",
    designation: "Head of Research",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=900",
    linkedin: LINKEDIN_URL,
    bio: "Leads evidence generation, synthesis, and publication development focused on women and girls' health outcomes.",
  },
  {
    id: "priya",
    name: "Priya Singh",
    designation: "Advocacy Lead",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=900",
    linkedin: LINKEDIN_URL,
    bio: "Leads policy engagement, campaigns, and coalition building to advance women's health priorities across institutions.",
  },
];

const About = () => {
  const [activeMember, setActiveMember] = useState<string | null>(teamMembers[0]?.id ?? null);

  useEffect(() => {
    document.title = "About | FRIDA";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary/5 pb-16 pt-28 md:pt-36">
        <div className="section-container">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="mb-7 text-4xl font-bold text-primary md:text-6xl">Who We Are</h1>
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

      <section className="section-padding bg-primary/5">
        <div className="section-container">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mb-5 text-4xl font-bold text-primary">Priority Areas</h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "Adolescent Health",
                "Sexual and Reproductive Health",
                "Breast and Cervical Cancer Prevention",
                "Nutrition, Water, Sanitation and Hygiene",
                "Climate Change and Women's Health",
                "Technology & AI in Women's Health",
              ].map((area) => (
                <span key={area} className="rounded-full border border-primary/20 bg-white px-4 py-2 text-sm text-primary">
                  {area}
                </span>
              ))}
            </div>
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

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-primary/10 bg-white p-7 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold text-primary">Evidence-Based Research</h3>
              <p className="text-foreground/70">Rigorous inquiry that makes complex health challenges understandable and actionable.</p>
            </div>
            <div className="rounded-2xl border border-primary/10 bg-white p-7 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold text-primary">Policy Advocacy</h3>
              <p className="text-foreground/70">Strategic engagement with decision-makers to prioritize women's health in systems and institutions.</p>
            </div>
            <div className="rounded-2xl border border-primary/10 bg-white p-7 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold text-primary">Community Engagement</h3>
              <p className="text-foreground/70">Listening-first collaboration to ensure women and girls shape the solutions that affect their lives.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="mb-12">
            <h2 className="mb-2 text-4xl font-bold text-primary">Team and Advisors</h2>
            <p className="text-foreground/70">Photo, name, designation, expandable bio, and LinkedIn profile.</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {teamMembers.map((member) => {
              const isOpen = activeMember === member.id;

              return (
                <article
                  key={member.id}
                  className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => setActiveMember(isOpen ? null : member.id)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="h-16 w-16 rounded-xl object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div>
                        <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
                        <p className="text-sm uppercase tracking-wider text-foreground/60">{member.designation}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-primary/10 bg-primary/5 px-6 py-5">
                      <p className="mb-4 text-foreground/75">{member.bio}</p>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
                      >
                        <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                      </a>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
