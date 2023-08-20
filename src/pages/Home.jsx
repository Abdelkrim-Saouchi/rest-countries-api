import { useLoaderData } from 'react-router-dom';
import { getCountries } from '../api/getCountries';
import Card from '../components/Card';
import Filter from '../components/Filter';
import Searchbox from '../components/SearchBar';
import styles from './Home.module.scss';

export async function loader() {
  return await getCountries();
}

const Home = () => {
  const data = useLoaderData();

  return (
    <main className={styles.home}>
      <div className={styles.searchRow}>
        <Searchbox />
        <Filter />
      </div>
      <div className={styles.countries}>
        {data.map((country) => (
          <Card
            key={country.name.official}
            flagUrl={country.flags.svg}
            flagAlt={country.flags.alt}
            name={country.name.official}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
