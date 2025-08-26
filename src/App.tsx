import Hero from "./components/Hero";
import TerminalLoader from "./components/Loader";
import SectionLoader from "./components/SectionLoader";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import LazySection from "./components/LazySection";
import "./loader.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Initial loading effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);
  
  // Handle scroll events to update active section
  useEffect(() => {
    // Sections in order of appearance
    const sections = [
      'home',
      'about', 
      'skills', 
      'github-contributions',
      'experience', 
      'projects', 
      'education', 
      'contact'
    ];
    
    // Create a throttled scroll handler for better performance
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const headerOffset = 100;
          const scrollPosition = window.scrollY + headerOffset;
          
          // Special case for top of page
          if (scrollPosition < 300) {
            if (activeSection !== 'home') {
              setActiveSection('home');
            }
            ticking = false;
            return;
          }
          
          // Special case for bottom of page
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
            const lastSection = sections[sections.length - 1];
            if (activeSection !== lastSection) {
              setActiveSection(lastSection);
            }
            ticking = false;
            return;
          }
          
          // Check each section
          for (const section of sections) {
            const element = document.getElementById(section);
            if (!element) continue;
            
            const rect = element.getBoundingClientRect();
            
            // Calculate how much of the section is visible
            const sectionVisibility = (
              Math.min(rect.bottom, window.innerHeight) - 
              Math.max(rect.top, 0)
            ) / rect.height;
            
            // If more than 30% visible or element top is near viewport top
            if (sectionVisibility > 0.3 || (rect.top >= 0 && rect.top < window.innerHeight / 3)) {
              if (activeSection !== section) {
                setActiveSection(section);
              }
              break;
            }
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    };
    
    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call once to set initial active section
    handleScroll();
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  if (loading) return <TerminalLoader />;

  return (
    <div className="app-content">
      <Header activeSection={activeSection} />
      <section id="home">
        <Hero />
      </section>

      <LazySection
        id="about"
        importFn={() => import("./components/About")}
        fallback={<SectionLoader message="Loading About..." />}
      />
      <LazySection
        id="skills"
        importFn={() => import("./components/Skills")}
        fallback={<SectionLoader message="Loading Skills..." />}
      />
      <LazySection
        id="github-contributions"
        importFn={() => import("./components/GitHubCalendar")}
        fallback={<SectionLoader message="Loading Contributions..." />}
      />
      <LazySection
        id="experience"
        importFn={() => import("./components/Experience")}
        fallback={<SectionLoader message="Loading Experience..." />}
      />
      <LazySection
        id="projects"
        importFn={() => import("./components/Projects")}
        fallback={<SectionLoader message="Loading Projects..." />}
      />
      <LazySection
        id="education"
        importFn={() => import("./components/Education")}
        fallback={<SectionLoader message="Loading Education..." />}
      />
      <LazySection
        id="contact"
        importFn={() => import("./components/Contact")}
        fallback={<SectionLoader message="Loading Contact..." />}
      />

<div className="chatbot-widget">
  <LazySection 
    id='chatbot'
    importFn={() => import("./components/ChatbotWidget")} 
    fallback={<SectionLoader message="Loading Chatbot..." />} 
  />
</div> 
   </div>
  );
}


export default App;
