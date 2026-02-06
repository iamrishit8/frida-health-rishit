import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FileText, Book, FileBarChart, Download, Loader2 } from "lucide-react";
import { toast } from "sonner";

// --- CONFIGURATION ---
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSexQLG65NWn22AmurLlXfArJ-JhX4J6xH8v4851yPSFmQ34EQ/formResponse";
const FIELD_ID_NAME = "entry.1156317953";
const FIELD_ID_EMAIL = "entry.870058006";
const FIELD_ID_REASON = "entry.431427207";
// ---------------------

const publications = [
  // Make sure 'sample.pdf' exists in your 'public' folder
  { title: "Digital Health Access in Rural India", type: "Policy Brief", date: "2024", icon: FileText, pdfUrl: "/sample.pdf" },
  { title: "Maternal Health Outcomes Report", type: "Report", date: "2023", icon: FileBarChart, pdfUrl: "/sample.pdf" },
  { title: "Community Health Worker Curriculum", type: "Booklet", date: "2023", icon: Book, pdfUrl: "/sample.pdf" },
  { title: "The Future of Public Health Financing", type: "Commentary", date: "2024", icon: FileText, pdfUrl: "/sample.pdf" },
];

const Research = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<{ title: string; url: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // We need these states to control the inputs, even though the form submits natively
  const [formData, setFormData] = useState({ name: "", email: "", reason: "" });

  const handleDownloadClick = (title: string, url: string) => {
    setSelectedDoc({ title, url });
    setFormData({ name: "", email: "", reason: "" }); // Reset form
    setIsOpen(true);
  };

  // This function runs WHEN the user clicks Submit
  const handleSubmit = () => {
    setIsSubmitting(true);

    // We let the form submit naturally to the iframe.
    // Then we wait 1.5 seconds to assume it went through, close the modal, and download.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      toast.success("Details submitted! Downloading now...");

      // Trigger the download
      if (selectedDoc) {
        const link = document.createElement("a");
        link.href = selectedDoc.url;
        link.download = selectedDoc.title + ".pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }, 1500);
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hidden Iframe that catches the form submission so the page doesn't reload */}
      <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }}></iframe>

      {/* Header */}
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Research</h1>
          <p className="text-lg text-foreground/70">
            Our research aims to deconstruct complex health challenges through rigorous data analysis and field studies, providing a solid evidence base for policy intervention.
          </p>
        </div>
      </div>

      {/* Themes */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-serif font-bold text-primary mb-8">Research Themes</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {['Health Systems Strengthening', 'Gender & Health', 'Social Determinants'].map((theme) => (
            <div key={theme} className="h-40 bg-primary/5 border border-primary/10 flex items-center justify-center p-6 rounded-lg text-xl font-serif font-medium text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer shadow-sm">
              {theme}
            </div>
          ))}
        </div>

        {/* Publications Grid */}
        <h2 className="text-3xl font-serif font-bold text-primary mb-8">Publications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {publications.map((pub, i) => (
            <Card key={i} className="group hover:shadow-lg transition-all duration-300 border-primary/10 flex flex-col justify-between">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-xs border-primary/20 text-primary/70">{pub.type}</Badge>
                  <pub.icon className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="text-lg font-serif leading-tight group-hover:text-primary transition-colors">
                  {pub.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">Published: {pub.date}</p>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between hover:bg-primary/5 hover:text-primary"
                  onClick={() => handleDownloadClick(pub.title, pub.pdfUrl)}
                >
                  Download PDF <Download size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Download Popup Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Download Research</DialogTitle>
            <DialogDescription>
              Please provide your details to download <strong>{selectedDoc?.title}</strong>.
            </DialogDescription>
          </DialogHeader>
          
          {/* THE REAL HTML FORM */}
          {/* This form submits DIRECTLY to Google. No JavaScript fetch involved. */}
          <form 
            action={GOOGLE_FORM_ACTION_URL} 
            method="POST" 
            target="hidden_iframe" 
            onSubmit={handleSubmit}
            className="grid gap-4 py-4"
          >
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name"
                name={FIELD_ID_NAME} // IMPORTANT: This maps the input to the Google Sheet column
                required 
                placeholder="Dr. Anjali Gupta" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name={FIELD_ID_EMAIL} // IMPORTANT
                type="email" 
                required 
                placeholder="anjali@example.com" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="reason">Reason for Download</Label>
              <Textarea 
                id="reason" 
                name={FIELD_ID_REASON} // IMPORTANT
                placeholder="Academic research, policy reference, etc." 
                value={formData.reason}
                onChange={(e) => setFormData({...formData, reason: e.target.value})}
              />
            </div>
            
            <div className="mt-4 flex justify-end">
              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Research;