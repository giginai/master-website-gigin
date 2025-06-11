
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between rounded-2xl px-8 py-4 shadow-xl bg-black/60 backdrop-blur-[10px] border border-white/10">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/0a41f02f-6d14-4ba4-9553-29cc465c0d1b.png" 
            alt="Gigin Logo" 
            className="h-8 w-auto"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-2">
          <a href="#" className="text-white font-medium hover:text-pink-300 transition-colors px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-pink-400/20">
            Home
          </a>
          <a href="#" className="text-gray-200 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm">
            About Us
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-gray-200 hover:text-white transition-colors flex items-center px-4 py-2 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm">
                Solutions
                <ChevronDown className="w-4 h-4 ml-1 text-gray-200" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white/95 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-2 min-w-[200px]">
              <DropdownMenuItem className="hover:bg-pink-50 rounded-lg px-4 py-3 cursor-pointer">
                <span className="text-gray-800 font-medium">AI Talent Sourcing</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-pink-50 rounded-lg px-4 py-3 cursor-pointer">
                <span className="text-gray-800 font-medium">Smart Hiring</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-pink-50 rounded-lg px-4 py-3 cursor-pointer">
                <span className="text-gray-800 font-medium">Talent Verification</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-pink-50 rounded-lg px-4 py-3 cursor-pointer">
                <span className="text-gray-800 font-medium">HR Analytics</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="#" className="text-gray-200 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm">
            Why Gigin?
          </a>
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
