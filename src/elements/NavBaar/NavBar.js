import React, { useState, useEffect } from 'react';
import './NavBar.css';
import ThemeSwich from '../ThemeSwich';

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Перевіряємо тему при завантаженні
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    } else {
      setDarkMode(false);
      document.body.classList.remove('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode ? 'dark' : 'light';
    setDarkMode(!darkMode);
    document.body.className = newTheme === 'dark' ? 'dark-mode' : '';
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className="navbar">
      <div className="theme-switcher">
        <ThemeSwich checked={darkMode} onChange={toggleTheme} />
      </div>
      <div className="title">Anime Scheduler</div>
      <div className="auth-buttons">
        <button className="login-button">Логін</button>
        <button className="register-button">Реєстрація</button>
      </div>
    </nav>
  );
}

export default NavBar;
