import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import GitHubContributions from './components/GitHubCalendar';
import MatrixLoader from './components/Loader';
import './loader.css';

import ChatbotWidget from './components/ChatbotWidget';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState(true);

  // Effect to update body class based on loading state
  useEffect(() => {
    if (loading) {
      document.body.classList.add('loading');
    } else {
      document.body.classList.remove('loading');
    }
  }, [loading]);

  useEffect(() => {
    // Create a timer for minimum display time of the loader (2.5 seconds)
    const minDisplayTime = 2500;
    const startTime = Date.now();
    
    // Function to check if minimum time has passed and page has loaded
    const hideLoader = () => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < minDisplayTime) {
        // If minimum time hasn't elapsed, wait for the remaining time
        setTimeout(() => setLoading(false), minDisplayTime - elapsedTime);
      } else {
        // Minimum time has passed, hide loader
        setLoading(false);
      }
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      // Add event listener for when the page finishes loading
      window.addEventListener('load', hideLoader);
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'github-contributions', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Return cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', hideLoader);
    };
  }, []);

  if (loading) {
    return <MatrixLoader />;
  }

  return (
    <div className="app-content">
      <Header activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <GitHubContributions />
      <Experience />
      <Projects />
      <Education />
      <Contact />

      <ChatbotWidget />
    </div>
  );
}

export default App;
