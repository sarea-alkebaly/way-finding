/**
*
* StoreDetails
*
*/

import React, { PropTypes } from 'react';
import './style.scss';


function StoreDetails({ store }) {
  const renderStoreDetails = store.map((s) => (
    <div key={s.id} >
      <h2 className="t-center p-2">{s.storeName}</h2>
      <div className="d-flex flex-wrap justify-content-md-between">
        {
          s.floors.map((floor) => (
            <div key={floor.id} className="d-flex col-sm-12 col-md-6 col-lg-4 p-3">
              <div>
                <h6>ETAGE</h6>
                <i className={`logo--floor--${floor.name}`}></i>
              </div>
              <div className="floorplan-list">
                {
                  floor.departments.map((department) => (
                    <div key={department.id} className="pl-1">
                      <p className="pl-2 t-underline--fancy-hover floorplan-list-item">- {department.name}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
      <h4>{s.description}</h4>
    </div>
  ));
  return (
    <div className="p-3 my-3">
      {renderStoreDetails}
    </div>
  );
}

StoreDetails.propTypes = {
  store: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    storeName: PropTypes.string.isRequired,
    floors: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      departments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })),
    })),
  })),
  // storeName: PropTypes.string.isRequired,
};

export default StoreDetails;
