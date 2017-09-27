/*
 *
 * DepartmentListContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import makeSelectDepartmentListContainer from './selectors';
import { requestDepartment, selectSection } from './actions';
import DepartmentList from '../../components/DepartmentList';


export class DepartmentListContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    storeName: PropTypes.string.isRequired,
    departmentName: PropTypes.string.isRequired,
    requestDepartment: PropTypes.func.isRequired,
    selectSection: PropTypes.func.isRequired,
  }

  componentWillMount() {
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
    selectSection: (departmentSlug, sectionsId) =>
      dispatch(selectSection(departmentSlug, sectionsId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentListContainer);
