import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchReleaseData } from '../../services/APIcalls';
import { Link, useParams } from 'react-router-dom';

const Artist = () => {
  const [releases, setReleases] = useState();
  let { artistId } = useParams();

  fetchReleaseData(artistId)
    .then(results => setReleases(results));

  const releaseElements = releases.map(release => (
    <li key={release.releaseId}>
      <Link>
        <img src={`http://coverartarchive.org/release/${release.releaseId}/front`} />
        <span>{release.releaseTitle}: {release.releaseDate}</span>
      </Link>
    </li>
  ));

  return (
    <ul>
      {releaseElements}
    </ul>
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
