import { Card } from "./ui/card";
import { Code, Database, Server, Smartphone, Brain, Cpu } from "lucide-react";
import { FaHtml5, FaJs, FaReact, FaGithub, FaPython, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiJupyter, SiSpringboot, SiTypescript, SiFigma, SiMongodb, SiMysql } from 'react-icons/si';
import SplineViewer from './SplineViewer';

import Navigation from "./Navigation";

const About = () => {
  // ...existing code...

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 px-6 relative">
      {/* Navigation Bar at the top */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navigation />
      </div>
      <div className="container mx-auto relative z-10 max-w-7xl pt-20">
        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8 h-full">
          
          {/* Left Column - Large Card with Laptop */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-96 relative overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-full h-48 bg-gradient-to-br from-gray-900 to-black rounded-xl mb-6 relative overflow-hidden border border-gray-700">
                  <div className="absolute top-3 left-3 flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="mt-8 p-4 text-center">
                    <div className="text-orange-500 text-6xl font-black mb-2 tracking-wider">PROFILE</div>
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mx-auto shadow-lg"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white text-xl font-black mb-2 uppercase tracking-wide">Delivering Reliable and Innovative Solutions</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Top Card - Time Zone */}
            <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-44 relative overflow-hidden group hover:shadow-xl hover:shadow-orange-500/15 transition-all duration-300">
              <div className="flex items-center justify-between h-full">
                <div>
                  <p className="text-gray-300 text-sm mb-2 font-medium uppercase tracking-wide">Dedicated to Professional Excellence</p>
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg relative shadow-lg">
                  <div className="absolute inset-2 bg-gradient-to-br from-orange-600 to-red-700 rounded-md"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-sm"></div>
                </div>
              </div>
            </div>


          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Top Card - Passion */}
            <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-32 relative overflow-hidden group hover:shadow-xl hover:shadow-orange-500/15 transition-all duration-300">
              <h3 className="text-white text-lg font-black mb-2 uppercase tracking-wide">Consistent, High-Quality Code Delivery</h3>
            </div>

            {/* Middle Card - Project Collaboration */}
            <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm border border-orange-500/40 rounded-2xl p-8 h-40 relative overflow-hidden group hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-white text-lg font-black mb-4 uppercase tracking-wide">Open to Collaboration</h3>
                <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-bold uppercase tracking-wide shadow-lg">
                  Contact Me
                </button>
              </div>
            </div>

            {/* Bottom Card - Current Project */}
            <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-44 relative overflow-hidden group hover:shadow-xl hover:shadow-orange-500/15 transition-all duration-300">
              <div className="mb-4">
                <p className="text-orange-400 text-xs uppercase tracking-wider mb-2 font-bold">ONGOING PROJECT</p>
                <h3 className="text-white text-lg font-black mb-3 uppercase">Developing PilgrimFlow</h3>
              </div>
              <div className="bg-black/70 rounded-lg p-3 font-mono text-xs border border-gray-800">
                <div className="text-orange-400 mb-1">{"// Professional software engineering in progress"}</div>
                <div className="text-gray-300 mb-1">{"import { Reliability } from 'infrastructure';"}</div>
                <div className="text-gray-300 mb-1">{"import { Scalability } from 'architecture';"}</div>
                <div className="text-orange-400">{"console.log('Delivering value...');"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Spline Ring Section */}
      <div className="min-h-screen bg-transparent py-20 px-6 relative flex items-center justify-center">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight">
              TECH STACK <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">SHOWCASE</span>
            </h2>
            <p className="text-gray-400 text-lg font-medium uppercase tracking-wide">
              Where Engineering Meets Innovation
            </p>
          </div>

          {/* Ring-shaped Spline Container */}
          <div className="relative w-full max-w-2xl mx-auto aspect-square">
            {/* Outer ring with blur effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              {/* Blur frame ring */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0%, rgba(255, 140, 0, 0.3) 25%, rgba(239, 68, 68, 0.3) 50%, rgba(255, 140, 0, 0.3) 75%, transparent 100%)',
                  filter: 'blur(20px)',
                  animation: 'spin 20s linear infinite'
                }}
              ></div>
              
              {/* Inner blur ring */}
              <div 
                className="absolute inset-4 rounded-full"
                style={{
                  background: 'conic-gradient(from 180deg, transparent 0%, rgba(128, 128, 128, 0.2) 25%, rgba(255, 140, 0, 0.4) 50%, rgba(128, 128, 128, 0.2) 75%, transparent 100%)',
                  filter: 'blur(15px)',
                  animation: 'spin 15s linear infinite reverse'
                }}
              ></div>

              {/* Optimized Spline viewer in the center with faster loading */}
              <div className="absolute inset-12 rounded-full overflow-hidden border-2 border-orange-500/30 backdrop-blur-sm">
                {/* Fallback background while Spline loads */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-black to-red-900/30 rounded-full"></div>
                
                <SplineViewer 
                  url="https://prod.spline.design/4VEX8s8-niUeURYk/scene.splinecode"
                  loading-anim-type="spinner-small-dark"
                  background="transparent"
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    borderRadius: '50%',
                    filter: 'brightness(1.2) contrast(1.1)',
                    opacity: 1,
                  }}
                />
                
                {/* Overlay gradient to blend with ring */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.8) 100%)'
                  }}
                ></div>
              </div>

              {/* Animated particles around the ring */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-orange-500 rounded-full opacity-60"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 45}deg) translateY(-${200 + i * 10}px)`,
                      animation: `spin ${10 + i * 2}s linear infinite`
                    }}
                  ></div>
                ))}
              </div>

              {/* Glowing inner border */}
              <div 
                className="absolute inset-12 rounded-full border border-orange-500/50"
                style={{
                  boxShadow: 'inset 0 0 30px rgba(255, 140, 0, 0.3), 0 0 30px rgba(255, 140, 0, 0.2)'
                }}
              ></div>
            </div>

            {/* Tech Stack Icons in circle formation around the ring */}
            <div className="absolute inset-0">
              {/* React - 0 degrees (top) */}
              <div 
                className="absolute bg-gray-800/80 px-4 py-3 rounded-xl border border-cyan-400/40 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(0deg) translateY(-280px) rotate(0deg)'
                }}
              >
                <FaReact className="text-cyan-400 text-3xl" title="React" />
              </div>
              
              {/* JavaScript - 30 degrees */}
              <div 
                className="absolute bg-gray-800/80 px-4 py-3 rounded-xl border border-yellow-400/40 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(30deg) translateY(-280px) rotate(-30deg)'
                }}
              >
                <FaJs className="text-yellow-400 text-3xl" title="JavaScript" />
              </div>
              
              {/* TypeScript - 60 degrees */}
              <div 
                className="absolute bg-gray-800/80 px-4 py-3 rounded-xl border border-blue-500/40 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(60deg) translateY(-280px) rotate(-60deg)'
                }}
              >
                <SiTypescript className="text-blue-500 text-3xl" title="TypeScript" />
              </div>
              
              {/* Node.js - 90 degrees (right) */}
              <div 
                className="absolute bg-gray-800/80 px-4 py-3 rounded-xl border border-green-600/40 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(90deg) translateY(-280px) rotate(-90deg)'
                }}
              >
                <FaNodeJs className="text-green-600 text-3xl" title="Node.js" />
              </div>
              
              {/* MongoDB - 120 degrees */}
              <div 
                className="absolute bg-gray-800/80 px-4 py-3 rounded-xl border border-green-500/40 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(120deg) translateY(-280px) rotate(-120deg)'
                }}
              >
                <SiMongodb className="text-green-500 text-3xl" title="MongoDB" />
              </div>
              
              {/* Java - 150 degrees */}
              <div 
                className="absolute bg-gray-800/80 px-4 py-3 rounded-xl border border-orange-700/40 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(150deg) translateY(-280px) rotate(-150deg)'
                }}
              >
                <FaJava className="text-orange-700 text-3xl" title="Java" />
              </div>
              
              {/* Python - 180 degrees (bottom) */}
              <div 
                className="absolute bg-gray-800/80 px-4 py-3 rounded-xl border border-yellow-500/40 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(180deg) translateY(-280px) rotate(-180deg)'
                }}
              >
                <FaPython className="text-yellow-500 text-3xl" title="Python" />
              </div>
              
              {/* Jupyter Notebook - 210 degrees */}
              <div 
                className="absolute bg-gray-800/80 px-4 py-3 rounded-xl border border-orange-400/40 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(210deg) translateY(-280px) rotate(-210deg)'
                }}
              >
                <SiJupyter className="text-orange-400 text-3xl" title="Jupyter Notebook" />
              </div>
              
              {/* Spring Boot - 240 degrees */}
              <div 
                className="absolute bg-gray-800/80 px-4 py-3 rounded-xl border border-green-700/40 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(240deg) translateY(-280px) rotate(-240deg)'
                }}
              >
                <SiSpringboot className="text-green-700 text-3xl" title="Spring Boot" />
              </div>
              
              {/* GitHub - 270 degrees (left) */}
              <div 
                className="absolute bg-gray-800/80 px-4 py-3 rounded-xl border border-white/40 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(270deg) translateY(-280px) rotate(-270deg)'
                }}
              >
                <FaGithub className="text-white text-3xl" title="GitHub" />
              </div>
              
              {/* Figma - 300 degrees */}
              <div 
                className="absolute bg-gray-800/80 px-4 py-3 rounded-xl border border-pink-500/40 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(300deg) translateY(-280px) rotate(-300deg)'
                }}
              >
                <SiFigma className="text-pink-500 text-3xl" title="Figma" />
              </div>
              
              {/* SQL - 330 degrees */}
              <div 
                className="absolute bg-gray-800/80 px-4 py-3 rounded-xl border border-blue-400/40 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(330deg) translateY(-280px) rotate(-330deg)'
                }}
              >
                <SiMysql className="text-blue-400 text-3xl" title="SQL" />
              </div>
            </div>
          </div>

          {/* Bottom description */}
          <div className="text-center mt-16">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              PROJECT PORTFOLIO
            </h2>
            <p className="text-gray-400 text-base font-medium max-w-2xl mx-auto leading-relaxed mb-2">
              A curated selection of projects demonstrating expertise in the MERN stack, Spring Boot, and Python for modern, scalable software solutions.
            </p>
            <p className="text-orange-500 font-bold uppercase mb-2">Featured Projects</p>
            <p className="text-gray-400 text-base font-medium max-w-2xl mx-auto leading-relaxed">
              Welcome! I am Venushan, a Full Stack Developer specializing in building robust, scalable, and innovative digital solutions. My expertise spans the MERN stack, Spring Boot, Python, and Java, enabling me to deliver high-quality applications tailored to client needs.<br />
              <span className="text-orange-500 font-bold uppercase">......</span>
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Tech Stack Arsenal Section */}
      <div className="min-h-screen bg-transparent py-20 px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="relative inline-block mb-8">
             
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-4 h-4 border-2 border-orange-500 rotate-45 animate-spin" style={{ animationDuration: '3s' }}></div>
              <div className="absolute -top-4 -right-4 w-4 h-4 border-2 border-red-500 rotate-45 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}></div>
              <div className="absolute -bottom-4 -left-4 w-4 h-4 border-2 border-orange-500 rotate-45 animate-spin" style={{ animationDuration: '4s' }}></div>
              <div className="absolute -bottom-4 -right-4 w-4 h-4 border-2 border-red-500 rotate-45 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}></div>
            </div>
            
            
            <div className="relative mx-auto w-32">
              <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/30 to-red-600/30 rounded-full blur-sm"></div>
            </div>
          </div>

         

          {/* Tech Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend Category */}
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-center">
                <Smartphone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-white text-xl font-black mb-3 uppercase">Frontend</h3>
                <p className="text-blue-300 text-sm font-medium uppercase mb-4">User Interface Development</p>
                <div className="space-y-2">
                  <div className="bg-blue-500/20 rounded-lg px-3 py-2">
                    <span className="text-blue-200 text-xs font-bold uppercase">React • TypeScript</span>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg px-3 py-2">
                    <span className="text-blue-200 text-xs font-bold uppercase">Tailwind • CSS3</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Category */}
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300">
              <div className="text-center">
                <Server className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-white text-xl font-black mb-3 uppercase">Backend</h3>
                <p className="text-green-300 text-sm font-medium uppercase mb-4">Server-Side Engineering</p>
                <div className="space-y-2">
                  <div className="bg-green-500/20 rounded-lg px-3 py-2">
                    <span className="text-green-200 text-xs font-bold uppercase">Node.js • Express</span>
                  </div>
                  <div className="bg-green-500/20 rounded-lg px-3 py-2">
                    <span className="text-green-200 text-xs font-bold uppercase">Spring Boot • Java</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Database Category */}
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8 hover:border-orange-400/50 transition-all duration-300">
              <div className="text-center">
                <Database className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-white text-xl font-black mb-3 uppercase">Database</h3>
                <p className="text-orange-300 text-sm font-medium uppercase mb-4">Data Management</p>
                <div className="space-y-2">
                  <div className="bg-orange-500/20 rounded-lg px-3 py-2">
                    <span className="text-orange-200 text-xs font-bold uppercase">MongoDB • NoSQL</span>
                  </div>
                  <div className="bg-orange-500/20 rounded-lg px-3 py-2">
                    <span className="text-orange-200 text-xs font-bold uppercase">SQL • Database</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI/ML Category */}
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-center">
                <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white text-xl font-black mb-3 uppercase">AI & Machine Learning</h3>
                <p className="text-purple-300 text-sm font-medium uppercase mb-4">Artificial Intelligence</p>
                <div className="space-y-2">
                  <div className="bg-purple-500/20 rounded-lg px-3 py-2">
                    <span className="text-purple-200 text-xs font-bold uppercase">Python • Jupyter</span>
                  </div>
                  <div className="bg-purple-500/20 rounded-lg px-3 py-2">
                    <span className="text-purple-200 text-xs font-bold uppercase">Data Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-white text-2xl font-black mb-4 uppercase tracking-wide">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-gray-300 mb-6 font-medium">
                Equipped with modern technologies and proven frameworks, I am prepared to deliver solutions for your most challenging projects. Please feel free to reach out to discuss how I can contribute to your next project or team.
              </p>
              <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/30">
                <Cpu className="w-5 h-5 inline mr-2" />
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;