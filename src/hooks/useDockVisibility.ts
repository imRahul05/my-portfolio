import { useState, useEffect } from 'react';

/**
 * Custom hook that tracks scroll direction and visibility
 * @param threshold - The scroll threshold before hiding/showing (default: 100px)
 * @returns boolean indicating if dock should be visible
 */
export const useDockVisibility = (threshold: number = 100): boolean => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Always show at the top of the page
          if (currentScrollY < threshold) {
            setIsVisible(true);
          } else {
            // Hide when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY) {
              // Scrolling down
              setIsVisible(false);
            } else {
              // Scrolling up
              setIsVisible(true);
            }
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Call once to set initial state
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, threshold]);

  return isVisible;
};