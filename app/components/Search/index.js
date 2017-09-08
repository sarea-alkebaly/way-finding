/**
*
* Search
*
*/

import React from 'react';
import style from './style.scss';


function Search() {
  return (
    <div className="d-flex search">
      <form className={['form-control', true ? 'has-success' : ''].join(' ')}>
        <input type="text" className="form-control search-input" placeholder="Zoeken (bijv, dames, thuis, gucci)" />
        <i className="dbk-icon dbk-icon-r_search" />
      </form>
    </div>
  );
}

Search.propTypes = {

};

export default Search;
