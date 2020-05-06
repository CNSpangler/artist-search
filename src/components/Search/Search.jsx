import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleInputChange, handleSearch }) => (
  <form onSubmit={handleSearch}>
    <input type="text" placeholder="Artist Name" onChange={handleInputChange} />
    <button>Search</button>
  </form>
);

Search.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired
};

export default Search;
