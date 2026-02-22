import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

const endpoints = {
  getTechs: () => api.get('/techs/'),
  getTech: (id) => api.get(`/techs/${id}/`),
  getProjects: () => api.get('/projects/'),
  getProject: (id) => api.get(`/projects/${id}/`),
  getCourses: () => api.get('/courses/'),
  getCourse: (id) => api.get(`/courses/${id}/`),
  getContacts: () => api.get('/contacts/'),
  getContact: (id) => api.get(`/contacts/${id}/`),
};

export default endpoints;