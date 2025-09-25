import React from 'react';
import Header from './Header';
import NavigationDock from './NavigationDock';

interface ResponsiveNavigationProps {
  activeSection: string;
  openCommandMenu?: () => void;
}

const ResponsiveNavigation: React.FC<ResponsiveNavigationProps> = ({
  activeSection,
  openCommandMenu
}) => {
  return (
    <>
      {/* Header for mobile and tablet (hidden on lg and above) */}
      <div className="lg:hidden">
        <Header 
          activeSection={activeSection} 
          openCommandMenu={openCommandMenu}
        />
      </div>

      {/* Navigation Dock for desktop (visible only on lg and above) */}
      <div className="hidden lg:block">
        <NavigationDock 
          activeSection={activeSection} 
          openCommandMenu={openCommandMenu}
        />
      </div>
    </>
  );
};

export default ResponsiveNavigation;