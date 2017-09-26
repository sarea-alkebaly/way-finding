/**
*
* Store
*
*/

import React, { PropTypes } from 'react';
import './style.scss';

function Store({ store, selectItem }) {
  return (
    <div className="my-3 p-1 store-wrapper">
      <div
        className="store-image-container"
        role="button"
        onClick={() => {
          selectItem(store);
        }}
      >
        <img className="img--fluid store-img" src={store.imageURL} alt={store.name} />
      </div>
      <div 
        className="address-container"
        role="button"
        onClick={() => {
          selectItem(store);
        }}
      >
        <div className="address-content">
          <h4 className="py-1">DE BIJENKORF</h4>
          <div className="h2 headings-1 t-uppercase store-name">{store.name}</div>
          <h6 className="address">
            {store.address.streetName} {store.address.number} |&nbsp;
            {store.address.postalCode} |&nbsp;
            {store.address.cityName}
          </h6>
        </div>
      </div>
    </div>
  );
}

Store.propTypes = {
  store: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      cityName: PropTypes.string.isRequired,
      postalCode: PropTypes.string.isRequired,
      streetName: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
    imageURL: PropTypes.string.isRequired,
  }),
  selectItem: PropTypes.func.isRequired,
};

export default Store;
