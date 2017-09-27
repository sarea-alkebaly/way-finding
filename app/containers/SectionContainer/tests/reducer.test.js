
import { fromJS } from 'immutable';
import sectionContainerReducer from '../reducer';

describe('sectionContainerReducer', () => {
  it('returns the initial state', () => {
    expect(sectionContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
