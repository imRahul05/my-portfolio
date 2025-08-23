import React, { useState, useEffect, lazy, Suspense } from "react";
import "./lazy-section.css";

interface LazySectionProps {
  importFn: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
  id: string;
}

const LazySection: React.FC<LazySectionProps> = ({ importFn, fallback, id }) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    // Need to wait for the component to be mounted
    const element = document.getElementById(id);
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Load component when section is visible
          importFn().then((mod) => setComponent(() => mod.default));
          setShouldLoad(true);
          
          // Add active class when this section is visible
          element.classList.add('active');
          
          // Once component is loaded, we don't need to observe for loading purposes
          // but we keep observing for active class toggling
        } else {
          // Remove active class when section is not visible
          element.classList.remove('active');
        }
      },
      { 
        threshold: 0.05, // start loading at just 5% visibility for faster loading
        rootMargin: '-64px 0px -100px 0px' // adjust for header height
      }
    );

    observer.observe(element);

    // Preload once user has scrolled a bit - this helps with performance
    const handleScroll = () => {
      if (!shouldLoad) {
        importFn().then((mod) => {
          setComponent(() => mod.default);
          setShouldLoad(true);
          // Remove listener once we've preloaded
          window.removeEventListener('scroll', handleScroll);
        });
      }
    };
    
    // Add scroll listener for preloading
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [id, importFn, shouldLoad]);

  return (
    <section id={id} className="lazy-section">
      {shouldLoad && Component ? (
        <Suspense fallback={fallback}>{<Component />}</Suspense>
      ) : (
        <div className="min-h-[200px] flex items-center justify-center">
          {fallback || null}
        </div>
      )}
    </section>
  );
};

export default LazySection;
