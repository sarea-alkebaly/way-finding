/**
*
* StoreDetails
*
*/

import React from 'react';
// import styled from 'styled-components';


function StoreDetails({ store, storeName }) {
  return (
    <div>
      <h1>{store.name}</h1>
      <h1>{storeName}</h1>
    </div>
  );
}

StoreDetails.propTypes = {
  store: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  })),
  storeName: React.PropTypes.string.isRequired,
};

export default StoreDetails;
