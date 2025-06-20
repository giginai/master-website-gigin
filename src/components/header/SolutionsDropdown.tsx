
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Users, Shield, Search, Bot, Building2, CheckCircle, Database } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const SolutionsDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isHiringSolutionsPage = location.pathname === "/hiring-solutions";
  const isVerificationPage = location.pathname === "/verification" || location.pathname.startsWith("/verification");
  const isIndustriesPage = location.pathname === "/industries-solutions" || location.pathname.startsWith("/industry/");

  const handleHiringSolutionClick = (sectionId: string) => {
    if (location.pathname === "/hiring-solutions") {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 150;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = `/hiring-solutions#${sectionId}`;
    }
    setIsDropdownOpen(false);
  };

  return (
    <DropdownMenu onOpenChange={setIsDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <button className={`text-sm font-medium transition-colors flex items-center px-4 py-2 rounded-lg ${
          isDropdownOpen || isHiringSolutionsPage || isVerificationPage || isIndustriesPage
            ? "text-white bg-white/10 border border-pink-400/20"
            : "text-gray-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm"
        }`}>
          Products
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
                    Hiring Products
                  </h4>
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleHiringSolutionClick('job-marketplace')} 
                      className="flex items-center p-3 rounded-lg border transition-all group w-full text-left hover:bg-pink-50 hover:border-pink-100 border-transparent"
                    >
                      <Search className="w-4 h-4 mr-3 text-gray-500 group-hover:text-pink-500" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-pink-600">Job Market Place</span>
                    </button>
                    <button 
                      onClick={() => handleHiringSolutionClick('ai-ats')} 
                      className="flex items-center p-3 rounded-lg border transition-all group w-full text-left hover:bg-pink-50 hover:border-pink-100 border-transparent"
                    >
                      <Bot className="w-4 h-4 mr-3 text-gray-500 group-hover:text-pink-500" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-pink-600">AI Assisted ATS</span>
                    </button>
                    <button 
                      onClick={() => handleHiringSolutionClick('guaranteed-hiring')} 
                      className="flex items-center p-3 rounded-lg border transition-all group w-full text-left hover:bg-pink-50 hover:border-pink-100 border-transparent"
                    >
                      <CheckCircle className="w-4 h-4 mr-3 text-gray-500 group-hover:text-pink-500" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-pink-600">Gigin Assure Hire</span>
                    </button>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xs font-medium text-gray-500 mb-4 flex items-center uppercase tracking-wide">
                    <Shield className="w-3 h-3 mr-2 text-gray-500" />
                    Verification Products
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
                      isIndustriesPage
                        ? "bg-pink-50 border-pink-200"
                        : "hover:bg-pink-50 hover:border-pink-100 border-transparent"
                    }`}>
                      <Building2 className={`w-4 h-4 mr-3 ${
                        isIndustriesPage
                          ? "text-pink-500"
                          : "text-gray-500 group-hover:text-pink-500"
                      }`} />
                      <span className={`text-sm font-medium ${
                        isIndustriesPage
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
                alt="Products Banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-xl font-bold text-white mb-2">AI-Powered Products</h3>
                <p className="text-gray-200 text-xs">Transform your hiring and verification processes</p>
              </div>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SolutionsDropdown;
