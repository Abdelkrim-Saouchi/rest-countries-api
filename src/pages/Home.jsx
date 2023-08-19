import Filter from '../components/Filter';
import Searchbox from '../components/SearchBar';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <main className={styles.home}>
      <div className={styles.searchRow}>
        <Searchbox />
        <Filter />
      </div>
    </main>
  );
};

export default Home;
