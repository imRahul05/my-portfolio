
import React from 'react';
import { Github, ExternalLink, Star, Code } from 'lucide-react';
import { FlickeringGrid } from './ui/flickering-grid';
import './projects.css';

import FinSageImg from '../assets/Projects/FinSage.png';
import pillpalImg from '../assets/Projects/pillpal.png';
import crmsImg from '../assets/Projects/crms.png';
import omsImg from '../assets/Projects/oms.png';
import FriendLoopImg from '../assets/Projects/FriendLoop.png';
import bloggyImg from '../assets/Projects/bloggy.png';
import communityGifImg from '../assets/Projects/community.gif';

const Projects = () => {
  const projects = [
    {
      name: "FinSage AI",
      description: "A better way to manage your finances. Take control of your financial journey with our comprehensive suite of tools.",
      technologies: ["React", "Web", "JSX"],
      github: "https://github.com/imRahul05/Fin_service",
      url: "https://finsage-ai.vercel.app/",
      image: FinSageImg,
      // Embedded Drive video link (autoplay enabled)
      video: "https://res.cloudinary.com/divkfbddw/video/upload/v1756879926/Screen_Recording_2025-09-03_at_11.40.15_AM_qxxhxn.mov",
      category: "Web"
    },
    {
      name: "PillPal AI",
      description: "PillPal helps you manage medications, track doses, and stay on top of refills with smart reminders and a simple tracking system.",
      technologies: ["React", "Web", "JS","FireBase"],
      github: "https://github.com/imRahul05/PillPal",
      url: "https://pill-pal-ai.vercel.app/",
      // stars: 2,
      image: pillpalImg,
      video:'https://res.cloudinary.com/divkfbddw/video/upload/v1756880629/Screen_Recording_2025-09-03_at_11.51.59_AM_yxxqql.mov',
      category: "Healthcare"
    },
    {
      name: "CRMS - Candidate Referral System",
      description: "A comprehensive web application for managing employee referrals. Employees can submit and track referrals while admins manage the hiring pipeline.",
      technologies: ["MERN", "Tailwind", "JWT"],
      github: "https://github.com/imRahul05/crms-MERN",
      url: "https://crms-frontend-theta.vercel.app",
      // stars: 1,
      image: crmsImg,
      category: "Web"
    },
    {
      name: "OMS - Order Management System",
      description: "A web app for managing orders with role-based authentication. Users can place orders, staff/admins can manage them via dashboards.",
      technologies: ["MERN", "Vite", "Tailwind", "JWT"],
      github: "https://github.com/imRahul05/Order_management_system",
      url: "https://order-management-system-inky-alpha.vercel.app/",
      // stars: 1,
      image: omsImg,
      category: "E-commerce"
    },
    {
      name: "FriendLoop",
      description: "Facebook-inspired web app with authentication, posting, notifications, and interactive UI components.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/imRahul05/masai_WEB205_Unit_3_Facebook_clone",
      url: "https://fb-clone-masai.netlify.app/",
      image: FriendLoopImg,
      category: "Web"
    },
    {
      name: "Bloogyy",
      description: "Blog site using React, Node.js, Express, MongoDB, and Firebase for real-time updates and authentication. Includes commenting and upvoting.",
      technologies: ["MERN", "Firebase"],
      github: "https://github.com/imRahul05/Blog_frontend",
      url: "https://bloogyy.vercel.app/",
      image: bloggyImg,
      category: "Blog Platform"
    },
    {
      name: "Community Care",
      description: "Mobile app built with Flutter + Firebase for Smart India Hackathon 2023. Lets users post local municipal issues like sanitation directly to authorities.",
      technologies: ["Flutter", "Mobile", "Firebase"],
      github: "https://github.com/imRahul05/Community-Care",
      url: "https://communitycarev4.web.app/",
      image: communityGifImg,
      category: "Mobile App"
    },
    // {
    //   name: "Movie-Stream",
    //   description: "Streaming platform for movies and TV shows with TMDB, IMDB, and Rapid API integration for dynamic content, trailers, and discovery.",
    //   technologies: ["React", "Web", "TS"],
    //   github: "https://github.com/imRahul05/GiftofHope",
    //   url: "https://movie-stream-phi.vercel.app/",
    //   image: movieStreamImg,
    //   category: "Web"
    // }
  ];

  return (
    <section id="projects" className="py-16 relative">
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          squareSize={5}
          gridGap={8}
          flickerChance={0.15}
          color="rgb(59, 130, 246)"
          maxOpacity={0.1}
          className="w-full h-full"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="projects-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600">
            A showcase of my technical projects and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card rounded-xl shadow-sm overflow-hidden group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {project.video && (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                )}
                <div className="absolute top-4 right-4">
                  <span className="category-badge px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    {project.category}
                  </span>
                </div>
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
                        className="tech-badge bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200"
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
                        <Github size={16} /> Code
                      </a>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-medium"
                      >
                        <ExternalLink size={16} /> Live Demo
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
      </div>
    </section>
  );
};

export default Projects;
