import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SearchBox.module.scss';

const Searchbox = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text" placeholder="Search for a country..." />
    </div>
  );
};

export default Searchbox;
