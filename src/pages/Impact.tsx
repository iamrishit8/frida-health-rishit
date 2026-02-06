const Impact = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
           <h1 className="text-5xl font-serif font-bold mb-8">Our Impact</h1>
           
           <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                 <div className="text-6xl font-bold mb-2">15k+</div>
                 <div className="text-white/80">Community Members Reached</div>
              </div>
              <div>
                 <div className="text-6xl font-bold mb-2">12</div>
                 <div className="text-white/80">Policy Changes Influenced</div>
              </div>
              <div>
                 <div className="text-6xl font-bold mb-2">100%</div>
                 <div className="text-white/80">Commitment to Equity</div>
              </div>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-4xl">
         <h2 className="text-3xl font-serif font-bold text-primary mb-8">Stories of Change</h2>
         <div className="space-y-8">
            <div className="p-8 bg-primary/5 rounded-xl border border-primary/10">
               <p className="text-xl italic text-foreground/80 leading-relaxed">
                 "Through the forum's intervention, our district hospital finally received the funding for a dedicated maternity wing. This is not just a building; it is a promise of life for thousands of women."
               </p>
               <div className="mt-4 font-bold text-primary">— Community Leader, Bihar</div>
            </div>
            <div className="p-8 bg-primary/5 rounded-xl border border-primary/10">
               <p className="text-xl italic text-foreground/80 leading-relaxed">
                 "The research provided by FRIDA was instrumental in shaping our questions during the parliamentary session. It gave us the data we needed to hold the government accountable."
               </p>
               <div className="mt-4 font-bold text-primary">— Member of Parliament</div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Impact;