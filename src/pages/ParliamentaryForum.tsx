import { useEffect } from "react";
import { Handshake, BookOpenCheck, ShieldCheck, Users, Landmark, MapPinned } from "lucide-react";

const STATES = ["Maharashtra", "Telangana", "Andhra Pradesh", "Tamil Nadu", "Odisha", "Assam"];

const members = [
  "KR Suresh Reddy — Rajya Sabha MP, Telangana (BRS)",
  "Dr. Maddila Gurumoorthy — Lok Sabha MP, Andhra Pradesh (YSRCP)",
  "Vishal Patil — Lok Sabha MP, Maharashtra (Swabhimani Paksha)",
  "Dr. Fauzia Khan — Rajya Sabha MP, Maharashtra (NCP-SP)",
  "Pradyut Bordoloi — Lok Sabha MP, Assam (INC)",
  "Dr. T Sumathy — Lok Sabha MP, Tamil Nadu (DMK)",
  "Sulata Deo — Rajya Sabha MP, Odisha (BJD)",
  "Jothimani S. — Lok Sabha MP, Tamil Nadu (INC)",
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
      <section className="bg-primary/5 pb-16 pt-28 md:pt-36">
        <div className="section-container text-center">
          <h1 className="mb-6 text-4xl font-bold text-primary md:text-6xl">Parliamentarians' Forum on Women's Health</h1>
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
              <p className="text-sm uppercase tracking-[0.2em] text-white/75">MPs</p>
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
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary/5">
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
            <article className="rounded-3xl border border-primary/10 bg-white p-7 shadow-sm md:p-9">
              <h2 className="mb-4 text-3xl font-bold text-primary">Mission</h2>
              <p className="text-xl text-foreground/80">Making women's health a policy priority, backed by political will and consensus.</p>

              <h3 className="mb-5 mt-10 text-2xl font-bold text-primary">Objectives</h3>
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
              <h2 className="mb-4 text-3xl font-bold text-primary">State Representation Snapshot</h2>
              <p className="mb-6 text-foreground/75">
                Parliamentarians in the forum currently represent six states across India.
              </p>

              <div className="rounded-2xl bg-primary p-6 text-white">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/70">States represented</p>
                <div className="flex flex-wrap gap-2">
                  {STATES.map((state) => (
                    <span
                      key={state}
                      className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider"
                    >
                      {state}
                    </span>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="h-2 rounded-full bg-white/25">
                      <div className="h-2 w-full rounded-full bg-white" />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>

          <article className="mt-8 rounded-3xl border border-primary/10 bg-white p-7 shadow-sm md:p-9">
            <h2 className="mb-4 text-3xl font-bold text-primary">Who are the members?</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {members.map((member) => (
                <div key={member} className="rounded-xl border border-primary/10 bg-primary/5 px-4 py-3 text-sm text-foreground/80">
                  {member}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ParliamentaryForum;
