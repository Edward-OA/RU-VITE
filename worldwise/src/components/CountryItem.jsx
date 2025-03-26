import PropTypes from 'prop-types';

import styles from './CountryItem.module.css';

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

CountryItem.propTypes = {
  country: PropTypes.shape({
    emoji: PropTypes.string.isRequired, // Ensure `emoji` is a string and required
    country: PropTypes.string.isRequired, // Ensure `country` is a string and required
  }).isRequired, // Ensure the `country` prop itself is required
};

export default CountryItem;
