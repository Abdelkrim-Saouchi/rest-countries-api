import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1>Where is the world?</h1>
        <button>
          <FontAwesomeIcon icon={faMoon} /> Dark Mode
        </button>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
