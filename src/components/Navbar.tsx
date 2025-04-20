import { Link } from "react-router-dom";
import { Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const EPIC_FIX_LOGO = "https://cdn.poehali.dev/files/66777d96-7cbd-4f89-8e6f-96c53af6f6b3.png";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-epicfix-dark/95 backdrop-blur-sm border-b border-epicfix-gray">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-epicfix-green flex items-center justify-center mr-3">
              <img src={EPIC_FIX_LOGO} alt="Epic Fix Logo" className="w-10 h-10" />
            </div>
            <span className="text-2xl font-bold text-white">EpicFix</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-epicfix-green transition">Игры</Link>
            <Link to="/categories" className="text-white hover:text-epicfix-green transition">Категории</Link>
            <Link to="/new" className="text-white hover:text-epicfix-green transition">Новинки</Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Поиск игр..." 
              className="bg-epicfix-gray rounded-full py-2 pl-10 pr-4 text-sm w-60 focus:outline-none focus:ring-1 focus:ring-epicfix-green"
            />
          </div>
          
          <Button className="bg-epicfix-green hover:bg-epicfix-green/90 text-white">
            <User size={18} className="mr-2" />
            <span className="hidden sm:inline">Войти</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
