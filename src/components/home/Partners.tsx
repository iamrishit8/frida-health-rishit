const LINKEDIN_URL = "https://www.linkedin.com/company/fridahealth/posts/?feedView=all";

const Partners = () => {
  const partners = ["WHO", "UNICEF", "NITI Aayog", "ICMR", "BMGF", "PATH", "JHU", "Harvard PH"];

  return (
    <section className="py-12 border-t border-primary/10 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-sm font-semibold tracking-widest text-primary/40 uppercase">
          Trusted Partners & Collaborators
        </p>
      </div>
      
      {/* Marquee Container */}
      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="relative flex overflow-x-hidden group block">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-20 px-10">
          {partners.map((partner, index) => (
            <div key={`p1-${index}`} className="text-3xl font-serif font-bold text-primary/30 hover:text-primary/80 transition-colors cursor-pointer">
              {partner}
            </div>
          ))}
          {partners.map((partner, index) => (
            <div key={`p2-${index}`} className="text-3xl font-serif font-bold text-primary/30 hover:text-primary/80 transition-colors cursor-pointer">
              {partner}
            </div>
          ))}
          {partners.map((partner, index) => (
            <div key={`p3-${index}`} className="text-3xl font-serif font-bold text-primary/30 hover:text-primary/80 transition-colors cursor-pointer">
              {partner}
            </div>
          ))}
        </div>
        
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </a>
    </section>
  );
};

export default Partners;