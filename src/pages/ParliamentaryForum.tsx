import { useEffect } from "react";
import { Handshake, BookOpenCheck, ShieldCheck, Users, Landmark, MapPinned } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { siteImages } from "@/lib/site-images";

const members = [
  {
    name: "KR Suresh Reddy",
    role: "Former Member of Parliament",
    photo: siteImages.forum.members.suresh,
  },
  {
    name: "Dr. Maddila Gurumoorthy",
    role: "Member of Parliament",
    photo: siteImages.forum.members.gurumoorthy,
  },
  {
    name: "Vishal Patil",
    role: "Member of Parliament",
    photo: siteImages.forum.members.vishal,
  },
  {
    name: "Dr. Fauzia Khan",
    role: "Former Member of Parliament",
    photo: siteImages.forum.members.fauzia,
  },
  {
    name: "Pradyut Bordoloi",
    role: "Former Member of Parliament",
    photo: siteImages.forum.members.pradyut,
  },
  {
    name: "Dr. Thamizhachi Thangapandian",
    role: "Member of Parliament",
    photo: siteImages.forum.members.sumathy,
  },
  {
    name: "Sulata Deo",
    role: "Member of Parliament",
    photo: siteImages.forum.members.sulata,
  },
  {
    name: "Jothimani S.",
    role: "Member of Parliament",
    photo: siteImages.forum.members.jothimani,
  },
  {
    name: "Dr. Kadiyam Kavya",
    role: "Member of Parliament",
    photo: siteImages.forum.members.kavya,
  },
  {
    name: "Dr. Kanimozhi NVN Somu",
    role: "Member of Parliament",
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

const forumGallery = [...siteImages.forum.contextGallery, ...siteImages.forum.missionGallery];

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
            <article className="rounded-3xl border border-primary/10 bg-primary/5 p-6 md:p-10">
              <h2 className="mb-5 text-3xl font-bold text-primary">Context</h2>
              <div className="min-h-[16rem]">
                <p className="text-foreground/75">
                Women's health remains globally underprioritized, often overshadowed by broader health and economic agendas, despite its foundational role in social well-being and development index. This persistent neglect underscores the urgent need for greater political will and policy prioritisation. Parliamentary forums are a great way to build cross-party consensus and a momentum to elevate women’s health as a national policy priority.
                </p>
              </div>
            </article>

            <article className="rounded-3xl border border-primary/10 bg-primary/5 p-6 md:p-10">
              <h3 className="mb-3 text-2xl font-bold text-primary">Mission</h3>
              <div className="min-h-[16rem]">
                <p className="text-foreground/80">Making women’s health a policy priority, backed by political will and consensus</p>
              </div>
            </article>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {forumGallery.map((img, index) => (
              <img
                key={`${img}-${index}`}
                src={img}
                alt={`Parliamentary Forum gallery ${index + 1}`}
                className="h-48 w-full rounded-[1.5rem] object-cover shadow-[0_16px_48px_rgba(100,13,20,0.08)]"
                loading="lazy"
                decoding="async"
              />
            ))}
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
                  src={siteImages.forum.mapImage}
                  alt="Map and representation"
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
                    <div className="absolute inset-0 bg-primary/12 mix-blend-multiply" />
                    <div className="absolute inset-x-4 bottom-4 rounded-[1.4rem] border border-white/20 bg-primary/50 p-5 shadow-[0_18px_54px_rgba(0,0,0,0.18)] backdrop-blur-md">
                      <p className="text-xl font-semibold text-white">{member.name}</p>
                      <p className="mt-1 text-sm uppercase tracking-[0.16em] text-white/86">{member.role}</p>
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
