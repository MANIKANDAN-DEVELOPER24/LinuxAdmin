import React, { useState, useEffect } from 'react';
import { Menu, X, Server, Shield, Database, MonitorSpeaker } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const services = [
    { name: 'Server Management', icon: Server },
    { name: 'Security Hardening', icon: Shield },
    { name: 'Database Administration', icon: Database },
    { name: 'System Monitoring', icon: MonitorSpeaker },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
              <Server className="h-8 w-8 text-white" />
            </div>
            <span className={`ml-3 text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              LinuxPro Admin
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <div className="relative group">
                <button
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                  }`}
                >
                  Services
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    {services.map((service) => (
                      <button
                        key={service.name}
                        onClick={() => scrollToSection('services')}
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors w-full text-left"
                      >
                        <service.icon className="h-4 w-4 mr-3" />
                        {service.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <button
                onClick={() => scrollToSection('about')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                }`}
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-gray-500 mb-2">Services</p>
                {services.map((service) => (
                  <button
                    key={service.name}
                    onClick={() => scrollToSection('services')}
                    className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
                  >
                    <service.icon className="h-4 w-4 mr-3" />
                    {service.name}
                  </button>
                ))}
              </div>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 mt-4 bg-blue-600 text-white rounded-lg font-medium"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
