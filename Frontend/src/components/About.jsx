import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <motion.section 
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-card leather-card">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="section-title embossed-text">درباره من</h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div 
          className="about-content parchment-section"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="wax-seal"></div>
          
          <div className="about-text">
            <p className="about-paragraph">
              به عنوان یک توسعه‌دهنده Backend با تجربه، تخصص من در ساخت و مدیریت سیستم‌های پیچیده سمت سرور است. 
              با استفاده از تکنولوژی‌های مدرن و بهترین شیوه‌های برنامه‌نویسی، برنامه‌هایی قدرتمند، مقیاس‌پذیر و امن می‌سازم.
            </p>
            
            <p className="about-paragraph">
              علاقه‌مند به یادگیری مداوم و به‌روز نگه‌داشتن دانش خود با جدیدترین تکنولوژی‌ها و الگوهای طراحی هستم. 
              هدف من ایجاد راه‌حل‌های نرم‌افزاری است که نه تنها کارآمد و بهینه باشند، بلکه قابل نگهداری و توسعه در آینده نیز باشند.
            </p>

            <p className="about-paragraph">
              تمرکز من بر روی کیفیت کد، معماری نرم‌افزار و بهینه‌سازی عملکرد است. 
              من معتقدم که یک برنامه‌نویس خوب باید همواره در تلاش برای بهبود و یادگیری باشد.
            </p>
          </div>

          <div className="signature-section">
            <div className="ink-signature">
              <span className="signature-line"></span>
              <span className="signature-text">امضا</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;