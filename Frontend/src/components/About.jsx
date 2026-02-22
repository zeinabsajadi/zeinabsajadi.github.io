import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './About.css';

const About = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Focus on Quality',
      description: 'Clean, maintainable, and documented code'
    },
    {
      icon: '⚡',
      title: 'High Performance',
      description: 'Optimization and scalability'
    },
    {
      icon: '🔒',
      title: 'Security',
      description: 'Following security standards'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Using the latest technologies'
    }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
         About me
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-text-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card about-text-card">
              <div className="holographic-border"></div>


              
              
                
              
            </div>
          </motion.div>

          <div className="about-features-wrapper">
            <div className="features-grid">
              {features.map((feature, index) => (
                <Tilt
                  key={index}
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={1000}
                  scale={1.05}
                  transitionSpeed={2000}
                >
                  <motion.div
                    className="feature-card glass-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5,
                      delay: index * 0.1
                    }}
                  >
                    <div className="feature-glow"></div>
                    <div className="feature-icon">{feature.icon}</div>
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-description">{feature.description}</p>
                    
                    <div className="feature-corner top-left"></div>
                    <div className="feature-corner top-right"></div>
                    <div className="feature-corner bottom-left"></div>
                    <div className="feature-corner bottom-right"></div>
                  </motion.div>
                </Tilt>
              ))}
            </div>

            <motion.div 
              className="experience-badge glass-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="badge-glow-bg"></div>
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;