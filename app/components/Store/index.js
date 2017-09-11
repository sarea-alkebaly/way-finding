/**
*
* Store
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function Store({ store, selectItem }) {
  // const seless = selectItem(store);
  return (
    <div
      className="my-3 p-1"
      onClick={() => {
        selectItem(store);
      }}
    >
      <h3>DE BIJENKORF</h3>
      <h1>{store.name}</h1>
      <h5>{store.address}</h5>
      {/* <h1>{seless}</h1> */}
      <hr />
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
