import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Contact from './components/Contact';
import api from './services/api';

function App() {
  const [data, setData] = useState({
    techs: [],
    projects: [],
    courses: [],
    contacts: []
  });
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="leather-card loading-card">
          <div className="loading-spinner"></div>
          <p>در حال بارگذاری...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="wood-background"></div>
      <div className="content-wrapper">
        <Hero />
        <About />
        <Skills techs={data.techs} />
        <Projects projects={data.projects} />
        <Courses courses={data.courses} />
        <Contact contacts={data.contacts} />
      </div>
    </div>
  );
}

export default App;