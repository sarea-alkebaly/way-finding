/**
*
* DepartmentList
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';


function DepartmentList({ department }) {
  const renderDepartment = department.map((d) => (
    <div key={d.store}>{d.store}</div>
  ));

  return (
    <div>
      sarea ala sarea
      {renderDepartment}
    </div>
  );
}

DepartmentList.propTypes = {
  department: PropTypes.arrayOf(PropTypes.shape({
    store: PropTypes.string.isRequired,
  })).isRequired,
};

export default DepartmentList;
