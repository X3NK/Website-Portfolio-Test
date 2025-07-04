import React from 'react';

const FloppyDisk = () => {
  return (
    <div className="floppy-3d relative">
      <div className="w-64 h-64 bg-gradient-to-br from-grunge-gray to-grunge-purple rounded-lg shadow-2xl relative overflow-hidden">
        {/* Floppy Disk Design */}
        <div className="absolute inset-2 bg-grunge-dark rounded-md">
          {/* Label Area */}
          <div className="absolute top-4 left-4 right-4 h-16 bg-grunge-gray rounded-sm flex items-center justify-center">
            <div className="text-grunge-dark font-bold text-sm">
              DIGITAL UTOPIA
            </div>
          </div>
          
          {/* Center Hole */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-grunge-gray rounded-full"></div>
          
          {/* Bottom Section */}
          <div className="absolute bottom-4 left-4 right-4 space-y-2">
            <div className="text-grunge-gray text-xs font-medium">
              DENYS USACHIK
            </div>
            <div className="text-grunge-gray/60 text-xs">
              Designer & Graphic Developer
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-24 left-6 w-4 h-4 border-2 border-grunge-purple"></div>
          <div className="absolute top-24 right-6 w-4 h-4 border-2 border-grunge-purple rotate-45"></div>
          <div className="absolute bottom-20 left-6 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-grunge-purple"></div>
          
          {/* QR Code Mockup */}
          <div className="absolute top-32 left-6 w-16 h-16 bg-grunge-gray rounded-sm p-1">
            <div className="w-full h-full bg-grunge-dark rounded-sm grid grid-cols-4 gap-px p-1">
              {Array.from({ length: 16 }, (_, i) => (
                <div
                  key={i}
                  className={`bg-grunge-gray rounded-sm ${
                    Math.random() > 0.5 ? 'opacity-100' : 'opacity-30'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Metallic Slider */}
        <div className="absolute bottom-2 right-2 w-6 h-6 bg-gradient-to-br from-grunge-gray to-grunge-purple rounded-sm shadow-lg"></div>
      </div>
    </div>
  );
};

export default FloppyDisk;