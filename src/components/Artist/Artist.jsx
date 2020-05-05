import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchReleaseData } from '../../services/APIcalls';
import { useParams } from 'react-router-dom';
import Discography from '../Discography/Discography';

const Artist = () => {
  const [releases, setReleases] = useState([]);
  let { artistId } = useParams();

  fetchReleaseData(artistId)
    .then(results => setReleases(results));

  return (
    <Discography discography={releases} />
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
