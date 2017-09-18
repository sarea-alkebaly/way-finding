import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';

import { REQUEST_STORES, SELECT_STORE } from './constants';
import { requestStoresSucceeded, requestStoresFailed } from './actions';


function fetchStoresFromServer() {
  return fetch('http://localhost:3000/api/stores')
  .then((res) => res.json());
}

function* fetchStores() {
  try {
    const stores = yield call(fetchStoresFromServer);
    yield put(requestStoresSucceeded(stores));
  } catch (error) {
    yield put(requestStoresFailed(error.message));
  }
}

function* pushStore(action) {
  yield put(push(`/store/${action.store.name}`));
}

export function* selectStoreSaga() {
  yield takeLatest(SELECT_STORE, pushStore);
}

// Individual exports for testing
export function* fetchStoresSaga() {
  yield takeLatest(REQUEST_STORES, fetchStores);
}

// All sagas to be loaded
export default [
  fetchStoresSaga,
  selectStoreSaga,
];
