import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const Card = ({ flagUrl, flagAlt, name, population, region, capital }) => {
  console.log(`${name}, capital: ${capital}`);
  console.log(Array.isArray(capital));
  console.log(capital);

  return (
    <div className={styles.card}>
      <img src={flagUrl} alt={flagAlt} />

      <h2>{name}</h2>
      <div>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital ? capital[0] : 'unknown'}</p>
      </div>
    </div>
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
