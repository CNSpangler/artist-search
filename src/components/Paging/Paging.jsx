import React from 'react';
import PropTypes from 'prop-types';

const Paging = ({ artists, updateOffset, offset }) => (
  <>
    <button onClick={() => updateOffset(-25)} disabled={offset === 1}>&lt;</button>
    <button onClick={() => updateOffset(25)} disabled={artists.length < 25}>&gt;</button>
  </>
);

Paging.propTypes = {
  updateOffset: PropTypes.func.isRequired,
  offset: PropTypes.number.isRequired,
  artists: PropTypes.arrayOf(PropTypes.shape({
    artistId: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    artistBorn: PropTypes.string,
    artistDied: PropTypes.string                     
  }))
};

export default Paging;
