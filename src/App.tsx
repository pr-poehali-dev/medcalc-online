
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RheumatoidArthritis from "./pages/RheumatoidArthritis";
import Lupus from "./pages/Lupus";
import Scleroderma from "./pages/Scleroderma";
import AnkylosingSpondylitis from "./pages/AnkylosingSpondylitis";
import About from "./pages/About";
import Calculators from "./pages/Calculators";

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
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/rheumatoid-arthritis" element={<RheumatoidArthritis />} />
          <Route path="/lupus" element={<Lupus />} />
          <Route path="/scleroderma" element={<Scleroderma />} />
          <Route path="/ankylosing-spondylitis" element={<AnkylosingSpondylitis />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
