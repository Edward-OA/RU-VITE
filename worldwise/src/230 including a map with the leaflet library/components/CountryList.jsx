// import PropTypes from 'prop-types';
// import CityItem from './CityItem';
import styles from './CountryList.module.css';
import Message from './Message';
import Spinner from './Spinner';
import CountryItem from './CountryItem';
import { useCities } from '../contexts/CitiesContexts';
function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

// CountryList.propTypes = {
//   cities: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       cityName: PropTypes.string.isRequired,
//       emoji: PropTypes.string.isRequired,
//       date: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   isLoading: PropTypes.bool.isRequired,
// };
export default CountryList;
