import React, { useState } from 'react';
import { Menu, X, Church } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2">
              <Church className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Ashwas Church of God</span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('events')} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              Events
            </button>
            <button onClick={() => scrollToSection('prayer-request')} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              Prayer Request
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              Contact Us
            </button>
            <img src='' alt="logo" className="h-10 w-auto rounded-2xl" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('events')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600">
              Events
            </button>
            <button onClick={() => scrollToSection('prayer-request')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600">
              Prayer Request
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}