
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Users, Shield, Search, Bot, Building2, CheckCircle, Zap, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface HeaderProps {
  currentPage?: string;
}

const Header = ({ currentPage = "home" }: HeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between rounded-2xl px-8 py-4 shadow-xl bg-black/60 backdrop-blur-[10px] border border-white/10">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/0a41f02f-6d14-4ba4-9553-29cc465c0d1b.png" 
              alt="Gigin Logo" 
              className="h-8 w-auto"
            />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-2">
          <Link 
            to="/" 
            className={`font-medium transition-colors px-4 py-2 rounded-lg ${
              currentPage === "home" 
                ? "text-pink-500 bg-white border border-pink-400/20" 
                : "text-gray-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about-us" 
            className={`font-medium transition-colors px-4 py-2 rounded-lg ${
              currentPage === "about-us" 
                ? "text-pink-500 bg-white border border-pink-400/20" 
                : "text-gray-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm"
            }`}
          >
            About Us
          </Link>
          <DropdownMenu onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <button className={`font-medium transition-colors flex items-center px-4 py-2 rounded-lg ${
                isDropdownOpen 
                  ? "text-white bg-white/10 backdrop-blur-sm"
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
                  {/* Banner Section */}
                  <div className="w-1/3 relative bg-gradient-to-br from-pink-500/20 to-purple-600/20">
                    <div className="absolute inset-0 bg-black/40"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop"
                      alt="Solutions Banner"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">AI-Powered Solutions</h3>
                      <p className="text-gray-200 text-sm">Transform your hiring and verification processes</p>
                    </div>
                  </div>
                  
                  {/* Solutions Content */}
                  <div className="w-2/3 p-8">
                    <div className="grid grid-cols-2 gap-8">
                      {/* Hiring Solutions */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-4 flex items-center">
                          <Users className="w-4 h-4 mr-2 text-gray-400" />
                          Hiring Solutions
                        </h4>
                        <div className="space-y-3">
                          <a href="#" className="flex items-center p-3 rounded-lg hover:bg-pink-50 hover:border-pink-100 border border-transparent transition-all group">
                            <Search className="w-4 h-4 mr-3 text-gray-500 group-hover:text-pink-500" />
                            <span className="text-gray-700 group-hover:text-pink-600 font-medium">Job Market Place</span>
                          </a>
                          <a href="#" className="flex items-center p-3 rounded-lg hover:bg-pink-50 hover:border-pink-100 border border-transparent transition-all group">
                            <Bot className="w-4 h-4 mr-3 text-gray-500 group-hover:text-pink-500" />
                            <span className="text-gray-700 group-hover:text-pink-600 font-medium">AI Assisted ATS</span>
                          </a>
                          <a href="#" className="flex items-center p-3 rounded-lg hover:bg-pink-50 hover:border-pink-100 border border-transparent transition-all group">
                            <CheckCircle className="w-4 h-4 mr-3 text-gray-500 group-hover:text-pink-500" />
                            <span className="text-gray-700 group-hover:text-pink-600 font-medium">Guaranteed Hiring Program</span>
                          </a>
                          <a href="#" className="flex items-center p-3 rounded-lg hover:bg-pink-50 hover:border-pink-100 border border-transparent transition-all group">
                            <Users className="w-4 h-4 mr-3 text-gray-500 group-hover:text-pink-500" />
                            <span className="text-gray-700 group-hover:text-pink-600 font-medium">AI Recruiter Agent</span>
                          </a>
                        </div>
                      </div>
                      
                      {/* Verification Solutions */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-4 flex items-center">
                          <Shield className="w-4 h-4 mr-2 text-gray-400" />
                          Verification Solutions
                        </h4>
                        <div className="space-y-3">
                          <a href="#" className="flex items-center p-3 rounded-lg hover:bg-pink-50 hover:border-pink-100 border border-transparent transition-all group">
                            <Shield className="w-4 h-4 mr-3 text-gray-500 group-hover:text-pink-500" />
                            <span className="text-gray-700 group-hover:text-pink-600 font-medium">AI-Powered BGV</span>
                          </a>
                          <a href="#" className="flex items-center p-3 rounded-lg hover:bg-pink-50 hover:border-pink-100 border border-transparent transition-all group">
                            <Zap className="w-4 h-4 mr-3 text-gray-500 group-hover:text-pink-500" />
                            <span className="text-gray-700 group-hover:text-pink-600 font-medium">Tailored to Outcomes</span>
                          </a>
                          <a href="#" className="flex items-center p-3 rounded-lg hover:bg-pink-50 hover:border-pink-100 border border-transparent transition-all group">
                            <Database className="w-4 h-4 mr-3 text-gray-500 group-hover:text-pink-500" />
                            <span className="text-gray-700 group-hover:text-pink-600 font-medium">Easy Integration with HRMS</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link 
            to="/why-gigin" 
            className={`font-medium transition-colors px-4 py-2 rounded-lg ${
              currentPage === "why-gigin" 
                ? "text-pink-500 bg-white border border-pink-400/20" 
                : "text-gray-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm"
            }`}
          >
            Why Gigin?
          </Link>
          <a href="#" className="text-gray-200 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm">
            Blogs
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-medium">
            Find a Job
          </Button>
          <Button variant="outline" className="border-gray-300 bg-white/10 text-gray-200 hover:text-white hover:bg-white/20 hover:border-white/40 px-6 py-2 rounded-lg font-medium">
            Contact us
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
