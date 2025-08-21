import React from 'react';
import { MapPin, Mail, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center text-white text-4xl font-bold">
              RK
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
              Rahul Kumar
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-6">
              Software Developer & Frontend Specialist
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} />
                <span>rahulkumar20000516@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://resume-builder-test-new.masaischool.com/resume/public?resumeId=684d5f2a45a82c85f5ce89c2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              <Download size={20} />
              Download Resume
            </a>
            <a
              href="https://imrahul05.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 font-medium"
            >
              <ExternalLink size={20} />
              View Live Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;