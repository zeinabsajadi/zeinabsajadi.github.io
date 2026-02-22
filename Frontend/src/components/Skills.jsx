import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './Skills.css';

const Skills = ({ techs }) => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
         Skills
        </motion.h2>

        <div className="skills-grid">
          {techs.map((tech, index) => (
            <Tilt
              key={tech.id}
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.08}
              transitionSpeed={2000}
            >
              <motion.div
                className="skill-card glass-card"
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.08
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="skill-glow-ring"></div>
                
                <div className="skill-icon-wrapper">
                  {tech.icon ? (
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="skill-icon-img"
                    />
                  ) : (
                    <div className="skill-icon-placeholder">
                      <span className="skill-initial">
                        {tech.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="skill-icon-glow"></div>
                </div>

                <h3 className="skill-name">{tech.name}</h3>

                <div className="skill-level-bar">
                  <motion.div 
                    className="skill-level-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </div>

                <div className="skill-hexagon">
                  <svg viewBox="0 0 100 100" className="hexagon-svg">
                    <polygon
                      points="50 1 95 25 95 75 50 99 5 75 5 25"
                      className="hexagon-shape"
                    />
                  </svg>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {techs.length === 0 && (
          <motion.div 
            className="empty-state glass-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="empty-icon">🔧</div>
            <p className="empty-message">هنوز مهارتی اضافه نشده است</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;