import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CountryTag.module.scss';

const CountryTag = ({ name }) => {
  return (
    <Link className={styles.tag} to={`/details/${name}`}>
      {name}
    </Link>
  );
};

CountryTag.propTypes = {
  name: PropTypes.string,
};

export default CountryTag;
