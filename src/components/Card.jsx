import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

const Card = ({ flagUrl, flagAlt, name, population, region, capital }) => {
  return (
    <Link className={styles.card} to={`/details/${name}`}>
      <img src={flagUrl} alt={flagAlt || `flag of country ${name}`} />

      <h2>{name}</h2>
      <div>
        <p>
          <span>Population:</span> {population.toLocaleString('en-US')}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital:</span> {capital ? capital[0] : 'unknown'}
        </p>
      </div>
    </Link>
  );
};

Card.propTypes = {
  flagUrl: PropTypes.string.isRequired,
  flagAlt: PropTypes.string,
  name: PropTypes.string,
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.array,
};

export default Card;
