import React from 'react';
import { Briefcase, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Developer / Intern',
      company: 'Coding Raja Technologies',
      description: 'Developed apps that worked smoothly and benefited users. Involved in building web applications.',
      icon: <Briefcase className="text-white" size={24} />
    },
    {
      role: 'Freelancer',
      company: 'Independent',
      description: 'Worked on various projects as a freelancer.',
      icon: <Users className="text-white" size={24} />
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600">
            My professional journey and contributions to various projects
          </p> */}
        </div>

        {/* <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start gap-6 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                {exp.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {exp.role}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {exp.company}
                </p>
                <p className="text-gray-600">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div> */}

        <div className="mt-12 p-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg text-white text-center">
          <h3 className="text-xl font-semibold mb-2">🏆 Major Achievement</h3>
          <p className="text-lg">
            <strong>Smart India Hackathon (SIH) 2023 Winner</strong>
          </p>
          <p className="mt-2 opacity-90">
            Recognized for innovative problem-solving and technical excellence at the national level
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;