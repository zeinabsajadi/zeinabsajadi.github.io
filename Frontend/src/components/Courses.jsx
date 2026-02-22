import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './Courses.css';

const Courses = ({ courses }) => {
  return (
    <section className="courses-section">
      <div className="courses-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Courses
        </motion.h2>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <Tilt
              key={course.id}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.05}
              transitionSpeed={2000}
            >
              <motion.div
                className="course-card glass-card"
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7,
                  delay: index * 0.12
                }}
              >
                <div className="course-glow"></div>

                <div className="course-number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {course.image ? (
                  <div className="course-image-wrapper">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="course-image"
                    />
                    <div className="course-image-overlay"></div>
                  </div>
                ) : (
                  <div className="course-icon-wrapper">
                    <div className="course-icon-bg">
                      <span className="course-icon">📚</span>
                    </div>
                  </div>
                )}

                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  
                  <div className="course-status">
                    <div className="status-bar">
                      <motion.div 
                        className="status-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.15 + 0.5 }}
                      />
                    </div>
                    <span className="status-label">تکمیل شده</span>
                  </div>

                  <div className="course-badge-container">
                    <div className="course-badge">
                      <span className="badge-icon">✓</span>
                      گواهینامه
                    </div>
                  </div>
                </div>

                <div className="course-particles">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className="particle" 
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {courses.length === 0 && (
          <motion.div 
            className="empty-state glass-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="empty-icon">🎓</div>
            <p className="empty-message">هنوز دوره‌ای اضافه نشده است</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Courses;