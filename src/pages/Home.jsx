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
  const [searchField, setSearchField] = useState('');

  const handleOnChange = (e) => {
    setSearchField(e.target.value);
  };

  // filter countries by region
  const filteredData = selectedOption
    ? data.filter((country) => country.region === selectedOption)
    : data;

  // filter countries by name search
  const searchData = filteredData.filter((country) =>
    country.name.common.toLowerCase().includes(searchField.toLocaleLowerCase())
  );

  return (
    <main className={styles.home}>
      <div className={styles.searchRow}>
        <Searchbox handleOnChange={handleOnChange} />
        <Filter
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div className={styles.countries}>
        {searchData.length === 0
          ? 'Result not found.'
          : searchData.map((country) => (
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
