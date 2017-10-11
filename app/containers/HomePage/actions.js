/*
 *
 * HomePage actions
 *
 */

import {
  LOAD_STORES,
} from './constants';


export function loadStores() {
  console.log("action")
  return {
    type: LOAD_STORES,
  };
}
