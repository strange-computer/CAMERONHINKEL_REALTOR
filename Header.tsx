import { Menu, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">CAMERON HINKEL</h1>
            <span className="ml-2 text-sm text-gray-600">REALTOR®</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
            <a href="#listings" className="text-gray-700 hover:text-gray-900 transition-colors">Listings</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
              <Phone className="w-4 h-4 mr-1" />
              (210) 555-0123
            </a>
            <a href="mailto:cameron@cameronhinkelrealtor.com" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
              <Mail className="w-4 h-4 mr-1" />
              Email
            </a>
          </div>
          
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}