/**
*
* Search
*
*/
// dbk-icon dbk-icon-r_search
import React from 'react';
import './style.scss';


function Search() {
  return (
    <div className="search-container">
      <div className="d-flex p-3">
        <input type="search" className="form-control" placeholder="Zoeken (bijv, dames, thuis, gucci)" />
        <button className="input-search" type="button">
          <i className="dbk-icon dbk-icon-r_search"></i>
        </button>
      </div>
    </div>
  );
}

Search.propTypes = {

};

export default Search;
