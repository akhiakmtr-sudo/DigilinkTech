import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Services', 'Contact'];

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a href="#" className="flex-shrink-0 flex items-center">
          <img 
            src="https://res.cloudinary.com/dufnwlqeq/image/upload/v1765520588/WhatsApp_Image_2025-12-12_at_11.52.42_civhh6.jpg" 
            alt="Digilink Technologies Logo" 
            className="h-24 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-slate-600 hover:text-cyan-600 font-medium transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-slate-600 hover:text-cyan-600 font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;