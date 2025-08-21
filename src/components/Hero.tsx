import React from 'react';
import { MapPin, Mail, Download, ExternalLink, Github, Linkedin } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import img from '../assets/img.png';
 import resumePdf from '../assets/resume/Rahul_CV.pdf'; // place your PDF inside src/assets

const Hero = () => {
  // Function to handle resume download + open in new tab
  const handleResumeDownload = () => {
    //Create a hidden link element
    const downloadLink = document.createElement("a");
    downloadLink.href = resumePdf;
    downloadLink.download = "Rahul_Kumar_Resume.pdf"; // file name
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // Open resume in new tab
    window.open(resumePdf, "_blank");
  };

  // Function to handle hire me -> Gmail compose
  const handleHireMe = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=rahulkumar20000516@gmail.com",
      "_blank"
    );
  };

  return (
    <section id="home" className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Rahul Kumar
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-6">
                Aspiring Software Developer
              </p>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-3">
                  <MapPin size={20} />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} />
                  <span>imrahul2516@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              <a
                href="https://github.com/imRahul05"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-900 rounded-full flex items-center justify-center text-white transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/imrahul05"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/imrahul165"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sky-400 hover:bg-sky-500 rounded-full flex items-center justify-center text-white transition-all duration-200"
              >
                <FaXTwitter size={20} />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleResumeDownload}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                <Download size={20} />
                Download Resume
              </button>
              <button
                onClick={handleHireMe}
                className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 font-medium"
              >
                <ExternalLink size={20} />
                Hire ME
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={img}
                alt="Rahul Kumar" 
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
