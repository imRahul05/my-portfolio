import React from 'react';
import Header from '../components/navbar/Header';
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
      
      {/* Header with command menu toggle button */}
      <Header 
        activeSection={activeSection} 
        openCommandMenu={() => setIsCommandMenuOpen(true)}
      />
      
      {/* Floating Social Connections */}
      <Connections />
      
      {/* Main content */}
      {children}
    </div>
  );
};

export default Layout;
