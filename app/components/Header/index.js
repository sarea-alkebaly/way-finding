/**
*
* Header
*
*/

import React, { PropTypes } from 'react';

import MainBar from '../MainBar';
import Search from '../Search';
import OffCanvas from '../OffCanvas';

function Header({ toggleOffCanvas, isOffCanvasOpen }) {
  return (
    <div>
      <MainBar
        toggleOffCanvas={toggleOffCanvas}
      />
      <Search />
      <OffCanvas
        isOffCanvasOpen={isOffCanvasOpen}
        toggleOffCanvas={toggleOffCanvas}
      />
    </div>
  );
}

Header.propTypes = {
  toggleOffCanvas: PropTypes.func.isRequired,
  isOffCanvasOpen: PropTypes.bool.isRequired,
};

export default Header;
