/**
*
* StoreDetails
*
*/

import React, { PropTypes } from 'react';
// import Immutable from 'immutable';
import './style.scss';


function StoreDetails({ store }) {
  const renderStore = store.map((s) => (
    <div key={s.id}>
      <span className="pt-2">
      </span>
      <h4>{s.storeName}
      </h4>
      <h4> {s.description}</h4>
    </div>
  ));
  // const floor = floors.map((floor) => (
  //   <div key={floor.id}>
  //     <span className="pt-3">

  //     </span>
  //     <h4>{floor.id} <br /> {floor.floorNumber}</h4>
  //   </div>
  // ))
  // const sarea = Immutable.Map(store);
  // const sasa = sarea.Immutable.get('floors');
  // console.log(sasa);
  return (
    <div className="p-3 my-3">
      {/* <h4>{storeName}</h4>*/}
      {renderStore}
      <div className="logo--floor--m1">
      </div>
      <div className="logo--floor--0">
      </div>
      <div className="logo--floor--1">
      </div>
    </div>
  );
}

StoreDetails.propTypes = {
  store: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    storeName: PropTypes.string.isRequired,
    floors: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      floorNumber: PropTypes.string.isRequired,
      departments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })),
    })),
  })),
  // storeName: PropTypes.string.isRequired,
};

export default StoreDetails;
