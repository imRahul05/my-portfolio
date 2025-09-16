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
// import React from "react";
// import { Github, ExternalLink, Eye } from "lucide-react";
// import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
// import { ProjectType } from "@/data/projectData";
// import { Skeleton } from "@/components/ui/skeleton";
// import { useImageLoader } from "@/hooks/useImageLoader";

// interface ProjectCardProps {
//   project: ProjectType;
//   onPreviewClick: (project: ProjectType) => void;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPreviewClick }) => {
//   const { isLoading, isError, handleLoad, handleError } = useImageLoader();

//   return (
//     <div
//       className="project-card bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-2 border-gray-900 rounded-xl 
//       shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 
//       hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] 
//       active:shadow-none overflow-hidden flex flex-col"
//     >
//       {/* Image Section */}
//       <div className="relative h-48 w-full border-b-2 border-gray-900 group">
//         {(isLoading || isError) && (
//           <Skeleton className="w-full h-full absolute top-0 left-0 rounded-none" />
//         )}

//         <img
//           src={project.image}
//           alt={project.name}
//           className={`w-full h-full object-cover transition-opacity duration-300 ${
//             isLoading || isError ? "opacity-0" : "opacity-100"
//           }`}
//           onLoad={handleLoad}
//           onError={handleError}
//         />

//         {project.video && (
//           <video
//             src={project.video}
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//           />
//         )}

//         <div className="absolute top-3 right-3">
//           <span className="px-3 py-1 rounded-full text-xs font-bold text-purple-800 bg-white/90 
//           border-2 border-gray-900 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
//             {project.category}
//           </span>
//         </div>
//       </div>

//       {/* Card Content */}
//       <div className="flex flex-col p-5 gap-3 flex-1">
//         <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
//           {project.name}
//         </h3>
//         <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
//           {project.description}
//         </p>

//         {/* Tech badges */}
//         <div className="flex flex-wrap gap-2">
//           {project.technologies.map((tech, techIndex) => (
//             <span
//               key={techIndex}
//               className="px-3 py-1 rounded-full text-xs font-medium border-2 border-gray-900 
//               bg-gradient-to-r from-yellow-200 to-pink-200 text-gray-900 
//               shadow-[2px_2px_0px_rgba(0,0,0,1)]"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         {/* Footer Actions */}
//         <div className="flex items-center justify-between pt-3 mt-auto border-t-2 border-gray-900">
//           <div className="flex gap-3 items-center">
//             {project.github && (
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-3 py-1 rounded-md border-2 border-gray-900 
//                     bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 
//                     shadow-[2px_2px_0px_rgba(0,0,0,1)] flex items-center gap-2 
//                     text-sm font-semibold hover:from-gray-200 hover:to-gray-300 
//                     transition-colors active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
//                   >
//                     <Github size={16} /> Code
//                   </a>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>View source code on GitHub</p>
//                 </TooltipContent>
//               </Tooltip>
//             )}

//             {project.url && (
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <a
//                     href={project.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-3 py-1 rounded-md border-2 border-gray-900 
//                     bg-gradient-to-r from-blue-200 to-blue-300 text-blue-900 
//                     shadow-[2px_2px_0px_rgba(0,0,0,1)] flex items-center gap-2 
//                     text-sm font-semibold hover:from-blue-300 hover:to-blue-400 
//                     transition-colors active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
//                   >
//                     <ExternalLink size={16} /> Live Demo
//                   </a>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>Open live demo in new tab</p>
//                 </TooltipContent>
//               </Tooltip>
//             )}

//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <button
//                   onClick={() => onPreviewClick(project)}
//                   className="hidden md:flex px-3 py-1 rounded-md border-2 border-gray-900 
//                   bg-gradient-to-r from-green-200 to-green-300 text-green-900 
//                   shadow-[2px_2px_0px_rgba(0,0,0,1)] items-center gap-2 
//                   text-sm font-semibold hover:from-green-300 hover:to-green-400 
//                   transition-colors active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
//                 >
//                   <Eye size={16} /> Preview
//                 </button>
//               </TooltipTrigger>
//               <TooltipContent>
//                 <p>Preview this project in modal</p>
//               </TooltipContent>
//             </Tooltip>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
