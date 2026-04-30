import { useEffect } from "react";
import { Handshake, BookOpenCheck, ShieldCheck, Users, Landmark, MapPinned } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { siteImages } from "@/lib/site-images";

const members = [
  {
    name: "KR Suresh Reddy",
    role: "Former Member of Parliament",
    bio: "Supports stronger legislative attention to women's health priorities and long-term systems reform.",
    photo: siteImages.forum.members.suresh,
  },
  {
    name: "Dr. Maddila Gurumoorthy",
    role: "Member of Parliament",
    bio: "Advocates for evidence-informed policy pathways that improve prevention, care access, and health equity.",
    photo: siteImages.forum.members.gurumoorthy,
  },
  {
    name: "Vishal Patil",
    role: "Member of Parliament",
    bio: "Focuses on connecting constituency-level realities with national policy conversations on women's health.",
    photo: siteImages.forum.members.vishal,
  },
  {
    name: "Dr. Fauzia Khan",
    role: "Former Member of Parliament",
    bio: "Contributes to cross-party dialogue on equitable and inclusive health systems for women and girls.",
    photo: siteImages.forum.members.fauzia,
  },
  {
    name: "Pradyut Bordoloi",
    role: "Former Member of Parliament",
    bio: "Engages in policy discussions that strengthen accountability and improve service delivery outcomes.",
    photo: siteImages.forum.members.pradyut,
  },
  {
    name: "Dr. T Sumathy",
    role: "Member of Parliament",
    bio: "Supports sustained consensus-building around women-centered health interventions and rights.",
    photo: siteImages.forum.members.sumathy,
  },
  {
    name: "Sulata Deo",
    role: "Member of Parliament",
    bio: "Advocates for stronger representation of lived experiences in public health and policy design.",
    photo: siteImages.forum.members.sulata,
  },
  {
    name: "Jothimani S.",
    role: "Member of Parliament",
    bio: "Contributes to policy action that advances autonomy, dignity, and equitable access in women's health.",
    photo: siteImages.forum.members.jothimani,
  },
  {
    name: "Kavya Kadiyam",
    role: "Member of Parliament",
    bio: "Supports dialogue and collaboration that keeps women's health visible within parliamentary conversations and priorities.",
    photo: siteImages.forum.members.kavya,
  },
  {
    name: "Kanimozhi NVN Somu",
    role: "Member of Parliament",
    bio: "Brings a strong focus on representation, dignity, and accountability in advancing women's health policy action.",
    photo: siteImages.forum.members.kanimozhi,
  },
];

