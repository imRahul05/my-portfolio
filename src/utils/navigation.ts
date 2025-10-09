/**
 * Scrolls smoothly to a section on the page
 * @param id - The ID of the section to scroll to
 * @param headerOffset - Optional offset to account for fixed headers (default: 70px)
 */
export const scrollToSection = (id: string, headerOffset: number = 70): void => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
    // Scroll with smooth behavior
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
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
