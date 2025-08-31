import { Card } from "./ui/card";
import { Code, Database, Server, Smartphone, Brain, Cpu } from "lucide-react";
import ReactOriginal from 'devicons-react/icons/ReactOriginal';
import NodejsOriginal from 'devicons-react/icons/NodejsOriginal';
import MongodbOriginal from 'devicons-react/icons/MongodbOriginal';
import ExpressOriginal from 'devicons-react/icons/ExpressOriginal';
import SpringOriginal from 'devicons-react/icons/SpringOriginal';
import PythonOriginal from 'devicons-react/icons/PythonOriginal';
import TypescriptOriginal from 'devicons-react/icons/TypescriptOriginal';
import PostgresqlOriginal from 'devicons-react/icons/PostgresqlOriginal';
import JupyterOriginal from 'devicons-react/icons/JupyterOriginal';
import SplineViewer from './SplineViewer';

const About = () => {
  const skills = [
    {
      icon: ReactOriginal,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS",
      color: "text-blue-400",
      iconSize: "w-20 h-30"
    },
    {
      icon: Server,
      title: "Backend Development", 
      description: "Node.js, Express, Spring Boot, RESTful APIs",
      color: "text-green-400",
      iconSize: "w-12 h-12"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "MongoDB, PostgreSQL, MySQL",
      color: "text-orange-400",
      iconSize: "w-12 h-12"
    },
    {
      icon: Brain,
      title: "AI/Machine Learning",
      description: "Python, Jupyter, TensorFlow, Data Analysis",
      color: "text-purple-400",
      iconSize: "w-12 h-12"
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 px-6 relative">
      <div className="container mx-auto relative z-10 max-w-7xl">
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
                    <div className="text-orange-500 text-6xl font-black mb-2 tracking-wider">CORE</div>
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mx-auto shadow-lg"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white text-xl font-black mb-2 uppercase tracking-wide">I BUILD. I CONQUER. I DELIVER.</h3>
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
                  <p className="text-gray-300 text-sm mb-2 font-medium uppercase tracking-wide">ALWAYS READY FOR ACTION</p>
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg relative shadow-lg">
                  <div className="absolute inset-2 bg-gradient-to-br from-orange-600 to-red-700 rounded-md"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Bottom Card - Tech Stack */}
            <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-44 relative overflow-hidden group hover:shadow-xl hover:shadow-orange-500/15 transition-all duration-300">
              <div className="mb-4">
                <p className="text-gray-300 text-sm mb-2 font-medium uppercase tracking-wide">WEAPONS OF CHOICE</p>
                <h3 className="text-white text-xl font-black uppercase">MY TECH ARSENAL</h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-800/70 rounded-lg p-2 text-center border border-gray-700">
                  <span className="text-orange-400 text-xs font-bold uppercase">ReactJS</span>
                </div>
                <div className="bg-gray-800/70 rounded-lg p-2 text-center border border-gray-700">
                  <span className="text-gray-300 text-xs font-bold uppercase">Express</span>
                </div>
                <div className="bg-gray-800/70 rounded-lg p-2 text-center border border-gray-700">
                  <span className="text-orange-400 text-xs font-bold uppercase">Node</span>
                </div>
                <div className="bg-gray-800/70 rounded-lg p-2 text-center border border-gray-700">
                  <span className="text-gray-300 text-xs font-bold uppercase">MongoDB</span>
                </div>
                <div className="bg-gray-800/70 rounded-lg p-2 text-center border border-gray-700">
                  <span className="text-orange-400 text-xs font-bold uppercase">Java</span>
                </div>
                <div className="bg-gray-800/70 rounded-lg p-2 text-center border border-gray-700">
                  <span className="text-gray-300 text-xs font-bold uppercase">Python</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Top Card - Passion */}
            <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-32 relative overflow-hidden group hover:shadow-xl hover:shadow-orange-500/15 transition-all duration-300">
              <h3 className="text-white text-lg font-black mb-2 uppercase tracking-wide">CODE. DOMINATE. REPEAT.</h3>
            </div>

            {/* Middle Card - Project Collaboration */}
            <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm border border-orange-500/40 rounded-2xl p-8 h-40 relative overflow-hidden group hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-white text-lg font-black mb-4 uppercase tracking-wide">READY TO BATTLE?</h3>
                <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-bold uppercase tracking-wide shadow-lg">
                  LOCK AND LOAD
                </button>
              </div>
            </div>

            {/* Bottom Card - Current Project */}
            <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-44 relative overflow-hidden group hover:shadow-xl hover:shadow-orange-500/15 transition-all duration-300">
              <div className="mb-4">
                <p className="text-orange-400 text-xs uppercase tracking-wider mb-2 font-bold">MISSION STATUS</p>
                <h3 className="text-white text-lg font-black mb-3 uppercase">BUILDING STEEL FRAMEWORK</h3>
              </div>
              <div className="bg-black/70 rounded-lg p-3 font-mono text-xs border border-gray-800">
                <div className="text-orange-400 mb-1">{"// FORGING THE FUTURE"}</div>
                <div className="text-gray-300 mb-1">{"import { POWER } from 'steel-core';"}</div>
                <div className="text-gray-300 mb-1">{"import { STRENGTH } from 'framework';"}</div>
                <div className="text-orange-400">{"console.log('DOMINATING...');"}</div>
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
              TECH{" "}
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                BATTLEGROUND
              </span>
            </h2>
            <p className="text-gray-400 text-lg font-medium uppercase tracking-wide">
              WHERE CODE MEETS WARFARE
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

              {/* Spline viewer in the center */}
              <div className="absolute inset-12 rounded-full overflow-hidden border-2 border-orange-500/30 backdrop-blur-sm">
                <spline-viewer 
                  url="https://prod.spline.design/4VEX8s8-niUeURYk/scene.splinecode"
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    borderRadius: '50%',
                    filter: 'brightness(1.2) contrast(1.1)',
                  }}
                ></spline-viewer>
                
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

            {/* Technical indicators around the ring */}
            <div className="absolute inset-0">
              {/* Top indicator */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800/80 px-4 py-2 rounded-lg border border-orange-500/30">
                <span className="text-orange-500 text-sm font-mono font-bold uppercase">CORE.SYS</span>
              </div>
              
              {/* Right indicator */}
              <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-gray-800/80 px-4 py-2 rounded-lg border border-orange-500/30">
                <span className="text-orange-500 text-sm font-mono font-bold uppercase">PWR.MAX</span>
              </div>
              
              {/* Bottom indicator */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800/80 px-4 py-2 rounded-lg border border-orange-500/30">
                <span className="text-orange-500 text-sm font-mono font-bold uppercase">ACTIVE</span>
              </div>
              
              {/* Left indicator */}
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-gray-800/80 px-4 py-2 rounded-lg border border-orange-500/30">
                <span className="text-orange-500 text-sm font-mono font-bold uppercase">ONLINE</span>
              </div>
            </div>
          </div>

          {/* Bottom description */}
          <div className="text-center mt-16">
            <p className="text-gray-400 text-base font-medium max-w-2xl mx-auto leading-relaxed">
              IMMERSE YOURSELF IN THE DIGITAL BATTLEGROUND WHERE TECHNOLOGY AND CREATIVITY COLLIDE.
              <br />
              <span className="text-orange-500 font-bold uppercase">WITNESS THE POWER OF MODERN WARFARE.</span>
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
              <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight relative z-10">
                TECH{" "}
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent relative">
                  STACK
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg opacity-50 blur-xl animate-pulse"></div>
                </span>
              </h2>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-4 h-4 border-2 border-orange-500 rotate-45 animate-spin" style={{ animationDuration: '3s' }}></div>
              <div className="absolute -top-4 -right-4 w-4 h-4 border-2 border-red-500 rotate-45 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}></div>
              <div className="absolute -bottom-4 -left-4 w-4 h-4 border-2 border-orange-500 rotate-45 animate-spin" style={{ animationDuration: '4s' }}></div>
              <div className="absolute -bottom-4 -right-4 w-4 h-4 border-2 border-red-500 rotate-45 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}></div>
            </div>
            
            <p className="text-gray-400 text-xl font-medium uppercase tracking-wide mb-4 animate-fade-in">
              WEAPONS OF DIGITAL DESTRUCTION
            </p>
            <div className="relative mx-auto w-32">
              <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/30 to-red-600/30 rounded-full blur-sm"></div>
            </div>
          </div>

          {/* Enhanced Tech Stack Grid with Left-to-Right Animation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-20">
            {/* React - Enhanced */}
            <div className="group relative bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 hover:border-orange-500/70 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/30 animate-slide-left" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative z-10 text-center">
                <div className="relative mb-6">
                  <ReactOriginal size={56} className="mx-auto group-hover:scale-125 transition-transform duration-500 drop-shadow-lg" />
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-white font-black uppercase text-base mb-3 tracking-wider group-hover:text-orange-300 transition-colors">REACT</h3>
                <p className="text-gray-400 text-xs uppercase tracking-widest group-hover:text-gray-300 transition-colors">FRONTEND</p>
                <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* TypeScript - Enhanced */}
            <div className="group relative bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 hover:border-orange-500/70 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/30 animate-slide-left" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative z-10 text-center">
                <div className="relative mb-6">
                  <TypescriptOriginal size={56} className="mx-auto group-hover:scale-125 transition-transform duration-500 drop-shadow-lg" />
                  <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-white font-black uppercase text-base mb-3 tracking-wider group-hover:text-orange-300 transition-colors">TYPESCRIPT</h3>
                <p className="text-gray-400 text-xs uppercase tracking-widest group-hover:text-gray-300 transition-colors">LANGUAGE</p>
                <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Tailwind - Enhanced */}
            <div className="group relative bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 hover:border-orange-500/70 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/30 animate-slide-left" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative z-10 text-center">
                <div className="relative mb-6">
                  <div className="w-14 h-14 mx-auto bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-lg group-hover:rotate-12">
                    <Code className="w-8 h-8 text-white drop-shadow-sm" />
                  </div>
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-white font-black uppercase text-base mb-3 tracking-wider group-hover:text-orange-300 transition-colors">TAILWIND</h3>
                <p className="text-gray-400 text-xs uppercase tracking-widest group-hover:text-gray-300 transition-colors">STYLING</p>
                <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Node.js - Enhanced */}
            <div className="group relative bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 hover:border-orange-500/70 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/30 animate-slide-left" style={{ animationDelay: '0.4s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative z-10 text-center">
                <div className="relative mb-6">
                  <NodejsOriginal size={56} className="mx-auto group-hover:scale-125 transition-transform duration-500 drop-shadow-lg" />
                  <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-white font-black uppercase text-base mb-3 tracking-wider group-hover:text-orange-300 transition-colors">NODE.JS</h3>
                <p className="text-gray-400 text-xs uppercase tracking-widest group-hover:text-gray-300 transition-colors">RUNTIME</p>
                <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Express - Enhanced */}
            <div className="group relative bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 hover:border-orange-500/70 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/30 animate-slide-left" style={{ animationDelay: '0.5s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative z-10 text-center">
                <div className="relative mb-6">
                  <ExpressOriginal size={56} className="mx-auto group-hover:scale-125 transition-transform duration-500 drop-shadow-lg" />
                  <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-white font-black uppercase text-base mb-3 tracking-wider group-hover:text-orange-300 transition-colors">EXPRESS</h3>
                <p className="text-gray-400 text-xs uppercase tracking-widest group-hover:text-gray-300 transition-colors">FRAMEWORK</p>
                <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Spring - Enhanced */}
            <div className="group relative bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 hover:border-orange-500/70 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/30 animate-slide-left" style={{ animationDelay: '0.6s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative z-10 text-center">
                <div className="relative mb-6">
                  <SpringOriginal size={56} className="mx-auto group-hover:scale-125 transition-transform duration-500 drop-shadow-lg" />
                  <div className="absolute inset-0 bg-green-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-white font-black uppercase text-base mb-3 tracking-wider group-hover:text-orange-300 transition-colors">SPRING</h3>
                <p className="text-gray-400 text-xs uppercase tracking-widest group-hover:text-gray-300 transition-colors">FRAMEWORK</p>
                <div className="absolute top-2 right-2 w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* MongoDB - Enhanced */}
            <div className="group relative bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 hover:border-orange-500/70 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/30 animate-slide-left" style={{ animationDelay: '0.7s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative z-10 text-center">
                <div className="relative mb-6">
                  <MongodbOriginal size={56} className="mx-auto group-hover:scale-125 transition-transform duration-500 drop-shadow-lg" />
                  <div className="absolute inset-0 bg-green-700/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-white font-black uppercase text-base mb-3 tracking-wider group-hover:text-orange-300 transition-colors">MONGODB</h3>
                <p className="text-gray-400 text-xs uppercase tracking-widest group-hover:text-gray-300 transition-colors">DATABASE</p>
                <div className="absolute top-2 right-2 w-2 h-2 bg-green-700 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* SQL - Enhanced */}
            <div className="group relative bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 hover:border-orange-500/70 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/30 animate-slide-left" style={{ animationDelay: '0.8s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative z-10 text-center">
                <div className="relative mb-6">
                  <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-lg group-hover:rotate-12">
                    <Database className="w-8 h-8 text-white drop-shadow-sm" />
                  </div>
                  <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-white font-black uppercase text-base mb-3 tracking-wider group-hover:text-orange-300 transition-colors">SQL</h3>
                <p className="text-gray-400 text-xs uppercase tracking-widest group-hover:text-gray-300 transition-colors">DATABASE</p>
                <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Python - Enhanced */}
            <div className="group relative bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 hover:border-orange-500/70 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/30 animate-slide-left" style={{ animationDelay: '0.9s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative z-10 text-center">
                <div className="relative mb-6">
                  <PythonOriginal size={56} className="mx-auto group-hover:scale-125 transition-transform duration-500 drop-shadow-lg" />
                  <div className="absolute inset-0 bg-yellow-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-white font-black uppercase text-base mb-3 tracking-wider group-hover:text-orange-300 transition-colors">PYTHON</h3>
                <p className="text-gray-400 text-xs uppercase tracking-widest group-hover:text-gray-300 transition-colors">LANGUAGE</p>
                <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-600 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Java - Enhanced */}
            <div className="group relative bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 hover:border-orange-500/70 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/30 animate-slide-left" style={{ animationDelay: '1.0s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative z-10 text-center">
                <div className="relative mb-6">
                  <div className="w-14 h-14 mx-auto bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-lg group-hover:rotate-12">
                    <span className="text-white font-black text-2xl drop-shadow-sm">J</span>
                  </div>
                  <div className="absolute inset-0 bg-red-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-white font-black uppercase text-base mb-3 tracking-wider group-hover:text-orange-300 transition-colors">JAVA</h3>
                <p className="text-gray-400 text-xs uppercase tracking-widest group-hover:text-gray-300 transition-colors">LANGUAGE</p>
                <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Jupyter - Enhanced */}
            <div className="group relative bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 hover:border-orange-500/70 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/30 animate-slide-left" style={{ animationDelay: '1.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative z-10 text-center">
                <div className="relative mb-6">
                  <JupyterOriginal size={56} className="mx-auto group-hover:scale-125 transition-transform duration-500 drop-shadow-lg" />
                  <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-white font-black uppercase text-base mb-3 tracking-wider group-hover:text-orange-300 transition-colors">JUPYTER</h3>
                <p className="text-gray-400 text-xs uppercase tracking-widest group-hover:text-gray-300 transition-colors">NOTEBOOK</p>
                <div className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* REST API - Enhanced */}
            <div className="group relative bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 hover:border-orange-500/70 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/30 animate-slide-left" style={{ animationDelay: '1.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative z-10 text-center">
                <div className="relative mb-6">
                  <div className="w-14 h-14 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-lg group-hover:rotate-12">
                    <Server className="w-8 h-8 text-white drop-shadow-sm" />
                  </div>
                  <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-white font-black uppercase text-base mb-3 tracking-wider group-hover:text-orange-300 transition-colors">REST API</h3>
                <p className="text-gray-400 text-xs uppercase tracking-widest group-hover:text-gray-300 transition-colors">PROTOCOL</p>
                <div className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Tech Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend Category */}
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-center">
                <Smartphone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-white text-xl font-black mb-3 uppercase">FRONTEND</h3>
                <p className="text-blue-300 text-sm font-medium uppercase mb-4">USER INTERFACE</p>
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
                <h3 className="text-white text-xl font-black mb-3 uppercase">BACKEND</h3>
                <p className="text-green-300 text-sm font-medium uppercase mb-4">SERVER LOGIC</p>
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
                <h3 className="text-white text-xl font-black mb-3 uppercase">DATABASE</h3>
                <p className="text-orange-300 text-sm font-medium uppercase mb-4">DATA STORAGE</p>
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
                <h3 className="text-white text-xl font-black mb-3 uppercase">AI/ML</h3>
                <p className="text-purple-300 text-sm font-medium uppercase mb-4">INTELLIGENCE</p>
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
                READY FOR DIGITAL WARFARE?
              </h3>
              <p className="text-gray-300 mb-6 font-medium">
                Armed with cutting-edge technologies and battle-tested frameworks, I'm ready to conquer any development challenge.
              </p>
              <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/30">
                <Cpu className="w-5 h-5 inline mr-2" />
                ENGAGE BATTLE MODE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;