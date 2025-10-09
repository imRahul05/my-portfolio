/**
 * Scrolls smoothly to a section on the page
 * @param id - The ID of the section to scroll to
 * @param headerOffset - Optional offset to account for fixed headers (default: 70px)
 * @param updateURL - Whether to update the URL (default: false, handled by router)
 */
export const scrollToSection = (id: string, headerOffset: number = 70, updateURL: boolean = false): void => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
    // Scroll with smooth behavior
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Optionally update URL (for legacy support)
    if (updateURL && typeof window !== 'undefined') {
      const url = id === 'home' ? '/' : `/?section=${id}`;
      window.history.pushState({ section: id }, '', url);
    }
  }
};

/**
 * Navigation sections data for the portfolio
 */
export const navigationSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'github-contributions', label: 'GitHub Activity' },
  { id: 'experience', label: 'Certification' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

/**
 * Returns an array of just the section IDs for active section tracking
 */
export const sectionIds = navigationSections.map(section => section.id);
