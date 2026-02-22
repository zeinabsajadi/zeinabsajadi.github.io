import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Background3D from './components/Background3D';
import api from './services/api';

function App() {
  const [data, setData] = useState({
    techs: [],
    projects: [],
    courses: [],
    contacts: []
  });
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [techsRes, projectsRes, coursesRes, contactsRes] = await Promise.all([
          api.getTechs(),
          api.getProjects(),
          api.getCourses(),
          api.getContacts()
        ]);

        setData({
          techs: techsRes.data,
          projects: projectsRes.data,
          courses: coursesRes.data,
          contacts: contactsRes.data
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'courses', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader-container">
          <div className="quantum-loader">
            <div className="quantum-ring"></div>
            <div className="quantum-ring"></div>
            <div className="quantum-ring"></div>
            <div className="quantum-core"></div>
          </div>
          <motion.p
            className="loading-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            در حال بارگذاری تجربه دیجیتال...
          </motion.p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Background3D />
      <Navigation activeSection={activeSection} />
      
      <div className="content-wrapper">
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills techs={data.techs} /></div>
        <div id="projects"><Projects projects={data.projects} /></div>
        <div id="courses"><Courses courses={data.courses} /></div>
        <div id="contact"><Contact contacts={data.contacts} /></div>
      </div>

      <div className="cursor-glow" id="cursor-glow"></div>
    </div>
  );
}

export default App;