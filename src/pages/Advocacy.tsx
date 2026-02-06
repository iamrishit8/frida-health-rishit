import { Megaphone, Users, ScrollText } from "lucide-react";

const Advocacy = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Advocacy</h1>
          <p className="text-lg text-white/80">
            Translating evidence into action. We work to influence policy and empower communities to demand their health rights.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-5xl space-y-20">
        
        {/* Policy Advocacy */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
          <div className="bg-primary/5 p-8 rounded-full aspect-square flex items-center justify-center">
            <ScrollText size={80} className="text-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Policy Advocacy</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We engage directly with policymakers, legislators, and bureaucrats to draft, review, and refine health policies. By providing technical expertise and data-backed recommendations, we ensure that laws serve the most vulnerable.
            </p>
          </div>
        </div>

        {/* Community Advocacy */}
        <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Community Advocacy</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Real change happens from the ground up. We train community leaders to identify local health gaps and articulate their needs in decision-making forums, fostering a culture of accountability and civic participation.
            </p>
          </div>
          <div className="order-1 md:order-2 bg-primary/5 p-8 rounded-full aspect-square flex items-center justify-center">
             <Users size={80} className="text-primary" />
          </div>
        </div>

        {/* Campaigns */}
        <div className="bg-primary/5 p-12 rounded-lg">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">Current Campaigns</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded shadow-sm">
              <h3 className="text-xl font-bold mb-2">#HealthForAll</h3>
              <p className="text-foreground/70">A nationwide campaign demanding universal health coverage provisions in the upcoming fiscal budget.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm">
              <h3 className="text-xl font-bold mb-2">Digital Dignity</h3>
              <p className="text-foreground/70">Ensuring data privacy and equitable access in the rollout of national digital health IDs.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Advocacy;