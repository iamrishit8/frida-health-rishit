import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop

const queryClient = new QueryClient();
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Research = lazy(() => import("./pages/Research"));
const Advocacy = lazy(() => import("./pages/Advocacy"));
const ParliamentaryForum = lazy(() => import("./pages/ParliamentaryForum"));
const Community = lazy(() => import("./pages/Community"));
const Impact = lazy(() => import("./pages/Impact"));
const Media = lazy(() => import("./pages/Media"));
const Events = lazy(() => import("./pages/Events"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const RouteFallback = () => (
  <div className="section-container flex min-h-[45vh] items-center justify-center">
    <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* Forces scroll to top on route change */}
        <Layout>
          <Suspense fallback={<RouteFallback />}>
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
          </Suspense>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
