
import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { requestStoreSucceeded, requestStoreFailed } from './actions';
import { REQUEST_STORE } from './constants';

// Individual exports for testing
function fetchStoreFromServer(storeName) {
  return fetch(`http://localhost:3000/api/store/${storeName}`)
    .then((res) => res.json());
}

function* fetchStore(action) {
  try {
    const store = yield call(fetchStoreFromServer, action.storeName);
    yield put(requestStoreSucceeded(store));
  } catch (error) {
    yield put(requestStoreFailed(error.message));
  }
}

export function* defaultSaga() {
  yield* takeLatest(REQUEST_STORE, fetchStore);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
