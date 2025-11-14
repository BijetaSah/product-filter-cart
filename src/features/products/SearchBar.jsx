import { IoSearchSharp } from "react-icons/io5";

function SearchBar({ searchQuerry, onSearchChange }) {
  return (
    <div>
      <IoSearchSharp />
      <input
        type="text"
        value={searchQuerry}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBar;
