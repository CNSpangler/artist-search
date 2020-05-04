import React from 'react';
import PropTypes from 'prop-types';

const Release = ({ songs = [], releaseId = false }) => {
  const songElements = songs.map(song => (
    <li key={song.songId}>
      <span>{song.songTitle}</span>
    </li>
  ));

  return (
    <>
      <img src={`http://coverartarchive.org/release/${releaseId}/front`} />
      <ul>
        {songElements}
      </ul>
    </>
  );
};

Release.propTypes = {
  songs: PropTypes.array.isRequired,
  releaseId: PropTypes.string.isRequired,
};

export default Release;
