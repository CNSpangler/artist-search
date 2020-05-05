import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ artists = [] }) => {
  const artistElements = artists.map(artist => (
    <li key={artist.artistId}>
      <p>{artist.artistName}</p>
      <p>Born: {artist.artistBorn}</p>
      <p>Died: {artist.artistDied}</p>
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
    artistBorn: PropTypes.string.isRequired,
    artistDied: PropTypes.string.isRequired                     
  }))
};

export default SearchResults;
