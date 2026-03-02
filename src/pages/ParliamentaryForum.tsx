import { useEffect } from "react";
import { Handshake, BookOpenCheck, ShieldCheck, Users, Landmark, MapPinned, Linkedin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

const LINKEDIN_URL = "https://www.linkedin.com/company/fridahealth/posts/?feedView=all";

const members = [
  {
    name: "KR Suresh Reddy",
    role: "Rajya Sabha Member of Parliament, Telangana (BRS)",
    bio: "Supports stronger legislative attention to women's health priorities and long-term systems reform.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "Dr. Maddila Gurumoorthy",
    role: "Lok Sabha Member of Parliament, Andhra Pradesh (YSRCP)",
    bio: "Advocates for evidence-informed policy pathways that improve prevention, care access, and health equity.",
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "Vishal Patil",
    role: "Lok Sabha Member of Parliament, Maharashtra (Swabhimani Paksha)",
    bio: "Focuses on connecting constituency-level realities with national policy conversations on women's health.",
    photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "Dr. Fauzia Khan",
    role: "Rajya Sabha Member of Parliament, Maharashtra (NCP-SP)",
    bio: "Contributes to cross-party dialogue on equitable and inclusive health systems for women and girls.",
    photo: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "Pradyut Bordoloi",
    role: "Lok Sabha Member of Parliament, Assam (INC)",
    bio: "Engages in policy discussions that strengthen accountability and improve service delivery outcomes.",
    photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "Dr. T Sumathy",
    role: "Lok Sabha Member of Parliament, Tamil Nadu (DMK)",
    bio: "Supports sustained consensus-building around women-centered health interventions and rights.",
    photo: "https://images.unsplash.com/photo-1573497019707-1c04de26e58f?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "Sulata Deo",
    role: "Rajya Sabha Member of Parliament, Odisha (BJD)",
    bio: "Advocates for stronger representation of lived experiences in public health and policy design.",
    photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "Jothimani S.",
    role: "Lok Sabha Member of Parliament, Tamil Nadu (INC)",
    bio: "Contributes to policy action that advances autonomy, dignity, and equitable access in women's health.",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=900",
  },
];

const objectives = [
  {
    title: "Facilitating Dialogue and Collaboration",
    description: "Among Parliamentarians across political parties.",
    icon: Handshake,
  },
  {
    title: "Enabling Knowledge Exchange and Evidence-Based Policymaking",
    description: "Through practical policy engagement and research grounding.",
    icon: BookOpenCheck,
  },
  {
    title: "Driving Policy Action and Accountability",
    description: "To sustain women's health as a national policy priority.",
    icon: ShieldCheck,
  },
];

const ParliamentaryForum = () => {
  useEffect(() => {
    document.title = "Parliamentary Forum | FRIDA";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Parliamentarians' Forum on Women's Health"
        image="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=1600"
        alt="Parliament forum"
      />

      <section className="py-12 md:py-16">
        <div className="section-container text-center">
          <p className="mx-auto max-w-5xl text-lg leading-relaxed text-foreground/75 md:text-xl">
            In 2025, Frida launched India's first-ever Parliamentarians' Forum on Women's Health, bringing together Members of Parliament across party lines to make women's health a consistent policy priority.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl bg-primary p-7 text-white shadow-xl md:p-9">
              <Users className="mb-4 h-8 w-8" />
              <p className="mb-1 text-5xl font-bold">10</p>
              <p className="text-sm uppercase tracking-[0.2em] text-white/75">Members of Parliament</p>
            </article>
            <article className="rounded-3xl bg-primary p-7 text-white shadow-xl md:p-9">
              <Landmark className="mb-4 h-8 w-8" />
              <p className="mb-1 text-5xl font-bold">7</p>
              <p className="text-sm uppercase tracking-[0.2em] text-white/75">Political Parties</p>
            </article>
            <article className="rounded-3xl bg-primary p-7 text-white shadow-xl md:p-9">
              <MapPinned className="mb-4 h-8 w-8" />
              <p className="mb-1 text-5xl font-bold">6</p>
              <p className="text-sm uppercase tracking-[0.2em] text-white/75">States</p>
            </article>
          </div>

          <div className="mt-10 rounded-3xl border border-primary/10 bg-primary/5 p-6 md:p-10">
            <h2 className="mb-5 text-3xl font-bold text-primary">Context</h2>
            <p className="text-foreground/75">
              Women's health remains globally underprioritized, often overshadowed by broader health and economic agendas, despite its foundational role in social well-being and development index. This persistent neglect underscores the urgent need for greater political will and policy prioritisation. Parliamentary forums are a great way to build cross-party consensus and momentum to elevate women's health as a national policy priority.
            </p>

            <h3 className="mt-8 mb-3 text-2xl font-bold text-primary">Mission</h3>
            <p className="text-foreground/80">Making women's health a policy priority, backed by political will and consensus.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary/5">
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-primary/10 bg-white p-7 shadow-sm md:p-9">
              <h2 className="mb-5 text-3xl font-bold text-primary">Objectives</h2>
              <div className="space-y-4">
                {objectives.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-primary/10 p-4">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{item.title}</h4>
                      <p className="text-sm text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-primary/10 bg-white p-7 shadow-sm md:p-9">
              <h2 className="mb-4 text-3xl font-bold text-primary">Map and Representation</h2>
              <p className="mb-6 text-foreground/75">Map image can be replaced with your final visual.</p>
              <div className="h-[320px] overflow-hidden rounded-2xl bg-primary/10">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&q=80&w=1400"
                  alt="Map placeholder"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </article>
          </div>

          <article className="mt-8 rounded-3xl border border-primary/10 bg-white p-7 shadow-sm md:p-9">
            <h2 className="mb-6 text-3xl font-bold text-primary">Who are the members?</h2>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {members.map((member, index) => (
                <Reveal key={member.name} delay={index * 0.05}>
                  <div className="group relative overflow-hidden rounded-2xl border border-primary/10">
                    <img src={member.photo} alt={member.name} className="h-80 w-full object-cover" loading="lazy" decoding="async" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 via-primary/45 to-transparent p-4 transition-opacity duration-300 group-hover:opacity-0">
                      <p className="text-base font-semibold text-white">{member.name}</p>
                      <p className="text-xs uppercase tracking-wider text-white/75">{member.role}</p>
                      <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center rounded-full border border-white/45 bg-primary/30 px-3 py-1 text-[11px] uppercase tracking-wider text-white"
                      >
                        <Linkedin className="mr-2 h-3 w-3" /> LinkedIn
                      </a>
                    </div>
                    <div className="absolute inset-0 flex items-end bg-primary/92 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-sm text-white">{member.bio}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ParliamentaryForum;
