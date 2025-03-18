import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">{t('about.title')}</h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {t('about.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};