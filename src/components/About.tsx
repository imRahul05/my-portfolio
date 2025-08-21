import React from 'react';
import { Award, Target, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I’m an <span className="font-semibold text-gray-900">aspiring Software Developer</span> with a strong
            foundation in <span className="text-blue-600 font-medium">full-stack web development</span>.  
            I completed my MCA at <span className="font-medium text-gray-900">Visvesvaraya Technological University (VTU)</span>,
            and was proud to be a <span className="font-semibold text-teal-600">Smart India Hackathon 2023 Winner</span>.  
            Currently, I’m working on a <span className="font-medium text-gray-900">School LMS</span> project while 
            sharpening my skills in <span className="font-medium text-gray-900">AI, React.js, Node.js, Express.js, and MongoDB</span>.  
            My career goal is to contribute as a fresher in a dynamic team where I can grow and build impactful applications.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl shadow-sm bg-gradient-to-b from-blue-50 to-white hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
              <Code className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Stack Development</h3>
            <p className="text-gray-600">
              Hands-on experience with the MERN stack and modern web technologies to build 
              scalable, user-focused applications.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl shadow-sm bg-gradient-to-b from-teal-50 to-white hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-teal-600 rounded-xl flex items-center justify-center shadow-md">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Hackathon Winner</h3>
            <p className="text-gray-600">
              Recognized as a <span className="font-medium text-gray-900">Smart India Hackathon 2023 Winner</span> 
              for delivering innovative, real-world solutions.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl shadow-sm bg-gradient-to-b from-orange-50 to-white hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-600 rounded-xl flex items-center justify-center shadow-md">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Focus</h3>
            <p className="text-gray-600">
              Eager to start my professional journey as a fresher, with a strong focus on 
              <span className="font-medium text-gray-900"> AI, modern frameworks, and best coding practices</span>.
            </p>
          </div>
        </div>

        {/* Interests */}
        {/* <div className="mt-12 p-8 bg-gray-50 rounded-2xl shadow-inner">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Beyond Coding</h3>
          <p className="text-gray-600 leading-relaxed">
            Outside of development, I’m an avid <span className="font-medium text-gray-900">traveller</span> and 
            <span className="font-medium text-gray-900"> anime enthusiast</span>.  
            I also run a YouTube channel called <span className="font-semibold text-blue-600">mangaamaze</span>, 
            where I share my passion for anime storytelling and creativity.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default About;
