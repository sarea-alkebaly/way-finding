
import { fromJS } from 'immutable';
import storeListContainerReducer from '../reducer';

describe('storeListContainerReducer', () => {
  it('returns the initial state', () => {
    expect(storeListContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
