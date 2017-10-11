/*
 *
 * SectionContainer actions
 *
 */

import {
  REQUEST_SECTION,
  REQUEST_SECTION_SUCCEEDED,
  REQUEST_SECTION_FAILED,
} from './constants';

export function requestSection(sectionId) {
  return {
    type: REQUEST_SECTION,
    payload: {
      sectionId,
    },
  };
}

export function requestSectionSucceeded(section) {
  return {
    type: REQUEST_SECTION_SUCCEEDED,
    section,
  };
}

export function requestSectionFailed(message) {
  return {
    type: REQUEST_SECTION_FAILED,
    message,
  };
}
