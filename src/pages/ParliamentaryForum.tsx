import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

const ParliamentaryForum = () => {
  useEffect(() => {
    document.title = "Parliamentary Forum | FRIDA";
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* STANDARD HERO SECTION */}
      <div className="bg-primary/5 py-20 md:py-28">
         <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">Parliamentary Forum on Health</h1>
            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
              A cross-party platform for Members of Parliament to deliberate, learn, and lead on critical health issues facing the nation.
            </p>
         </div>
      </div>

      {/* About the Forum */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-8 text-lg md:text-xl text-foreground/80 leading-relaxed">
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">About the Forum</h2>
          <p>
            The Parliamentary Forum on Health (PFH) serves as a vital bridge between scientific evidence and legislative action. In an era where health challenges are becoming increasingly complex—ranging from pandemics to climate-induced health risks—legislators require access to real-time, verified data to make informed decisions.
          </p>
          <p>
            Established in 2023, the Forum operates on a non-partisan basis, bringing together MPs from across the political spectrum. We facilitate roundtables, expert briefings, and field visits, enabling representatives to witness firsthand the challenges faced by the healthcare system and the communities they serve.
          </p>
        </div>
      </section>

      {/* Map & Stats */}
      <section className="py-12 md:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative bg-primary text-white rounded-3xl p-8 md:p-16 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8 border-l-4 border-white pl-4">Our Footprint</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                   <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all cursor-default border border-white/10">
                      <span className="block text-5xl md:text-6xl font-bold mb-2">10</span>
                      <span className="text-sm uppercase tracking-widest opacity-80">MPs Engaged</span>
                   </div>
                   <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all cursor-default border border-white/10">
                      <span className="block text-5xl md:text-6xl font-bold mb-2">7</span>
                      <span className="text-sm uppercase tracking-widest opacity-80">Political Parties</span>
                   </div>
                   <div className="sm:col-span-2 bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all cursor-default border border-white/10">
                      <span className="block text-5xl md:text-6xl font-bold mb-2">6</span>
                      <span className="text-sm uppercase tracking-widest opacity-80">States Covered</span>
                   </div>
                </div>
              </div>

              <div className="flex items-center justify-center min-h-[300px] md:min-h-[400px] relative mt-8 lg:mt-0">
                 <div className="w-full h-full border-2 border-white/20 rounded-2xl relative flex items-center justify-center bg-white/5 backdrop-blur-sm p-8">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                       <span className="text-6xl md:text-[10rem] font-serif font-bold tracking-widest">INDIA</span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center relative z-10">
                       {['Maharashtra', 'Bihar', 'Odisha', 'Rajasthan', 'Uttar Pradesh', 'Assam'].map((state, i) => (
                          <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                             <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
                             <span className="text-sm md:text-base font-medium opacity-70 group-hover:opacity-100">{state}</span>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">Forum Members</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {[1, 2, 3, 4, 5, 6].map((i) => (
             <div key={i} className="bg-white border border-primary/10 p-6 rounded-xl flex items-center gap-4 hover:shadow-lg transition-all hover:border-primary/30">
               <div className="w-16 h-16 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center text-primary font-bold">
                 MP
               </div>
               <div>
                 <h4 className="font-bold text-lg text-primary">Hon. Member Name</h4>
                 <p className="text-base text-foreground/60">Constituency {i}</p>
                 <Badge variant="secondary" className="mt-2 text-xs bg-primary/5 text-primary hover:bg-primary/10 border-primary/10">Party Name</Badge>
               </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default ParliamentaryForum;