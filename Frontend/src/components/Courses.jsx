import React from 'react';
import { motion } from 'framer-motion';
import './Courses.css';

const Courses = ({ courses }) => {
  return (
    <motion.section 
      className="courses-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="courses-card leather-card">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="section-title embossed-text">دوره‌های آموزشی</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="courses-shelf">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="course-book"
              initial={{ opacity: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                type: "spring"
              }}
              whileHover={{ 
                rotateY: 15,
                translateY: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="book-spine">
                <div className="spine-decoration top"></div>
                <h3 className="book-title">{course.title}</h3>
                <div className="spine-decoration bottom"></div>
              </div>

              <div className="book-cover">
                {course.image ? (
                  <div className="cover-image-wrapper">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="cover-image"
                    />
                  </div>
                ) : (
                  <div className="cover-default">
                    <div className="cover-emblem"></div>
                    <h4 className="cover-title">{course.title}</h4>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {courses.length === 0 && (
          <div className="empty-state parchment-section">
            <p className="empty-message">هنوز دوره‌ای اضافه نشده است</p>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Courses;