import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { fetchSongs } from '../../services/APIcalls';
import TrackList from '../TrackList/TrackList.jsx';

const Release = () => {
  const [tracks, setTracks] = useState([]);
  const { releaseId } = useParams();

  useEffect(() => {
    fetchSongs(releaseId)
      .then(results => setTracks(results));
  }, []);

  return <TrackList tracks={tracks} />;
};

Release.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    songId: PropTypes.string.isRequired,
    songTitle: PropTypes.string.isRequired
  })).isRequired,
  releaseId: PropTypes.string.isRequired,
};

export default Release;
