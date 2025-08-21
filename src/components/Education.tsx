import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600">
            My academic background and qualifications
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-8 border border-gray-200 mb-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Full Stack Web Development
                </h3>
                <p className="text-lg text-blue-600 font-medium mb-2">
                  Masai School
                </p>
                <p className="text-gray-600 mb-4">
                  December 2024 - Present
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  ⟳ In Progress
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-8 border border-gray-200">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Master of Computer Applications (MCA)
                </h3>
                <p className="text-lg text-blue-600 font-medium mb-4">
                  Visvesvaraya Technological University (VTU)
                </p>
                <p className="text-gray-600 mb-4">
                  Acharya Institute of Technology (AIT)
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  ✓ Completed
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium text-blue-600 mb-3">Masai School</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Intensive training in modern web development technologies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Hands-on experience with MERN stack projects</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Industry-aligned curriculum with real-world projects</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Advanced JavaScript, React, and backend development</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-blue-600 mb-3">MCA - VTU</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Focused on software development and web technologies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Gained expertise in full-stack development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Participated in various technical competitions and hackathons</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Developed strong foundation in computer science fundamentals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;