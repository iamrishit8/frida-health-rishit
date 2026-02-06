import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Megaphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const areas = [
  {
    title: "Research",
    description: "Generating evidence-based insights to inform policy and practice.",
    icon: BookOpen,
    link: "/research",
    color: "bg-primary/5",
  },
  {
    title: "Advocacy",
    description: "Championing policy changes that improve health equity and access.",
    icon: Megaphone,
    link: "/advocacy",
    color: "bg-primary/10",
  },
  {
    title: "Community Engagement",
    description: "Working directly with communities to implement sustainable solutions.",
    icon: Users,
    link: "/community",
    color: "bg-primary/5",
  },
];

const WhatWeDo = () => {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">What We Do</h2>
          <p className="text-lg text-foreground/70">
            Our work intersects at the critical junctions of research, policy, and community action to drive systemic change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <Link key={index} to={area.link} className="group">
              <Card className={`h-full border-none shadow-sm hover:shadow-lg transition-all duration-300 ${area.color}`}>
                <CardContent className="p-8 flex flex-col h-full items-center text-center">
                  <div className="mb-6 p-4 bg-white rounded-full text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <area.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">{area.title}</h3>
                  <p className="text-foreground/70 mb-8 flex-grow leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;