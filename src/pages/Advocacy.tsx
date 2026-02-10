import { useEffect } from "react";

const Advocacy = () => {
  useEffect(() => {
    document.title = "Advocacy | FRIDA";
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* STANDARD HERO SECTION */}
      <div className="bg-primary/5 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">Advocacy</h1>
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
            Translating evidence into action. We work to influence policy and empower communities to demand their health rights.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl space-y-24">
        
        {/* Policy Advocacy */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-xl h-[300px] md:h-[400px]">
             <img 
               src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800" 
               alt="Policy Advocacy" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-primary/10"></div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Policy Advocacy</h2>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              We engage directly with policymakers, legislators, and bureaucrats to draft, review, and refine health policies. By providing technical expertise and data-backed recommendations, we ensure that laws serve the most vulnerable.
            </p>
          </div>
        </div>

        {/* Community Advocacy */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Community Advocacy</h2>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Real change happens from the ground up. We train community leaders to identify local health gaps and articulate their needs in decision-making forums, fostering a culture of accountability and civic participation.
            </p>
          </div>
          <div className="order-2 relative rounded-2xl overflow-hidden shadow-xl h-[300px] md:h-[400px]">
             <img 
               src="https://images.unsplash.com/photo-1596079890744-2c5af4120ebc?auto=format&fit=crop&q=80&w=800" 
               alt="Community Advocacy" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-primary/10"></div>
          </div>
        </div>

        {/* Campaigns */}
        <div className="bg-primary/5 p-8 md:p-16 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">Current Campaigns</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-primary/10 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-4 text-primary">#HealthForAll</h3>
              <p className="text-lg text-foreground/70 leading-relaxed">A nationwide campaign demanding universal health coverage provisions in the upcoming fiscal budget.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-primary/10 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-4 text-primary">Digital Dignity</h3>
              <p className="text-lg text-foreground/70 leading-relaxed">Ensuring data privacy and equitable access in the rollout of national digital health IDs.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Advocacy;