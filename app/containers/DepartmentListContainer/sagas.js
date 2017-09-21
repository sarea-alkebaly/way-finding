import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import { requestDepartmentSucceeded, requestDepartmentFailed } from './actions';
import { REQUEST_DEPARTMENT } from './constants';

// Individual exports for testing
function fetchDepartmentFromServer(storeName, departmentName) {
  return fetch(`http://localhost:3000/api/store/${storeName}/${departmentName}`)
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

// All sagas to be loaded
export default [
  defaultSaga,
];
