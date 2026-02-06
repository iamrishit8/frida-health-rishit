import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Events = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif font-bold text-primary mb-12">Events & Dialogues</h1>
        <div className="grid gap-8">
           {[1, 2, 3].map((i) => (
             <Card key={i} className="flex flex-col md:flex-row overflow-hidden border-primary/10 hover:shadow-lg transition-shadow">
                <div className="md:w-1/3 bg-gray-200 min-h-[200px] md:min-h-0">
                  {/* Placeholder for Event Image */}
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                     <Calendar size={48} className="text-primary/30" />
                  </div>
                </div>
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                   <div className="text-primary/60 text-sm font-bold uppercase tracking-wider mb-2">March 15, 2026 • New Delhi</div>
                   <h2 className="text-2xl font-serif font-bold text-primary mb-4">National Health Policy Conclave</h2>
                   <p className="text-foreground/70 mb-4">
                     A gathering of key stakeholders, researchers, and policymakers to discuss the roadmap for the next decade of public health infrastructure in India.
                   </p>
                   <button className="self-start text-primary font-bold hover:underline">View Details</button>
                </div>
             </Card>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Events;