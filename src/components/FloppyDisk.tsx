import React from 'react';

const FloppyDisk = () => {
  return (
    <div className="floppy-3d-container relative">
      <div className="floppy-3d-wrapper">
        <img
          src="/src/assets/Дискета_скан копія copy.png"
          alt="Digital Utopia Floppy Disk"
          className="floppy-3d-image w-80 h-80 object-contain"
        />
        
        {/* 3D Shadow Effect */}
        <div className="floppy-shadow"></div>
        
        {/* Reflection Effect */}
        <div className="floppy-reflection">
          <img
            src="/src/assets/Дискета_скан копія copy.png"
            alt=""
            className="w-80 h-80 object-contain opacity-20"
          />
        </div>
      </div>
    </div>
  );
};

export default FloppyDisk;