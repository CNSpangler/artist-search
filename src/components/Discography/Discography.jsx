import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Discography = ({ artistName, releases }) => {
  const releaseElements = releases.map(release => (
    <li key={release.releaseId}>
      <Link to={`/releases/${artistName}/${release.releaseId}`}>
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

Discography.propTypes = {
  artistName: PropTypes.string.isRequired,
  releases: PropTypes.arrayOf(PropTypes.shape({
    releaseId: PropTypes.string.isRequired,
    releaseTitle: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  }))
};

export default Discography;
