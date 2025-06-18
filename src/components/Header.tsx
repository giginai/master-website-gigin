
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Users, Shield, Search, Bot, Building2, CheckCircle, Zap, Database, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface HeaderProps {
  currentPage?: string;
}

const Header = ({ currentPage = "home" }: HeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHiringSolutionsPage = location.pathname === "/hiring-solutions";
  const isVerificationPage = location.pathname === "/verification" || location.pathname.startsWith("/verification");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between rounded-2xl px-8 py-4 shadow-xl bg-black/60 backdrop-blur-[10px] border border-white/10">
        <div className="flex items-center">
          <Link to="/home">
            <img 
              src="/lovable-uploads/0a41f02f-6d14-4ba4-9553-29cc465c0d1b.png" 
              alt="Gigin Logo" 
              className="h-8 w-auto"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2">
          <Link 
            to="/home" 
            className={`text-sm font-medium transition-colors px-4 py-2 rounded-lg ${
              currentPage === "home" 
                ? "text-white bg-white/10 border border-pink-400/20" 
                : "text-gray-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about-us" 
            className={`text-sm font-medium transition-colors px-4 py-2 rounded-lg ${
              currentPage === "about-us" 
                ? "text-white bg-white/10 border border-pink-400/20" 
                : "text-gray-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm"
            }`}
          >
            About Us
          </Link>
          <DropdownMenu onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <button className={`text-sm font-medium transition-colors flex items-center px-4 py-2 rounded-lg ${
                isDropdownOpen || isHiringSolutionsPage || isVerificationPage
                  ? "text-white bg-white/10 border border-pink-400/20"
                  : "text-gray-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm"
              }`}>
                Solutions
                <ChevronDown className="w-4 h-4 ml-1 text-gray-200" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="p-0 border-0 bg-transparent shadow-none fixed left-1/2 transform -translate-x-1/2 top-[10px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1"
              sideOffset={-2}
            >
              <div className="bg-white backdrop-blur-[12px] border border-gray-200/40 rounded-2xl shadow-2xl min-w-[800px] overflow-hidden" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)'}}>
                <div className="flex">
                  <div className="w-2/3 p-8">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xs font-medium text-gray-500 mb-4 flex items-center uppercase tracking-wide">
                          <Users className="w-3 h-3 mr-2 text-gray-500" />
                          Hiring Solutions
                        </h4>
                        <div className="space-y-3">
                          <Link to="/hiring-solutions" className={`flex items-center p-3 rounded-lg border transition-all group ${
                            location.pathname === "/hiring-solutions"
                              ? "bg-pink-50 border-pink-200"
                              : "hover:bg-pink-50 hover:border-pink-100 border-transparent"
                          }`}>
                            <Search className={`w-4 h-4 mr-3 ${
                              location.pathname === "/hiring-solutions"
                                ? "text-pink-500"
                                : "text-gray-500 group-hover:text-pink-500"
                            }`} />
                            <span className={`text-sm font-medium ${
                              location.pathname === "/hiring-solutions"
                                ? "text-pink-600"
                                : "text-gray-700 group-hover:text-pink-600"
                            }`}>Job Market Place</span>
                          </Link>
                          <Link to="/hiring-solutions" className={`flex items-center p-3 rounded-lg border transition-all group ${
                            location.pathname === "/hiring-solutions"
                              ? "bg-pink-50 border-pink-200"
                              : "hover:bg-pink-50 hover:border-pink-100 border-transparent"
                          }`}>
                            <Bot className={`w-4 h-4 mr-3 ${
                              location.pathname === "/hiring-solutions"
                                ? "text-pink-500"
                                : "text-gray-500 group-hover:text-pink-500"
                            }`} />
                            <span className={`text-sm font-medium ${
                              location.pathname === "/hiring-solutions"
                                ? "text-pink-600"
                                : "text-gray-700 group-hover:text-pink-600"
                            }`}>AI Assisted ATS</span>
                          </Link>
                          <Link to="/hiring-solutions" className={`flex items-center p-3 rounded-lg border transition-all group ${
                            location.pathname === "/hiring-solutions"
                              ? "bg-pink-50 border-pink-200"
                              : "hover:bg-pink-50 hover:border-pink-100 border-transparent"
                          }`}>
                            <CheckCircle className={`w-4 h-4 mr-3 ${
                              location.pathname === "/hiring-solutions"
                                ? "text-pink-500"
                                : "text-gray-500 group-hover:text-pink-500"
                            }`} />
                            <span className={`text-sm font-medium ${
                              location.pathname === "/hiring-solutions"
                                ? "text-pink-600"
                                : "text-gray-700 group-hover:text-pink-600"
                            }`}>Guaranteed Hiring Program</span>
                          </Link>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-xs font-medium text-gray-500 mb-4 flex items-center uppercase tracking-wide">
                          <Shield className="w-3 h-3 mr-2 text-gray-500" />
                          Verification Solutions
                        </h4>
                        <div className="space-y-3">
                          <Link to="/verification" className={`flex items-center p-3 rounded-lg border transition-all group ${
                            location.pathname === "/verification"
                              ? "bg-pink-50 border-pink-200"
                              : "hover:bg-pink-50 hover:border-pink-100 border-transparent"
                          }`}>
                            <Shield className={`w-4 h-4 mr-3 ${
                              location.pathname === "/verification"
                                ? "text-pink-500"
                                : "text-gray-500 group-hover:text-pink-500"
                            }`} />
                            <span className={`text-sm font-medium ${
                              location.pathname === "/verification"
                                ? "text-pink-600"
                                : "text-gray-700 group-hover:text-pink-600"
                            }`}>AI-Powered BGV</span>
                          </Link>
                          <Link to="/verification-catalogue" className={`flex items-center p-3 rounded-lg border transition-all group ${
                            location.pathname === "/verification-catalogue"
                              ? "bg-pink-50 border-pink-200"
                              : "hover:bg-pink-50 hover:border-pink-100 border-transparent"
                          }`}>
                            <Database className={`w-4 h-4 mr-3 ${
                              location.pathname === "/verification-catalogue"
                                ? "text-pink-500"
                                : "text-gray-500 group-hover:text-pink-500"
                            }`} />
                            <span className={`text-sm font-medium ${
                              location.pathname === "/verification-catalogue"
                                ? "text-pink-600"
                                : "text-gray-700 group-hover:text-pink-600"
                            }`}>Verification Catalogue</span>
                          </Link>
                          <Link to="/industries-solutions" className={`flex items-center p-3 rounded-lg border transition-all group ${
                            location.pathname === "/industries-solutions"
                              ? "bg-pink-50 border-pink-200"
                              : "hover:bg-pink-50 hover:border-pink-100 border-transparent"
                          }`}>
                            <Building2 className={`w-4 h-4 mr-3 ${
                              location.pathname === "/industries-solutions"
                                ? "text-pink-500"
                                : "text-gray-500 group-hover:text-pink-500"
                            }`} />
                            <span className={`text-sm font-medium ${
                              location.pathname === "/industries-solutions"
                                ? "text-pink-600"
                                : "text-gray-700 group-hover:text-pink-600"
                            }`}>Industries & Use Cases</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-1/3 relative bg-gradient-to-br from-pink-500/20 to-purple-600/20 overflow-hidden">
                    <div className="absolute inset-0 bg-black/40"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop"
                      alt="Solutions Banner"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                      <h3 className="text-xl font-bold text-white mb-2">AI-Powered Solutions</h3>
                      <p className="text-gray-200 text-xs">Transform your hiring and verification processes</p>
                    </div>
                  </div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link 
            to="/why-gigin" 
            className={`text-sm font-medium transition-colors px-4 py-2 rounded-lg ${
              currentPage === "why-gigin" 
                ? "text-white bg-white/10 border border-pink-400/20" 
                : "text-gray-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm"
            }`}
          >
            Why Gigin?
          </Link>
          <Link 
            to="/blog" 
            className={`text-sm font-medium transition-colors px-4 py-2 rounded-lg ${
              currentPage === "blog" 
                ? "text-white bg-white/10 border border-pink-400/20" 
                : "text-gray-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm"
            }`}
          >
            Blogs
          </Link>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/find-a-job">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-medium text-sm">
              Find a Job
            </Button>
          </Link>
          <Button variant="outline" className="border-gray-300 bg-white/10 text-gray-200 hover:text-white hover:bg-white/20 hover:border-white/40 px-6 py-2 rounded-lg font-medium text-sm">
            Sign In
          </Button>
        </div>

        {/* Mobile Menu */}
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
      </nav>
    </header>
  );
};

export default Header;
