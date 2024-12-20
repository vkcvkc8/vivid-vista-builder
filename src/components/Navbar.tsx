import { Link, useLocation } from "react-router-dom";
import { Search, User } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white py-4 border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/">
          <img 
            src="/lovable-uploads/e81a6ea8-aac9-4e08-bf49-00354b6e822f.png" 
            alt="Sunsor Logo" 
            className="h-12"
          />
        </Link>
        <div className="space-x-8">
          <Link 
            to="/products" 
            className={`text-gray-800 hover:text-[#F5B100] ${location.pathname === '/products' ? 'text-[#F5B100]' : ''}`}
          >
            Our Product
          </Link>
          <Link 
            to="/story" 
            className={`text-gray-800 hover:text-[#F5B100] ${location.pathname === '/story' ? 'text-[#F5B100]' : ''}`}
          >
            Our Story
          </Link>
          <Link 
            to="/blog" 
            className={`text-gray-800 hover:text-[#F5B100] ${location.pathname === '/blog' ? 'text-[#F5B100]' : ''}`}
          >
            Blogs
          </Link>
          <Link 
            to="/about" 
            className={`text-gray-800 hover:text-[#F5B100] ${location.pathname === '/about' ? 'text-[#F5B100]' : ''}`}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className={`text-gray-800 hover:text-[#F5B100] ${location.pathname === '/contact' ? 'text-[#F5B100]' : ''}`}
          >
            Contact us
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search className="h-6 w-6 text-[#DC2626]" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User className="h-6 w-6 text-[#DC2626]" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;