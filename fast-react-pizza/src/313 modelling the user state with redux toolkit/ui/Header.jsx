import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
function Header() {
  return (
    <header className=" flex items-center justify-around border-b-6 border-stone-300 bg-yellow-400 px-3 py-4 font-sans uppercase sm:px-6">
      {/* <Link to="/" className="tracking-[5px or 2rem]"> */}
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
