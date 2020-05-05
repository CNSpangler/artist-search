import React from 'react';
import Search from '../components/Search/Search.jsx';
import Paging from '../components/Paging/Paging.jsx';
import SearchResults from '../components/SearchResults/SearchResults';

const Home = () => {
  const [searchedArtist, setSearchedArtist] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const onInputChange = ({ target }) => {
    setSearchedArtist(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // api call
    // set result in state
    // below, pass result to component
  }
  
  return (
    <>
      <Search handleInputChange={onInputChange} handleSubmit={onSubmit} />
      <Paging />
      {searchResults && <SearchResults artists={searchResults} />}
    </>
  );
};

export default Home;
