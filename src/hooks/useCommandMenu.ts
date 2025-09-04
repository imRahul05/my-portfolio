import { useState } from 'react';

/**
 * Custom hook to manage the command menu state
 * @returns Object containing isCommandMenuOpen state and setIsCommandMenuOpen function
 */
export const useCommandMenu = () => {
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);
  
  const openCommandMenu = () => setIsCommandMenuOpen(true);
  const closeCommandMenu = () => setIsCommandMenuOpen(false);
  const toggleCommandMenu = () => setIsCommandMenuOpen(prev => !prev);

  return {
    isCommandMenuOpen,
    setIsCommandMenuOpen,
    openCommandMenu,
    closeCommandMenu,
    toggleCommandMenu
  };
};
