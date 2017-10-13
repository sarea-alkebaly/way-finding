/*
 *
 * DepartmentListContainer actions
 *
 */

import {
  SELECT_SECTION,
  REQUEST_DEPARTMENT,
  REQUEST_DEPARTMENT_SUCCEEDED,
  REQUEST_DEPARTMENT_FAILED,
} from './constants';

export function selectSection(departmentSlug, sectionId, floorSlug) {
  return {
    type: SELECT_SECTION,
    payload: {
      departmentSlug,
      sectionId,
      floorSlug,
    },
  };
}

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
