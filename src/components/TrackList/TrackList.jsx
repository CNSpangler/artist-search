import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TrackList = ({ artistName, tracks }) => {
  const trackElements = tracks.map(track => (
    <li key={track.songId}>
      <Link to={{
        pathname: `/tracks/${artistName}/${track.songId}`,
        songTitle: track.songTitle
      }} >
        <span>{track.songTitle}</span>
      </Link>
    </li>
  ));

  return (
    <ol>
      {trackElements}
    </ol>
  );
};

TrackList.propTypes = {
  artistName: PropTypes.string.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({
    songId: PropTypes.string.isRequired,
    songTitle: PropTypes.string.isRequired
  }))
};

export default TrackList;
