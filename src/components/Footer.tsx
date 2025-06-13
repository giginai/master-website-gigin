
import { MessageCircle, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
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
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/your-whatsapp-number" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/your-instagram" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/your-linkedin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Job by Roles - Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Job by Roles</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Accountant</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BPO and Telecaller</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cashiers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cafe Attendant</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Service Representatives</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Entry</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Delivery Boy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Floor Manager</a></li>
            </ul>
          </div>

          {/* Job by Roles - Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Job by Roles</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Food Serving</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Front Office Executive</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Picker and Packers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Logistics Managers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nurse</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Office Boy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Office Clerks, General</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Picker and Packers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Receptionist</a></li>
            </ul>
          </div>

          {/* Job by Cities */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Job by Cities</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Bengaluru</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ahmedabad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chennai</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Delhi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gurgaon</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hyderabad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pune</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Noida</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kolkata</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mumbai</a></li>
            </ul>
          </div>

          {/* Jobs by Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Jobs by Skills</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Sales Executive</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Telemarketers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Office Boy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accountant</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chefs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cashiers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cafe Manager</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Retail Sales Representative</a></li>
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
