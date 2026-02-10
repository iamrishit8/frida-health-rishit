import { useState } from "react";
import { Linkedin, Target, Compass, ArrowUpRight, ChevronRight } from "lucide-react";

// Types for Priority Areas
type PriorityArea = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const priorityAreas: PriorityArea[] = [
  { id: 'maternal', title: 'Maternal Health', description: 'Improving outcomes for mothers and newborns through policy intervention and better access to prenatal care.', image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df4?auto=format&fit=crop&q=80&w=800' },
  { id: 'digital', title: 'Digital Rights', description: 'Ensuring privacy, equity, and data security in the rapidly expanding digital health ecosystem.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800' },
  { id: 'climate', title: 'Climate Action', description: 'Mitigating the severe health impacts of climate change on vulnerable populations through sustainable policy.', image: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&q=80&w=800' },
  { id: 'mental', title: 'Mental Health', description: 'Destigmatizing care and integrating mental health support into primary community response systems.', image: 'https://images.unsplash.com/photo-1527137342181-191f53eb970d?auto=format&fit=crop&q=80&w=800' },
  { id: 'nutrition', title: 'Nutrition', description: 'Combating malnutrition through evidence-backed food security policies and community education.', image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=800' },
  { id: 'gender', title: 'Gender Equity', description: 'Mainstreaming gender responsiveness in all health programs to ensure equal access for all.', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800' },
];

const LINKEDIN_URL = "https://www.linkedin.com/company/fridahealth/posts/?feedView=all";

const TeamMember = ({ name, role }: { name: string; role: string }) => (
  <div className="flex items-center justify-between p-6 border border-primary/10 rounded-lg hover:border-primary/30 hover:shadow-md transition-all bg-white group">
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif font-bold text-2xl">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="font-serif text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">{name}</h4>
        <p className="text-base text-foreground/60">{role}</p>
      </div>
    </div>
    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-2 text-primary/40 hover:text-primary hover:bg-primary/5 rounded-full transition-all">
      <Linkedin size={24} />
    </a>
  </div>
);

const About = () => {
  const [activePriority, setActivePriority] = useState<PriorityArea>(priorityAreas[0]);

  return (
    <div className="pt-20 min-h-screen bg-white">
      
      {/* 1. Who We Are - CONSISTENT HEADING */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-8">Who We Are</h1>
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed mb-8">
            FRIDA (Fostering Research, Impact, Development & Advocacy) is a health policy think-tank based in New Delhi. 
            We are a collective of researchers, doctors, and policy advocates working to bridge the gap between scientific evidence and legislative action.
          </p>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            
            {/* Mission */}
            <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-primary/10 group">
               <div className="h-64 overflow-hidden relative">
                 <img 
                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800" 
                    alt="Mission" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary p-3 rounded-full shadow-lg">
                    <Target size={28} />
                 </div>
               </div>
               <div className="p-8 md:p-10 flex flex-col justify-center flex-grow bg-white">
                   <h2 className="text-3xl font-serif font-bold mb-4 text-primary">Our Mission</h2>
                   <p className="text-lg leading-relaxed text-foreground/80">
                     To democratize health policy by ensuring that the voices of the most vulnerable communities directly inform the decisions made in Parliament.
                   </p>
               </div>
            </div>
            
            {/* Vision */}
            <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-primary/10 group">
               <div className="h-64 overflow-hidden relative">
                 <img 
                    src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800" 
                    alt="Vision" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary p-3 rounded-full shadow-lg">
                    <Compass size={28} />
                 </div>
               </div>
               <div className="p-8 md:p-10 flex flex-col justify-center flex-grow bg-white">
                   <h2 className="text-3xl font-serif font-bold mb-4 text-primary">Our Vision</h2>
                   <p className="text-lg leading-relaxed text-foreground/80">
                     A nation where health is a guaranteed right, not a privilege, and where every policy is built on the pillars of equity, data, and compassion.
                   </p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Priority Areas - NEW MASTER DETAIL LAYOUT */}
      <section className="py-24 bg-slate-50 border-t border-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Priority Areas</h2>
             <p className="text-xl text-foreground/60">Core focuses driving our research and advocacy.</p>
           </div>

           <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-start h-auto lg:h-[600px]">
              
              {/* List Column */}
              <div className="flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar h-full">
                {priorityAreas.map((area) => (
                  <button
                    key={area.id}
                    onMouseEnter={() => setActivePriority(area)}
                    className={`text-left p-6 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                      activePriority.id === area.id 
                        ? 'bg-primary text-white shadow-lg' 
                        : 'bg-white hover:bg-primary/5 text-primary'
                    }`}
                  >
                    <span className="font-serif text-xl font-bold">{area.title}</span>
                    <ChevronRight 
                      className={`transition-transform duration-300 ${
                        activePriority.id === area.id ? 'translate-x-1 opacity-100' : 'opacity-0 group-hover:opacity-50'
                      }`} 
                    />
                  </button>
                ))}
              </div>

              {/* Preview Column (Giant Blog Type Thing) */}
              <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 bg-white group">
                 {/* Image */}
                 <div className="absolute inset-0 h-3/5">
                   <img 
                     src={activePriority.image} 
                     key={activePriority.image} // Force re-render for animation
                     alt={activePriority.title}
                     className="w-full h-full object-cover animate-fade-in"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                 </div>

                 {/* Text Content */}
                 <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-white p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 animate-fade-in-up">
                      {activePriority.title}
                    </h3>
                    <p className="text-xl text-foreground/70 leading-relaxed animate-fade-in-up delay-100">
                      {activePriority.description}
                    </p>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* 4. Our Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-12 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Evidence-Based", desc: "We don't guess. We research. Every recommendation we make is backed by rigorous data analysis and field studies." },
              { title: "Community-Led", desc: "We believe the expert on a problem is the person living through it. Our solutions are co-created with communities." },
              { title: "Policy-Focused", desc: "Research shouldn't sit on a shelf. We translate findings into actionable briefs for MPs and policymakers." }
            ].map((item, i) => (
              <div key={i} className="bg-primary/5 p-8 rounded-2xl shadow-sm border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all group">
                <div className="flex justify-between items-start mb-6">
                   <h3 className="text-2xl font-serif font-bold text-primary">{item.title}</h3>
                   <ArrowUpRight className="text-primary/20 group-hover:text-primary transition-colors" size={24} />
                </div>
                <p className="text-lg text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Team</h2>
            <p className="text-xl text-foreground/60">The minds behind the mission.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <TeamMember name="Dr. Anita Sharma" role="Executive Director" />
            <TeamMember name="Rahul Verma" role="Head of Research" />
            <TeamMember name="Priya Singh" role="Advocacy Lead" />
            <TeamMember name="Amit Patel" role="Policy Analyst" />
            <TeamMember name="Sarah John" role="Community Manager" />
            <TeamMember name="Vikram Malhotra" role="Legal Advisor" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;