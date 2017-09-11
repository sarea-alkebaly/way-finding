
import { fromJS } from 'immutable';
import storeContainerReducer from '../reducer';

describe('storeContainerReducer', () => {
  it('returns the initial state', () => {
    expect(storeContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
