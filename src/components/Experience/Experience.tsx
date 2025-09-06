import { useState } from "react";
import { X } from "lucide-react";
import sihCertificate from "../../assets/certificates/SIH_CERRIFICATE.png";
import { BackgroundPaths } from "../ui/background-paths";
import Modal from "../ui/Modal";
import { useImageLoader } from "@/hooks/useImageLoader"; // adjust import path
import "./styles/experience.css";

const Experience = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const { isLoading, isError, handleLoad, handleError } = useImageLoader();

  const certificates = [
    {
      id: "sih-2023",
      title: "Smart India Hackathon 2023",
      issuer: "AICTE",
      date: "December 2023",
      image: sihCertificate,
      description:
        "National level hackathon winner certificate for innovative solution to community problems.",
    },
  ];

  return (
    <section id="experience" className="py-16 bg-white relative">
      <div className="absolute inset-0 overflow-hidden">
        <BackgroundPaths />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Achievements & Certificates
          </h2>
          <p className="text-lg text-gray-600">
            Recognition of my skills and accomplishments
          </p>
        </div>

        {/* SIH Certificate */}
        <div className="mb-10 flex justify-center">
          <div
            className="max-w-2xl w-full certificate-card rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => !isError && setSelectedCertificate(certificates[0].image)}
          >
            {/* Loader */}
            {isLoading && !isError && (
              <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 animate-pulse">
                <span className="text-gray-500 text-sm">Loading certificate...</span>
              </div>
            )}

            {/* Error fallback */}
            {isError && (
              <div className="w-full h-[400px] flex items-center justify-center bg-gray-200">
                <span className="text-gray-400 text-sm">Certificate not available</span>
              </div>
            )}

            {/* Image */}
            <img
              src={certificates[0].image}
              alt="Smart India Hackathon 2023 Certificate"
              className={`w-full h-auto hover:scale-[1.02] transition-transform duration-300 ${
                isLoading || isError ? "hidden" : "block"
              }`}
              onLoad={handleLoad}
              onError={handleError}
            />
          </div>
        </div>

        {/* Info Card */}
        <div className="p-6 certificate-card from-blue-500 to-teal-500 rounded-lg text-center mb-16 ">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">🏆 Achievement</h3>
          <p className="text-lg text-gray-800">
            <strong>Smart India Hackathon (SIH) 2023 Winner</strong>
          </p>
          <p className="mt-2 text-gray-700">
            Recognized for innovative problem-solving and technical excellence at the national level
          </p>
        </div>

        {/* Modal */}
        <Modal
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          className="certificate-modal"
        >
          <div className="relative max-w-4xl w-full bg-white p-2 rounded-lg shadow-2xl">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-14 right-0 text-white hover:text-gray-300 p-2 bg-black/50 rounded-full"
              title="Close certificate view"
              aria-label="Close certificate view"
            >
              <X size={24} />
              <span className="sr-only">Close</span>
            </button>

            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110"
              title="Close certificate view"
              aria-label="Close certificate view"
            >
              <X size={24} strokeWidth={2.5} />
            </button>

            {selectedCertificate && (
              <img src={selectedCertificate} alt="Certificate" className="w-full h-auto rounded-lg" />
            )}
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Experience;
