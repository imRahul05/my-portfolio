import { useState, useEffect } from 'react';

/**
 * Custom hook that tracks the currently active section based on scroll position
 * @param sectionIds Array of section IDs to track
 * @returns The currently active section ID
 */
export const useActiveSection = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || 'home');

  useEffect(() => {
    // Create a throttled scroll handler for better performance
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const headerOffset = 100;
          const scrollPosition = window.scrollY + headerOffset;
          
          // Special case for top of page
          if (scrollPosition < 300) {
            if (activeSection !== sectionIds[0]) {
              setActiveSection(sectionIds[0]);
            }
            ticking = false;
            return;
          }
          
          // Special case for bottom of page
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
            const lastSection = sectionIds[sectionIds.length - 1];
            if (activeSection !== lastSection) {
              setActiveSection(lastSection);
            }
            ticking = false;
            return;
          }
          
          // Check each section
          for (const section of sectionIds) {
            const element = document.getElementById(section);
            if (!element) continue;
            
            const rect = element.getBoundingClientRect();
            
            // Calculate how much of the section is visible
            const sectionVisibility = (
              Math.min(rect.bottom, window.innerHeight) - 
              Math.max(rect.top, 0)
            ) / rect.height;
            
            // If more than 30% visible or element top is near viewport top
            if (sectionVisibility > 0.3 || (rect.top >= 0 && rect.top < window.innerHeight / 3)) {
              if (activeSection !== section) {
                setActiveSection(section);
              }
              break;
            }
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    };
    
    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call once to set initial active section
    handleScroll();
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, sectionIds]);

  return activeSection;
};
