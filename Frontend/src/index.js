import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Cursor glow effect
document.addEventListener('mousemove', (e) => {
  const cursorGlow = document.getElementById('cursor-glow');
  if (cursorGlow) {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);