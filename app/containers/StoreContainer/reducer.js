/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_STORE_SUCCEEDED,
} from './constants';

const initialState = fromJS({
  store: [],
});

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_STORE_SUCCEEDED:
      return state.set('store', action.store);
    default:
      return state;
  }
}

export default linkListContainerReducer;
