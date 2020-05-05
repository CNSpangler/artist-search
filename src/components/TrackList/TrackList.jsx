import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TrackList = ({ tracks }) => {
  const trackElements = tracks.map(track => (
    <li key={track.songId}>
      <Link to={`/tracks/${tracks.songId}`} >
        <span>{track.songTitle}</span>
      </Link>
    </li>
  ));

  return (
    <>
      <ul>
        {trackElements}
      </ul>
    </>
  );
};

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({
    songId: PropTypes.string.isRequired,
    songTitle: PropTypes.string.isRequired
  }))
};

export default TrackList;
