import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onAdminAccess?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAdminAccess }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [adminClicks, setAdminClicks] = useState(0);

  const navItems = [
    { name: 'PORTFOL:O', href: '#portfolio' },
    { name: 'ABOUT PRO/ECT', href: '#about' },
    { name: 'CONTA\\T', href: '#contact' },
  ];

  const handleLogoClick = () => {
    setAdminClicks(prev => prev + 1);
    if (adminClicks >= 4) {
      onAdminAccess?.();
      setAdminClicks(0);
    }
    // Reset counter after 3 seconds if not completed
    setTimeout(() => {
      if (adminClicks < 4) {
        setAdminClicks(0);
      }
    }, 3000);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-grunge-dark/90 backdrop-blur-sm border-b border-grunge-gray/20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="logo-container cursor-pointer" onClick={handleLogoClick}>
            <svg 
              className="logo-svg" 
              width="80" 
              height="29" 
              viewBox="0 0 745 266"
              fill="currentColor"
            >
              <path d="M0 132.838V265.676H79.7028H159.406V239.108V212.541H185.973H212.541V132.838V53.1352H185.973H159.406V26.5676V3.8147e-06H79.7028H0V132.838ZM157.192 132.838V212.541H105.163H53.1352V132.838V53.1352H105.163H157.192V132.838Z" fill="currentColor"/>
              <path d="M426.189 53.1352V106.27H399.621H373.053V185.973V265.676H399.621H426.189V185.973V106.27H452.756H479.324V53.1352V3.8147e-06H452.756H426.189V53.1352Z" fill="currentColor"/>
              <path d="M532.459 132.838V265.676H638.73H745V132.838V3.8147e-06H718.432H691.865V106.27V212.541H638.73H585.594V106.27V3.8147e-06H559.027H532.459V132.838Z" fill="currentColor"/>
              <path d="M266.783 79.7028V106.27H293.351H319.918V79.7028V53.1351H293.351H266.783V79.7028Z" fill="currentColor"/>
              <path d="M266.783 185.973V212.541H293.351H319.918V185.973V159.406H293.351H266.783V185.973Z" fill="currentColor"/>
            </svg>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl font-bold text-grunge-gray hover:text-grunge-purple transition-colors duration-300 tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-grunge-gray hover:text-grunge-purple transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-grunge-gray/20">
            <div className="flex flex-col space-y-4 pt-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xl font-bold text-grunge-gray hover:text-grunge-purple transition-colors duration-300 tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;