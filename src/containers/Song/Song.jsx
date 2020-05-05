import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Lyrics from '../../components/Lyrics/Lyrics';
import { fetchLyrics } from '../../services/APIcalls';
import { useParams } from 'react-router-dom';

const Song = () => {
  const [lyrics, setLyrics] = useState();
  const { artistName, songTitle } = useParams();

  useEffect(() => {
    fetchLyrics(artistName, songTitle)
      .then(results => setLyrics(results));
  }, []);
  
  return <Lyrics artistName={artistName} songTitle={songTitle} lyrics={lyrics} />;
};

Song.propTypes = {
  songTitle: PropTypes.string.isRequired,
  songLyrics: PropTypes.string
};

export default Song;
