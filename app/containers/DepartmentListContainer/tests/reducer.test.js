
import { fromJS } from 'immutable';
import departmentListContainerReducer from '../reducer';

describe('departmentListContainerReducer', () => {
  it('returns the initial state', () => {
    expect(departmentListContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
