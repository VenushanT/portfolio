import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Menu, X, User, Code, Database, Brain } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home", action: null },
    { label: "About", href: null, action: () => setIsAboutModalOpen(true) },
    { label: "Projects", href: "#projects", action: null },
    { label: "Contact", href: "#contact", action: null }
  ];

  const handleNavClick = (item) => {
    if (item.action) {
      item.action();
    } else if (item.href) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const closeAboutModal = () => {
    setIsAboutModalOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-orange-500/30 shadow-lg shadow-orange-500/10"
          : "bg-black/40 backdrop-blur-lg border-b border-orange-500/10"
      }`}
        style={{
          boxShadow: isScrolled
            ? '0 4px 32px 0 rgba(255,140,0,0.10), 0 1.5px 0 0 rgba(255,140,0,0.10)'
            : '0 2px 16px 0 rgba(255,140,0,0.06)',
          borderImage: 'linear-gradient(90deg, #ff8c00 0%, #ef4444 100%) 1',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 relative">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-3xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent uppercase tracking-wider drop-shadow-lg animate-pulse select-none">
                VENUSHAN
              </span>
              <span className="ml-2 text-lg font-bold text-orange-400 tracking-widest hidden sm:inline-block opacity-80 animate-fade-in">
                .DEV
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="relative text-gray-200 hover:text-orange-400 transition-colors duration-300 font-bold uppercase tracking-wide text-sm px-2 py-1 group cursor-pointer"
                >
                  <span>{item.label}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden rounded-full border border-orange-500/30 shadow-orange-500/10 shadow-lg bg-black/40 hover:bg-orange-500/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7 text-orange-400" />
              ) : (
                <Menu className="w-7 h-7 text-orange-400" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-2xl border-b-2 border-orange-500/30 shadow-2xl animate-fade-in">
              <div className="px-6 py-6 space-y-6 flex flex-col items-center">
                {navItems.map((item, idx) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="relative block text-lg text-gray-200 hover:text-orange-400 font-bold uppercase tracking-widest px-4 py-2 group cursor-pointer"
                    style={{
                      transitionDelay: `${idx * 60}ms`
                    }}
                  >
                    <span>{item.label}</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full group-hover:w-full transition-all duration-300"></span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* About Modal */}
      {isAboutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeAboutModal}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-600/50 rounded-2xl p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-black text-white uppercase tracking-wide">
                  <span className="text-orange-500">ABOUT</span> ME
                </h2>
                <button
                  onClick={closeAboutModal}
                  className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400 hover:text-white" />
                </button>
              </div>

              {/* Profile Section */}
              <div className="mb-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-wide">
                  VENUSHAN THIRUCHELVAM
                </h3>
                <p className="text-orange-400 font-bold uppercase tracking-wide">
                  Full Stack Developer
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mt-2"></div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                {/* About Description */}
                <div>
                  <h4 className="text-xl font-black text-orange-400 mb-3 uppercase">Professional Overview</h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    I am a passionate Full Stack Developer with expertise in modern web technologies. 
                    I specialize in building robust, scalable, and innovative digital solutions using 
                    the MERN stack, Spring Boot, Python, and Java. With a strong foundation in both 
                    frontend and backend development, I deliver high-quality applications that meet 
                    client needs and exceed expectations.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    My approach to development focuses on clean code, user experience, and cutting-edge 
                    technologies. I'm always eager to take on new challenges and contribute to innovative 
                    projects that make a real impact.
                  </p>
                </div>

                {/* Skills Grid */}
                <div>
                  <h4 className="text-lg font-bold text-orange-400 mb-4 uppercase">Core Expertise</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {/* Frontend */}
                    <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4">
                      <div className="text-center">
                        <Code className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                        <h5 className="text-white font-black mb-2 uppercase">Frontend</h5>
                        <div className="space-y-1 text-xs">
                          <div className="bg-blue-500/20 rounded px-2 py-1">
                            <span className="text-blue-200 font-bold">React • TypeScript</span>
                          </div>
                          <div className="bg-blue-500/20 rounded px-2 py-1">
                            <span className="text-blue-200 font-bold">Tailwind • CSS3</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Backend */}
                    <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-4">
                      <div className="text-center">
                        <Database className="w-8 h-8 text-green-400 mx-auto mb-2" />
                        <h5 className="text-white font-black mb-2 uppercase">Backend</h5>
                        <div className="space-y-1 text-xs">
                          <div className="bg-green-500/20 rounded px-2 py-1">
                            <span className="text-green-200 font-bold">Node.js • Express</span>
                          </div>
                          <div className="bg-green-500/20 rounded px-2 py-1">
                            <span className="text-green-200 font-bold">Spring Boot • Java</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* AI/ML */}
                    <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4">
                      <div className="text-center">
                        <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                        <h5 className="text-white font-black mb-2 uppercase">AI & ML</h5>
                        <div className="space-y-1 text-xs">
                          <div className="bg-purple-500/20 rounded px-2 py-1">
                            <span className="text-purple-200 font-bold">Python • Jupyter</span>
                          </div>
                          <div className="bg-purple-500/20 rounded px-2 py-1">
                            <span className="text-purple-200 font-bold">Data Analysis</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-lg font-bold text-orange-400 mb-3 uppercase">Key Achievements</h4>
                  <ul className="space-y-2">
                    <li className="text-gray-300 flex items-start">
                      <span className="text-orange-500 mr-2">▶</span>
                      Successfully delivered 15+ full-stack projects with 99.9% uptime
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-orange-500 mr-2">▶</span>
                      Expertise in modern frameworks: React, Spring Boot, Express.js
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-orange-500 mr-2">▶</span>
                      Experience with AI/ML integration using Python and data analytics
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-orange-500 mr-2">▶</span>
                      Strong background in database design (MongoDB, PostgreSQL, MySQL)
                    </li>
                  </ul>
                </div>

                {/* Contact CTA */}
                <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-orange-500/30 rounded-xl p-6 text-center">
                  <h4 className="text-white font-black mb-2 uppercase">Ready to Collaborate?</h4>
                  <p className="text-gray-300 mb-4">
                    Let's discuss how I can contribute to your next project or team.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <a
                      href="#contact"
                      onClick={() => {
                        closeAboutModal();
                        setTimeout(() => {
                          const element = document.querySelector('#contact');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 300);
                      }}
                      className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-2 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
                    >
                      Get In Touch
                    </a>
                    <a
                      href="#projects"
                      onClick={() => {
                        closeAboutModal();
                        setTimeout(() => {
                          const element = document.querySelector('#projects');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 300);
                      }}
                      className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-2 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
                    >
                      View Projects
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;