import axios from 'axios';

// تنظیمات پایه API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor برای مدیریت خطاها
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// API Endpoints
const endpoints = {
  // Tech endpoints
  getTechs: () => api.get('/techs/'),
  getTech: (id) => api.get(`/techs/${id}/`),

  // Projects endpoints
  getProjects: () => api.get('/projects/'),
  getProject: (id) => api.get(`/projects/${id}/`),

  // Courses endpoints
  getCourses: () => api.get('/courses/'),
  getCourse: (id) => api.get(`/courses/${id}/`),

  // Contact endpoints
  getContacts: () => api.get('/contacts/'),
  getContact: (id) => api.get(`/contacts/${id}/`),
};

export default endpoints;