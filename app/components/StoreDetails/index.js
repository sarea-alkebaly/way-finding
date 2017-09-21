/**
*
* StoreDetails
*
*/

import React, { PropTypes } from 'react';
import './style.scss';


function StoreDetails({ store, selectDepartment }) {
  const today = new Date().getDay();
  const sortedDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  const renderStoreDetails = store.map((s) => (
    <div key={s.id} className="store-details-container">
      <h2 className="t-center p-2">{s.storeName}</h2>
      <div className="d-flex flex-wrap justify-content-md-between">
        {
          s.floors.map((floor) => (
            <div key={floor.id} className="d-flex col-sm-12 col-md-6 col-lg-4 p-3">
              <div>
                <h6>ETAGE</h6>
                <i className={`logo--floor floor--${floor.name}`}></i>
              </div>
              <div className="floorplan-list">
                {
                  floor.departments.map((department) => (
                    <div key={department.id} className="pl-1">
                      <p 
                        className="floorplan-list-item pl-2 t-underline--fancy-hover"
                        onClick={() => {
                          selectDepartment(store[0].storeName, department.name);
                        }}
                      >- {department.name}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
      <div className="body-wrapper">
        <div className="image-container">
          <img className="store-img" src={s.imageURL} alt={s.name} />
          <div className="address-banner">
            <h2 className="t-normal">DE BIJENKORF</h2>
            <h1 className="headings-1 t-uppercase t-normal">{s.storeName}</h1>
            <h4 className="t-white t-normal">
              {s.address.streetName} {s.address.number} |&nbsp;
              {s.address.postalCode} |&nbsp;
              {s.address.cityName}
            </h4>
          </div>
        </div>
        <div className="opening-hours-container">
          <div className="opening-hours-table">
            <h2 className="t-center m-0">OPENINGSTIJDEN</h2>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="px-3">
                  <h5 className="t-center m-3">This Week</h5>
                  {
                    sortedDays.map((day, index) => (
                      <div key={index} className={`row opening-hours-table-item ${index === today ? 'is-today' : ''}`}>
                        <span className="days">{day}</span>
                        <span className="hours">{s.openingHours.currentWeek[day]}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="px-3">
                  <h5 className="t-center m-3">Next Week</h5>
                  {
                    sortedDays.map((day, index) => (
                      <div key={index} className="row opening-hours-table-item">
                        <span className="days">{day}</span>
                        <span className="hours">{s.openingHours.nextWeek[day]}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parking-container">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-8">
              <h2 className="py-2 headings-1 t-normal t-center">BEREIKBAARHEID</h2>
              <div className="p-1">
                <p>{s.parking.description}</p>
                <p>{s.parking.rates}</p>
              </div>
            </div>
            <div className="col-sm-10 col-md-6">
              <a className="btn btn--fancy btn--tertiary btn--sm btn--block" href={s.parking.link} role="button">meer informatie op Q-Park.nl</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="p-2 my-3">
      {renderStoreDetails}
    </div>
  );
}

StoreDetails.propTypes = {
  store: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    storeName: PropTypes.string.isRequired,
    address: PropTypes.shape({
      cityName: PropTypes.string.isRequired,
      postalCode: PropTypes.string.isRequired,
      streetName: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
    imageURL: PropTypes.string.isRequired,
    openingHours: PropTypes.shape({
      currentWeek: PropTypes.object.isRequired,
      nextWeek: PropTypes.object.isRequired,
    }).isRequired,
    floors: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      departments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })).isRequired,
    })).isRequired,
    parking: PropTypes.shape({
      description: PropTypes.string.isRequired,
      rates: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  selectDepartment: PropTypes.func.isRequired,
};

export default StoreDetails;
