import Hero from "@/components/home/Hero";
import ImpactNumbers from "@/components/home/ImpactNumbers";
import WhatWeDo from "@/components/home/WhatWeDo";
import AreasOfWork from "@/components/home/AreasOfWork";
import Partners from "@/components/home/Partners";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ImpactNumbers />
      <WhatWeDo />
      <AreasOfWork />
      
      {/* Partners Section - Moved Here */}
      <Partners />
      
      {/* Parliamentary Forum Teaser */}
      <section className="section-padding bg-primary/5">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Parliamentary Forum</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                A non-partisan platform bringing together Members of Parliament from across the political spectrum to champion health equity and policy reform.
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary" /> 10 MPs from 7 Parties</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary" /> Representation from 6 States</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary" /> Focus on Data-Driven Policy</li>
              </ul>
              <Link to="/parliamentary-forum">
                <Button className="mt-4 bg-primary text-white hover:bg-primary/90">
                  Explore the Forum <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="flex-1 w-full relative h-[400px] bg-white rounded-lg shadow-xl border border-primary/10 p-8 flex items-center justify-center overflow-hidden">
               {/* Abstract Map Visual for Teaser */}
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
               <div className="text-center">
                  <span className="text-9xl font-serif text-primary/20 font-bold block">INDIA</span>
                  <span className="text-sm uppercase tracking-[0.3em] text-primary/60">Policy Map</span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;