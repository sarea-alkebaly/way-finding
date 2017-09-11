/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_STORE_SUCCEEDED,
  REQUEST_STORE_FAILED,
  REQUEST_STORE,
} from './constants';

export function requestStore(storeName) {
  return {
    type: REQUEST_STORE,
    storeName,
  };
}

export function requestStoreSucceeded(store) {
  return {
    type: REQUEST_STORE_SUCCEEDED,
    store,
  };
}

export function requestStoreFailed(message) {
  return {
    type: REQUEST_STORE_FAILED,
    message,
  };
}
