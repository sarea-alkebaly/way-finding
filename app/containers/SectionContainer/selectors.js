import { createSelector } from 'reselect';

/**
 * Direct selector to the sectionContainer state domain
 */
const selectSectionContainerDomain = () => (state) => state.get('sectionContainer');

/**
 * Other specific selectors
 */


// const selectRouteDepartmentSlug = () => (state, props) => props.params.departmentSlug;
const selectRouteSectionId = () => (state, props) => props.params.sectionId;
/**
 * Default selector used by SectionContainer
 */

const makeSelectSectionContainer = () => createSelector(
  selectSectionContainerDomain(),
  // selectRouteDepartmentSlug(),
  selectRouteSectionId(),
  (substate, sectionId) =>
  Object.assign(substate.toJS(), { sectionId })
);

export default makeSelectSectionContainer;
export {
  selectSectionContainerDomain,
};
