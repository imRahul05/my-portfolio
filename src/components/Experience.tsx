import { useState } from 'react';
import { X } from 'lucide-react';
import sihCertificate from '../assets/certificates/SIH_CERRIFICATE.png';

const Experience = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  
  const certificates = [
    {
      id: 'sih-2023',
      title: 'Smart India Hackathon 2023',
      issuer: 'AICTE',
      date: 'December 2023',
      image: sihCertificate,
      description: 'National level hackathon winner certificate for innovative solution to community problems.'
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Achievements & Certificates
          </h2>
          <p className="text-lg text-gray-600">
            Recognition of my skills and accomplishments
          </p>
        </div>

        {/* SIH Certificate Image */}
        <div className="mb-10 flex justify-center">
          <div className="max-w-2xl w-full bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={() => setSelectedCertificate(certificates[0].image)}>
            <img 
              src={certificates[0].image} 
              alt="Smart India Hackathon 2023 Certificate" 
              className="w-full h-auto hover:scale-[1.02] transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/800x600?text=SIH+Certificate';
              }}
            />
          </div>
        </div>

        <div className="p-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg text-white text-center mb-16">
          <h3 className="text-xl font-semibold mb-2">🏆 Achievement</h3>
          <p className="text-lg">
            <strong>Smart India Hackathon (SIH) 2023 Winner</strong>
          </p>
          <p className="mt-2 opacity-90">
            Recognized for innovative problem-solving and technical excellence at the national level
          </p>
        </div>
        
        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              <button 
                onClick={() => setSelectedCertificate(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 p-2"
                title="Close certificate view"
                aria-label="Close certificate view"
              >
                <X size={24} />
                <span className="sr-only">Close</span>
              </button>
              <img 
                src={selectedCertificate} 
                alt="Certificate" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;