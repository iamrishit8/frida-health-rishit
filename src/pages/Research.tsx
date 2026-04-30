import { useEffect, useState } from "react";
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
import { Download, Loader2 } from "lucide-react";
import { toast } from "sonner";
import PageHero from "@/components/ui/PageHero";
import { siteImages } from "@/lib/site-images";

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSexQLG65NWn22AmurLlXfArJ-JhX4J6xH8v4851yPSFmQ34EQ/formResponse";
const FIELD_ID_NAME = "entry.1156317953";
const FIELD_ID_EMAIL = "entry.870058006";
const FIELD_ID_REASON = "entry.431427207";

const outputs = [
  {
    title: "Women's Health in India: a Landscape Report",
    type: "Landscape Report",
    date: "2025",
    summary:
      "A comprehensive mapping of the five most urgent health challenges facing Indian women today.",
    image: siteImages.research.outputs.landscape,
    pdfUrl: "/sample.pdf",
  },
  {
    title: "Strengthening India's Cervical Cancer Response: a Policy Brief",
    type: "Policy Brief",
    date: "2025",
    summary: "An evidence-based assessment of India's cervical cancer burden and system needs.",
    image: siteImages.research.outputs.cervical,
    pdfUrl: "/sample.pdf",
  },
  {
    title: "Strengthening India's Breast Cancer Response: a Policy Brief",
    type: "Policy Brief",
    date: "2025",
    summary: "An evidence-based assessment of India's breast cancer burden and system needs.",
    image: siteImages.research.outputs.breast,
    pdfUrl: "/sample.pdf",
  },
  {
    title: "Cervical Cancer FAQ Booklet",
    type: "Booklet",
    date: "2025",
    summary:
      "This booklet provides clear, evidence-based information on cervical cancer, including prevention, early detection, treatment options, and vaccination.",
    image: siteImages.research.outputs.climate,
    pdfUrl: "/sample.pdf",
  },
];

const Research = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<{ title: string; url: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", reason: "" });

  useEffect(() => {
    document.title = "Research | FRIDA";
  }, []);

  const handleDownloadClick = (title: string, url: string) => {
    setSelectedDoc({ title, url });
    setFormData({ name: "", email: "", reason: "" });
    setIsOpen(true);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      toast.success("Details submitted! Downloading now...");

      if (selectedDoc) {
        const link = document.createElement("a");
        link.href = selectedDoc.url;
        link.download = `${selectedDoc.title}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }} />

      <PageHero
        title="Research"
        image={siteImages.research.hero}
        alt="Research"
        align="center"
      />

      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-lg leading-relaxed text-foreground/75 md:text-xl">
              At FRIDA, our research focuses on the real health challenges women and girls are navigating today. We study gaps in knowledge, access, and care to produce evidence that is practical, understandable, and useful in everyday life. Our goal is simple: research that leads to better decisions and better health.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary/5">
        <div className="section-container">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="text-4xl font-bold text-primary">Outputs</h2>
            <p className="max-w-xl text-right text-sm uppercase tracking-[0.2em] text-primary/65">Evidence to action</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {outputs.map((output, index) => (
              <article
                key={output.title}
                className="group overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-[0_18px_52px_rgba(100,13,20,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_64px_rgba(100,13,20,0.08)]"
              >
                <div className="relative overflow-hidden bg-primary/5 p-4 pt-6">
                  <div className="absolute left-1/2 top-4 h-12 w-[74%] -translate-x-1/2 rounded-full bg-primary/12" />
                  <img src={output.image} alt={output.title} className="h-[24rem] w-full rounded-[1.5rem] object-contain bg-white p-2 transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" decoding="async" />
                </div>
                <div className="flex min-h-[18rem] flex-col p-6 md:p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <Badge variant="outline" className="border-primary/20 text-primary/70">
                      {output.type}
                    </Badge>
                    <span className="text-xs uppercase tracking-widest text-foreground/50">{output.date}</span>
                  </div>

                  <h3 className="mb-3 text-2xl font-bold leading-tight text-primary">{output.title}</h3>
                  {output.summary ? <p className="mb-6 text-foreground/75">{output.summary}</p> : null}

                  <Button
                    onClick={() => handleDownloadClick(output.title, output.pdfUrl)}
                    className="mt-auto rounded-full bg-primary px-6 text-white hover:bg-primary/90"
                  >
                    Download Output <Download className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary">Download Research</DialogTitle>
            <DialogDescription>
              Please provide your details to download <strong>{selectedDoc?.title}</strong>.
            </DialogDescription>
          </DialogHeader>

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
                name={FIELD_ID_NAME}
                required
                placeholder="Dr. Anjali Gupta"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name={FIELD_ID_EMAIL}
                type="email"
                required
                placeholder="anjali@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="reason">Reason for Download</Label>
              <Textarea
                id="reason"
                name={FIELD_ID_REASON}
                placeholder="Academic research, policy reference, etc."
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
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
