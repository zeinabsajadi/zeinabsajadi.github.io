import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = ({ techs }) => {
  return (
    <motion.section 
      className="skills-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="skills-card leather-card">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="section-title embossed-text">مهارت‌های تکنیکی</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="skills-grid">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.id}
              className="skill-badge-container"
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1,
                rotateY: 15,
                transition: { duration: 0.3 }
              }}
            >
              <div className="skill-badge metal-badge">
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
              </div>
              <div className="skill-nameplate">
                <span className="skill-name engraved-text">{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {techs.length === 0 && (
          <div className="empty-state parchment-section">
            <p className="empty-message">هنوز مهارتی اضافه نشده است</p>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Skills;