import { createSelector } from 'reselect';

/**
 * Direct selector to the sectionContainer state domain
 */
const selectSectionContainerDomain = () => (state) => state.get('sectionContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SectionContainer
 */

const makeSelectSectionContainer = () => createSelector(
  selectSectionContainerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSectionContainer;
export {
  selectSectionContainerDomain,
};
