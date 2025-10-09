
import { useState } from 'react';
import { Grid3X3, Square } from 'lucide-react';
import { TooltipProvider } from '@/components/ui/tooltip';
import { FlickeringGrid } from '../ui/flickering-grid';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import SingleProjectView from './components/SingleProjectView';
import { projects, ProjectType } from '@/data/projectData';
import './styles/projects.css';

const Projects = () => {
  // State for the project preview modal
  const [previewProject, setPreviewProject] = useState<ProjectType | null>(null);
  
  // State for view mode (grid or single)
  const [viewMode, setViewMode] = useState<'grid' | 'single'>('grid');
  
  // State for current project index in single view
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Handler for opening the preview modal
  const handlePreviewClick = (project: ProjectType) => {
    setPreviewProject(project);
  };

  // Handler for closing the preview modal
  const handleClosePreview = () => {
    setPreviewProject(null);
  };

  // Navigation handlers for single view
  const handleNextProject = () => {
    setCurrentProjectIndex((prev) => 
      prev < projects.length - 1 ? prev + 1 : prev
    );
  };

  const handlePreviousProject = () => {
    setCurrentProjectIndex((prev) => 
      prev > 0 ? prev - 1 : prev
    );
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
            <p className="text-lg text-gray-600 mb-8">
              A showcase of my technical projects and contributions
            </p>
            
            {/* View Toggle Buttons */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Grid3X3 size={18} />
                Grid View
              </button>
              <button
                onClick={() => setViewMode('single')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  viewMode === 'single'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Square size={18} />
                Single View
              </button>
            </div>
          </div>

          {/* Render Grid View */}
          {viewMode === 'grid' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onPreviewClick={handlePreviewClick}
                />
              ))}
            </div>
          )}

          {/* Render Single View */}
          {viewMode === 'single' && (
            <SingleProjectView
              project={projects[currentProjectIndex]}
              onPreviewClick={handlePreviewClick}
              onNext={handleNextProject}
              onPrevious={handlePreviousProject}
              currentIndex={currentProjectIndex}
              totalProjects={projects.length}
            />
          )}

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