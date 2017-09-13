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
      className="col-sm-12 col-md-6 col-lg-4 p-2"
      key={store.name}
    >
      <Store
        store={store}
        selectItem={selectStore}
      />
    </div>
  ));
  return (
    <div className="mt-3 pt-3 t-center row">
      {storeList}
    </div>
  );
}

StoreList.propTypes = {
  stores: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectStore: PropTypes.func.isRequired,
};

export default StoreList;
