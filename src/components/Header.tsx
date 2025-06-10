
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between glass-morphism rounded-2xl px-8 py-4 shadow-lg">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/0a41f02f-6d14-4ba4-9553-29cc465c0d1b.png" 
            alt="Gigin Logo" 
            className="h-8 w-auto"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-pink-400 font-medium hover:text-pink-300 transition-colors">
            Home
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            About Us
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
            Solutions
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            Why Gigin?
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            Blogs
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-medium">
            Find a Job
          </Button>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-medium">
            Contact us
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
