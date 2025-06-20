
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <div className="flex items-center">
      <Link to="/home">
        <img 
          src="/lovable-uploads/0a41f02f-6d14-4ba4-9553-29cc465c0d1b.png" 
          alt="Gigin Logo" 
          className="h-8 w-auto"
        />
      </Link>
    </div>
  );
};

export default HeaderLogo;
