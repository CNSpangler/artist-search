import React from 'react';
import Search from '../components/Search/Search.jsx';
import Paging from '../components/Paging/Paging.jsx';
import SearchResults from '../components/SearchResults/SearchResults';

const Home = () => {
  const [searchedArtist, setSearchedArtist] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  return (
    <>
      <Search />
      <Paging />
      {searchResults && <SearchResults artists={searchResults} />}
    </>
  );
};

export default Home;
