/**
*
* DepartmentList
*
*/

import React from 'react';
// import styled from 'styled-components';


function DepartmentList({ storeName, departmentName }) {
  return (
    <div>
      {departmentName}
      sarea ala sarea
      {storeName}
    </div>
  );
}

DepartmentList.propTypes = {
  departmentName: React.PropTypes.string.isRequired,
  storeName: React.PropTypes.string.isRequired,
};

export default DepartmentList;
