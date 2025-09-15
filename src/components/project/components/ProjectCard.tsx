import React from "react";
import { Github, ExternalLink, Code, Eye } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ProjectType } from "@/data/projectData";
import { Skeleton } from "@/components/ui/skeleton";
import { useImageLoader } from "@/hooks/useImageLoader";

interface ProjectCardProps {
  project: ProjectType;
  onPreviewClick: (project: ProjectType) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPreviewClick }) => {
  const { isLoading, isError, handleLoad, handleError } = useImageLoader();

  return (
    <div className="project-card rounded-xl shadow-sm overflow-hidden group">
      {/* Image Section */}
      <div className="relative overflow-hidden h-48">
        {/* Loader and Error State */}
        {(isLoading || isError) && (
          <Skeleton className="w-full h-full absolute top-0 left-0" />
        )}

        {/* Actual image */}
        <img
          src={project.image}
          alt={project.name}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoading || isError ? "opacity-0" : "opacity-100"
          }`}
          onLoad={handleLoad}
          onError={handleError}
          style={{ position: "absolute", top: 0, left: 0 }}
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
          <span className="category-badge px-3 py-1 rounded-full text-xs font-medium text-gray-700 bg-white/80">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="relative p-6 overflow-hidden">
        {/* Animated background fill on hover */}
        <div className="absolute inset-0 bg-blue-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

        {/* Actual content sits above overlay */}
        <div className="relative z-10">
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
            <div className="flex gap-3 items-center">
              {project.github && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
                    >
                      <Github size={16} /> Code
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View source code on GitHub</p>
                  </TooltipContent>
                </Tooltip>
              )}

              {project.github && project.url && (
                <span className="text-gray-300">|</span>
              )}

              {project.url && (
                <>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-medium"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Open live demo in new tab</p>
                    </TooltipContent>
                  </Tooltip>

                  <span className="text-gray-300 md:inline hidden">|</span>

                  <div className="hidden md:block">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => onPreviewClick(project)}
                          className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors duration-200 text-sm font-medium"
                        >
                          <Eye size={16} /> Live Preview
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Preview this project in modal</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </>
              )}
            </div>

            <div className="flex items-center gap-1 text-gray-400">
              <Code size={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
