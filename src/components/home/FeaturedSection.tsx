import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredNews = [
  {
    type: "Event",
    title: "National Women's Health Summit 2025",
    description: "Join policymakers, researchers, and advocates for our annual flagship conference on advancing women's health equity.",
    date: "March 15-17, 2025",
    location: "New Delhi",
    href: "/events/health-summit-2025",
  },
  {
    type: "Publication",
    title: "State of Women's Health Report",
    description: "Our comprehensive annual report examining health outcomes, policy progress, and recommendations for the year ahead.",
    date: "January 2025",
    href: "/research#publications",
  },
  {
    type: "Campaign",
    title: "Her Health, Her Right",
    description: "A nationwide advocacy campaign demanding universal access to reproductive healthcare services.",
    href: "/advocacy#campaigns",
  },
];

export function FeaturedSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding gradient-cream">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wider uppercase text-terracotta bg-terracotta/10 rounded-full">
              Featured
            </span>
            <h2>Latest Updates</h2>
          </div>
          <Link to="/media">
            <Button variant="ghost" className="group text-muted-foreground hover:text-foreground">
              View All News
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredNews.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                to={item.href}
                className="group flex flex-col h-full p-6 bg-card rounded-2xl border border-border card-hover"
              >
                <span className="inline-block self-start px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-muted text-muted-foreground rounded-full">
                  {item.type}
                </span>

                <h4 className="font-serif text-xl mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {item.title}
                </h4>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                  {item.description}
                </p>

                {(item.date || item.location) && (
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mt-auto pt-4 border-t border-border">
                    {item.date && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    )}
                    {item.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    )}
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
