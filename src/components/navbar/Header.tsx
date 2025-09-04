import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  openCommandMenu?: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, openCommandMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTabletDropdownOpen, setIsTabletDropdownOpen] = useState(false);
  const tabletDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tabletDropdownRef.current && !tabletDropdownRef.current.contains(event.target as Node)) {
        setIsTabletDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'github-contributions', label: 'GitHub Activity' },
    { id: 'experience', label: 'Certification' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset for header height (64px) plus a small buffer
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      // Scroll with smooth behavior
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-900">
            RK.
          </div>

          {/* Desktop/Tablet Navigation */}
          <div className="hidden md:flex md:space-x-3 lg:space-x-8">
            {/* Always show Home on all screen sizes */}
            <button
              onClick={() => scrollTo('home')}
              className={`px-2 md:px-2 lg:px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                activeSection === 'home'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Home
            </button>

            {/* On large screens, show all nav items */}
            <div className="hidden lg:flex lg:space-x-8">
              {navItems.slice(1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-2 lg:px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* On medium screens (tablets), show dropdown for other nav items */}
            <div className="relative hidden md:block lg:hidden" ref={tabletDropdownRef}>
              <button
                onClick={() => setIsTabletDropdownOpen(!isTabletDropdownOpen)}
                className={`flex items-center px-2 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  navItems.slice(1).some(item => item.id === activeSection)
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {navItems.slice(1).find(item => item.id === activeSection)?.label || 'More'} <ChevronDown size={16} className="ml-1" />
              </button>
              
              {isTabletDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  {navItems.slice(1).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollTo(item.id);
                        setIsTabletDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        activeSection === item.id
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Command menu button - visible on mobile, tablet, and desktop */}
            {openCommandMenu && (
              <button
                onClick={openCommandMenu}
                className="flex items-center gap-1 md:gap-2 text-sm py-1 px-2 md:px-3 bg-gray-100 rounded-md text-gray-500 hover:bg-gray-200 transition-colors"
                title="Search"
              >
                <Search size={14} />
                <span className="hidden sm:inline md:hidden lg:inline">Search</span>
                <kbd className="hidden lg:inline ml-1 text-xs bg-white px-1.5 py-0.5 border border-gray-300 rounded">
                  {navigator.platform.toLowerCase().includes('mac') ? '⌘K' : 'Ctrl+K'}
                </kbd>
              </button>
            )}

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left px-4 py-3 text-base font-medium ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;