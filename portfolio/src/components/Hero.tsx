import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail, Code, Database, Cpu } from "lucide-react";
import profilePic from "../assets/profile.jpg"; // Import the profile image
import { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mouseNormalized, setMouseNormalized] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Normalize mouse position to -1 to 1 range for Spline interaction
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = -((e.clientY / window.innerHeight) * 2 - 1);
      setMouseNormalized({ x: normalizedX, y: normalizedY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    
    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('[data-interactive="true"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-visible bg-gradient-to-br from-black via-gray-900 to-black cursor-none">
      {/* Subtle Custom Cursor */}
      <div 
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div 
          className={`w-full h-full border transition-all duration-300 ${
            isHovering 
              ? 'border-orange-500 bg-orange-500/10 scale-125 rounded-sm' 
              : 'border-gray-400 bg-gray-400/5 scale-100 rounded-full'
          }`}
        />
      </div>

      {/* Subtle Cursor Trail */}
      <div 
        className="fixed w-1 h-1 bg-orange-500/60 pointer-events-none z-40 rounded-full"
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
          transition: 'all 0.4s ease-out',
          opacity: isHovering ? 0.6 : 0.3,
        }}
      />

      {/* Optimized Spline Background with faster loading and subtle interactive effects */}
      <div className="absolute inset-0 w-full h-full">
        {/* Fallback background while Spline loads */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        
        <spline-viewer 
          url="https://prod.spline.design/lkW4aVxwj9OAw0fg/scene.splinecode"
          loading-anim-type="spinner-small-dark"
          background="transparent"
          loading="lazy"
          style={{ 
            width: '100%', 
            height: '100%',
            filter: `blur(${2 + Math.abs(mouseNormalized.x) * 1}px) brightness(${0.5 + Math.abs(mouseNormalized.x) * 0.1})`,
            opacity: `${0.4 + Math.abs(mouseNormalized.y) * 0.1}`,
            pointerEvents: 'none',
            transform: `perspective(1000px) rotateX(${mouseNormalized.y * 2}deg) rotateY(${mouseNormalized.x * 2}deg) scale(${1 + Math.abs(mouseNormalized.x + mouseNormalized.y) * 0.02})`
          }}
        ></spline-viewer>
        
        {/* Square border inside the spline viewer */}
        <div className="absolute inset-8 border-2 border-orange-500/30 pointer-events-none"></div>
        <div className="absolute inset-16 border border-red-500/20 pointer-events-none"></div>
        
        {/* Subtle overlay that responds to cursor */}
        <div 
          className="absolute inset-0 transition-all duration-500"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,140,0,${0.05 + Math.abs(mouseNormalized.x) * 0.05}) 0%, rgba(0,0,0,0.8) 70%)`
          }}
        ></div>
      </div>

      {/* Background with subtle pattern overlay */}
      <div className="absolute inset-0 w-full h-full z-10">
        {/* Subtle radial gradients that follow cursor */}
        <div 
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,140,0,${0.03 + Math.abs(mouseNormalized.x) * 0.02}) 0%, transparent 60%)`
          }}
        ></div>
        <div 
          className="absolute inset-0 transition-all duration-900"
          style={{
            background: `radial-gradient(circle at ${window.innerWidth - mousePosition.x}px ${window.innerHeight - mousePosition.y}px, rgba(128,128,128,${0.02 + Math.abs(mouseNormalized.y) * 0.02}) 0%, transparent 60%)`
          }}
        ></div>
        
        {/* Subtle steel grid overlay */}
        <div 
          className="absolute inset-0 transition-opacity duration-500" 
          style={{
            backgroundImage: 'linear-gradient(rgba(179,179,179,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(179,179,179,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: 0.03 + Math.abs(mouseNormalized.x + mouseNormalized.y) * 0.01,
            transform: `translate(${mouseNormalized.x * 5}px, ${mouseNormalized.y * 5}px)`
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="animate-slide-up">
              {/* Professional greeting */}
              <div className="mb-4 text-orange-500 font-mono text-sm tracking-wider animate-fade-in-delay opacity-80 uppercase font-bold">
                &gt; SYSTEM.INITIALIZE("PROFESSIONAL_MODE")
              </div>

              {/* Main title - always visible with optional shuffle effect */}
              <h1 className="text-5xl lg:text-7xl font-black mb-6 relative uppercase tracking-tight bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                I'M VENUSHAN
              </h1>

              <h2 className="text-2xl lg:text-3xl text-gray-300 mb-6 animate-fade-in-delay flex items-center justify-center lg:justify-start gap-2 font-bold uppercase tracking-wide">
                <Cpu className="w-8 h-8 text-orange-500 animate-pulse" />
                FULL STACK DEVELOPER
              </h2>

              <p className="text-lg text-gray-300 mb-8 max-w-2xl animate-fade-in-delay leading-relaxed">
                Delivering innovative, reliable, and scalable digital solutions with expertise in{" "}
                <span className="text-orange-500 font-bold hover:text-red-500 transition-colors cursor-default uppercase">
                  <Code className="w-4 h-4 inline mr-1" />
                  MERN STACK
                </span>, {" "}
                <span className="text-gray-400 font-bold hover:text-orange-500 transition-colors cursor-default uppercase">
                  <Database className="w-4 h-4 inline mr-1" />
                  SPRING BOOT
                </span>, {" "}
                <span className="text-orange-400 font-bold hover:text-red-500 transition-colors cursor-default uppercase">
                  PYTHON
                </span>, and {" "}
                <span className="text-gray-400 font-bold hover:text-orange-500 transition-colors cursor-default uppercase">
                  JAVA
                </span>.
                <br />
                <span className="text-sm text-gray-500 font-mono mt-2 block uppercase font-bold">
                  // Professional software engineering in action
                </span>
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-delay">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold uppercase tracking-wide hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-1 transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  data-interactive="true"
                >
                  <Code className="w-4 h-4 mr-2" />
                  VIEW PROJECTS
                </Button>
                <a
                  href="/assets/MY-CV1.pdf"
                  download
                  onClick={(e) => {
                    e.preventDefault();
                    const link = document.createElement("a");
                    link.href = "/assets/MY-CV1.pdf";
                    link.download = "MY-CV1.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold uppercase tracking-wide hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300"
                    data-interactive="true"
                  >
                    <Database className="w-4 h-4 mr-2" />
                    DOWNLOAD CV
                  </Button>
                </a>
              </div>

              {/* Enhanced Social Links with Responsive Cursor Effects */}
              <div className="flex gap-6 justify-center lg:justify-start animate-fade-in-delay">
                <a 
                  href="https://github.com/VenushanT" 
                  className="group p-4 rounded-lg bg-gray-800/50 hover:bg-orange-600/20 border border-gray-600/50 hover:border-orange-500/50 hover:scale-110 transition-all duration-300 relative overflow-hidden"
                  data-interactive="true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Github className="w-6 h-6 relative z-10 text-gray-300 group-hover:text-orange-500 transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/venushan-thiruchelvam/" 
                  className="group p-4 rounded-lg bg-gray-800/50 hover:bg-orange-600/20 border border-gray-600/50 hover:border-orange-500/50 hover:scale-110 transition-all duration-300 relative overflow-hidden"
                  data-interactive="true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Linkedin className="w-6 h-6 relative z-10 text-gray-300 group-hover:text-orange-500 transition-colors" />
                </a>
                <a 
                  href="mailto:venushanthiruchelvam@gmail.com" 
                  className="group p-4 rounded-lg bg-gray-800/50 hover:bg-orange-600/20 border border-gray-600/50 hover:border-orange-500/50 hover:scale-110 transition-all duration-300 relative overflow-hidden"
                  data-interactive="true"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Mail className="w-6 h-6 relative z-10 text-gray-300 group-hover:text-orange-500 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Profile Picture with Responsive Cursor Effects */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative group" data-interactive="true">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="absolute -inset-4 border-2 border-orange-500/20 rounded-full animate-spin group-hover:border-orange-500/40" style={{ animationDuration: '10s' }}></div>
                <div className="absolute -inset-8 border border-gray-600/10 rounded-full animate-spin group-hover:border-orange-500/20" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              </div>
              
              {/* Profile image - Updated to use public path */}
              <img 
                src={profilePic}
                alt="Venushan - Full Stack Developer"
                className="relative w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-gray-600/50 group-hover:border-orange-500/70 shadow-2xl hover:scale-105 transition-all duration-500"
                data-interactive="true"
              />
              
              {/* Tech icons floating around */}
              <div className="absolute -top-4 -right-4 p-2 bg-orange-500/10 rounded-full border border-orange-500/30 animate-float" data-interactive="true">
                <Code className="w-5 h-5 text-orange-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 p-2 bg-red-500/10 rounded-full border border-red-500/30 animate-float" style={{ animationDelay: '1s' }} data-interactive="true">
                <Database className="w-5 h-5 text-red-500" />
              </div>
              <div className="absolute top-1/2 -right-8 p-2 bg-gray-500/10 rounded-full border border-gray-500/30 animate-float" style={{ animationDelay: '2s' }} data-interactive="true">
                <Cpu className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <div className="text-orange-500 text-xs font-mono mb-2 opacity-80">scroll_down()</div>
          <ArrowDown className="w-6 h-6 text-orange-500 animate-pulse" />
          <div className="w-px h-8 bg-gradient-to-b from-orange-500 to-transparent mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;