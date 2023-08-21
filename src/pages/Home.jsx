import { useState } from 'react';
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
  const [selectedOption, setSelectedOption] = useState(null);

  const filteredData = selectedOption
    ? data.filter((country) => country.region === selectedOption)
    : data;

  return (
    <main className={styles.home}>
      <div className={styles.searchRow}>
        <Searchbox />
        <Filter
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div className={styles.countries}>
        {filteredData.map((country) => (
          <Card
            key={country.name.official}
            flagUrl={country.flags.svg}
            flagAlt={country.flags.alt}
            name={country.name.common}
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
