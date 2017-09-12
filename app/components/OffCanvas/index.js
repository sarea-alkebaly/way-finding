/**
*
* OffCanvas
*
*/

import React, { PropTypes } from 'react';
import './style.scss';

function OffCanvas({ isOffCanvasOpen, toggleOffCanvas }) {
  return (
    <div
      className={`offCanvas ${isOffCanvasOpen ? 'offCanvas-Open' : ''}`}
    >
      <div
        onClick={toggleOffCanvas}
        role="button"
        className="p-3 f-right"
      >
        <i className="dbk-icon dbk-icon--cross2"></i>
      </div>
    </div>
  );
}

OffCanvas.propTypes = {
  isOffCanvasOpen: PropTypes.bool.isRequired,
  toggleOffCanvas: PropTypes.func.isRequired,
};

export default OffCanvas;
