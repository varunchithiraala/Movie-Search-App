import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import './index.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const onChangeInput = (event) => {
    setQuery(event.target.value)
  }

  const handleSubmit = () => {
    if (query) {
      onSearch(query);
      setError('');
    } else {
      setError('Please provide a movie');
    }
  };

  const handleClear = () => {
    setQuery('');
    setError('');
  };

  return (
    <div className="search-bar">
      <div className="input-container">
        <input 
          type="text" 
          value={query}
          className="input"
          onChange={onChangeInput} 
          placeholder="Search for a movie..."
        />
        <div className='clear-search-container'>
            {query && <IoMdClose className="clear" onClick={handleClear} />}
            <FaMagnifyingGlass className="search" onClick={handleSubmit} />
        </div>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SearchBar;
