import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

const Layout = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <div className={`${theme}`}>
      <header className={styles.header}>
        <h1>Where is the world?</h1>
        <button onClick={toggleTheme}>
          <FontAwesomeIcon icon={faMoon} /> Dark Mode
        </button>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
