import { useEffect } from "react";
import { BarChart, Heart, Users, CheckCircle } from "lucide-react";

const Impact = () => {
  useEffect(() => {
    document.title = "Impact | FRIDA";
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* STANDARD HERO SECTION */}
      <div className="bg-primary/5 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">Our Impact</h1>
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
            Measuring the tangible change we bring to the healthcare ecosystem through policy wins and community betterment.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10 text-center hover:shadow-lg transition-all">
               <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <Users size={32} />
               </div>
               <h3 className="text-4xl font-bold text-primary mb-2">50,000+</h3>
               <p className="text-lg text-foreground/70">Lives Impacted</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10 text-center hover:shadow-lg transition-all">
               <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <BarChart size={32} />
               </div>
               <h3 className="text-4xl font-bold text-primary mb-2">12</h3>
               <p className="text-lg text-foreground/70">Policy Bills Drafted</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10 text-center hover:shadow-lg transition-all">
               <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <Heart size={32} />
               </div>
               <h3 className="text-4xl font-bold text-primary mb-2">25+</h3>
               <p className="text-lg text-foreground/70">Districts Covered</p>
            </div>
        </div>

        {/* Stories Section */}
        <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-12">Success Stories</h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-50 rounded-2xl p-8 md:p-12">
               <div className="md:w-1/2">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">Transforming Maternal Care in Bihar</h3>
                  <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                     Through our advocacy efforts with local district magistrates, we successfully implemented a new tracking system for prenatal visits that has reduced dropout rates by 40% in pilot districts.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                     <CheckCircle size={20} /> Policy Adopted: August 2024
                  </div>
               </div>
               <div className="md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1555252333-9f8e92e65df4?auto=format&fit=crop&q=80&w=800" alt="Maternal Health" className="w-full h-full object-cover" />
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;