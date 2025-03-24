import PropTypes from 'prop-types';
import CityItem from './CityItem';
import styles from './CityList.module.css';
import Message from './Message';
import Spinner from './Spinner';
import { useCities } from '../contexts/CitiesContexts';
function CityList() {
  const{cities,isLoading}=useCities()
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))} 
    </ul>
  );
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        cityName: PropTypes.string.isRequired,
        emoji: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    isLoading: PropTypes.bool.isRequired,
  };
export default CityList;
