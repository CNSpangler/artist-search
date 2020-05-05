import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchReleaseData } from '../../services/APIcalls';
import { useParams } from 'react-router-dom';
import Discography from '../Discography/Discography.jsx';

const Artist = () => {
  const [releases, setReleases] = useState([]);
  const { artistId } = useParams();

  useEffect(() => {
    fetchReleaseData(artistId)
      .then(results => setReleases([...results]));
  }, []);

  return (
    <Discography releases={releases} />
  );
};

Artist.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({
    releaseId: PropTypes.string.isRequired,
    releaseTitle: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  }))
};

export default Artist;
