import { createSelector } from 'reselect';

/**
 * Direct selector to the storeListContainer state domain
 */
const selectStoreListContainerDomain = () => (state) => state.get('storeListContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by StoreListContainer
 */

const makeSelectStoreListContainer = () => createSelector(
  selectStoreListContainerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectStoreListContainer;
export {
  selectStoreListContainerDomain,
};
