import { useEffect } from 'react';

/**
 * Custom hook to prevent horizontal overscroll on mobile devices
 * Stops edge-bouncing effects when users swipe horizontally near screen edges
 */
export const usePreventHorizontalScroll = (): void => {
  useEffect(() => {
    // Function to prevent horizontal overscroll
    const preventHorizontalScroll = (event: TouchEvent) => {
      // Check if the touch movement is more horizontal than vertical
      if (event.touches && event.touches.length && 
          Math.abs(event.touches[0].clientX - event.touches[0].screenX) > 
          Math.abs(event.touches[0].clientY - event.touches[0].screenY)) {
        // Only prevent if at edge of screen
        const touchX = event.touches[0].clientX;
        const screenWidth = window.innerWidth;
        
        // If near edge of screen (within 20px), prevent default
        if (touchX < 20 || touchX > screenWidth - 20) {
          event.preventDefault();
        }
      }
    };

    // Add event listener
    document.addEventListener('touchmove', preventHorizontalScroll, { passive: false });
    
    // Cleanup
    return () => {
      document.removeEventListener('touchmove', preventHorizontalScroll);
    };
  }, []);
};
