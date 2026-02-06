import { Badge } from "@/components/ui/badge";

const ParliamentaryForum = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-primary/5 py-16">
         <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Parliamentary Forum on Health</h1>
            <p className="text-lg text-foreground/70">
              A cross-party platform for Members of Parliament to deliberate, learn, and lead on critical health issues.
            </p>
         </div>
      </div>

      {/* Map & Big Numbers - "Cool" Implementation */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative bg-primary text-white rounded-3xl p-8 md:p-16 overflow-hidden shadow-2xl">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Text & Stats */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8 border-l-4 border-white pl-4">Our Footprint</h2>
                <div className="grid grid-cols-2 gap-8">
                   <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-white/20 transition-all cursor-default">
                      <span className="block text-5xl font-bold mb-2">10</span>
                      <span className="text-xs uppercase tracking-widest opacity-80">MPs Engaged</span>
                   </div>
                   <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-white/20 transition-all cursor-default">
                      <span className="block text-5xl font-bold mb-2">7</span>
                      <span className="text-xs uppercase tracking-widest opacity-80">Political Parties</span>
                   </div>
                   <div className="col-span-2 bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-white/20 transition-all cursor-default">
                      <span className="block text-5xl font-bold mb-2">6</span>
                      <span className="text-xs uppercase tracking-widest opacity-80">States Covered</span>
                   </div>
                </div>
              </div>

              {/* Visual Map Representation */}
              <div className="flex items-center justify-center min-h-[400px] relative">
                 {/* This is a styled CSS placeholder for the map request */}
                 <div className="w-full h-full border-2 border-white/20 rounded-xl relative flex items-center justify-center bg-white/5 backdrop-blur-sm p-8">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                       <span className="text-[10rem] font-serif font-bold tracking-widest">INDIA</span>
                    </div>
                    
                    {/* Interactive dots representing 6 states */}
                    <div className="grid grid-cols-3 gap-8 text-center relative z-10">
                       {['Maharashtra', 'Bihar', 'Odisha', 'Rajasthan', 'Uttar Pradesh', 'Assam'].map((state, i) => (
                          <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                             <div className="w-4 h-4 rounded-full bg-white group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
                             <span className="text-sm font-medium opacity-70 group-hover:opacity-100">{state}</span>
                          </div>
                       ))}
                    </div>
                    <div className="absolute bottom-4 right-4 text-xs opacity-50 italic">
                       *Representative Map
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-primary mb-12 text-center">Forum Members</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {[1, 2, 3, 4, 5, 6].map((i) => (
             <div key={i} className="bg-white border border-primary/10 p-6 rounded-lg flex items-center gap-4 hover:shadow-md transition-shadow">
               <div className="w-16 h-16 bg-primary/10 rounded-full flex-shrink-0"></div>
               <div>
                 <h4 className="font-bold text-primary">Hon. Member Name</h4>
                 <p className="text-sm text-foreground/60">MP, Constituency {i}</p>
                 <Badge variant="secondary" className="mt-1 text-xs bg-primary/5 text-primary hover:bg-primary/10">Party Name</Badge>
               </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default ParliamentaryForum;