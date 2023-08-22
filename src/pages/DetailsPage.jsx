import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLoaderData } from 'react-router-dom';
import { getCountries } from '../api/getCountries';
import styles from './DetailsPage.module.scss';

export async function loader() {
  const countries = await getCountries();
  return { ...countries[0] };
}

const DetailsPage = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <main className={styles.detailsPage}>
      <button className={styles.backBtn}>
        <FontAwesomeIcon icon={faArrowLeftLong} /> Back
      </button>

      <div className={styles.content}>
        <img src={data.flags.svg} alt={data.flags.alt} />

        <div className={styles.details}>
          <h2>{data.name.common}</h2>

          <div className={styles.info}>
            <div className="intro">
              <p>
                <span>Native Name:</span>{' '}
                {Object.values(data.name.nativeName)
                  .map((name) => name.common)
                  .join(', ')}
              </p>
              <p>
                <span>Population:</span>{' '}
                {data.population.toLocaleString('en-US')}
              </p>
              <p>
                <span>Region:</span> {data.region}
              </p>
              <p>
                <span>Sub Region:</span> {data.subregion}
              </p>
              <p>
                <span>Capital:</span>{' '}
                {data.capital ? data.capital.join(', ') : 'Unknown'}
              </p>
            </div>
            <div className="more">
              <p>
                <span>Top Level Domain:</span> {data.tld.join(', ')}
              </p>
              <p>
                <span>Currencies:</span>{' '}
                {Object.values(data.currencies)
                  .map((currency) => currency.name)
                  .join(', ')}
              </p>
              <p>
                <span>Languages:</span>{' '}
                {Object.values(data.languages)
                  .map((lang) => lang)
                  .join(', ')}
              </p>
            </div>
          </div>

          <div className={styles.borders}>
            <p>
              <span>Border Countries:</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
