import React, { useRef, useEffect } from 'react';

const FloppyDisk = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;

    if (!container || !wrapper) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / centerY * -15;
      const rotateY = (x - centerX) / centerX * 15;
      
      wrapper.style.transform = `
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        translateZ(50px) 
        scale(1.05)
      `;
    };

    const handleMouseLeave = () => {
      wrapper.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="floppy-3d-container relative"
    >
      <div ref={wrapperRef} className="floppy-3d-wrapper">
        <img
          src="/src/assets/Дискета_скан копія copy.png"
          alt="Digital Utopia Floppy Disk"
          className="floppy-3d-image w-96 h-96 object-contain"
        />
        
        {/* 3D Shadow Effect */}
        <div className="floppy-shadow"></div>
        
        {/* Reflection Effect */}
        <div className="floppy-reflection">
          <img
            src="/src/assets/Дискета_скан копія copy.png"
            alt=""
            className="w-96 h-96 object-contain opacity-20"
          />
        </div>
      </div>
    </div>
  );
};

export default FloppyDisk;