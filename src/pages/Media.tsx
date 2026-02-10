import { useEffect } from "react";
import { ArrowRight, Newspaper, Video, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const Media = () => {
  useEffect(() => {
    document.title = "Featured | FRIDA";
  }, []);

  const newsItems = [
    { type: "Press Release", date: "Jan 28, 2025", title: "FRIDA releases annual State of Health report", source: "The Hindu", icon: Newspaper },
    { type: "Interview", date: "Jan 15, 2025", title: "Dr. Anita Sharma on the future of Digital Health IDs", source: "NDTV", icon: Video },
    { type: "Podcast", date: "Dec 10, 2024", title: "Understanding Rural Health Dynamics", source: "Spotify", icon: Mic },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* STANDARD HERO SECTION */}
      <div className="bg-primary/5 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">Featured & Media</h1>
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
            Our work in the news, press releases, and publications.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
         <div className="grid gap-6">
            {newsItems.map((item, index) => (
               <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 bg-white border border-primary/10 rounded-xl hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                     <item.icon size={24} />
                  </div>
                  <div className="flex-grow">
                     <div className="flex gap-3 text-sm text-foreground/60 mb-2">
                        <span className="font-semibold text-primary">{item.source}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                     </div>
                     <h3 className="text-xl md:text-2xl font-serif font-bold text-primary group-hover:text-primary/80 transition-colors">
                        {item.title}
                     </h3>
                  </div>
                  <Link to="#" className="text-primary font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                     Read <ArrowRight size={16} />
                  </Link>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Media;