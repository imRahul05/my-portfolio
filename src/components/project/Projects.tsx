
import { useState } from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';
import { FlickeringGrid } from '../ui/flickering-grid';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { projects, ProjectType } from '@/data/projectData';
import './styles/projects.css';

const Projects = () => {
  // State for the project preview modal
  const [previewProject, setPreviewProject] = useState<ProjectType | null>(null);

  // Handler for opening the preview modal
  const handlePreviewClick = (project: ProjectType) => {
    setPreviewProject(project);
  };

  // Handler for closing the preview modal
  const handleClosePreview = () => {
    setPreviewProject(null);
  };

  return (
    <TooltipProvider>
      <section id="projects" className="py-16 relative">
        {/* Background Grid */}
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

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onPreviewClick={handlePreviewClick}
              />
            ))}
          </div>

          {/* Project Preview Modal */}
          {previewProject && (
            <ProjectModal
              project={previewProject}
              onClose={handleClosePreview}
            />
          )}

        </div>
      </section>
    </TooltipProvider>
  );
};

export default Projects;