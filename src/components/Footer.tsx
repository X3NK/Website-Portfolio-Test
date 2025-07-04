import React from 'react';
import { Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-grunge-dark border-t border-grunge-gray/20 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Brand */}
          <div className="mb-8">
            <div className="logo-container mb-4 flex justify-center">
              <svg 
                className="logo-svg" 
                width="60" 
                height="21" 
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
            <p className="text-grunge-gray/80 mb-4">
              Crafting digital experiences where analog aesthetics meet modern innovation.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-grunge-gray hover:text-grunge-purple transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-grunge-gray hover:text-grunge-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-grunge-gray hover:text-grunge-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-grunge-gray hover:text-grunge-purple transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="border-t border-grunge-gray/20 pt-8">
            <p className="text-grunge-gray/60 text-sm">
              2025 © Digital Utopia. All rights reserved. 
              <span className="text-grunge-purple"> Creativity lives here.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;