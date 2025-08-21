import React from 'react';
import { Award, Target, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Aspiring Software Developer and Frontend Web Developer. Passionate about building user-focused web applications. 
            Completed MCA from Visvesvaraya Technological University (VTU) at Acharya Institute of Technology (AIT). 
            Winner of Smart India Hackathon (SIH) 2023. Currently building a School LMS. Looking for Internship/Job as a Fresher. 
            Diving deeper into AI, JavaScript, React.js, Node.js, Express.js, and MongoDB. Skilled in full-stack development with a focus on scalable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-lg flex items-center justify-center">
              <Code className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Stack Development</h3>
            <p className="text-gray-600">
              Proficient in MERN stack with focus on scalable applications and modern web technologies
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-teal-50 hover:bg-teal-100 transition-colors duration-200">
            <div className="w-16 h-16 mx-auto mb-4 bg-teal-600 rounded-lg flex items-center justify-center">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Award Winner</h3>
            <p className="text-gray-600">
              Smart India Hackathon (SIH) 2023 Winner, recognized for innovative problem-solving
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors duration-200">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-600 rounded-lg flex items-center justify-center">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Focus</h3>
            <p className="text-gray-600">
              Seeking opportunities as a fresher while continuously learning AI, modern frameworks, and best practices
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Interests</h3>
          <p className="text-gray-600">
            Beyond coding, I'm a traveller and anime enthusiast. I run a YouTube channel called 
            <span className="font-medium text-blue-600"> mangaamaze</span> where I share my passion for anime content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;