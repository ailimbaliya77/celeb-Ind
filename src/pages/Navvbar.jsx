import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navvbar(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-xl sm:text-2xl font-bold">
          <span className="text-white">Shaadi</span>
          <span className="text-yellow-400">Global</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 lg:space-x-6 text-black">
          <Link to="/" className="text-sm lg:text-base hover:text-white transition">Home</Link>
          <Link to="/wedding-types" className="text-sm lg:text-base hover:text-white transition">Wedding Types</Link>
          <Link to="/packages" className="text-sm lg:text-base hover:text-white transition">Packages</Link>
          <Link to="/services" className="text-sm lg:text-base hover:text-white transition">Services</Link>
          <Link to="/about-us" className="text-sm lg:text-base hover:text-white transition">About Us</Link>
          <Link to="/contact" className="text-sm lg:text-base hover:text-white transition">Contact</Link>
        </div>
        
        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          <Link to="/login" className="text-sm lg:text-base text-black hover:text-yellow-300 transition">Log In</Link>
          <Link to="/signup" className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1.5 lg:px-4 lg:py-2 rounded text-sm lg:text-base transition">Sign Up</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMobileMenu}
            className="text-black hover:text-yellow-300 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-purple-50 text-black absolute top-full left-0 right-0 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-100 hover:text-pink-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/wedding-types" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-100 hover:text-pink-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Wedding Types
            </Link>
            <Link 
              to="/packages" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-100 hover:text-pink-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Packages
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-100 hover:text-pink-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about-us" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-100 hover:text-pink-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-100 hover:text-pink-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-4 px-4">
              <Link 
                to="/login" 
                className="text-black hover:text-pink-600 transition px-4 py-2 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log In
              </Link>
              <Link 
                to="/signup" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded text-base font-medium transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navvbar
