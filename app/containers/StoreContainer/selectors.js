import { createSelector } from 'reselect';
// import makeSelectStoreListContainer from '../StoreListContainer/selectors';

/**
 * Direct selector to the storeContainer state domain
 */
const selectStoreContainerDomain = () => (state) => state.get('storeContainer');

/**
 * Other specific selectors
 */

// const selectStore = () => createSelector(
//   makeSelectStoreListContainer(),
//   selectRouteStore(),
//   (storeListState, routeStoreName) => {
//     const selectedStore = storeListState.stores.find((store) => store.name === routeStoreName);

//     return selectedStore || {
//       name: '',
//     };
//   }
// );

const selectRouteStore = () => (state, props) =>
  props.params.storeName;


/**
 * Default selector used by storeContainer
 */

const makeSelectStoreContainer = () => createSelector(
  selectStoreContainerDomain(),
  // selectStore(),
  selectRouteStore(),
  (substate, storeName) =>
    Object.assign(substate.toJS(), { storeName })
);

export default makeSelectStoreContainer;
export {
  selectStoreContainerDomain,
};
