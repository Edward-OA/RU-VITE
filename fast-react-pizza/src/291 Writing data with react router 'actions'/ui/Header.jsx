import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
function Header() {
  return (
    <div>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Amobi</p>
    </div>
  );
}

export default Header;
