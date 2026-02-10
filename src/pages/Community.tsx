import { useEffect } from "react";
import { Users, HandHeart } from "lucide-react";

const Community = () => {
  useEffect(() => {
    document.title = "Community | FRIDA";
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* STANDARD HERO SECTION */}
      <div className="bg-primary/5 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">Community Engagement</h1>
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
            Building sustainable health solutions by putting the community at the center of the conversation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
         <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
               <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Users size={32} />
               </div>
               <h2 className="text-3xl font-serif font-bold text-primary">Grassroots Leadership</h2>
               <p className="text-lg text-foreground/70 leading-relaxed">
                  We identify and train local community leaders, known as 'Swasthya Sahelis', who act as the first point of contact for health information and advocacy within their villages.
               </p>
            </div>
            <div className="space-y-6">
               <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <HandHeart size={32} />
               </div>
               <h2 className="text-3xl font-serif font-bold text-primary">Participatory Action</h2>
               <p className="text-lg text-foreground/70 leading-relaxed">
                  Our programs are not just delivered to the community; they are designed by them. We hold monthly 'Jan Sunwais' (Public Hearings) to understand evolving health challenges.
               </p>
            </div>
         </div>
         
         <div className="mt-20 rounded-3xl overflow-hidden h-[400px] relative shadow-xl">
             <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1600" alt="Community gathering" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">Empowering 50+ Villages Across India</h3>
             </div>
         </div>
      </div>
    </div>
  );
};

export default Community;