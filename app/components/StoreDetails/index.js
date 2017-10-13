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

  const renderStoreDetails = () => (
    <div key={store.number} className="store-details-container">
      <h1 className="t-center t-uppercase headings-1 p-2">{store.name}</h1>
      <div className="d-flex flex-wrap justify-content-md-between">
        {
          store.floors.map((floor) => (
            <div key={floor.name} className="d-flex col-sm-12 col-md-6 col-lg-4 p-3">
              <div>
                <h6>ETAGE</h6>
                <i className={`logo--floor floor-${floor.number}`}></i>
              </div>
              <div className="floorplan-list">
                {
                  floor.departments.map((department) => (
                    <div key={department.slug} className="pl-1">
                      <button
                        className="floorplan-list-item pl-2 t-underline--fancy-hover"
                        role="button"
                        onClick={() => {
                          selectDepartment(store.slug, department.slug);
                        }}
                      >- {department.name}</button>
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
          <img className="store-img" src={store.imageURL} alt={store.name} />
          <div className="address-banner">
            <h2 className="t-normal">DE BIJENKORF</h2>
            <h1 className="headings-1 t-uppercase t-normal">{store.name}</h1>
            <h4 className="t-white t-normal">
              {store.address.streetName} {store.address.number} |&nbsp;
              {store.address.postalCode} |&nbsp;
              {store.address.cityName}
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
                        <span className="hours">{store.openingHours.currentWeek[day]}</span>
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
                        <span className="hours">{store.openingHours.nextWeek[day]}</span>
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
                <p>{store.parking.description}</p>
                <p>{store.parking.rates}</p>
              </div>
            </div>
            <div className="col-sm-10 col-md-6">
              <a className="btn btn--fancy btn--tertiary btn--sm btn--block" href={store.parking.link} role="button">meer informatie op Q-Park.nl</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const loading = () => (
    <div>loading...</div>
  );
  return (
    <div className="p-2 my-3">
      { store.floors ? renderStoreDetails() : loading() }
    </div>
  );
}

StoreDetails.propTypes = {
  store: PropTypes.shape({}),
  selectDepartment: PropTypes.func.isRequired,
};

// StoreDetails.propTypes = {
//   store: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     storeName: PropTypes.string.isRequired,
//     address: PropTypes.shape({
//       cityName: PropTypes.string.isRequired,
//       postalCode: PropTypes.string.isRequired,
//       streetName: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired,
//     imageURL: PropTypes.string.isRequired,
//     openingHours: PropTypes.shape({
//       currentWeek: PropTypes.object.isRequired,
//       nextWeek: PropTypes.object.isRequired,
//     }).isRequired,
//     floors: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.number.isRequired,
//       departments: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//       })).isRequired,
//     })).isRequired,
//     parking: PropTypes.shape({
//       description: PropTypes.string.isRequired,
//       rates: PropTypes.string.isRequired,
//       link: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
//   selectDepartment: PropTypes.func.isRequired,
// };

export default StoreDetails;
