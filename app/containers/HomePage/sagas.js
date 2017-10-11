import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';

import { LOAD_STORES } from './constants';


function* pushStores() {
  console.log("pushed")
  yield put(push('/stores'));
}

export function* loadStoresSaga() {
  console.log("sagas")
  yield takeLatest(LOAD_STORES, pushStores);
}

// All sagas to be loaded
export default [
  loadStoresSaga,
];
