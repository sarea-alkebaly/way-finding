/*
 *
 * DepartmentListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_DEPARTMENT_SUCCEEDED,
} from './constants';

const initialState = fromJS({
  department: {},
});

function departmentListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_DEPARTMENT_SUCCEEDED:
      return state.set('department', action.department);
    default:
      return state;
  }
}

export default departmentListContainerReducer;
