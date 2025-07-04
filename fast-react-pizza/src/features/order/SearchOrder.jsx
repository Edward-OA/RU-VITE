import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setquery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setquery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="focus:ring-opacity-50 w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 sm:focus:w-72 focus:ring focus:ring-yellow-500 focus:outline-none sm:w-64"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
