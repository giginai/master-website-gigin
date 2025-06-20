import React, { FC } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SEOProvider } from "@/contexts/SEOContext";
import SEOHead from "@/components/SEOHead";
import FloatingAccreditation from "@/components/FloatingAccreditation";
import {
  generateWebsiteSchema,
  generateOrganizationSchema,
} from "@/utils/schemaGenerator";

import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import WhyGigin from "./pages/WhyGigin";
import HiringSolutions from "./pages/HiringSolutions";
import Blog from "./pages/Blog";
import BlogCategory from "./pages/BlogCategory";
import BlogPostDetail from "./pages/BlogPostDetail";
import Verification from "./pages/Verification";
import VerificationCatalogue from "./pages/VerificationCatalogue";
import IndustriesSolutions from "./pages/IndustriesSolutions";
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

// Industry pages
import FacilityManagement from "./pages/industry/FacilityManagement";
import FoodBeverage from "./pages/industry/FoodBeverage";
import GigEconomy from "./pages/industry/GigEconomy";
import Transportation from "./pages/industry/Transportation";
import FinancialServices from "./pages/industry/FinancialServices";
import Insurance from "./pages/industry/Insurance";
import Manufacturing from "./pages/industry/Manufacturing";
import CorporateServices from "./pages/industry/CorporateServices";

const queryClient = new QueryClient();

const JobsSlugWrapper: FC = () => {
  const { pathname } = useLocation();
  console.log("JOBDATA", pathname);

  if (!pathname.startsWith("/jobs-")) {
    return <Navigate to="/404" replace />;
  }

  const slug = pathname.replace("/jobs-", "");
  const [kind, ...rest] = slug.split("-");
  const value = rest.join("-");

  if (kind !== "for" && kind !== "in") {
    return <Navigate to="/404" replace />;
  }

  const slugType: "for" | "in" = kind;

  return <Jobs slugType={slugType} slugValue={value} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <SEOProvider>
        <TooltipProvider>
          <SEOHead
            structuredData={[
              generateWebsiteSchema(),
              generateOrganizationSchema(),
            ]}
          />
          <FloatingAccreditation />
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Index />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/why-gigin" element={<WhyGigin />} />
            <Route path="/hiring-solutions" element={<HiringSolutions />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/blog/category/:categorySlug"
              element={<BlogCategory />}
            />
            <Route path="/blog/:category/:slug" element={<BlogPostDetail />} />
            <Route path="/verification" element={<Verification />} />
            <Route
              path="/verification-catalogue"
              element={<VerificationCatalogue />}
            />
            <Route
              path="/industries-solutions"
              element={<IndustriesSolutions />}
            />

            {/* Verification check pages */}
            <Route
              path="/verification/identity"
              element={<IdentityVerification />}
            />
            <Route
              path="/verification/criminal"
              element={<CriminalRecordCheck />}
            />
            <Route
              path="/verification/employment"
              element={<EmploymentVerification />}
            />
            <Route
              path="/verification/education"
              element={<EducationVerification />}
            />
            <Route
              path="/verification/social"
              element={<SocialMediaScreening />}
            />
            <Route
              path="/verification/financial"
              element={<FinancialVerification />}
            />
            <Route
              path="/verification/reference"
              element={<ReferenceVerification />}
            />
            <Route
              path="/verification/address"
              element={<AddressVerification />}
            />
            {/* Industry pages */}
            <Route
              path="/industry/facility-management"
              element={<FacilityManagement />}
            />
            <Route path="/industry/food-beverage" element={<FoodBeverage />} />
            <Route path="/industry/gig-economy" element={<GigEconomy />} />
            <Route
              path="/industry/transportation"
              element={<Transportation />}
            />
            <Route
              path="/industry/financial-services"
              element={<FinancialServices />}
            />
            <Route path="/industry/insurance" element={<Insurance />} />
            <Route path="/industry/manufacturing" element={<Manufacturing />} />
            <Route
              path="/industry/corporate-services"
              element={<CorporateServices />}
            />

            {/* Job-related routes */}
            <Route path="/find-a-job" element={<Jobs />} />
            <Route path="/jobs-/*" element={<JobsSlugWrapper />} />
            <Route path="/job-detail/:jobPageUrl" element={<JobDetail />} />

            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </SEOProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
