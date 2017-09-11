/**
*
* StoreList
*
*/

import React, { PropTypes } from 'react';
import Store from '../Store';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function StoreList({ stores, selectStore }) {
  const storeList = stores.map((store) => (
    <Store
      key={store.name}
      store={store}
      selectItem={selectStore}
    />
  ));
  return (
    <div className="mt-3 pt-3 t-center">
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
