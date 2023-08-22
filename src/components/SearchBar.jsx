import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styles from './SearchBox.module.scss';

const Searchbox = ({ handleOnChange }) => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleOnChange}
      />
    </div>
  );
};

Searchbox.propTypes = {
  handleOnChange: PropTypes.func,
};

export default Searchbox;
