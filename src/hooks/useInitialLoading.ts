import { useState, useEffect } from 'react';

/**
 * Custom hook that manages the initial loading state of the application
 * @param duration Time in milliseconds before switching from loading to ready state
 * @returns Boolean indicating if the app is still loading
 */
export const useInitialLoading = (duration: number = 4000): boolean => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return loading;
};
