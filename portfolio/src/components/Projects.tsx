import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ExternalLink, Github, X, Calendar, Users, Zap, ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";

import carserviceImg from "../assets/carservice.png";
import crimeReportImg from "../assets/crime-report.png";
import waterManagementImg from "../assets/water-maagement.png";
import electrowaveImg from "../assets/electrowave .png";
import skillhiveImg from "../assets/skillhive.png";
import deviceImg from "../assets/device.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: "Car-Service-Management-System",
      description: "Full-stack car service management platform built with React, Node.js, Express, and MongoDB. Features include customer appointment scheduling, service tracking, and comprehensive admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Roboflow", "Tailwind CSS"],
      image: carserviceImg,
      github: "https://github.com/Dilukshan285/Car-Service-Management-System",
      live: "#",
      featured: true,
      detailedDescription: "This comprehensive car service management system streamlines operations for automotive service centers. Built with modern web technologies, it provides a complete solution for managing customer appointments, service records, and billing processes. The system features a responsive design that works seamlessly across desktop and mobile devices.",
      features: [
        "Customer appointment scheduling and management",
        "Service history tracking and documentation",
        "Real-time inventory management system",
        "Automated billing and invoice generation",
        "Admin dashboard with analytics and reporting",
        "Mobile-responsive interface",
        "Customer notification system",
        "Service technician assignment and tracking"
      ],
      duration: "5 weeks",
      teamSize: "4 developers",
      challenges: "Implementing real-time updates and complex scheduling algorithms while ensuring data consistency across multiple user sessions"
    },
    {
      title: "Crime Report Management System - gemini-api",
      description: "Scalable microservices architecture with Spring Boot, featuring service discovery, API gateway, and distributed configuration management.",
      tech: ["Spring Boot", "Docker", "PostgreSQL", "Redis", "RabbitMQ"],
      image: crimeReportImg,
      github: "https://github.com/VenushanT/reporting",
      live: "#",
      featured: true,
      detailedDescription: "An intelligent crime reporting system powered by Gemini AI that helps law enforcement agencies efficiently manage and analyze crime reports. The system uses advanced AI to categorize incidents and provide insights.",
      features: [
        "AI-powered incident categorization",
        "Real-time report processing",
        "Advanced analytics dashboard",
        "Multi-language support",
        "Mobile-responsive interface"
      ],
      duration: "2 weeks",
      teamSize: "1 developer",
      challenges: "Integrating Gemini AI API and ensuring data security"
    },
    /*{
      title: "PilgrimFlow",
      description: "PilgrimFlow is a smart system that uses AI to count people and manage water distribution in real-time, helping organizers prevent shortages at large events like the Kataragama pilgrimage.",
      tech: ["Python & NumPy", "OpenCV", "Roboflow Inference API", "IP Camera"],
      image: waterManagementImg,
      github: "#",
      live: "#",
      featured: false,
      detailedDescription: "An innovative crowd management and resource distribution system designed for large-scale religious gatherings. Uses computer vision and AI to monitor crowd density and optimize water distribution.",
      features: [
        "Real-time crowd counting",
        "Automated water distribution",
        "Crowd density heatmaps",
        "Emergency alert system",
        "Resource optimization algorithms"
      ],
      duration: "5 months",
      teamSize: "1 developer",
      challenges: "Accurate crowd counting in varying lighting conditions"
    },*/
    {
      title: "ElectroWave",
      description: "ElectroWave is a full-stack e-commerce platform built with the MERN stack for buying and selling electronics.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT (JSON Web Web Tokens)"],
      image: electrowaveImg,
      github: "https://github.com/VenushanT/ElectroWave",
      live: "#",
      featured: false,
      detailedDescription: "A comprehensive e-commerce platform specifically designed for electronics retail. Features secure payment processing, product comparison tools, and advanced search capabilities.",
      features: [
        "Product comparison system",
        "Advanced filtering and search",
        "Secure payment gateway",
        "User reviews and ratings",
        "Inventory management"
      ],
      duration: "1 week",
      teamSize: "2 developers",
      challenges: "Implementing complex product filtering and comparison features"
    },
    {
      title: "Skill-Hive",
      description: "RESTful API built with Spring Boot and JPA. Features JWT authentication, role-based access control, and comprehensive task management.",
      tech: ["Spring Boot (for the REST API)", "React", "Tailwind CSS", "MongoDB", "OAuth 2.0"],
      image: skillhiveImg,
      github: "https://github.com/VenushanT/skillhive",
      live: "#",
      featured: false,
      detailedDescription: "A professional networking and skill-sharing platform that connects freelancers with clients. Includes project management tools, secure messaging, and payment processing.",
      features: [
        "Skill-based matching algorithm",
        "Project management dashboard",
        "Secure messaging system",
        "Payment escrow service",
        "Review and rating system"
      ],
      duration: "2 weeks",
      teamSize: "3 developers",
      challenges: "Developing accurate skill matching algorithms"
    },
    {
      title: "AI-Device-Recommendation-Platform",
      description: "Next.js 14 AI-powered recommendation platform using Google Gemini API for smart device suggestions. Includes TypeScript implementation, Tailwind CSS styling, multi-category support, and responsive web interface.",
      tech: ["TypeScript", "React 18 ", "Gemini AI ", "Tailwind CSS"],
      image: deviceImg, // Fixed: use the imported variable
      github: "https://github.com/VenushanT/-crime-report",
      live: "#",
      featured: false,
      detailedDescription: "An AI-driven device recommendation platform that leverages Google Gemini AI to provide personalized technology suggestions across laptops, smartphones, headphones, and keyboards based on user needs, budget, and usage patterns.",
      features: [
        "AI-powered device recommendations",
        "Natural language query processing",
        "Multi-category device support",
        "Budget-based filtering system",
        "Real-time recommendation engine",
        "Responsive cross-device design",
        "Performance vs price analysis",
        "Intelligent reasoning explanations"
      ],
      duration: "2 weeks",
      teamSize: "1 developer",
      challenges: "Training accurate ML models with limited data"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 uppercase tracking-wide leading-tight">
            PROJECT <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">PORTFOLIO</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto font-medium leading-relaxed px-2">
            A selection of projects demonstrating expertise in the MERN stack, Spring Boot, and Python for modern, scalable software solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-6 sm:mb-8 md:mb-12 text-center uppercase tracking-wide">
            <span className="text-orange-500">FEATURED PROJECTS</span>
          </h3>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm border border-gray-600/50 hover:shadow-2xl hover:shadow-orange-500/20 rounded-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-black mb-2 sm:mb-3 text-white group-hover:text-orange-500 transition-colors uppercase tracking-wide leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed font-medium line-clamp-3 sm:line-clamp-none">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 text-xs bg-orange-600/20 text-orange-300 rounded-lg border border-orange-500/30 font-bold uppercase whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <Button
                      size="sm"
                      className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold uppercase tracking-wide hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-1 transition-all duration-300"
                      onClick={() => openModal(project)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      VIEW DETAILS
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold uppercase tracking-wide transition-all duration-300"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        VIEW CODE
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-6 sm:mb-8 md:mb-12 text-center uppercase tracking-wide">
            <span className="text-gray-400">MORE PROJECTS</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {(showAllProjects ? otherProjects : otherProjects.slice(0, 3)).map((project, index) => (
              <Card key={index} className="group p-4 sm:p-6 bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm border border-gray-600/50 hover:shadow-xl hover:shadow-orange-500/15 rounded-xl transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-105"
                />
                <h4 className="text-base sm:text-lg md:text-xl font-black mb-2 text-white group-hover:text-orange-500 transition-colors uppercase tracking-wide leading-tight">
                  {project.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 leading-relaxed font-medium line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs bg-orange-600/20 text-orange-300 rounded-md border border-orange-500/30 font-bold uppercase whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs bg-gray-600/50 text-gray-300 rounded-md font-bold">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full sm:flex-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold uppercase text-xs transition-all duration-300"
                    onClick={() => openModal(project)}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    DETAILS
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full sm:flex-1 border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white font-bold uppercase text-xs transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      CODE
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Show More/Show Less Button */}
          {otherProjects.length > 3 && (
            <div className="text-center mt-8 sm:mt-12">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold uppercase tracking-wide hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300"
                onClick={() => setShowAllProjects(!showAllProjects)}
              >
                {showAllProjects ? (
                  <>
                    <ArrowUp className="w-4 h-4 mr-2" />
                    SHOW LESS
                  </>
                ) : (
                  <>
                    <ArrowDown className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">SHOW MORE PROJECTS</span>
                    <span className="sm:hidden">SHOW MORE</span>
                    <span className="ml-1">({otherProjects.length - 3} MORE)</span>
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gradient-to-br from-gray-800 to-black border border-gray-600 rounded-2xl w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl my-4 sm:my-8">
            {/* Modal Header */}
            <div className="relative p-4 sm:p-6 border-b border-gray-600">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-white transition-colors z-10 p-2 hover:bg-gray-700/50 rounded-lg"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <div className="flex flex-col gap-4 sm:gap-6 pr-8 sm:pr-12">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-xl"
                />
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-wide leading-tight pr-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                    {selectedProject.detailedDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 py-1 text-xs bg-orange-600/20 text-orange-300 rounded-lg border border-orange-500/30 font-bold uppercase whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 text-gray-300 p-2 bg-gray-800/50 rounded-lg">
                      <Calendar className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span className="font-medium">Duration: {selectedProject.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 p-2 bg-gray-800/50 rounded-lg">
                      <Users className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span className="font-medium">Team: {selectedProject.teamSize}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-h-[60vh] sm:max-h-[50vh] overflow-y-auto">
              {/* Key Features */}
              <div>
                <h4 className="text-lg sm:text-xl font-black text-orange-500 mb-3 sm:mb-4 uppercase tracking-wide flex items-center gap-2">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-800/50 rounded-lg">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="text-lg sm:text-xl font-black text-orange-500 mb-3 sm:mb-4 uppercase tracking-wide">
                  Technical Challenges
                </h4>
                <div className="p-3 sm:p-4 bg-gray-800/50 rounded-lg border-l-4 border-orange-500">
                  <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
                    {selectedProject.challenges}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-gray-600">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Button
                  className="w-full sm:flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold uppercase tracking-wide transition-all duration-300"
                  asChild
                >
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-gray-500 text-gray-300 hover:bg-gray-500 hover:text-white font-bold uppercase tracking-wide transition-all duration-300"
                  onClick={closeModal}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;