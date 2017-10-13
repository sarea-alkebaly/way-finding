/*
 *
 * SectionContainer actions
 *
 */

import {
  REQUEST_SECTION,
  REQUEST_SECTION_SUCCEEDED,
  REQUEST_SECTION_FAILED,
  REQUEST_FLOOR_GEOJSON,
  REQUEST_FLOOR_GEOJSON_SUCCEEDED,
  REQUEST_FLOOR_GEOJSON_FAILED,
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

export function requestFloorGeojson(floorSlug) {
  return {
    type: REQUEST_FLOOR_GEOJSON,
    payload: {
      floorSlug,
    },
  };
}

export function requestFloorGeojsonSucceeded(geojson) {
  return {
    type: REQUEST_FLOOR_GEOJSON_SUCCEEDED,
    geojson,
  };
}

export function requestFloorGeojsonFailed(message) {
  return {
    type: REQUEST_FLOOR_GEOJSON_FAILED,
    message,
  };
}

