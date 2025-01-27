import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src="https://dhan.co/assets/images/dhan-logo.svg" alt="Dhan" className="h-8" />
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Pricing
              </a>
              <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Support
              </a>
              <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                About
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button className="mr-4 text-gray-600 hover:text-gray-900 font-medium">
                Login
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
                Open Free Account
              </button>
            </div>
            <div className="md:hidden ml-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Products
            </a>
            <a href="#" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Pricing
            </a>
            <a href="#" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Support
            </a>
            <a href="#" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}