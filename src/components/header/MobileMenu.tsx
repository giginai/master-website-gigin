import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return <div className="lg:hidden">
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] bg-white/10 backdrop-blur-[20px] border-white/20">
          {/* Gigin Logo aligned to left */}
          <div className="flex justify-start mb-6 pt-4">
            <img src="/lovable-uploads/0a41f02f-6d14-4ba4-9553-29cc465c0d1b.png" alt="Gigin Logo" className="h-8 w-auto" />
          </div>
          
          <div className="flex flex-col space-y-2">
            <Link to="/home" className="text-white font-semibold py-3 px-4 rounded-lg hover:bg-white/10 transition-colors text-base border-l-4 border-transparent hover:border-pink-500" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            
            <Separator className="bg-white/20 my-2" />
            
            <Link to="/about-us" className="text-white font-semibold py-3 px-4 rounded-lg hover:bg-white/10 transition-colors text-base border-l-4 border-transparent hover:border-pink-500" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
            
            <Separator className="bg-white/20 my-2" />
            
            {/* Mobile Products Menu */}
            <div className="space-y-2">
              <div className="text-white font-semibold py-3 px-4 text-base border-l-4 border-pink-500">Products</div>
              <div className="ml-4 space-y-1 bg-white/5 rounded-lg p-2">
                <Link to="/hiring-solutions" className="block text-white/90 hover:text-white py-2 px-4 text-sm rounded hover:bg-white/10 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Hiring Products
                </Link>
                <Link to="/verification" className="block text-white/90 hover:text-white py-2 px-4 text-sm rounded hover:bg-white/10 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  AI-Powered BGV
                </Link>
                <Link to="/verification-catalogue" className="block text-white/90 hover:text-white py-2 px-4 text-sm rounded hover:bg-white/10 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Verification Catalogue
                </Link>
                <Link to="/industries-solutions" className="block text-white/90 hover:text-white py-2 px-4 text-sm rounded hover:bg-white/10 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Industries & Use Cases
                </Link>
              </div>
            </div>
            
            <Separator className="bg-white/20 my-2" />
            
            <Link to="/why-gigin" className="text-white font-semibold py-3 px-4 rounded-lg hover:bg-white/10 transition-colors text-base border-l-4 border-transparent hover:border-pink-500" onClick={() => setIsMobileMenuOpen(false)}>
              Why Gigin?
            </Link>
            
            <Separator className="bg-white/20 my-2" />
            
            <Link to="/blog" className="text-white font-semibold py-3 px-4 rounded-lg hover:bg-white/10 transition-colors text-base border-l-4 border-transparent hover:border-pink-500" onClick={() => setIsMobileMenuOpen(false)}>
              Blogs
            </Link>
            
            <Separator className="bg-white/20 my-3" />
            
            {/* Mobile CTAs */}
            <div className="space-y-3 px-4 py-[24px]">
              <Link to="/find-a-job" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold py-3">
                  Find a Job
                </Button>
              </Link>
              <Button variant="outline" className="w-full border-white/30 bg-white/10 text-white hover:bg-white/20 text-sm font-semibold py-3">Employer Sign In</Button>
            </div>
            
            {/* Footer Links */}
            <div className="mt-auto pt-6 border-t border-white/20 space-y-2">
              <Link to="/privacy-policy" className="block text-white/70 hover:text-white py-2 px-4 text-sm transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="block text-white/70 hover:text-white py-2 px-4 text-sm transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Terms & Conditions
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>;
};
export default MobileMenu;