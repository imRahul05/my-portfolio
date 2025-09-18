import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Code,
  Copy,
  Check,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import spectralBg from "../../assets/gg.jpg";
import { Skeleton } from "@/components/ui/skeleton";

import "./styles/glassmorphic-card.css";
import { useImageLoader } from "@/hooks/useImageLoader";

const Contact = () => {
  const { isLoading, isError, handleLoad, handleError } = useImageLoader();
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("imrahul2516@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/imRahul05", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/imrahul05", icon: Linkedin },
    { name: "Twitter", url: "https://x.com/imrahul165", icon: FaXTwitter },
    { name: "Instagram", url: "https://instagram.com/imrahul2516", icon: Instagram },
    { name: "YouTube", url: "https://www.youtube.com/c/mangaamaze", icon: Youtube },
  ];

  const professionalLinks = [
    { name: "HackerRank", url: "https://www.hackerrank.com/imrahul05", icon: Code },
    { name: "LeetCode", url: "https://leetcode.com/imrahul05", icon: Code },
    { name: "HackerEarth", url: "https://www.hackerearth.com/imrahul05", icon: Code },
    { name: "Peerlist", url: "https://peerlist.io/imrahul05", icon: Code },
    { name: "Weekday", url: "https://www.weekday.works/people/rahul-kumar-imrahul05", icon: Code },
  ];

  return (
    <section
      id="contact"
      className="py-16 text-white relative rounded-tl-[10rem] rounded-tr-[10rem] overflow-hidden"
    >
      {/* Background image with loader */}
      <div className="absolute inset-0 -z-10">
        {(isLoading || isError) && (
          <Skeleton className="w-full h-full rounded-tl-[10rem] rounded-tr-[10rem]" />
        )}
        <img
          src={spectralBg}
          alt="Background"
          onLoad={handleLoad}
          onError={handleError}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 rounded-tl-[10rem] rounded-tr-[10rem] ${
            isLoading || isError ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Let’s Connect</h2>
          <p className="mt-2 text-white bg-black">
            Reach out for opportunities, collaborations, or just to say hi 👋
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info + Social */}
          <div className="p-6 rounded-2xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-lg glassmorphic-card">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg">imrahul2516@gmail.com</p>
                </div>
                <button
                  onClick={copyEmail}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-lg hover:bg-white/10"
                  title="Copy email"
                >
                  {emailCopied ? (
                    <Check size={16} className="text-green-400" />
                  ) : (
                    <Copy size={16} className="text-gray-400 hover:text-white" />
                  )}
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-lg">Bengaluru, India</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Social</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  const getHoverClasses = (name: string) => {
                    switch (name) {
                      case "GitHub":
                        return "hover:bg-gray-900 hover:text-white";
                      case "LinkedIn":
                        return "hover:bg-blue-600 hover:text-white";
                      case "Twitter":
                        return "hover:bg-black hover:text-white";
                      case "Instagram":
                        return "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white";
                      case "YouTube":
                        return "hover:bg-red-600 hover:text-white";
                      default:
                        return "hover:bg-gray-700";
                    }
                  };
                  
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full bg-gray-800 transition-all duration-300 transform hover:scale-110 ${getHoverClasses(link.name)}`}
                      title={link.name}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 rounded-2xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-lg glassmorphic-card">
            <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
            <form
              action="https://formspree.io/f/xanbggor"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-white">
          © {new Date().getFullYear()} Rahul Kumar. Built with React, TypeScript & Tailwind CSS.
        </div>
      </div>
    </section>
  );
};

export default Contact;
