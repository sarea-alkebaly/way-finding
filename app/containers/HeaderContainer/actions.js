/*
 *
 * HeaderContainer actions
 *
 */

import {
  TOGGLE_OFF_CANVAS,
  SELECT_HOME,
} from './constants';

export function toggleOffCanvas() {
  return {
    type: TOGGLE_OFF_CANVAS,
  };
}

export function selectHome() {
  return {
    type: SELECT_HOME,
  };
}
