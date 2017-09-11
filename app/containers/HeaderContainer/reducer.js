/*
 *
 * HeaderContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  TOGGLE_OFF_CANVAS,
} from './constants';

const initialState = fromJS({
  isOffCanvasOpen: false,
});

function headerContainerReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_OFF_CANVAS:
      return state.set('isOffCanvasOpen', !state.get('isOffCanvasOpen'));
    default:
      return state;
  }
}

export default headerContainerReducer;
