import React from 'react';
import PropTypes from 'prop-types';

const Paging = ({ artists, offset, decrement, increment, updateOffset }) => (
  <>
    <button onClick={decrement} disabled={offset === 0}>&lt;</button>
    <button onClick={increment} disabled={artists.length < 25}>&gt;</button>
  </>
);

Paging.propTypes = {
  offset: PropTypes.number,
  updateOffset: PropTypes.func.isRequired,
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
