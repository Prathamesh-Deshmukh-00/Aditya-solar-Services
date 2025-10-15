import React, { useState } from 'react'
import { Sun, Phone, Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Sun className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold">ADITYA SOLAR ENERGY</h1>
                <p className="text-xs text-blue-200 italic hidden sm:block">Your Partner in Sustainable Solar Solutions™</p>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-6">
              <a href="#services" className="hover:text-orange-400 transition font-medium text-sm">Services</a>
              <a href="#about" className="hover:text-orange-400 transition font-medium text-sm">About</a>
              <a href="#hero-form" className="hover:text-orange-400 transition font-medium text-sm">Contact</a>
            </nav>

            <div className="flex items-center space-x-3">
              <a href="tel:9284287565" className="hidden md:flex items-center space-x-2 bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
                <Phone className="w-4 h-4" />
                <span>9284287565</span>
              </a>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-blue-800 border-t border-blue-700">
            <nav className="flex flex-col space-y-2 px-4 py-4">
              <a 
                href="#services" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-orange-400 transition font-medium text-sm py-2"
              >
                Services
              </a>
              <a 
                href="#about" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-orange-400 transition font-medium text-sm py-2"
              >
                About
              </a>
              <a 
                href="#hero-form" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-orange-400 transition font-medium text-sm py-2"
              >
                Contact
              </a>
              <a 
                href="tel:9284287565" 
                className="flex items-center space-x-2 bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition w-fit"
              >
                <Phone className="w-4 h-4" />
                <span>9284287565</span>
              </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  )
}

export default Header