import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop

import Index from "./pages/Index";
import About from "./pages/About";
import Research from "./pages/Research";
import Advocacy from "./pages/Advocacy";
import ParliamentaryForum from "./pages/ParliamentaryForum";
import Community from "./pages/Community";
import Impact from "./pages/Impact";
import Media from "./pages/Media";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* Forces scroll to top on route change */}
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/advocacy" element={<Advocacy />} />
            <Route path="/parliamentary-forum" element={<ParliamentaryForum />} />
            <Route path="/community" element={<Community />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/featured" element={<Media />} />
            <Route path="/media" element={<Media />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:eventId" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;