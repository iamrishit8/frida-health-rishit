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
import { FileBarChart2, Download, Loader2 } from "lucide-react";
import { toast } from "sonner";

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSexQLG65NWn22AmurLlXfArJ-JhX4J6xH8v4851yPSFmQ34EQ/formResponse";
const FIELD_ID_NAME = "entry.1156317953";
const FIELD_ID_EMAIL = "entry.870058006";
const FIELD_ID_REASON = "entry.431427207";

const researchThemes = [
  {
    title: "Health Systems Strengthening",
    summary:
      "Improving how care is financed, delivered, and governed so women and girls can access services consistently and with dignity.",
  },
  {
    title: "Gender & Health Equity",
    summary:
      "Centering gender-responsive evidence to identify disparities, design inclusive interventions, and influence policy priorities.",
  },
  {
    title: "Digital and Information Access",
    summary:
      "Examining how women and young people access, trust, and use health information across digital environments.",
  },
];

const outputs = [
  {
    title: "Women's Health in India: a Landscape Report",
    type: "Landscape Report",
    date: "2025",
    summary:
      "A comprehensive mapping of the five most urgent health challenges facing Indian women today.",
    pdfUrl: "/sample.pdf",
  },
  {
    title: "Strengthening India's Cervical Cancer Response: a Policy Brief",
    type: "Policy Brief",
    date: "2025",
    summary: "",
    pdfUrl: "/sample.pdf",
  },
  {
    title: "Strengthening India's Breast Cancer Response: a Policy Brief",
    type: "Policy Brief",
    date: "2025",
    summary: "",
    pdfUrl: "/sample.pdf",
  },
  {
    title: "Heat, Climate & Women's Bodies in South Asia:",
    type: "Thematic Analysis",
    date: "2025",
    summary:
      "An in-depth exploration of how rising temperatures and environmental stress affect women's bodies, health, and daily life across South Asia. This work brings together existing knowledge to clarify emerging risks and guide a more gender-responsive climate health conversations.",
    pdfUrl: "/sample.pdf",
  },
  {
    title: "Navigating Sexual & Reproductive Health Information Online:",
    type: "Digital Study",
    date: "2025",
    summary:
      "A study of how young people encounter, interpret, and access sexual and reproductive health information in digital spaces. This work helps map the landscape of online SRHR knowledge, highlighting barriers, misinformation risks, and opportunities to strengthen their understanding.",
    pdfUrl: "/sample.pdf",
  },
];

const Research = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<{ title: string; url: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", reason: "" });
  const [activeTheme, setActiveTheme] = useState(0);

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

      <section className="bg-primary/5 pb-16 pt-28 md:pt-36">
        <div className="section-container">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-primary md:text-6xl">Research</h1>
            <p className="text-lg leading-relaxed text-foreground/75 md:text-xl">
              At FRIDA, our research focuses on the real health challenges women and girls are navigating today. We study gaps in knowledge, access, and care to produce evidence that is practical, understandable, and useful in everyday life. Our goal is simple: research that leads to better decisions and better health.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="text-4xl font-bold text-primary">Research Themes</h2>
            <p className="max-w-xl text-right text-sm uppercase tracking-[0.2em] text-primary/65">Focus areas</p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-primary/10 bg-primary/5 shadow-lg shadow-primary/10">
            <div className="flex flex-col lg:flex-row">
              <div className="border-b border-primary/10 p-4 lg:w-[42%] lg:border-b-0 lg:border-r lg:p-5">
                <div className="space-y-2">
                  {researchThemes.map((theme, index) => {
                    const isActive = index === activeTheme;

                    return (
                      <button
                        key={theme.title}
                        onClick={() => setActiveTheme(index)}
                        className={`w-full rounded-2xl px-4 py-4 text-left transition-all ${
                          isActive ? "bg-primary text-white shadow" : "bg-white text-primary hover:bg-primary/10"
                        }`}
                      >
                        <span className="block text-base font-semibold md:text-lg">{theme.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex min-h-[260px] flex-1 items-center p-7 md:p-10">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.24em] text-primary/70">Theme Spotlight</p>
                  <h3 className="mb-4 text-3xl font-bold text-primary md:text-4xl">{researchThemes[activeTheme].title}</h3>
                  <p className="max-w-xl text-lg leading-relaxed text-foreground/75">{researchThemes[activeTheme].summary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary/5">
        <div className="section-container">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="text-4xl font-bold text-primary">Outputs</h2>
            <p className="max-w-xl text-right text-sm uppercase tracking-[0.2em] text-primary/65">Evidence to action</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {outputs.map((output, index) => (
              <article
                key={output.title}
                className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md md:p-8"
              >
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
                  className="rounded-full bg-primary px-6 text-white hover:bg-primary/90"
                >
                  Download Output <Download className="ml-2 h-4 w-4" />
                </Button>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-primary/10 bg-white p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <FileBarChart2 className="h-5 w-5" />
              </div>
              <p className="text-foreground/75">
                Each output is designed for practical use by policymakers, implementers, researchers, and community leaders working to improve health outcomes for women and girls.
              </p>
            </div>
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
