/**
*
* StoreList
*
*/

import React, { PropTypes } from 'react';
import Store from '../Store';

function StoreList({ stores, selectStore }) {
  const storeList = stores.map((store) => (
    <div
      className="col-sm-12 col-md-6 col-lg-4 p-3"
      key={store.name}
    >
      <Store
        store={store}
        selectItem={selectStore}
      />
    </div>
  ));
  return (
    <div className="">
      <div className="my-3 pt-3 d-flex flex-wrap">
        {storeList}
      </div>
    </div>
  );
}

StoreList.propTypes = {
  stores: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.shape({
        cityName: PropTypes.string.isRequired,
        postalCode: PropTypes.string.isRequired,
        streetName: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired,
      imageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectStore: PropTypes.func.isRequired,
};

export default StoreList;