const objectives = [
  {
    title: "Facilitating Dialogue and Collaboration among Parliamentarians across political parties",
    icon: Handshake,
  },
  {
    title: "Enabling Knowledge Exchange and Evidence-Based Policymaking",
    icon: BookOpenCheck,
  },
  {
    title: "Driving Policy Action and Accountability",
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
        image={siteImages.forum.hero}
        alt="Parliament forum"
        align="center"
      />

      <section className="py-12 md:py-16">
        <div className="section-container text-center">
          <p className="mx-auto max-w-5xl text-lg leading-relaxed text-foreground/75 md:text-xl">
            In 2025, Frida launched India's first-ever Parliamentarians' Forum on Women's Health, bringing together Members of Parliament across party lines to make women's health a consistent policy priority.
          </p>
          <p className="mx-auto mt-5 max-w-5xl text-lg leading-relaxed text-foreground/75 md:text-xl">
            We provide technical research support and a convening platform for Parliamentarians across diverse political parties to exchange knowledge, and collaborate in prioritising women’s health.
          </p>
          <p className="mx-auto mt-5 max-w-5xl text-lg leading-relaxed text-foreground/75 md:text-xl">
            The intent is to spotlight women’s health in India’s parliamentary discourse with greater focus and advocate for more effective policies and hold its implementation accountable.
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

          <div className="mt-8 rounded-3xl border border-primary/10 bg-primary/5 p-6 text-center md:p-8">
            <p className="text-lg font-medium leading-relaxed text-foreground/80 md:text-xl">
              The Forum currently has 10 MPs from 7 political parties spanning 6 states.
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground/70 md:text-lg">
              What stands out is the diversity- of party, geography, gender, age but united in their commitment.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <article className="flex h-full flex-col justify-between rounded-3xl border border-primary/10 bg-primary/5 p-6 md:p-10">
              <h2 className="mb-5 text-3xl font-bold text-primary">Context</h2>
              <div className="min-h-[14rem]">
                <p className="text-foreground/75">
                Women's health remains globally underprioritized, often overshadowed by broader health and economic agendas, despite its foundational role in social well-being and development index. This persistent neglect underscores the urgent need for greater political will and policy prioritisation. Parliamentary forums are a great way to build cross-party consensus and a momentum to elevate women’s health as a national policy priority.
                </p>
              </div>
              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {[siteImages.forum.hero, siteImages.forum.mapPlaceholder, siteImages.home.forumFeature].map((img, index) => (
                  <img key={`context-${index}`} src={img} alt={`Context ${index + 1}`} className="h-40 w-full rounded-2xl object-cover" loading="lazy" decoding="async" />
                ))}
              </div>
            </article>

            <article className="flex h-full flex-col justify-between rounded-3xl border border-primary/10 bg-primary/5 p-6 md:p-10">
              <h3 className="mb-3 text-2xl font-bold text-primary">Mission</h3>
              <div className="min-h-[14rem]">
                <p className="text-foreground/80">Making women’s health a policy priority, backed by political will and consensus</p>
              </div>
              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {[siteImages.home.whatWeDo.advocacy, siteImages.home.whatWeDo.community, siteImages.community.hero].map((img, index) => (
                  <img key={`mission-${index}`} src={img} alt={`Mission ${index + 1}`} className="h-40 w-full rounded-2xl object-cover" loading="lazy" decoding="async" />
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary/5">
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-primary/10 bg-white p-7 shadow-sm md:p-9">
              <h2 className="mb-5 text-3xl font-bold text-primary">Objectives</h2>
              <img
                src={siteImages.forum.objectivesGraphic}
                alt="Objectives reference"
                className="mb-6 w-full rounded-2xl border border-primary/10 object-cover"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="space-y-4">
                {objectives.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-primary/10 p-4">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-primary/10 bg-white p-7 shadow-sm md:p-9">
              <h2 className="mb-4 text-3xl font-bold text-primary">Map and Representation</h2>
              <div className="h-[320px] overflow-hidden rounded-2xl bg-primary/10">
                <img
                  src={siteImages.forum.mapPlaceholder}
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
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {members.map((member, index) => (
                <Reveal key={member.name} delay={index * 0.05}>
                  <div className="group relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-white shadow-[0_22px_80px_rgba(100,13,20,0.08)] transition-transform duration-500 hover:-translate-y-2">
                    <img src={member.photo} alt={member.name} className="h-[22rem] w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                    <div className="absolute inset-x-4 bottom-4 rounded-[1.4rem] border border-white/20 bg-primary/52 p-5 shadow-[0_18px_54px_rgba(0,0,0,0.18)] backdrop-blur-md transition-opacity duration-300 group-hover:opacity-0">
                      <p className="text-xl font-semibold text-white">{member.name}</p>
                      <p className="mt-1 text-sm uppercase tracking-[0.16em] text-white/86">{member.role}</p>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/72 via-primary/46 to-primary/16 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="translate-y-3 transition-transform duration-300 group-hover:translate-y-0">
                        <p className="text-xl font-semibold text-white">{member.name}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/86">{member.role}</p>
                        <p className="mt-4 rounded-[1.2rem] bg-black/10 p-3 text-base leading-relaxed text-white backdrop-blur-sm">{member.bio}</p>
                      </div>
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
