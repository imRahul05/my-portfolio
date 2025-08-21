import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Youtube, ExternalLink, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/imRahul05', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/imrahul05', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/imrahul165', icon: Twitter },
    { name: 'Instagram', url: 'https://instagram.com/imrahul2516', icon: Instagram },
    { name: 'YouTube', url: 'https://www.youtube.com/c/mangaamaze', icon: Youtube }
  ];

  const professionalLinks = [
    { name: 'HackerRank', url: 'https://www.hackerrank.com/imrahul05' },
    { name: 'LeetCode', url: 'https://leetcode.com/imrahul05' },
    { name: 'HackerEarth', url: 'https://www.hackerearth.com/imrahul05' },
    { name: 'Peerlist', url: 'https://peerlist.io/imrahul05' },
    { name: 'Weekday', url: 'https://www.weekday.works/people/rahul-kumar-imrahul05' }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300">
            I'm always open to discussing new opportunities and collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-gray-300">Email</p>
                  <p className="text-lg">rahulkumar20000516@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-gray-300">Location</p>
                  <p className="text-lg">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Social Media</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      <IconComponent size={20} />
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Professional Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Professional Profiles</h3>
            <div className="grid grid-cols-1 gap-4">
              {professionalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors duration-200"
                >
                  <span className="font-medium">{link.name}</span>
                  <ExternalLink size={20} />
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Other Links</h4>
              <div className="space-y-3">
                <a
                  href="https://linktr.ee/imrahul05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-colors duration-200"
                >
                  🔗 LinkTree - All Links
                </a>
                <a
                  href="https://discord.com/invite/redhaired4387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-indigo-600 hover:bg-indigo-700 p-3 rounded-lg transition-colors duration-200"
                >
                  💬 Discord Community
                </a>
                <a
                  href="https://gist.github.com/imRahul05/508417aff9ad76f4ae969255fa143c52"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-600 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-200"
                >
                  📝 GitHub Gist Example
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2024 Rahul Kumar. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Currently seeking new opportunities as a Software Developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;