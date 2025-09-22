import React, { useEffect, useState } from 'react';

const CyberCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let animationFrameId: number;
    
    const updateMousePosition = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      setPosition({ x: newX, y: newY });
      
      // Add trail point
      setTrail(prev => {
        const newTrail = [...prev, { x: newX, y: newY, id: Date.now() }];
        return newTrail.slice(-8); // Keep only last 8 trail points
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [data-interactive="true"], input, textarea, .hover-glow')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [data-interactive="true"], input, textarea, .hover-glow')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Don't show on mobile devices
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Trail Effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-50 rounded-full"
          style={{
            left: point.x - 3,
            top: point.y - 3,
            width: '6px',
            height: '6px',
            background: `rgba(0, 168, 204, ${(index + 1) * 0.1})`,
            transform: `scale(${(index + 1) * 0.1})`,
            transition: 'all 0.1s ease-out',
          }}
        />
      ))}
      
      {/* Main Cursor */}
      <div
        className={`
          fixed pointer-events-none z-50 rounded-full border-2 border-primary
          transition-all duration-200 ease-out
          ${isHovering 
            ? 'w-12 h-12 bg-primary/20 border-primary shadow-[0_0_20px_rgba(0,168,204,0.6)]' 
            : 'w-6 h-6 bg-primary/10 border-primary/60'
          }
          ${isClicking ? 'scale-75 bg-primary/40' : ''}
        `}
        style={{
          left: position.x - (isHovering ? 24 : 12),
          top: position.y - (isHovering ? 24 : 12),
          boxShadow: isHovering 
            ? '0 0 30px rgba(0, 168, 204, 0.6), inset 0 0 10px rgba(0, 168, 204, 0.3)'
            : '0 0 10px rgba(0, 168, 204, 0.3)',
        }}
      >
        {/* Inner dot */}
        <div 
          className={`
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            rounded-full bg-primary transition-all duration-200
            ${isHovering ? 'w-2 h-2' : 'w-1 h-1'}
          `}
        />
      </div>

      {/* Outer glow ring */}
      <div
        className={`
          fixed pointer-events-none z-40 rounded-full border border-primary/30
          transition-all duration-300 ease-out
          ${isHovering 
            ? 'w-20 h-20 bg-gradient-to-r from-primary/5 to-accent/5 animate-pulse' 
            : 'w-10 h-10 bg-primary/5'
          }
        `}
        style={{
          left: position.x - (isHovering ? 40 : 20),
          top: position.y - (isHovering ? 40 : 20),
        }}
      />
    </>
  );
};

export default CyberCursor;
