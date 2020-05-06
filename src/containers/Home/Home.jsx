import React, { useState, useEffect } from 'react';
import { fetchArtistData } from '../../services/APIcalls.js';
import Search from '../../components/Search/Search.jsx';
import Paging from '../../components/Paging/Paging.jsx';
import SearchResults from '../../components/SearchResults/SearchResults';

const Home = () => {
  const [searchedArtist, setSearchedArtist] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [offset, setOffset] = useState(0);

  const onInputChange = ({ target }) => {
    setSearchedArtist(target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    fetchArtistData(searchedArtist, offset)
      .then(searchedArtists => setSearchResults(searchedArtists));
  };
  
  const updateOffset = by => setOffset(prevOffset => prevOffset + by);

  useEffect(() => {
    fetchArtistData(searchedArtist, offset)
      .then(searchedArtists => setSearchResults(searchedArtists));
  }, [offset]);

  return (
    <>
      <Search handleInputChange={onInputChange} handleSearch={onSearch} />
      {/* {
        searchResults.length > 25 && 
        <Paging artists={searchResults} offset={offset} updateOffset={updateOffset} />
      } */}
      <Paging artists={searchResults} offset={offset} updateOffset={updateOffset} />
      <SearchResults artists={searchResults} />
    </>
  );
};

export default Home;
