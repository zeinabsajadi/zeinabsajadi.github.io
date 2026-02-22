import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './Contact.css';

const Contact = ({ contacts }) => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact me
        </motion.h2>

        <motion.div 
          className="contact-intro glass-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="intro-icon">📡</div>
          <p className="intro-text">
          Ready for your next big idea! Let's collaborate on challenging projects. Reach out through the channels below for any questions or technical consultation.
          </p>
        </motion.div>

        <div className="contacts-grid">
          {contacts.map((contact, index) => (
            <Tilt
              key={contact.id}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={1000}
              scale={1.05}
              transitionSpeed={2000}
            >
              <motion.a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-card glass-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1
                }}
                whileHover={{ y: -5 }}
              >
                <div className="contact-glow-effect"></div>

                <div className="contact-icon-container">
                  {contact.icon ? (
                    <img 
                      src={contact.icon} 
                      alt={contact.title}
                      className="contact-icon-img"
                    />
                  ) : (
                    <div className="contact-icon-placeholder">
                      <span className="contact-emoji">
                        {index === 0 ? '📧' : index === 1 ? '💬' : '🔗'}
                      </span>
                    </div>
                  )}
                  <div className="icon-ring"></div>
                  <div className="icon-ring"></div>
                </div>

                <div className="contact-info">
                  <h3 className="contact-name">{contact.title}</h3>
                  <div className="contact-arrow">
                    <svg viewBox="0 0 24 24" className="arrow-svg">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                </div>

                <div className="contact-pulse"></div>
              </motion.a>
            </Tilt>
          ))}
        </div>

        {contacts.length === 0 && (
          <motion.div 
            className="empty-state glass-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="empty-icon">📞</div>
            <p className="empty-message">هنوز راه ارتباطی اضافه نشده است</p>
          </motion.div>
        )}

        <motion.div 
          className="contact-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="footer-divider"></div>
          <p className="footer-message">
            All Rights Reserved [zi] - 2026
          </p>
          <div className="footer-year">
            {new Date().getFullYear()}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;