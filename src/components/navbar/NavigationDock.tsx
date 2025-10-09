import React from 'react';
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  GraduationCap,
  Mail,
  Code,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dock, DockIcon, DockItem, DockLabel } from '../ui/dock';
import { scrollToSection, navigationSections } from '@/utils/navigation';
import { useDockVisibility } from '@/hooks/useDockVisibility';

interface NavigationDockProps {
  activeSection: string;
  openCommandMenu?: () => void;
}

// ✅ Centralized icon size (change once, applies everywhere)
const ICON_SIZE = 21;

const NavigationDock: React.FC<NavigationDockProps> = ({
  activeSection,
  openCommandMenu
}) => {
  const isVisible = useDockVisibility(100);

  // Icon mapping for navigation items
  const getIconForSection = (sectionId: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      home: <Home size={ICON_SIZE} />,
      about: <User size={ICON_SIZE} />,
      skills: <Code size={ICON_SIZE} />,
      'github-contributions': <Code size={ICON_SIZE} />,
      experience: <Briefcase size={ICON_SIZE} />,
      projects: <FolderOpen size={ICON_SIZE} />,
      education: <GraduationCap size={ICON_SIZE} />,
      contact: <Mail size={ICON_SIZE} />
    };
    
    return iconMap[sectionId] || <Home size={ICON_SIZE} />;
  };

  // Filter sections to match what's shown in the Header
  const visibleSections = navigationSections.filter(
    section => section.id !== 'github-contributions'
  );

  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 left-0 right-0 z-[9999] flex justify-center pointer-events-none">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.3 
            }}
            className="pointer-events-auto"
          >
            <Dock
              magnification={80}
              distance={140}
              panelHeight={64}
              spring={{ mass: 0.05, stiffness: 350, damping: 22 }}
              className="border border-gray-200/50 bg-white/90 backdrop-blur-lg shadow-xl dark:bg-neutral-900/90 dark:border-neutral-700/50"
            >
              {/* Navigation Items */}
              {visibleSections.map((section) => (
                <DockItem key={section.id}>
                  <DockIcon
                    className={`cursor-pointer rounded-lg p-2 ${
                      activeSection === section.id
                        ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-neutral-800'
                    }`}
                  >
                    <button
                      onClick={() => handleSectionClick(section.id)}
                      className="w-full h-full flex items-center justify-center"
                      aria-label={`Navigate to ${section.label}`}
                    >
                      {getIconForSection(section.id)}
                    </button>
                  </DockIcon>
                  <DockLabel>{section.label}</DockLabel>
                </DockItem>
              ))}

              {/* Command Menu Item */}
              {openCommandMenu && (
                <DockItem>
                  <DockIcon className="cursor-pointer text-gray-600 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-neutral-800 rounded-lg p-2">
                    <button
                      onClick={openCommandMenu}
                      className="w-full h-full flex items-center justify-center"
                      aria-label="Open command menu"
                    >
                      <Search size={ICON_SIZE} />
                    </button>
                  </DockIcon>
                  <DockLabel>Search</DockLabel>
                </DockItem>
              )}
            </Dock>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NavigationDock;
