import React, { useState } from 'react';

const Skills = () => {
  const [animationSpeed, setAnimationSpeed] = useState(30); // seconds for one full cycle

  const allSkills = [
    // Row 1 - Moving Right
    { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://static.cdnlogo.com/logos/t/58/tailwindcss.svg' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg' },
  ];

  const skillsRow2 = [
    // Row 2 - Moving Left
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Vercel', logo: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png' },
    { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'npm', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
    { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'AI', logo: 'https://cdn-icons-png.flaticon.com/512/8637/8637099.png' },
    { name: 'Data Structures', logo: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png' },
    { name: 'DBMS', logo: 'https://img.icons8.com/dotty/80/db-2.png' },
    { name: 'Mobile Dev', logo: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' },
  ];

  // Triple the arrays for truly seamless infinite scroll
  const row1Skills = [...allSkills, ...allSkills, ...allSkills];
  const row2Skills = [...skillsRow2, ...skillsRow2, ...skillsRow2];

  const speedOptions = [
    { label: 'Slow', value: 50, icon: '🐌' },
    { label: 'Normal', value: 30, icon: '🚶' },
    { label: 'Fast', value: 15, icon: '🏃' },
    { label: 'Turbo', value: 6, icon: '🚀' }
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Technologies I work with to build amazing applications
          </p>
          
          {/* Speed Control */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-sm font-medium text-gray-600">Speed:</span>
            <div className="flex bg-white rounded-full p-1 shadow-md border border-gray-200">
              {speedOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setAnimationSpeed(option.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    animationSpeed === option.value
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span>{option.icon}</span>
                  <span className="hidden sm:inline">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 relative">
          {/* Row 1 - Moving Right */}
          <div className="relative overflow-hidden">
            <div 
              className="flex space-x-8 animate-scroll-right"
              style={{ 
                animationDuration: `${animationSpeed}s`,
                width: 'calc(300% + 4rem)' // Accommodate triple array + gaps
              }}
            >
              {row1Skills.map((skill, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group cursor-pointer"
                  style={{ minWidth: '160px' }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png';
                        }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 text-center group-hover:text-blue-600 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Moving Left */}
          <div className="relative overflow-hidden">
            <div 
              className="flex space-x-8 animate-scroll-left"
              style={{ 
                animationDuration: `${animationSpeed}s`,
                width: 'calc(300% + 4rem)' // Accommodate triple array + gaps
              }}
            >
              {row2Skills.map((skill, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-teal-200 group cursor-pointer"
                  style={{ minWidth: '160px' }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png';
                        }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 text-center group-hover:text-teal-600 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes scroll-right {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-left {
          from {
            transform: translateX(-33.333%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right var(--animation-duration, 30s) linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left var(--animation-duration, 30s) linear infinite;
        }

        /* Pause animation on hover for better UX */
        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Skills;