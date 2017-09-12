/**
*
* StoreDetails
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';


function StoreDetails({ store }) {
  const renderStore = store.map((s) => (
    <h1 key={s.storeName}>{s.storeName} <br /> {s.description}</h1>
  ));
  return (
    <div className="p-3 my-3">
      {/*<h1>{storeName}</h1>*/}
      {renderStore}
    </div>
  );
}

StoreDetails.propTypes = {
  store: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    storeName: PropTypes.string.isRequired,
    floors: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      floorNumber: PropTypes.number.isRequired,
      departments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        }))
      }))
  })),
  storeName: PropTypes.string.isRequired,
};

export default StoreDetails;
