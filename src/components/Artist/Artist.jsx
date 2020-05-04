import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ releases = [] }) => {
  const releaseElements = releases.map(release => (
    <li key={release.releaseId}>
      <img src={`http://coverartarchive.org/release/${release.releaseId}/front`} />
      <span>{release.releaseTitle}: {release.releaseDate}</span>
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
