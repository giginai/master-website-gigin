
import { MessageCircle, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

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
              <li><Link to="/jobs-for-accountant" className="hover:text-white transition-colors">Accountant</Link></li>
              <li><Link to="/jobs-for-bpo-and-telecaller" className="hover:text-white transition-colors">BPO and Telecaller</Link></li>
              <li><Link to="/jobs-for-cashiers" className="hover:text-white transition-colors">Cashiers</Link></li>
              <li><Link to="/jobs-for-cafe-attendant" className="hover:text-white transition-colors">Cafe Attendant</Link></li>
              <li><Link to="/jobs-for-customer-service-representatives" className="hover:text-white transition-colors">Customer Service Representatives</Link></li>
              <li><Link to="/jobs-for-data-entry" className="hover:text-white transition-colors">Data Entry</Link></li>
              <li><Link to="/jobs-for-delivery-boy" className="hover:text-white transition-colors">Delivery Boy</Link></li>
              <li><Link to="/jobs-for-floor-manager" className="hover:text-white transition-colors">Floor Manager</Link></li>
            </ul>
          </div>

          {/* Job by Roles - Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Job by Roles</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/jobs-for-food-serving" className="hover:text-white transition-colors">Food Serving</Link></li>
              <li><Link to="/jobs-for-front-office-executive" className="hover:text-white transition-colors">Front Office Executive</Link></li>
              <li><Link to="/jobs-for-picker-and-packers" className="hover:text-white transition-colors">Picker and Packers</Link></li>
              <li><Link to="/jobs-for-logistics-managers" className="hover:text-white transition-colors">Logistics Managers</Link></li>
              <li><Link to="/jobs-for-nurse" className="hover:text-white transition-colors">Nurse</Link></li>
              <li><Link to="/jobs-for-office-boy" className="hover:text-white transition-colors">Office Boy</Link></li>
              <li><Link to="/jobs-for-office-clerks-general" className="hover:text-white transition-colors">Office Clerks, General</Link></li>
              <li><Link to="/jobs-for-picker-and-packers" className="hover:text-white transition-colors">Picker and Packers</Link></li>
              <li><Link to="/jobs-for-receptionist" className="hover:text-white transition-colors">Receptionist</Link></li>
            </ul>
          </div>

          {/* Job by Cities */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Job by Cities</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/jobs-in-bengaluru" className="hover:text-white transition-colors">Bengaluru</Link></li>
              <li><Link to="/jobs-in-ahmedabad" className="hover:text-white transition-colors">Ahmedabad</Link></li>
              <li><Link to="/jobs-in-chennai" className="hover:text-white transition-colors">Chennai</Link></li>
              <li><Link to="/jobs-in-delhi" className="hover:text-white transition-colors">Delhi</Link></li>
              <li><Link to="/jobs-in-gurgaon" className="hover:text-white transition-colors">Gurgaon</Link></li>
              <li><Link to="/jobs-in-hyderabad" className="hover:text-white transition-colors">Hyderabad</Link></li>
              <li><Link to="/jobs-in-pune" className="hover:text-white transition-colors">Pune</Link></li>
              <li><Link to="/jobs-in-noida" className="hover:text-white transition-colors">Noida</Link></li>
              <li><Link to="/jobs-in-kolkata" className="hover:text-white transition-colors">Kolkata</Link></li>
              <li><Link to="/jobs-in-mumbai" className="hover:text-white transition-colors">Mumbai</Link></li>
            </ul>
          </div>

          {/* Jobs by Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Jobs by Skills</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/jobs-for-sales-executive" className="hover:text-white transition-colors">Sales Executive</Link></li>
              <li><Link to="/jobs-for-telemarketers" className="hover:text-white transition-colors">Telemarketers</Link></li>
              <li><Link to="/jobs-for-office-boy" className="hover:text-white transition-colors">Office Boy</Link></li>
              <li><Link to="/jobs-for-accountant" className="hover:text-white transition-colors">Accountant</Link></li>
              <li><Link to="/jobs-for-chefs" className="hover:text-white transition-colors">Chefs</Link></li>
              <li><Link to="/jobs-for-cashiers" className="hover:text-white transition-colors">Cashiers</Link></li>
              <li><Link to="/jobs-for-cafe-manager" className="hover:text-white transition-colors">Cafe Manager</Link></li>
              <li><Link to="/jobs-for-retail-sales-representative" className="hover:text-white transition-colors">Retail Sales Representative</Link></li>
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
