import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ searchedArtist }) => {
  const songElements = songs.map(song => (
    <li key={song.songId}>
      {song.songTitle}
    </li>
  ));

  return (
    <>
      <img src={`http://coverartarchive.org/Artist/${ArtistId}/front`} />
      <ul>
        {songElements}
      </ul>
    </>
  );
};

Artist.propTypes = {
  songs: PropTypes.array.isRequired,
  ArtistId: PropTypes.string.isRequired,
};

export default Artist;
