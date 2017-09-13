/**
*
* Store
*
*/

import React, { PropTypes } from 'react';
import './style.scss';


function Store({ store, selectItem }) {
  // const seless = selectItem(store);
  return (
    <div className="my-3 p-1 store-container">
      <div
        className=""
        onClick={() => {
          selectItem(store);
        }}
      >
        <img className="img--fluid store-image" src="https://source.unsplash.com/400x300/?water" alt="A generic" />
        <div className="store-detail ">
          <h3>DE BIJENKORF</h3>
          <h1>{store.name}</h1>
          <h5>{store.address}</h5>
        </div>
      </div>
    </div>
  );
}

Store.propTypes = {
  store: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }),
  selectItem: PropTypes.func.isRequired,
};

export default Store;
