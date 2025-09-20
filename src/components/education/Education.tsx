"use client"

import { useState } from "react"
import {  FlipHorizontal } from "lucide-react"
import { LinkPreview } from "../ui/link-preview"
import masai from "../../assets/masai.png"
import vtu from "../../assets/vtu.png"
const Education = () => {
  const [flippedCard1, setFlippedCard1] = useState(false)
  const [flippedCard2, setFlippedCard2] = useState(false)

  const toggleCard1 = () => setFlippedCard1(!flippedCard1)
  const toggleCard2 = () => setFlippedCard2(!flippedCard2)
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
                <div className="flip-card">
                  <div className={`flip-card-inner ${flippedCard1 ? 'flipped' : ''}`}>
                    {/* Front Side */}
                    <div className="flip-card-front bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-8 border border-gray-200 shadow-sm hover:border-blue-300 relative">
                      <button
                        onClick={toggleCard1}
                        className="absolute top-4 right-4 p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors duration-200 z-10"
                        title="View Academic Highlights"
                      >
                        <FlipHorizontal size={16} className="text-blue-600" />
                      </button>
                      <div className="flex items-start gap-6">
                        <img
                          src={masai}
                          alt="Masai School Logo"
                          className="w-16 h-16 rounded-lg object-contain bg-white flex-shrink-0 border border-gray-200 shadow"
                        />
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Full Stack Web Development</h3>
                          <LinkPreview
                            url="https://www.masaischool.com/"
                            isStatic={true}
                            imageSrc="https://i.ibb.co/TMXRYFXj/Screenshot-2025-09-21-at-12-35-41-AM.png"
                            className="text-lg text-blue-600 font-medium mb-2 hover:text-blue-700 transition-colors cursor-pointer"
                          >
                            <p className="text-lg text-blue-600 font-medium mb-2">Masai School</p>
                          </LinkPreview>
                          <p className="text-gray-600 mb-4">December 2024 - Present</p>
                          <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            ⟳ In Progress
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back Side */}
                    <div className="flip-card-back bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg p-8 border border-blue-300 shadow-sm relative">
                      <button
                        onClick={toggleCard1}
                        className="absolute top-4 right-4 p-2 bg-white hover:bg-gray-100 rounded-full transition-colors duration-200 z-10"
                        title="Back to Education Details"
                      >
                        <FlipHorizontal size={16} className="text-blue-600" />
                      </button>
                      <h4 className="text-xl font-bold text-blue-800 mb-4">Academic Highlights</h4>
                      <ul className="space-y-3 text-gray-700">
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
                <div className="flip-card">
                  <div className={`flip-card-inner ${flippedCard2 ? 'flipped' : ''}`}>
                    {/* Front Side */}
                    <div className="flip-card-front bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-8 border border-gray-200 shadow-sm hover:border-teal-300 relative">
                      <button
                        onClick={toggleCard2}
                        className="absolute top-4 right-4 p-2 bg-teal-100 hover:bg-teal-200 rounded-full transition-colors duration-200 z-10"
                        title="View Academic Highlights"
                      >
                        <FlipHorizontal size={16} className="text-teal-600" />
                      </button>
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                           <img
                          src={vtu}
                          alt="VTU Logo"
                          className="w-16 h-16 rounded-lg object-contain bg-white flex-shrink-0 border border-gray-200 shadow"
                        />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Master of Computer Applications (MCA)</h3>
                          <LinkPreview
                            url="https://vtu.ac.in/"
                            isStatic={true}
                            imageSrc="https://i.ibb.co/ds3cBHfB/Screenshot-2025-09-21-at-12-34-39-AM.png"
                            className="text-lg text-blue-600 font-medium mb-4 hover:text-blue-700 transition-colors cursor-pointer"
                          >
                            <p className="text-lg text-blue-600 font-medium mb-4">
                              Visvesvaraya Technological University (VTU)
                            </p>
                          </LinkPreview>
                          <p className="text-gray-600 mb-4">Acharya Institute of Technology (AIT)</p>
                          <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            ✓ Completed
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back Side */}
                    <div className="flip-card-back bg-gradient-to-r from-teal-100 to-green-100 rounded-lg p-8 border border-teal-300 shadow-sm relative">
                      <button
                        onClick={toggleCard2}
                        className="absolute top-4 right-4 p-2 bg-white hover:bg-gray-100 rounded-full transition-colors duration-200 z-10"
                        title="Back to Education Details"
                      >
                        <FlipHorizontal size={16} className="text-teal-600" />
                      </button>
                      <h4 className="text-xl font-bold text-teal-800 mb-4">Academic Highlights</h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span>Focused on software development and web technologies</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span>Gained expertise in full-stack development</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span>Participated in technical competitions and hackathons</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span>Strong foundation in computer science fundamentals</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 p-6 bg-gray-50 rounded-lg opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
          <div className="text-center text-gray-600">
            <p className="text-lg">💡 Click the rotate button on each education card to see detailed academic highlights!</p>
          </div>
        </div>
      </div>

      <style>{`
        /* Timeline Animation Keyframes */
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

        /* Flip Card Styles */
        .flip-card {
          background-color: transparent;
          width: 100%;
          height: 300px; /* Fixed height to prevent layout shift */
          perspective: 1000px; /* 3D perspective */
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: left;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          /* Remove hover-based flip */
        }

        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        /* Hover effects for better UX */
        .flip-card:hover .flip-card-front {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .flip-card:hover .flip-card-back {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .flip-card {
            height: auto;
            min-height: 250px;
          }
          
          .flip-card-front, .flip-card-back {
            position: relative;
            transform: none !important;
            backface-visibility: visible;
          }
          
          .flip-card:hover .flip-card-inner {
            transform: none;
          }
          
          .flip-card-back {
            display: none;
          }
          
          .flip-card:hover .flip-card-back {
            display: flex;
          }
          
          .flip-card:hover .flip-card-front {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}

export default Education