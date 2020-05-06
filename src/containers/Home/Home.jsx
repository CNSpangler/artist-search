import React, { useState } from 'react';
import { fetchArtistData } from '../../services/APIcalls.js';
import Search from '../../components/Search/Search.jsx';
import Paging from '../../components/Paging/Paging.jsx';
import SearchResults from '../../components/SearchResults/SearchResults';

const Home = () => {
  const [searchedArtist, setSearchedArtist] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);

  const onInputChange = ({ target }) => {
    setSearchedArtist(target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    fetchArtistData(searchedArtist)
      .then(searchedArtists => setSearchResults(searchedArtists));
  };
  
  const updatePage = by => setPage(prevPage => prevPage + by);

  return (
    <>
      <Search handleInputChange={onInputChange} handleSearch={onSearch} />
      {
        searchResults.length > 25 && 
        <Paging artists={searchResults} page={page} updatePage={updatePage} />
      }
      {searchResults && <SearchResults artists={searchResults} />}
    </>
  );
};

export default Home;
