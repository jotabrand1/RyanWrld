import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Instagram, MessageCircleMore, Briefcase  } from 'lucide-react';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
        >
          {t('contact.title')}
        </motion.h2>
        
        <div className="flex justify-center space-x-8">
          <motion.a
            href="mailto: ryanwrldpsd@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Mail size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/ryanwrld"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/ryanwrld.psd/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Instagram size={24} />
          </motion.a>
          <motion.a
            href="http://wa.me/552899730759"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <img src= "/images/wpp.svg" alt="Behance" width={24} height={24} />
          </motion.a>
          <motion.a
            href="https://www.behance.net/ryanwrld"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <img src= "/images/BEHANCE.svg" alt="Behance" width={24} height={24} />
          </motion.a>

        </div>
      </div>
    </section>
  );
};