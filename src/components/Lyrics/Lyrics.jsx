import React from 'react';
import PropTypes from 'prop-types';

const Lyrics = ({ artistName, songTitle, lyrics }) => (
  <>
    <h3>{songTitle} by {artistName}</h3>
    <p>{lyrics}</p>
  </>
);

Lyrics.propTypes = {
  artistName: PropTypes.string.isRequired,
  songTitle: PropTypes.string.isRequired,
  lyrics: PropTypes.string
};

export default Lyrics;
