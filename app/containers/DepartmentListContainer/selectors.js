import { createSelector } from 'reselect';
// import makeSelectStoreContainer from '../StoreContainer/selectors';

/**
 * Direct selector to the departmentListContainer state domain
 */
const selectDepartmentListContainerDomain = () => (state) => state.get('departmentListContainer');

/**
 * Other specific selectors
 */

// const selectDepartment = () => createSelector(
//   makeSelectStoreContainer(),
//   selectRouteDepartment(),
//   selectRouteStoreName(),
//   (departmentListState, routeStoreName, departmentName) => {
//     // console.log(departmentListState, 'departmentListState');
//     // .store["0"].floors[1].departments[1].name
//     const selectedDepartment = departmentListState.store[0];
//     console.log(selectedDepartment, 'departmentListState');
//     return selectedDepartment || { };
//   }
// );

const selectRouteDepartment = () => (state, props) => props.params.departmentName;
const selectRouteStoreName = () => (state, props) => props.params.storeName;
/**
 * Default selector used by DepartmentListContainer
 */

const makeSelectDepartmentListContainer = () => createSelector(
  selectDepartmentListContainerDomain(),
  selectRouteStoreName(),
  selectRouteDepartment(),
  // selectDepartment(),
  (substate, storeName, departmentName) =>
    Object.assign(substate.toJS(), { storeName, departmentName })
);

export default makeSelectDepartmentListContainer;
export {
  selectDepartmentListContainerDomain,
};
