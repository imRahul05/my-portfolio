import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { getSectionFromURL, updateURLSection, getRouteBySection } from '@/utils/routing';
import { scrollToSection } from '@/utils/navigation';

interface RouterWrapperProps {
  children: React.ReactNode;
}

// Component to handle URL-based section navigation
const SectionRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [currentSection, setCurrentSection] = useState<string>('home');

  // Handle initial route and URL changes
  useEffect(() => {
    const handleRouteChange = () => {
      const section = getSectionFromURL();
      setCurrentSection(section);
      
      // Update document title
      const route = getRouteBySection(section);
      document.title = route.title;
      
      // Scroll to section after a short delay to ensure content is loaded
      setTimeout(() => {
        scrollToSection(section);
      }, 100);
    };

    // Handle initial load
    handleRouteChange();

    // Handle browser back/forward navigation
    const handlePopState = () => {
      handleRouteChange();
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [location]);

  // Function to navigate to section programmatically
  const navigateToSection = (sectionId: string, replace: boolean = false) => {
    setCurrentSection(sectionId);
    updateURLSection(sectionId, replace);
    scrollToSection(sectionId);
  };

  // Provide navigation context to children
  return (
    <div data-current-section={currentSection}>
      {React.cloneElement(children as React.ReactElement, {
        navigateToSection,
        currentSection
      })}
    </div>
  );
};

// Main Router wrapper component
const PortfolioRouter: React.FC<RouterWrapperProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <SectionRouter>
              {children}
            </SectionRouter>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default PortfolioRouter;