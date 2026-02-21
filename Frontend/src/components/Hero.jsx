import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <motion.section 
      className="hero-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="hero-card leather-card">
        <motion.div 
          className="hero-ornament top-left"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        ></motion.div>
        <motion.div 
          className="hero-ornament top-right"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        ></motion.div>
        <motion.div 
          className="hero-ornament bottom-left"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        ></motion.div>
        <motion.div 
          className="hero-ornament bottom-right"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        ></motion.div>

        <div className="hero-content">
          <motion.div 
            className="hero-badge metal-badge"
            initial={{ scale: 0, rotate: -360 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1, type: "spring", bounce: 0.4 }}
          >
            <div className="badge-inner">
              <span className="badge-icon">👨‍💻</span>
            </div>
          </motion.div>

          <motion.h1 
            className="hero-title embossed-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            [نام شما]
          </motion.h1>

          <motion.div 
            className="hero-divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          ></motion.div>

          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            Backend Developer
          </motion.h2>

          <motion.div 
            className="hero-stamp"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: -12 }}
            transition={{ delay: 1.3, duration: 0.6, type: "spring" }}
          >
            <span className="stamp-text">EXPERT</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;