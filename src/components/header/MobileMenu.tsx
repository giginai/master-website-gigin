
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] bg-white/10 backdrop-blur-[20px] border-white/20">
          {/* Gigin Logo at top */}
          <div className="flex justify-center mb-8 pt-4">
            <img 
              src="/lovable-uploads/0a41f02f-6d14-4ba4-9553-29cc465c0d1b.png" 
              alt="Gigin Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="flex flex-col space-y-4">
            <Link 
              to="/home" 
              className="text-white/90 hover:text-white font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-colors text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about-us" 
              className="text-white/90 hover:text-white font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-colors text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            
            {/* Mobile Solutions Menu */}
            <div className="space-y-2">
              <div className="text-white/90 font-medium py-2 px-4 text-sm">Solutions</div>
              <div className="ml-4 space-y-2">
                <Link 
                  to="/hiring-solutions" 
                  className="block text-white/70 hover:text-white py-1 px-4 text-xs"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hiring Solutions
                </Link>
                <Link 
                  to="/verification" 
                  className="block text-white/70 hover:text-white py-1 px-4 text-xs"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  AI-Powered BGV
                </Link>
                <Link 
                  to="/verification-catalogue" 
                  className="block text-white/70 hover:text-white py-1 px-4 text-xs"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Verification Catalogue
                </Link>
                <Link 
                  to="/industries-solutions" 
                  className="block text-white/70 hover:text-white py-1 px-4 text-xs"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Industries & Use Cases
                </Link>
              </div>
            </div>
            
            <Link 
              to="/why-gigin" 
              className="text-white/90 hover:text-white font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-colors text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why Gigin?
            </Link>
            <Link 
              to="/blog" 
              className="text-white/90 hover:text-white font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-colors text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            
            {/* Mobile CTAs */}
            <div className="pt-4 space-y-3">
              <Link to="/find-a-job" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white text-sm">
                  Find a Job
                </Button>
              </Link>
              <Button variant="outline" className="w-full border-white/30 bg-white/10 text-white hover:bg-white/20 text-sm">
                Sign In
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
