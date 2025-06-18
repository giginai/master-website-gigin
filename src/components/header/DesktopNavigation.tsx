
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NavigationLink from "./NavigationLink";
import SolutionsDropdown from "./SolutionsDropdown";

const DesktopNavigation = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-2">
        <NavigationLink to="/home">Home</NavigationLink>
        <NavigationLink to="/about-us">About Us</NavigationLink>
        <SolutionsDropdown />
        <NavigationLink to="/why-gigin">Why Gigin?</NavigationLink>
        <NavigationLink to="/blog">Blogs</NavigationLink>
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
    </>
  );
};

export default DesktopNavigation;
