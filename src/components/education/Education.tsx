// import React from 'react';
// import { GraduationCap } from 'lucide-react';

// const Education = () => {
//   return (
//     <section id="education" className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//             Education
//           </h2>
//           <p className="text-lg text-gray-600">
//             My academic background and qualifications
//           </p>
//         </div>

//         <div className="max-w-3xl mx-auto">
//           <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-8 border border-gray-200 mb-8">
//             <div className="flex items-start gap-6">
//               <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
//                 <GraduationCap className="text-white" size={32} />
//               </div>
//               <div className="flex-1">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                   Full Stack Web Development
//                 </h3>
//                 <p className="text-lg text-blue-600 font-medium mb-2">
//                   Masai School
//                 </p>
//                 <p className="text-gray-600 mb-4">
//                   December 2024 - Present
//                 </p>
//                 <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
//                   ⟳ In Progress
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-8 border border-gray-200">
//             <div className="flex items-start gap-6">
//               <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
//                 <GraduationCap className="text-white" size={32} />
//               </div>
//               <div className="flex-1">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                   Master of Computer Applications (MCA)
//                 </h3>
//                 <p className="text-lg text-blue-600 font-medium mb-4">
//                   Visvesvaraya Technological University (VTU)
//                 </p>
//                 <p className="text-gray-600 mb-4">
//                   Acharya Institute of Technology (AIT)
//                 </p>
//                 <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
//                   ✓ Completed
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mt-8 p-6 bg-gray-50 rounded-lg">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Highlights</h3>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <h4 className="text-lg font-medium text-blue-600 mb-3">Masai School</h4>
//                 <ul className="space-y-3 text-gray-600">
//                   <li className="flex items-center gap-3">
//                     <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                     <span>Intensive training in modern web development technologies</span>
//                   </li>
//                   <li className="flex items-center gap-3">
//                     <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                     <span>Hands-on experience with MERN stack projects</span>
//                   </li>
//                   <li className="flex items-center gap-3">
//                     <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                     <span>Industry-aligned curriculum with real-world projects</span>
//                   </li>
//                   <li className="flex items-center gap-3">
//                     <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                     <span>Advanced JavaScript, React, and backend development</span>
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="text-lg font-medium text-blue-600 mb-3">MCA - VTU</h4>
//                 <ul className="space-y-3 text-gray-600">
//                   <li className="flex items-center gap-3">
//                     <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                     <span>Focused on software development and web technologies</span>
//                   </li>
//                   <li className="flex items-center gap-3">
//                     <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                     <span>Gained expertise in full-stack development</span>
//                   </li>
//                   <li className="flex items-center gap-3">
//                     <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                     <span>Participated in various technical competitions and hackathons</span>
//                   </li>
//                   <li className="flex items-center gap-3">
//                     <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                     <span>Developed strong foundation in computer science fundamentals</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;


"use client"

import { GraduationCap } from "lucide-react"

const Education = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-lg text-gray-600">My academic background and qualifications</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-teal-400 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-blue-400 to-teal-400 animate-[drawLine_2s_ease-out_forwards] origin-top scale-y-0"></div>
          </div>

          {/* Timeline items */}
          <div className="space-y-12">
            <div className="relative flex items-start opacity-0 translate-y-8 animate-[slideInUp_0.8s_ease-out_0.5s_forwards]">
              <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10 animate-pulse">
                <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute inset-0 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
              </div>

              {/* Content */}
              <div className="ml-16 w-full">
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-500 hover:border-blue-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Full Stack Web Development</h3>
                      <p className="text-lg text-blue-600 font-medium mb-2">Masai School</p>
                      <p className="text-gray-600 mb-4">December 2024 - Present</p>
                      <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        ⟳ In Progress
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-start opacity-0 translate-y-8 animate-[slideInUp_0.8s_ease-out_1s_forwards]">
              <div className="absolute left-6 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg z-10">
                <div className="absolute inset-0 bg-teal-400 rounded-full animate-ping opacity-75 animation-delay-500"></div>
                <div className="absolute inset-0 bg-teal-500 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.5)]"></div>
              </div>

              {/* Content */}
              <div className="ml-16 w-full">
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-500 hover:border-teal-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Master of Computer Applications (MCA)</h3>
                      <p className="text-lg text-blue-600 font-medium mb-4">
                        Visvesvaraya Technological University (VTU)
                      </p>
                      <p className="text-gray-600 mb-4">Acharya Institute of Technology (AIT)</p>
                      <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        ✓ Completed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 p-6 bg-gray-50 rounded-lg opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
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

      <style>{`
        @keyframes drawLine {
          to {
            transform: scaleY(1);
          }
        }
        
        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  )
}

export default Education
