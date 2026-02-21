import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = ({ contacts }) => {
  return (
    <motion.section 
      className="contact-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="contact-card leather-card">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="section-title embossed-text">ارتباط با من</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="contact-grid">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.5,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="button-frame">
                <div className="button-inner">
                  {contact.icon ? (
                    <img 
                      src={contact.icon} 
                      alt={contact.title}
                      className="contact-icon-img"
                    />
                  ) : (
                    <div className="contact-icon-placeholder">
                      <span className="contact-initial">
                        {contact.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  
                  <span className="contact-title">{contact.title}</span>
                </div>

                <div className="button-rivet top-left"></div>
                <div className="button-rivet top-right"></div>
                <div className="button-rivet bottom-left"></div>
                <div className="button-rivet bottom-right"></div>
              </div>
            </motion.a>
          ))}
        </div>

        {contacts.length === 0 && (
          <div className="empty-state parchment-section">
            <p className="empty-message">هنوز راه ارتباطی اضافه نشده است</p>
          </div>
        )}

        <motion.div 
          className="contact-footer parchment-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="footer-text">
            منتظر شنیدن از شما هستم! برای همکاری، پروژه‌های جدید یا هر سوالی با من در تماس باشید.
          </p>
          
          <div className="footer-seal metal-badge">
            <span className="seal-icon">✉</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;