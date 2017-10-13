/*
 *
 * SectionContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_SECTION_SUCCEEDED,
  REQUEST_FLOOR_GEOJSON_SUCCEEDED,
} from './constants';

const initialState = fromJS({
  section: {},
  geojson: {},
});

function sectionContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SECTION_SUCCEEDED:
      return state.set('section', action.section);
    case REQUEST_FLOOR_GEOJSON_SUCCEEDED:
      return state.set('geojson', action.geojson);
    default:
      return state;
  }
}

export default sectionContainerReducer;
