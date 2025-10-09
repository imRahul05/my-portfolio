import React, { useEffect } from "react";
import { Github, ExternalLink, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ProjectType } from "@/data/projectData";
import { Skeleton } from "@/components/ui/skeleton";
import { useImageLoader } from "@/hooks/useImageLoader";

interface SingleProjectViewProps {
  project: ProjectType;
  onPreviewClick: (project: ProjectType) => void;
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  totalProjects: number;
}

const SingleProjectView: React.FC<SingleProjectViewProps> = ({
  project,
  onPreviewClick,
  onNext,
  onPrevious,
  currentIndex,
  totalProjects
}) => {
  const { isLoading, isError, handleLoad, handleError } = useImageLoader();

  // Animation variants for project switching
  const projectVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1] as const,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      x: -100,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 1, 1] as const
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.25, 0, 1] as const
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onPrevious();
      } else if (e.key === 'ArrowRight' && currentIndex < totalProjects - 1) {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, totalProjects, onNext, onPrevious]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-8 relative">
      {/* Navigation Arrows */}
      <button
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-transparent hover:bg-white/20 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Previous project"
        title="Previous project"
      >
        <ChevronLeft size={32} className="text-gray-800 stroke-[2.5]" />
      </button>

      <button
        onClick={onNext}
        disabled={currentIndex === totalProjects - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-transparent hover:bg-white/20 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next project"
        title="Next project"
      >
        <ChevronRight size={32} className="text-gray-800 stroke-[2.5]" />
      </button>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={project.id}
          variants={projectVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Project Details */}
            <motion.div 
              variants={contentVariants}
              className="space-y-6"
            >
            {/* Category Badge */}
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200">
                {project.category}
              </span>
            </div>

            {/* Project Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {project.name}
            </h1>

            {/* Project Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {project.github && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View source code on GitHub</p>
                  </TooltipContent>
                </Tooltip>
              )}

              {project.url && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Open live demo in new tab</p>
                  </TooltipContent>
                </Tooltip>
              )}

              {project.url && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => onPreviewClick(project)}
                      className="flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                    >
                      <Eye size={20} />
                      Preview
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Preview this project in modal</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>

            {/* Project Counter */}
            <div className="text-sm text-gray-500 pt-4">
              Project {currentIndex + 1} of {totalProjects}
            </div>
          </motion.div>

          {/* Right Side - Project Image/Video */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-100 group">
              {/* Loader and Error State */}
              {(isLoading || isError) && (
                <Skeleton className="w-full h-full absolute top-0 left-0 rounded-2xl" />
              )}

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isLoading || isError ? "opacity-0" : "opacity-100"
                }`}
                onLoad={handleLoad}
                onError={handleError}
              />

              {/* Video Overlay on Hover */}
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

              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SingleProjectView;