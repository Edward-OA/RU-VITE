import { useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
      <button
        onClick={() => {
          setSearchParams({ lat: 30, lng: 40 });
        }}
      >
        Change Position
      </button>
    </div>
  );
}

export default Map;
