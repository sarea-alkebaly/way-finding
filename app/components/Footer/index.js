/**
*
* Footer
*
*/

import React from 'react';
import './style.scss';


function Footer() {
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-1"><a href="https://www.facebook.com/debijenkorf" target="_blank" title="Facebook">
            <i className="dbk-icon dbk-icon-r_facebook"></i>
          </a>
          </div>
          <div className="col-sm-1"><a href="https://www.instagram.com/debijenkorf" target="_blank" title="Instagram">
            <i className="dbk-icon dbk-icon-r_instagram"></i>
          </a>
          </div>
          <div className="col-sm-1"><a href="https://twitter.com/debijenkorf" target="_blank" title="Twitter">
            <i className="dbk-icon dbk-icon-r_twitter"></i>
          </a>
          </div>
          <div className="col-sm-1"><a href="https://www.pinterest.com/bijenkorf/" target="_blank" title="Pinterest">
            <i className="dbk-icon dbk-icon-r_pinterest"></i>
          </a>
          </div>
          <div className="col-sm-1"><a href="https://plus.google.com/+deBijenkorf/" target="_blank" title="Google+">
            <i className="dbk-icon dbk-icon-r_google-plus"></i>
          </a>
          </div>
          <div className="col-sm-1"><a href="https://www.youtube.com/user/debijenkorf" target="_blank" title="Youtube">
            <i className="dbk-icon dbk-icon-r_youtube"></i>
          </a>
          </div>
        </div>
        <div className="container pt-3 my-3">
          <div className="row d-flex justify-content-center">
            <span className="col-sm-3">
              <a href="/privacy-statement" target="_self"><span>Privacy statement</span></a>
            </span>
            <span className="col-sm-2">
              <a href="/disclaimer" target="_self"><span>Disclaimer</span></a>
            </span>
            <span className="col-sm-3">
              <a href="/algemene-voorwaarden" target="_self">
                <span>Algemene voorwaarden</span></a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {

};

export default Footer;
