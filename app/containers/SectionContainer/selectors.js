import { createSelector } from 'reselect';

/**
 * Direct selector to the sectionContainer state domain
 */
const selectSectionContainerDomain = () => (state) => state.get('sectionContainer');

/**
 * Other specific selectors
 */


const selectRouteFloorSlug = () => (state, props) => props.params.floorSlug;
const selectRouteSectionId = () => (state, props) => props.params.sectionId;
/**
 * Default selector used by SectionContainer
 */

const makeSelectSectionContainer = () => createSelector(
  selectSectionContainerDomain(),
  selectRouteSectionId(),
  selectRouteFloorSlug(),
  (substate, sectionId, floorSlug) =>
  Object.assign(substate.toJS(), { sectionId, floorSlug })
);

export default makeSelectSectionContainer;
export {
  selectSectionContainerDomain,
};
