import React, { FC } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import WhyGigin from "./pages/WhyGigin";
import HiringSolutions from "./pages/HiringSolutions";
import Blog from "./pages/Blog";
import BlogCategory from "./pages/BlogCategory";
import BlogPostDetail from "./pages/BlogPostDetail";
import Verification from "./pages/Verification";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import NotFound from "./pages/NotFound";

// Verification check pages
import IdentityVerification from "./pages/IdentityVerification";
import CriminalRecordCheck from "./pages/CriminalRecordCheck";
import EmploymentVerification from "./pages/EmploymentVerification";
import EducationVerification from "./pages/EducationVerification";
import SocialMediaScreening from "./pages/SocialMediaScreening";
import FinancialVerification from "./pages/FinancialVerification";
import ReferenceVerification from "./pages/ReferenceVerification";
import AddressVerification from "./pages/AddressVerification";

const queryClient = new QueryClient();

const JobsSlugWrapper: FC = () => {
  const { pathname } = useLocation();          // e.g. "/jobs-for-office-boy"
  console.log('JOBDATA')
  /* ─── Strip the fixed prefix ─────────────────────────────────────────── */
  if (!pathname.startsWith("/jobs-")) {
    // Someone navigated to /foo – bail out early
    return <Navigate to="/404" replace />;
  }

  const slug = pathname.replace("/jobs-", ""); // "for-office-boy" | "in-mumbai"
  const [kind, ...rest] = slug.split("-");
  const value = rest.join("-");                // "office-boy" | "mumbai"

  // Validate the first token
  if (kind !== "for" && kind !== "in") {
    return <Navigate to="/404" replace />;
  }

  const slugType: "for" | "in" = kind;

  return <Jobs slugType={slugType} slugValue={value} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/why-gigin" element={<WhyGigin />} />
          <Route path="/hiring-solutions" element={<HiringSolutions />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/category/:categorySlug" element={<BlogCategory />} />
          <Route path="/blog/:category/:slug" element={<BlogPostDetail />} />
          <Route path="/verification" element={<Verification />} />
          
          {/* Verification check pages */}
          <Route path="/verification/identity" element={<IdentityVerification />} />
          <Route path="/verification/criminal" element={<CriminalRecordCheck />} />
          <Route path="/verification/employment" element={<EmploymentVerification />} />
          <Route path="/verification/education" element={<EducationVerification />} />
          <Route path="/verification/social" element={<SocialMediaScreening />} />
          <Route path="/verification/financial" element={<FinancialVerification />} />
          <Route path="/verification/reference" element={<ReferenceVerification />} />
          <Route path="/verification/address" element={<AddressVerification />} />
          
          {/* Job-related routes */}
          <Route path="/find-a-jobs" element={<Jobs />} />
          <Route path="/jobs-:slug" element={<JobsSlugWrapper />} />
          <Route path="/job-detail/:jobPageUrl" element={<JobDetail />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
