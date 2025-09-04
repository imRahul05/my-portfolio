import { useState } from 'react';
import { MapPin, Mail, Download, ExternalLink, Github, Linkedin, Loader2 } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import img from '../assets/img1.gif';
import { RetroGrid } from './ui/retro-grid';
import { AnimatedText } from './ui/animated-underline-text-one';
import { BorderBeam } from './ui/border-beam';
import { Confetti } from './magicui/confetti';
import './hero.css';
 
const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  
  // Function to handle resume download + open in new tab
  const handleResumeDownload = () => {
    setIsDownloading(true);
    const resumeUrl = "/Rahul_Kumar_Resume.pdf";
    
    // Simulate download delay (you can remove this in production)
    setTimeout(() => {
      // Create a hidden link element
      const downloadLink = document.createElement("a");
      downloadLink.href = resumeUrl;
      downloadLink.download = "Rahul_Kumar_Resume.pdf"; // file name
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      
      // Open resume in new tab
      window.open(resumeUrl, "_blank");
      
      // Set downloading to false and trigger confetti
      setIsDownloading(false);
      setShowConfetti(true);
      
      // Reset confetti after animation completes
      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
    }, 1200); 
  };

const handleHireMe = () => {
  const email = "rahulkumar20000516@gmail.com";
  const subject = encodeURIComponent("Job Opportunity - Let's Connect");
  const body = encodeURIComponent(
    "Hi Rahul,\n\nI came across your portfolio and I'm interested in discussing potential opportunities with you.\n\nBest Regards,\n[Your Name]"
  );

  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
    "_blank"
  );
};


  return (
    <section id="home" className="min-h-screen pt-20 pb-12 md:pb-16 lg:pb-0 px-0 flex items-center relative w-full overflow-hidden">
      {/* RetroGrid Background */}
      <RetroGrid className="opacity-30 dark:opacity-40 hero-retro-grid" angle={55} />
      
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-16 relative z-10 hero-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-6 lg:gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 hero-heading text-center lg:text-left">
                Rahul Kumar
              </h1>
              <div className="mb-8 mt-2">
                <AnimatedText 
                  text="Aspiring Software Developer" 
                  textClassName="text-xl sm:text-2xl text-gray-600 hero-heading"
                  underlineClassName="text-orange-500 animated-underline"
                  underlinePath="M 0,10 Q 85,0 170,10 Q 255,20 340,10"
                  underlineHoverPath="M 0,10 Q 85,20 170,10 Q 255,0 340,10"
                  underlineDuration={1.8}
                  className="animated-underline lg:!items-start flex justify-center lg:justify-start"
                />
              </div>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <MapPin size={20} />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <Mail size={20} />
                  <span>imrahul2516@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Social Links with animation similar to Connections.tsx */}
            <div className="social-links-container mb-6 flex justify-center lg:justify-start">
              <a
                href="https://github.com/imRahul05"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn flex-center"
                id="github-hero"
                title="GitHub Profile"
                aria-label="Visit Rahul's GitHub Profile"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/imrahul05"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn flex-center"
                id="linkedin-hero"
                title="LinkedIn Profile"
                aria-label="Visit Rahul's LinkedIn Profile"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/imrahul165"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn flex-center"
                id="twitter-hero"
                title="Twitter Profile"
                aria-label="Visit Rahul's Twitter Profile"
              >
                <FaXTwitter size={20} />
                <span>Twitter</span>
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 relative justify-center lg:justify-start">
              {showConfetti && (
                <div className="absolute inset-0 pointer-events-none z-10">
                  <Confetti 
                    options={{
                      particleCount: 100,
                      spread: 70,
                      origin: { y: 0.6 }
                    }}
                  />
                </div>
              )}
              <button
                onClick={handleResumeDownload}
                disabled={isDownloading}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium hero-button disabled:opacity-70"
              >
                {isDownloading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download size={20} />
                    Download Resume
                  </>
                )}
              </button>
              <button
                onClick={handleHireMe}
                className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium hero-button"
              >
                <ExternalLink size={20} />
                Hire ME
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end mt-12 md:mt-16 lg:mt-0">
            <div className="relative rounded-full">
              <BorderBeam 
                size={300} 
                duration={20} 
                colorFrom="#4F46E5" 
                colorTo="#8B5CF6" 
                className="opacity-70 hidden sm:block"
              />
              <img 
                src={img}
                alt="Rahul Kumar" 
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
