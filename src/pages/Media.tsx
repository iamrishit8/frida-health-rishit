import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Featured = () => {
  const items = [
    { title: "Op-Ed: The Hindu", desc: "Why rural health needs a digital overhaul.", link: "#" },
    { title: "Interview: Sansad TV", desc: "Discussing the new health budget with our Director.", link: "#" },
    { title: "Podcast: Policy Matters", desc: "Episode 4: Women's Leadership in Health.", link: "#" },
    { title: "Feature: The Wire", desc: "Tracking the impact of our pilot programs.", link: "#" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif font-bold text-primary mb-12">Featured in Media</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {items.map((item, i) => (
             <a key={i} href={item.link} className="block group">
               <div className="border border-primary/10 rounded-lg p-8 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm h-full flex flex-col justify-between">
                 <div>
                    <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                    <p className="opacity-80 mb-6">{item.desc}</p>
                 </div>
                 <div className="flex items-center gap-2 font-medium opacity-60 group-hover:opacity-100">
                    Read More <ExternalLink size={16} />
                 </div>
               </div>
             </a>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;