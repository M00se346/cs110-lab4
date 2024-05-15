import React, { useState } from 'react';
import "./SearchBar.css"
function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState(''); //default search term is nothing

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a value 1-15"
        value={searchTerm}
        onChange={handleChange}
      />
	  <p></p>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
