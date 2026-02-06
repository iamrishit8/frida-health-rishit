import { Linkedin, Target, Compass, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const LINKEDIN_URL = "https://www.linkedin.com/company/fridahealth/posts/?feedView=all";

const TeamMember = ({ name, role }: { name: string; role: string }) => (
  <div className="flex items-center justify-between p-6 border border-primary/10 rounded-lg hover:border-primary/30 hover:shadow-md transition-all bg-white group">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif font-bold text-xl">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="font-serif text-lg font-bold text-primary group-hover:text-primary/80 transition-colors">{name}</h4>
        <p className="text-sm text-foreground/60">{role}</p>
      </div>
    </div>
    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-2 text-primary/40 hover:text-primary hover:bg-primary/5 rounded-full transition-all">
      <Linkedin size={20} />
    </a>
  </div>
);

const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      
      {/* 1. Who We Are */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">Who We Are</h1>
          <p className="text-xl text-foreground/70 leading-relaxed mb-8">
            FRIDA (Fostering Research, Impact, Development & Advocacy) is a health policy think-tank based in New Delhi. 
            We are a collective of researchers, doctors, and policy advocates working to bridge the gap between scientific evidence and legislative action.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* 2. Mission & Vision - Consistent Styling */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission - Updated to White Style */}
            <Card className="bg-white text-primary border border-primary/20 min-h-[350px] flex flex-col justify-center text-center p-10 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
               <div className="absolute top-0 left-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Target size={120} />
               </div>
               <h2 className="text-3xl font-serif font-bold mb-6 relative z-10">Our Mission</h2>
               <p className="text-lg leading-relaxed text-foreground/80 relative z-10">
                 To democratize health policy by ensuring that the voices of the most vulnerable communities directly inform the decisions made in Parliament.
               </p>
            </Card>
            
            {/* Vision - White Style */}
            <Card className="bg-white text-primary border border-primary/20 min-h-[350px] flex flex-col justify-center text-center p-10 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
               <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Compass size={120} />
               </div>
               <h2 className="text-3xl font-serif font-bold mb-6 relative z-10">Our Vision</h2>
               <p className="text-lg leading-relaxed text-foreground/80 relative z-10">
                 A nation where health is a guaranteed right, not a privilege, and where every policy is built on the pillars of equity, data, and compassion.
               </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Priority Areas */}
      <section className="py-20 bg-white border-t border-primary/5">
        <div className="container mx-auto px-4 max-w-5xl">
           <h2 className="text-3xl font-serif font-bold text-primary mb-12 text-center">Priority Areas</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Maternal Health', 'Digital Rights', 'Climate Action', 'Mental Health', 'Health Financing', 'Nutrition', 'Gender Equity', 'Rural Access'].map((area) => (
                <div key={area} className="group p-6 border border-primary/10 rounded-lg text-center hover:bg-primary hover:text-white transition-all duration-300 cursor-default">
                  <span className="font-serif font-semibold text-lg">{area}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. Our Approach */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-serif font-bold text-primary mb-12 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Evidence-Based", desc: "We don't guess. We research. Every recommendation we make is backed by rigorous data analysis and field studies." },
              { title: "Community-Led", desc: "We believe the expert on a problem is the person living through it. Our solutions are co-created with communities." },
              { title: "Policy-Focused", desc: "Research shouldn't sit on a shelf. We translate findings into actionable briefs for MPs and policymakers." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-primary/10 hover:border-primary/30 transition-all group">
                <div className="flex justify-between items-start mb-4">
                   <h3 className="text-xl font-serif font-bold text-primary">{item.title}</h3>
                   <ArrowUpRight className="text-primary/20 group-hover:text-primary transition-colors" size={20} />
                </div>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Team</h2>
            <p className="text-foreground/60">The minds behind the mission.</p>
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