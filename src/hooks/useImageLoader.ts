import { useState, useCallback } from "react";

export const useImageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setIsError(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setIsError(true);
  }, []);

  return { isLoading, isError, handleLoad, handleError };
};
