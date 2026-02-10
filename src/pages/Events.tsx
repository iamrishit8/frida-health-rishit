import { useEffect } from "react";
import { Calendar, MapPin, ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Events = () => {
  useEffect(() => {
    document.title = "Events | FRIDA";
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      title: "National Women's Health Summit 2025",
      date: "March 15-17, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "India Habitat Centre, New Delhi",
      category: "Conference",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800",
      description: "Join policymakers, researchers, and advocates for our annual flagship conference on advancing women's health equity."
    },
    {
      id: 2,
      title: "Policy Roundtable: Digital Health Access",
      date: "April 05, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual (Zoom)",
      category: "Webinar",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800",
      description: "A focused discussion on the challenges and opportunities of the digital health mission in rural India."
    }
  ];

  const pastEvents = [
    {
      id: 101,
      title: "Rural Healthcare Awareness Drive",
      date: "Dec 2024",
      location: "Bihar",
      image: "https://images.unsplash.com/photo-1596079890744-2c5af4120ebc?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 102,
      title: "Mental Health Workshop",
      date: "Nov 2024",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1527137342181-191f53eb970d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 103,
      title: "Climate Change & Health Forum",
      date: "Oct 2024",
      location: "Odisha",
      image: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1.5 text-sm uppercase tracking-wider">
            Connect & Learn
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">Events</h1>
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
            Forums, workshops, and conferences that bring the health policy community together.
          </p>
        </div>
      </div>

      {/* Upcoming Events */}
      <section className="py-20 container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 border-l-4 border-primary pl-4">Upcoming Events</h2>
        
        <div className="space-y-8">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="flex flex-col md:flex-row bg-white border border-primary/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
               {/* Image */}
               <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                 <img 
                   src={event.image} 
                   alt={event.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
               </div>
               
               {/* Content */}
               <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-4 text-sm font-medium text-primary/70 mb-4 uppercase tracking-wide">
                     <span className="flex items-center gap-1.5"><Calendar size={16} /> {event.date}</span>
                     <span className="flex items-center gap-1.5"><Clock size={16} /> {event.time}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4 group-hover:text-primary/80 transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                     <span className="flex items-center gap-2 text-foreground/60">
                        <MapPin size={18} /> {event.location}
                     </span>
                     <Button className="rounded-full px-8">Register <ArrowRight size={16} className="ml-2" /></Button>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events Archive */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="flex items-center justify-between mb-12">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary border-l-4 border-primary pl-4">Past Events</h2>
             <Button variant="ghost">View Archive <ArrowRight size={16} className="ml-2" /></Button>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <div key={event.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-primary/5">
                   <div className="h-48 overflow-hidden relative">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                      <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-xs font-bold uppercase text-primary">
                        {event.date}
                      </div>
                   </div>
                   <div className="p-6">
                      <h4 className="text-xl font-serif font-bold text-primary mb-2 line-clamp-2">{event.title}</h4>
                      <p className="text-sm text-foreground/60 flex items-center gap-1">
                        <MapPin size={14} /> {event.location}
                      </p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Events;