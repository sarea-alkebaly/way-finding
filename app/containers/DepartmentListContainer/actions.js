/*
 *
 * DepartmentListContainer actions
 *
 */

import {
  REQUEST_DEPARTMENT,
  REQUEST_DEPARTMENT_SUCCEEDED,
  REQUEST_DEPARTMENT_FAILED,
  SELECT_SECTION,
} from './constants';

export function requestDepartment(storeName, departmentName) {
  return {
    type: REQUEST_DEPARTMENT,
    payload: {
      storeName,
      departmentName,
    },
  };
}

export function requestDepartmentSucceeded(department) {
  return {
    type: REQUEST_DEPARTMENT_SUCCEEDED,
    department,
  };
}

export function requestDepartmentFailed(message) {
  return {
    type: REQUEST_DEPARTMENT_FAILED,
    message,
  };
}

export function selectSection(departmentSlug, sectionsId) {
  return {
    type: SELECT_SECTION,
    payload: {
      departmentSlug,
      sectionsId,
    },
  };
}
