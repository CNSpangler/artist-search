import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchResults = ({ artists = [] }) => {
  const artistElements = artists.map(artist => (
    <li key={artist.artistId}>
      <Link to={`/${artist.artistName}/${artist.artistId}`}>
        <p>{artist.artistName}</p>
        <p>{artist.artistAbout}</p>
        {artist.artistBorn && <p>Born: {artist.artistBorn}</p>}
        {artist.artistDied && <p>Died: {artist.artistDied}</p>}
      </Link>
    </li>
  ));

  return (
    <ul>
      {artistElements}
    </ul>
  );
};

SearchResults.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    artistId: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    artistBorn: PropTypes.string,
    artistDied: PropTypes.string                     
  }))
};

export default SearchResults;
