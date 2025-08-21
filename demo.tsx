import React from 'react';
import { Github, ExternalLink, Star, Calendar, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'Fin_service (FinSage AI)',
      description: 'Take control of your financial future. Plan smarter, save faster, and build wealth with our AI-powered financial management platform tailored for the Indian context.',
      technologies: ['JavaScript', 'AI', 'Finance'],
      github: 'https://github.com/imRahul05/Fin_service',
      stars: 1,
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'AI/Finance'
    },
    {
      name: 'crms-MERN',
      description: 'A comprehensive web application for managing employee referrals built with React and Vite. This system allows employees to submit candidate referrals and tracks these referrals through the hiring process.',
      technologies: ['JavaScript', 'React', 'Vite', 'MERN'],
      github: 'https://github.com/imRahul05/crms-MERN',
      stars: 1,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web App'
    },
    {
      name: 'PillPal (PillPal AI)',
      description: 'PillPal helps you manage medications, track doses, and stay on top of refills with smart reminders and a simple tracking system.',
      technologies: ['JavaScript', 'AI', 'Healthcare'],
      github: 'https://github.com/imRahul05/PillPal',
      stars: 2,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Healthcare'
    },
    {
      name: 'Order Management System',
      description: 'A comprehensive Order Management System built with React, featuring role-based authentication, product browsing, cart management, and staff dashboard functionality.',
      technologies: ['JavaScript', 'React', 'Authentication'],
      github: 'https://github.com/imRahul05/Order_management_system',
      stars: 1,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'E-commerce'
    },
    {
      name: 'Blog Frontend',
      description: 'Latest project using MERN stack. Blog site with React frontend, Node/Express backend, MongoDB, Firebase for authentication and real-time updates. Enables commenting and upvoting.',
      technologies: ['MERN', 'Firebase', 'Real-time'],
      github: 'https://github.com/imRahul05/blog_frontend',
      image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Blog Platform'
    },
    {
      name: 'Community-Care',
      description: 'Community Care is an Android application aimed at addressing social problems like sanitation and other issues. Built using Flutter, it leverages various technologies to provide a seamless experience.',
      technologies: ['Dart', 'Flutter', 'Mobile'],
      github: 'https://github.com/imRahul05/Community-Care',
      stars: 1,
      image: 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile App'
    },
    {
      name: 'Portfolio Website',
      description: 'Self-developed personal website built with React.js and Node.js to showcase projects, skills, and experience. Features a clean, modern design, fully responsive, with sections for resume, project portfolio, and contact information.',
      technologies: ['React.js', 'Node.js', 'Responsive'],
      url: 'https://imrahul05.vercel.app/',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Portfolio'
    }
  ];

  const currentProjects = [
    {
      name: 'School LMS',
      description: 'Currently building: School Learning Management System.',
      status: 'In Development',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Gift of Hope',
      description: 'A donation app for orphanage people.',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600">
            A showcase of my technical projects and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    {project.category}
                  </span>
                </div>
                {project.stars && (
                  <div className="absolute top-4 left-4 flex items-center gap-1 bg-yellow-500/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star size={12} fill="white" className="text-white" />
                    <span className="text-xs text-white font-medium">{project.stars}</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.name}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Code size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Current & Recent Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg group">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-bold text-white">{project.name}</h4>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      project.status === 'In Development' 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-green-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-white/90 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;