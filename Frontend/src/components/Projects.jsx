import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './Projects.css';

const Projects = ({ projects }) => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
         Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Tilt
              key={project.id}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={2000}
            >
              <motion.div
                className="project-card glass-card"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7,
                  delay: index * 0.15
                }}
              >
                <div className="project-glow-effect"></div>

                {project.image && (
                  <div className="project-image-container">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="image-overlay-gradient"></div>
                    <div className="image-scan-line"></div>
                  </div>
                )}

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-badge">
                      <span className="badge-dot"></span>
                      فعال
                    </div>
                  </div>

                  <p className="project-description">{project.content}</p>

                  <div className="project-footer">
                    <div className="project-tech">
                      <span className="tech-icon">⚡</span>
                      <span className="tech-name">{project.skills?.name || 'نامشخص'}</span>
                    </div>

                    <div className="project-links">
                      <motion.button 
                        className="project-link-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>مشاهده</span>
                        <svg viewBox="0 0 24 24" className="link-icon">
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>

                <div className="project-circuit">
                  <svg className="circuit-svg" viewBox="0 0 200 200">
                    <circle cx="20" cy="20" r="3" className="circuit-dot" />
                    <circle cx="180" cy="20" r="3" className="circuit-dot" />
                    <circle cx="20" cy="180" r="3" className="circuit-dot" />
                    <circle cx="180" cy="180" r="3" className="circuit-dot" />
                    <line x1="20" y1="20" x2="180" y2="20" className="circuit-line" />
                    <line x1="180" y1="20" x2="180" y2="180" className="circuit-line" />
                    <line x1="180" y1="180" x2="20" y2="180" className="circuit-line" />
                    <line x1="20" y1="180" x2="20" y2="20" className="circuit-line" />
                  </svg>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {projects.length === 0 && (
          <motion.div 
            className="empty-state glass-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="empty-icon">💼</div>
            <p className="empty-message">هنوز پروژه‌ای اضافه نشده است</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;