import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';

export const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 md:flex md:justify-center">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`
          relative rounded-full px-4 md:px-8 py-4
          ${isScrolled 
            ? 'bg-white/70 backdrop-blur-lg shadow-lg' 
            : 'bg-white/50 backdrop-blur-md'}
          transition-all duration-300
          border border-white/20
          will-change-transform
        `}
      >
        {/* Mobile Menu Button */}
        <div className="flex items-center justify-between md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <button
            onClick={toggleLanguage}
            className="flex items-center text-gray-800 hover:text-blue-600 transition-colors group"
          >
            <Globe size={20} className="mr-1 group-hover:rotate-180 transition-transform duration-500" />
            {i18n.language.toUpperCase()}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className={`
          md:flex md:items-center md:space-x-8
          ${isMenuOpen 
            ? 'absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/20'
            : 'hidden'
          }
          md:relative md:bg-transparent md:p-0 md:shadow-none md:border-0 md:mt-0 md:!flex
        `}>
          <li>
            <a 
              href="#home" 
              onClick={closeMenu}
              className="block py-2 md:py-0 text-gray-800 hover:text-blue-600 transition-colors relative group"
            >
              {t('nav.home')}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </li>
          <li>
            <a 
              href="#portfolio" 
              onClick={closeMenu}
              className="block py-2 md:py-0 text-gray-800 hover:text-blue-600 transition-colors relative group"
            >
              {t('nav.portfolio')}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={closeMenu}
              className="block py-2 md:py-0 text-gray-800 hover:text-blue-600 transition-colors relative group"
            >
              {t('nav.about')}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="block py-2 md:py-0 text-gray-800 hover:text-blue-600 transition-colors relative group"
            >
              {t('nav.contact')}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </li>
          <li className="hidden md:block">
            <button
              onClick={toggleLanguage}
              className="flex items-center text-gray-800 hover:text-blue-600 transition-colors group"
            >
              <Globe size={20} className="mr-1 group-hover:rotate-180 transition-transform duration-500" />
              {i18n.language.toUpperCase()}
            </button>
          </li>
        </ul>
      </motion.nav>
    </div>
  );
};