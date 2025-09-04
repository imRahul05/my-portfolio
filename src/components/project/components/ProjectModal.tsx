import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ProjectType } from '@/data/projectData';

interface ProjectModalProps {
  project: ProjectType;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 mt-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white w-full max-w-6xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl relative animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Modal Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-b border-gray-200">
          <span className="font-semibold text-lg text-gray-800">
            {project.name} - Live Preview
          </span>
          <button
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content - Iframe (scrollable only here) */}
        <div className="w-full h-[calc(100%-70px)] bg-gray-100">
          <iframe
            src={project.url}
            title={`${project.name} Preview`}
            className="w-full h-full border-0 bg-white"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
