/*
 *
 * StoreListContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import makeSelectStoreListContainer from './selectors';

import StoreList from '../../components/StoreList';
import { requestStores, selectStore } from './actions';


export class StoreListContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    requestStores: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.requestStores();
  }

  render() {
    return (
      <div>
        <StoreList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = makeSelectStoreListContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestStores: () => dispatch(requestStores()),
    selectStore: (store) => dispatch(selectStore(store)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreListContainer);
