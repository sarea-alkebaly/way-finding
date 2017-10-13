import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import {
  requestSectionSucceeded,
  requestSectionFailed,
  requestFloorGeojsonSucceeded,
  requestFloorGeojsonFailed,
} from './actions';
import { REQUEST_SECTION, REQUEST_FLOOR_GEOJSON } from './constants';

// Individual exports for testing
function fetchSectionFromServer(sectionId) {
  return fetch(`https://wayfinding-backend.herokuapp.com/api/sections/${sectionId}`)
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
export function* sectionSaga() {
  yield takeLatest(REQUEST_SECTION, fetchSection);
}


function fetchFloorGeojsonFromServer(floorSlug) {
  return fetch(`https://wayfinding-backend.herokuapp.com/api/floor-source/${floorSlug}`)
    .then((res) => res.json());
}
function* fetchFloorGeojson(action) {
  try {
    const geojson = yield call(fetchFloorGeojsonFromServer, action.payload.floorSlug);
    yield put(requestFloorGeojsonSucceeded(geojson));
  } catch (error) {
    yield put(requestFloorGeojsonFailed(error.message));
  }
}
export function* floorGeojsonSaga() {
  yield takeLatest(REQUEST_FLOOR_GEOJSON, fetchFloorGeojson);
}

// All sagas to be loaded
export default [
  sectionSaga,
  floorGeojsonSaga,
];
