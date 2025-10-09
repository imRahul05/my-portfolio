import { navigationSections } from './navigation';

// Define the route configuration for section-based navigation
export interface RouteConfig {
  path: string;
  section: string;
  title: string;
  description: string;
}

// Generate routes based on navigation sections
export const sectionRoutes: RouteConfig[] = navigationSections.map(section => ({
  path: `/?section=${section.id}`,
  section: section.id,
  title: `${section.label} - Rahul Kumar Portfolio`,
  description: `View ${section.label} section of Rahul Kumar's portfolio`
}));

// Default route
export const defaultRoute: RouteConfig = {
  path: '/',
  section: 'home',
  title: 'Rahul Kumar - Full Stack Developer Portfolio',
  description: 'Welcome to Rahul Kumar\'s portfolio showcasing projects, skills, and experience'
};

// Helper function to get route by section
export const getRouteBySection = (sectionId: string): RouteConfig => {
  return sectionRoutes.find(route => route.section === sectionId) || defaultRoute;
};

// Helper function to get section from URL
export const getSectionFromURL = (): string => {
  const urlParams = new URLSearchParams(window.location.search);
  const section = urlParams.get('section');
  
  // Validate if section exists in navigation sections
  const validSection = navigationSections.find(nav => nav.id === section);
  return validSection ? section! : 'home';
};

// Helper function to update URL without page reload
export const updateURLSection = (sectionId: string, replace: boolean = false) => {
  const route = getRouteBySection(sectionId);
  const url = sectionId === 'home' ? '/' : `/?section=${sectionId}`;
  
  if (replace) {
    window.history.replaceState({ section: sectionId }, route.title, url);
  } else {
    window.history.pushState({ section: sectionId }, route.title, url);
  }
  
  // Update document title
  document.title = route.title;
};

// Helper function to generate shareable URL
export const getShareableURL = (sectionId: string): string => {
  const baseURL = window.location.origin;
  return sectionId === 'home' ? baseURL : `${baseURL}/?section=${sectionId}`;
};

// All available sections for validation
export const availableSections = navigationSections.map(section => section.id);