import React from 'react';
import PropTypes from 'prop-types';

const Paging = ({ artists, updatePage, page }) => (
  <>
    <button onClick={() => updatePage(-1)} disabled={page === 1}>&lt;</button>
    <button onClick={() => updatePage(1)} disabled={artists.length < 25}>&gt;</button>
  </>
);

Paging.propTypes = {
  updatePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  artists: PropTypes.arrayOf(PropTypes.shape({
    artistId: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    artistBorn: PropTypes.string,
    artistDied: PropTypes.string                     
  }))
};

export default Paging;

// import React, { useState } from 'react';

// const Paging = () => {
//   const [pageNum, setPageNum] = useState(1);

//   const dec = () => setPageNum(prev => prev - 1);
//   const inc = () => setPageNum(prev => prev + 1);

//   return (
//     <>
//       <button disabled={pageNum === 1} onClick={dec}>Previous</button>
//       <button onClick={inc}>Next</button>
//     </>
//   );
// };


// export default Paging;
