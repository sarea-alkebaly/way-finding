import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';

import { requestDepartmentSucceeded, requestDepartmentFailed, selectSection } from './actions';
import { REQUEST_DEPARTMENT, SELECT_SECTION } from './constants';

// Individual exports for testing
function fetchDepartmentFromServer(storeName, departmentName) {
  return fetch(`https://wayfinding-backend.herokuapp.com/api/departments/${departmentName}`)
    .then((res) => res.json());
}

function* fetchDepartment(action) {
  try {
    const department = yield call(fetchDepartmentFromServer, action.payload.storeName, action.payload.departmentName);
    yield put(requestDepartmentSucceeded(department));
  } catch (error) {
    yield put(requestDepartmentFailed(error.message));
  }
}

export function* defaultSaga() {
  yield takeLatest(REQUEST_DEPARTMENT, fetchDepartment);
}

function* pushSection(action) {
  yield put(push(`/${action.payload.floorSlug}/${action.payload.departmentSlug}/${action.payload.sectionId}`));
}

export function* selectSectionSaga() {
  yield takeLatest(SELECT_SECTION, pushSection);
}

// All sagas to be loaded
export default [
  defaultSaga,
  selectSectionSaga,
];
