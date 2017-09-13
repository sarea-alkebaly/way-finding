/**
*
* Store
*
*/

import React, { PropTypes } from 'react';
import './style.scss';

function Store({ store, selectItem }) {
  return (
    <div className="my-3 p-1 store-container">
      <div
        className="store-container"
        role="button"
        onClick={() => {
          selectItem(store);
        }}
      >
        <img className="img--fluid store-image" src="https://source.unsplash.com/400x300/?building" alt="A generic" />
        <div className="store-detail ">
          <h4>DE BIJENKORF</h4>
          <div className="h2 headings-1 t-uppercase">{store.name}</div>
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
