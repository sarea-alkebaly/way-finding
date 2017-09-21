/*
 *
 * DepartmentListContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import makeSelectDepartmentListContainer from './selectors';
import { requestDepartment } from './actions';

import DepartmentList from '../../components/DepartmentList';

export class DepartmentListContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    storeName: PropTypes.string.isRequired,
    departmentName: PropTypes.string.isRequired,
    requestDepartment: PropTypes.func.isRequired,
  }

  componentWillMount() {
    // console.log('this.props.departmentName', this.props.storeName);
    this.props.requestDepartment(this.props.storeName, this.props.departmentName);
  }

  render() {
    return (
      <div>
        <DepartmentList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = makeSelectDepartmentListContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestDepartment: (storeName, departmentName) =>
      dispatch(requestDepartment(storeName, departmentName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentListContainer);
