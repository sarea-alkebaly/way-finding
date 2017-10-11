import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import { requestSectionSucceeded, requestSectionFailed } from './actions';
import { REQUEST_SECTION } from './constants';

// Individual exports for testing
function fetchSectionFromServer(sectionId) {
  return fetch(`http://localhost:3000/api/${sectionId}`)
    .then((res) => res.json());
}

function* fetchSection(action) {
  try {
    const section = yield call(fetchSectionFromServer, action.payload.sectionId);
    yield put(requestSectionSucceeded(section));
  } catch (error) {
    yield put(requestSectionFailed(error.message));
  }
}

export function* defaultSaga() {
  yield takeLatest(REQUEST_SECTION, fetchSection);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
