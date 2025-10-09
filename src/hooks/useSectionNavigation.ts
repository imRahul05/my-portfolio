import { useCallback } from 'react';
import { updateURLSection, getShareableURL } from '@/utils/routing';
import { scrollToSection } from '@/utils/navigation';

/**
 * Custom hook for section-based navigation and sharing
 */
export const useSectionNavigation = () => {
  // Navigate to a specific section
  const navigateToSection = useCallback((sectionId: string, replace: boolean = false) => {
    updateURLSection(sectionId, replace);
    scrollToSection(sectionId);
  }, []);

  // Get shareable URL for a section
  const getShareableLink = useCallback((sectionId: string) => {
    return getShareableURL(sectionId);
  }, []);

  // Share section (if Web Share API is available)
  const shareSection = useCallback(async (sectionId: string, title?: string) => {
    const url = getShareableURL(sectionId);
    const shareTitle = title || `Check out this section - ${sectionId}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          url: url,
        });
      } catch (error) {
        // Fallback to copying to clipboard
        await navigator.clipboard.writeText(url);
        console.log('URL copied to clipboard');
      }
    } else {
      // Fallback to copying to clipboard
      await navigator.clipboard.writeText(url);
      console.log('URL copied to clipboard');
    }
  }, []);

  // Copy section URL to clipboard
  const copyShareableLink = useCallback(async (sectionId: string) => {
    const url = getShareableURL(sectionId);
    try {
      await navigator.clipboard.writeText(url);
      return true;
    } catch (error) {
      console.error('Failed to copy URL:', error);
      return false;
    }
  }, []);

  return {
    navigateToSection,
    getShareableLink,
    shareSection,
    copyShareableLink,
  };
};