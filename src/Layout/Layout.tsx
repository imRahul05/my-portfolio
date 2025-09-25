import React from 'react';
import ResponsiveNavigation from '../components/navbar/ResponsiveNavigation';
import Connections from '../components/common/Connections';
import CommandMenu from '../components/common/CommandMenu';
import { navigationSections, scrollToSection } from '../utils/navigation';

interface LayoutProps {
  activeSection: string;
  isCommandMenuOpen: boolean;
  setIsCommandMenuOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ 
  activeSection, 
  isCommandMenuOpen, 
  setIsCommandMenuOpen, 
  children 
}) => {
  return (
    <div className="app-content">
      {/* Command Menu */}
      <CommandMenu 
        sections={navigationSections}
        scrollTo={scrollToSection}
        isOpen={isCommandMenuOpen}
        setIsOpen={setIsCommandMenuOpen}
      />
      
      {/* Responsive Navigation - Header for mobile/tablet, Dock for desktop */}
      <ResponsiveNavigation 
        activeSection={activeSection} 
        openCommandMenu={() => setIsCommandMenuOpen(true)}
      />
      
      {/* Floating Social Connections */}
      <Connections />
      
      {/* Main content - no padding needed since dock floats on top */}
      <div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
