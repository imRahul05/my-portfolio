import { useState } from 'react';
import { allSkills,skillsRow2 } from './components/skillSet';
import './styles/skills.css'
const Skills = () => {
  const [animationSpeed, setAnimationSpeed] = useState(30); // seconds for one full cycle


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
                width: 'calc(300% + 4rem)'
              }}
            >
              {row1Skills.map((skill, index) => (
                <div
                  key={`row1-${index}`}
                  className="relative flex-shrink-0 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group cursor-pointer overflow-hidden"
                  style={{ minWidth: '160px' }}
                >
                  {/* Animated background */}
                  <div
                    className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                    style={{ backgroundColor: skill.color, opacity: 0.15 }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            'https://cdn-icons-png.flaticon.com/512/2103/2103633.png';
                        }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 text-center group-hover:text-blue-700 transition-colors duration-300">
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
                width: 'calc(300% + 4rem)'
              }}
            >
              {row2Skills.map((skill, index) => (
                <div
                  key={`row2-${index}`}
                  className="relative flex-shrink-0 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group cursor-pointer overflow-hidden"
                  style={{ minWidth: '160px' }}
                >
                  {/* Animated background */}
                  <div
                    className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                    style={{ backgroundColor: skill.color, opacity: 0.15 }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            'https://cdn-icons-png.flaticon.com/512/2103/2103633.png';
                        }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 text-center group-hover:text-teal-700 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;
