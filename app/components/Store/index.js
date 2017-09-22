/**
*
* Store
*
*/

import React, { PropTypes } from 'react';
import './style.scss';

function Store({ store, selectItem }) {
  return (
    <div className="my-3 p-1 body-wrapper2">
      <div
        className="image-container2"
        role="button"
        onClick={() => {
          selectItem(store);
        }}
      >
        <img className="img--fluid store-img2" src={store.imageURL} alt={store.name} />
      </div>
      <div className="address-container">
        <div className="address-content">
          <h4>DE BIJENKORF</h4>
          <div className="h2 headings-1 t-uppercase">{store.name}</div>
          <h6>
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
