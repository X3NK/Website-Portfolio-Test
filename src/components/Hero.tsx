import React from 'react';
import { ArrowRight, ExternalLink, Download } from 'lucide-react';
import FloppyDisk from './FloppyDisk';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden grunge-texture grain-effect">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                <span className="text-grunge-gray">A PLACE WHERE</span>
                <br />
                <span className="text-grunge-purple">ANALOG</span>
                <span className="text-grunge-gray"> BREATHES IN</span>
                <br />
                <span className="text-grunge-gray">HARMONY WITH </span>
                <span className="text-grunge-purple">DIGITAL</span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-grunge-gray text-grunge-dark px-8 py-3 font-semibold hover:bg-grunge-purple hover:text-grunge-gray transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  LINKS
                  <ExternalLink size={16} />
                </span>
              </button>
              <button className="bg-transparent border-2 border-grunge-gray text-grunge-gray px-8 py-3 font-semibold hover:bg-grunge-gray hover:text-grunge-dark transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  RESUME
                  <Download size={16} />
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Floppy Disk */}
          <div className="flex justify-center lg:justify-end">
            <FloppyDisk />
          </div>
        </div>
      </div>

      {/* Bottom Navigation Hints */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-8 text-xs text-grunge-gray/60">
        <span>WELCOME TO UTOPIA</span>
        <div className="w-8 h-px bg-grunge-gray/40"></div>
        <span>DIGITAL HARDCORE</span>
        <ArrowRight size={12} className="animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;