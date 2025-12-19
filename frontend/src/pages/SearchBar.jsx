import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // send value to parent (Books.jsx)
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
