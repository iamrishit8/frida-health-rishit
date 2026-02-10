import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const areas = [
  {
    title: "Research",
    description: "Generating evidence-based insights to inform policy and practice.",
    link: "/research",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Advocacy",
    description: "Championing policy changes that improve health equity and access.",
    link: "/advocacy",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Community",
    description: "Working directly with communities to implement sustainable solutions.",
    link: "/community",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Impact",
    description: "Measuring the tangible change we bring to the healthcare ecosystem.",
    link: "/impact",
    image: "https://images.unsplash.com/photo-1576091160550-2187d80aeff2?auto=format&fit=crop&q=80&w=800",
  },
];

const WhatWeDo = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Heading - Made Darker for Contrast against light bg, or White if you prefer a dark section */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">What We Do</h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Our work intersects at the critical junctions of research, policy, and community action to drive systemic change.
          </p>
        </div>

        {/* Carousel with Auto-Scroll */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {areas.map((area, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Link to={area.link} className="group relative block h-[500px] rounded-2xl overflow-hidden shadow-lg">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Stronger Gradient Overlay for Text Visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  </div>

                  {/* Content - Pure White Text */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-3xl font-serif font-bold mb-3 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {area.title}
                    </h3>
                    <p className="text-white/90 text-lg mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                      {area.description}
                    </p>
                    <div className="flex items-center font-medium text-white group-hover:text-primary-foreground transition-colors">
                      Learn More <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default WhatWeDo;