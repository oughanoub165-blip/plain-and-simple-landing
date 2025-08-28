import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Sectors from "./pages/Sectors";
import MyRegion from "./pages/MyRegion";
import ShareOpinion from "./pages/ShareOpinion";
import Partners from "./pages/Partners";
import ReportProblem from "./pages/ReportProblem";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/my-region" element={<MyRegion />} />
          <Route path="/share-opinion" element={<ShareOpinion />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/report-problem" element={<ReportProblem />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
