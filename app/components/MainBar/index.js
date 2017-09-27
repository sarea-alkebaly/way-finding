/**
*
* MainBar
*
*/

import React, { PropTypes } from 'react';
import './style.scss';

function MainBar({ toggleOffCanvas, selectHome }) {
  return (
    <div className="d-flex header main-bar-container">
      <button
        className="toggle"
        onClick={toggleOffCanvas}
        role="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>icon-menu</title><path d="M14 19c0-.552.439-1 .999-1H34c.552 0 .999.444.999 1 0 .552-.439 1-.999 1H15A.997.997 0 0 1 14 19zm0 5c0-.552.439-1 .999-1H34c.552 0 .999.444.999 1 0 .552-.439 1-.999 1H15A.997.997 0 0 1 14 24zm0 5c0-.552.439-1 .999-1H34c.552 0 .999.444.999 1 0 .552-.439 1-.999 1H15A.997.997 0 0 1 14 29z" fill="#2D2D2D" fillRule="evenodd" /></svg>
      </button>
      <button
        className="pt-2 home-button"
        role="button"
        onClick={selectHome}
      >
        <i className="logo logo--debijenkorf"></i>
      </button>
    </div>
  );
}

MainBar.propTypes = {
  toggleOffCanvas: PropTypes.func.isRequired,
  selectHome: PropTypes.func.isRequired,
};

export default MainBar;
