import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './About.css';

const About = () => {
  const features = [
    {
      icon: '🎯',
      title: 'تمرکز بر کیفیت',
      description: 'کد تمیز، قابل نگهداری و مستند'
    },
    {
      icon: '⚡',
      title: 'عملکرد بالا',
      description: 'بهینه‌سازی و مقیاس‌پذیری'
    },
    {
      icon: '🔒',
      title: 'امنیت',
      description: 'رعایت استانداردهای امنیتی'
    },
    {
      icon: '🚀',
      title: 'نوآوری',
      description: 'استفاده از جدیدترین تکنولوژی‌ها'
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
          درباره من
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
              
              <h3 className="about-heading">
                <span className="heading-icon">👨‍💻</span>
                توسعه‌دهنده Backend حرفه‌ای
              </h3>

              <p className="about-paragraph">
                من یک توسعه‌دهنده Backend با تجربه هستم که تخصص من در طراحی و پیاده‌سازی 
                سیستم‌های پیچیده سمت سرور است. با استفاده از تکنولوژی‌های مدرن و بهترین 
                شیوه‌های برنامه‌نویسی، برنامه‌هایی قدرتمند، مقیاس‌پذیر و امن می‌سازم.
              </p>

              <p className="about-paragraph">
                علاقه‌مند به یادگیری مداوم و به‌روز نگه‌داشتن دانش خود با جدیدترین تکنولوژی‌ها 
                و الگوهای طراحی هستم. هدف من ایجاد راه‌حل‌های نرم‌افزاری است که نه تنها 
                کارآمد و بهینه باشند، بلکه قابل نگهداری و توسعه در آینده نیز باشند.
              </p>

              <p className="about-paragraph">
                تمرکز من بر روی کیفیت کد، معماری نرم‌افزار و بهینه‌سازی عملکرد است. 
                من معتقدم که یک برنامه‌نویس خوب باید همواره در تلاش برای بهبود و یادگیری باشد.
              </p>

              <div className="about-signature">
                <div className="signature-line"></div>
                <span className="signature-text">امضای دیجیتال</span>
              </div>
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
              <div className="experience-content">
                <div className="experience-number">5+</div>
                <div className="experience-label">سال تجربه حرفه‌ای</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;