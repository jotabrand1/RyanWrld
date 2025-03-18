import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="h-screen flex items-center justify-center bg-white">
      <div className="text-center mt-[-100px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img 
            src="https://res.cloudinary.com/dtf69ghtx/image/upload/v1739715660/Ryan-2024-logo_d7d9bc.png" 
            alt="Ryan Wrld Logo" 
            className="h-80 mx-auto"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-gray-600 mt-[-130px]"
        >
          {t('hero.subtitle')}
        </motion.p>
      </div>
    </section>
  );
};