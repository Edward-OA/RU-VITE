import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired, // Accepts any renderable content
  onClick: PropTypes.func, // A function for handling clicks (optional if not always required)
  type: PropTypes.string, // The button type (e.g., "primary", "secondary")
};
export default Button;
