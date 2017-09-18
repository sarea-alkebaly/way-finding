import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';

import { SELECT_HOME } from './constants';


function* pushHome() {
  yield put(push('/'));
}

export function* selectHomeSaga() {
  yield takeLatest(SELECT_HOME, pushHome);
}

// All sagas to be loaded
export default [
  selectHomeSaga,
];
