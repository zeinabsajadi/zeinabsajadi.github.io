import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = ({ projects }) => {
  return (
    <motion.section 
      className="projects-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="projects-card leather-card">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="section-title embossed-text">پروژه‌ها</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="projects-container">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="project-frame">
                <div className="frame-corner top-left"></div>
                <div className="frame-corner top-right"></div>
                <div className="frame-corner bottom-left"></div>
                <div className="frame-corner bottom-right"></div>

                {project.image && (
                  <div className="project-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="image-overlay"></div>
                  </div>
                )}

                <div className="project-content parchment-section">
                  <h3 className="project-title engraved-text">{project.title}</h3>
                  
                  <div className="project-divider"></div>
                  
                  <p className="project-description">{project.content}</p>
                  
                  <div className="project-tech-badge">
                    <span className="tech-label">تکنولوژی:</span>
                    <span className="tech-name">{project.skills?.name || 'نامشخص'}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="empty-state parchment-section">
            <p className="empty-message">هنوز پروژه‌ای اضافه نشده است</p>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;