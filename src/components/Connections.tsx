import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Download, Menu, X } from 'lucide-react';

const Connections = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    const handleScroll = () => {
      // Show connections once user has scrolled down a bit
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    const handleClickOutside = (event) => {
      if (isMobileExpanded) {
        // Check if click was outside of the connections component
        const connectionsElement = document.querySelector('.mobile-fab-container');
        if (connectionsElement && !connectionsElement.contains(event.target)) {
          setIsMobileExpanded(false);
        }
      }
    };

    checkMobile();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileExpanded]);

  const handleResumeDownload = () => {
    const resumeUrl = "/Rahul_Kumar_Resume.pdf";
    const downloadLink = document.createElement("a");
    downloadLink.href = resumeUrl;
    downloadLink.download = "Rahul_Kumar_Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    window.open(resumeUrl, "_blank");
  };
  
  const toggleMobileExpanded = () => {
    if (isMobile) {
      setIsMobileExpanded(!isMobileExpanded);
    }
  };

  return (
    <StyledWrapper className={`${isVisible ? 'visible' : 'hidden'} ${isMobileExpanded ? 'active' : ''}`}>
      {/* Desktop View */}
      <div className={`social-links desktop-only`}>
        <a 
          href="https://twitter.com/imrahul165" 
          target="_blank" 
          rel="noopener noreferrer"
          id="twitter" 
          className="social-btn flex-center"
        >
          <svg viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg><span>Twitter</span>
        </a>
        <a 
          href="https://linkedin.com/in/imrahul05" 
          target="_blank" 
          rel="noopener noreferrer"
          id="linkedin" 
          className="social-btn flex-center"
        >
          <svg viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg><span>LinkedIn</span>
        </a>
        <a 
          href="https://github.com/imRahul05" 
          target="_blank" 
          rel="noopener noreferrer"
          id="github" 
          className="social-btn flex-center"
        >
          <svg viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg><span>GitHub</span>
        </a>
        <div 
          id="resume" 
          className="social-btn flex-center" 
          onClick={handleResumeDownload}
        >
          <Download size={24} color="#FF5722" />
          <span>Resume</span>
        </div>
      </div>

      {/* Mobile View */}
      <div className="mobile-fab-container mobile-only">
        {/* Social Buttons for Mobile */}
        <a 
          href="https://twitter.com/imrahul165" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`mobile-social-btn ${isMobileExpanded ? 'expanded' : ''}`}
          style={{ '--delay': '0.1s', '--position': '-65px' }}
          onClick={() => setIsMobileExpanded(false)}
        >
          <svg viewBox="0 0 24 24" height={20} width={20} xmlns="http://www.w3.org/2000/svg"><path fill="#1da1f2" d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
        </a>
        <a 
          href="https://linkedin.com/in/imrahul05" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`mobile-social-btn ${isMobileExpanded ? 'expanded' : ''}`}
          style={{ '--delay': '0.15s', '--position': '-125px' }}
          onClick={() => setIsMobileExpanded(false)}
        >
          <svg viewBox="0 0 24 24" height={20} width={20} xmlns="http://www.w3.org/2000/svg"><path fill="#0e76a8" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
        </a>
        <a 
          href="https://github.com/imRahul05" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`mobile-social-btn ${isMobileExpanded ? 'expanded' : ''}`}
          style={{ '--delay': '0.2s', '--position': '-185px' }}
          onClick={() => setIsMobileExpanded(false)}
        >
          <svg viewBox="0 0 24 24" height={20} width={20} xmlns="http://www.w3.org/2000/svg"><path fill="#333" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
        </a>
        <div 
          className={`mobile-social-btn ${isMobileExpanded ? 'expanded' : ''}`}
          style={{ '--delay': '0.25s', '--position': '-245px' }}
          onClick={() => {
            handleResumeDownload();
            setIsMobileExpanded(false);
          }}
        >
          <Download size={20} color="#FF5722" />
        </div>
        
        {/* FAB Button */}
        <div 
          className="mobile-fab" 
          onClick={toggleMobileExpanded}
        >
          {isMobileExpanded ? (
            <X size={24} color="#FFFFFF" />
          ) : (
            <Menu size={24} color="#FFFFFF" />
          )}
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  transition: opacity 0.3s ease, transform 0.5s ease;
  
  &.hidden {
    opacity: 0;
    transform: translateY(-50%) translateX(-30px);
    pointer-events: none;
  }
  
  &.visible {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }

  .desktop-only {
    display: block;
  }

  .mobile-only {
    display: none;
  }

  .social-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .social-btn {
    cursor: pointer;
    height: 50px;
    width: 50px;
    font-family: 'Titillium Web', sans-serif;
    color: #333;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.07);
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(4px);
    margin: 8px 0;
    margin-left: 10px;
    transition: 0.3s;
    justify-content: center;
  }

  .social-btn svg {
    height: 24px;
    width: 24px;
  }

  .social-btn span {
    width: 0px;
    overflow: hidden;
    transition: 0.3s;
    text-align: left;
    margin-left: 10px;
    font-weight: 500;
    color: #333;
  }

  .social-btn:hover {
    width: 160px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.8);
    margin-left: 0;
  }

  .social-btn:hover span {
    padding: 2px;
    width: 100px;
    overflow: visible;
    white-space: nowrap;
  }

  #twitter svg {
    fill: #1da1f2;
  }
  
  #twitter:hover {
    background: rgba(29, 161, 242, 0.1);
    border: 1px solid #1da1f2;
  }
  
  #twitter:hover span {
    color: #1da1f2;
  }

  #linkedin svg {
    fill: #0e76a8;
  }
  
  #linkedin:hover {
    background: rgba(14, 118, 168, 0.1);
    border: 1px solid #0e76a8;
  }
  
  #linkedin:hover span {
    color: #0e76a8;
  }

  #github svg {
    fill: #333;
  }
  
  #github:hover {
    background: rgba(51, 51, 51, 0.1);
    border: 1px solid #333;
  }
  
  #github:hover span {
    color: #333;
  }
  
  #resume {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(4px);
  }
  
  #resume:hover {
    background: rgba(255, 87, 34, 0.1);
    border: 1px solid #FF5722;
  }
  
  #resume:hover span {
    color: #FF5722;
  }

  @media (max-width: 768px) {
    position: static;
    left: auto;
    top: auto;
    transform: none;
    
    /* Always show mobile FAB regardless of scroll position */
    opacity: 1 !important;
    transform: none !important;
    pointer-events: auto !important;

    .desktop-only {
      display: none;
    }

    .mobile-only {
      display: block;
    }

    .mobile-fab-container {
      position: fixed;
      bottom: 20px;
      left: 20px;
      z-index: 1000;
    }

    .mobile-social-btn {
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(4px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transform: translateY(10px) scale(0.8);
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      z-index: 999;
    }

    .mobile-social-btn.expanded {
      opacity: 1;
      visibility: visible;
      transform: translateY(var(--position)) scale(1);
      transition-delay: var(--delay);
    }

    .mobile-fab {
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #000;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      z-index: 1001;
      transition: transform 0.3s ease;
      
      /* Ensure it's always visible on mobile */
      opacity: 1 !important;
      visibility: visible !important;
    }

    .mobile-fab:hover {
      transform: scale(1.1);
    }
  }
`;

export default Connections;