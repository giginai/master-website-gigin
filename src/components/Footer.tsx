
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/0a41f02f-6d14-4ba4-9553-29cc465c0d1b.png" 
                alt="Gigin Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-lg text-gray-300 mb-6">
              On a mission to better billion lives
            </p>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium">
              Get started
            </Button>
          </div>

          {/* Jobs by Roles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Jobs by Roles</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Software Engineer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Product Manager</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Scientist</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Designer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sales</a></li>
            </ul>
          </div>

          {/* Jobs by Cities */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Jobs by Cities</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Bangalore</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mumbai</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Delhi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hyderabad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chennai</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pune</a></li>
            </ul>
          </div>

          {/* Jobs by Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Jobs by Skills</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">React</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Node.js</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Python</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Java</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Machine Learning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DevOps</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 - Made for Bharat with ❤️ by Gigin Technologies
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
