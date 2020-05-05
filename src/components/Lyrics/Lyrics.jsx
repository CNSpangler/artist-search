import React from 'react';
import PropTypes from 'prop-types';

const Lyrics = ({ songTitle = 'Help!', songLyrics = 'No Lyrics Found' }) => (
  <>
    <h3>{songTitle}</h3>
    <p>{songLyrics}</p>
  </>
);

Lyrics.propTypes = {
  songTitle: PropTypes.string.isRequired,
  songLyrics: PropTypes.string
};

export default Lyrics;
