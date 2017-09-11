/*
 *
 * StoreContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import makeSelectStoreContainer from './selectors';
import StoreDetails from '../../components/StoreDetails';
import { requestStore } from './actions';

export class StoreContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    storeName: PropTypes.string.isRequired,
    requestStore: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.requestStore(this.props.storeName);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.storeName !== this.props.storeName) {
      this.props.requestStore(newProps.storeName);
    }
  }

  render() {
    return (
      <div>
        <StoreDetails {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = makeSelectStoreContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestStore: (storeName) => dispatch(requestStore(storeName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreContainer);