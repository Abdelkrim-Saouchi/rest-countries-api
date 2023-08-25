import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getCountries } from '../api/getCountries';
import CountryTag from '../components/CountryTag';
import styles from './DetailsPage.module.scss';

export async function loader({ params }) {
  const countries = await getCountries();
  const targetCountry = countries.find(
    (country) => country.name.common === params.countryId
  );
  return [countries, targetCountry];
}

const DetailsPage = () => {
  const [countries, targetCountry] = useLoaderData();
  const navigate = useNavigate();

  // transform country's Abbreviation to full name
  const targetBordersAbr = targetCountry.borders || [];
  console.log(targetBordersAbr);
  const targetBordersNames = targetBordersAbr.map((targetBorder) => {
    return countries.find((country) => country.cca3 === targetBorder).name
      .common;
  });

  const backToPreviousPage = () => navigate(-1);

  return (
    <main className={styles.detailsPage}>
      <button
        className={styles.backBtn}
        onClick={backToPreviousPage}
        aria-label="back to previous page"
      >
        <FontAwesomeIcon icon={faArrowLeftLong} /> Back
      </button>

      <div className={styles.content}>
        <img src={targetCountry.flags.svg} alt={targetCountry.flags.alt} />

        <div className={styles.details}>
          <h2>{targetCountry.name.common}</h2>

          <div className={styles.info}>
            <div className="intro">
              <p>
                <span>Native Name:</span>{' '}
                {Object.values(targetCountry.name.nativeName)
                  .map((name) => name.common)
                  .join(', ')}
              </p>
              <p>
                <span>Population:</span>{' '}
                {targetCountry.population.toLocaleString('en-US')}
              </p>
              <p>
                <span>Region:</span> {targetCountry.region}
              </p>
              <p>
                <span>Sub Region:</span> {targetCountry.subregion}
              </p>
              <p>
                <span>Capital:</span>{' '}
                {targetCountry.capital
                  ? targetCountry.capital.join(', ')
                  : 'Unknown'}
              </p>
            </div>
            <div className="more">
              <p>
                <span>Top Level Domain:</span> {targetCountry.tld.join(', ')}
              </p>
              <p>
                <span>Currencies:</span>{' '}
                {Object.values(targetCountry.currencies)
                  .map((currency) => currency.name)
                  .join(', ')}
              </p>
              <p>
                <span>Languages:</span>{' '}
                {Object.values(targetCountry.languages)
                  .map((lang) => lang)
                  .join(', ')}
              </p>
            </div>
          </div>

          <div className={styles.borders}>
            <p>Border Countries:</p>

            <div>
              {targetBordersNames.length === 0
                ? 'None'
                : targetBordersNames.map((country) => (
                    <CountryTag key={country} name={country} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
