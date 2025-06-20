
import { Link, useLocation } from "react-router-dom";

interface NavigationLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavigationLink = ({ to, children, className = "", onClick }: NavigationLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`text-sm font-medium transition-colors px-4 py-2 rounded-lg ${
        isActive
          ? "text-white bg-white/10 border border-pink-400/20" 
          : "text-gray-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm"
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
