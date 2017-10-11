/*
 *
 * SectionContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_SECTION_SUCCEEDED,
} from './constants';

const initialState = fromJS({
  section: [],
});

function sectionContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SECTION_SUCCEEDED:
      return state.set('section', action.section);
    default:
      return state;
  }
}

export default sectionContainerReducer;
