// import twemoji from 'twemoji'
import PropTypes from 'prop-types';
import styles from './CityItem.module.css';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

function CityItem({ city }) {
    console.log(city)
  const { cityName, emoji, date } = city;
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      {/* <span
        dangerouslySetInnerHTML={{
          __html: twemoji.parse(emoji, { folder: "svg", ext: ".svg" }),
        }}
      /> */}
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>({formatDate(date)})</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

CityItem.propTypes = {
    city: PropTypes.shape({
      cityName: PropTypes.string.isRequired,
      emoji: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  };

export default CityItem;
