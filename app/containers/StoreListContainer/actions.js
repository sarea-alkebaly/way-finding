/*
 *
 * StoreListContainer actions
 *
 */

import {
  REQUEST_STORES,
  REQUEST_STORES_SUCCEEDED,
  REQUEST_STORES_FAILED,
  SELECT_STORE,
} from './constants';

export function requestStores() {
  return {
    type: REQUEST_STORES,
  };
}

export function requestStoresSucceeded(stores) {
  return {
    type: REQUEST_STORES_SUCCEEDED,
    stores,
  };
}

export function requestStoresFailed(message) {
  return {
    type: REQUEST_STORES_FAILED,
    message,
  };
}

export function selectStore(store) {
  return {
    type: SELECT_STORE,
    store,
  };
}

