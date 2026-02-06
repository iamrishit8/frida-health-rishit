import { Camera } from "lucide-react";

const Community = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
           <h1 className="text-4xl font-serif font-bold text-primary mb-6">Community Engagement</h1>
           <p className="text-lg max-w-2xl mx-auto text-foreground/70">
             Building trust and capacity through pilot interventions and participatory research.
           </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-20">
         {/* Pilot Intervention */}
         <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 border-b border-primary/10 pb-4">Pilot Interventions</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
               <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center text-gray-400">
                  <Camera size={48} />
               </div>
               <div>
                  <h3 className="text-2xl font-bold mb-4">Maternal Health Camps</h3>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                     Our pilot program in rural Bihar focused on reducing maternal mortality by creating awareness about antenatal care. Through a series of 12 health camps, we connected over 500 women with local public health facilities.
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                     The data gathered from these camps is now informing state-level guidelines on last-mile health delivery.
                  </p>
               </div>
            </div>
         </div>

         {/* Fieldwork Photos Grid */}
         <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 border-b border-primary/10 pb-4">Voices from the Field</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-primary/5 aspect-square rounded-lg hover:bg-primary/10 transition-colors flex items-center justify-center text-primary/20">
                     <span className="text-xs">Photo {i}</span>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default Community;