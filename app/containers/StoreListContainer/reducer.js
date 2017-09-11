/*
 *
 * StoreListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_STORES_SUCCEEDED,
  SELECT_STORE,
} from './constants';

const initialState = fromJS({
  stores: [],
});

function storeListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_STORES_SUCCEEDED:
      return state.set('stores', action.stores);
    case SELECT_STORE:
      return state.set('selectStore', action.store);
    default:
      return state;
  }
}

export default storeListContainerReducer;
