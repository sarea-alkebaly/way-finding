/**
*
* Footer
*
*/

import React from 'react';
import './style.scss';


function Footer() {
  return (
    <div className="footer-container py-3 mt-3 links">
      <div className="container my-3">
        <div className="row d-flex justify-content-center">
          <div className="px-2"><a href="https://www.facebook.com/debijenkorf" target="_blank" title="Facebook">
            <i className="dbk-icon dbk-icon-r_facebook"></i>
          </a>
          </div>
          <div className="px-2"><a href="https://www.instagram.com/debijenkorf" target="_blank" title="Instagram">
            <i className="dbk-icon dbk-icon-r_instagram"></i>
          </a>
          </div>
          <div className="px-2"><a href="https://twitter.com/debijenkorf" target="_blank" title="Twitter">
            <i className="dbk-icon dbk-icon-r_twitter"></i>
          </a>
          </div>
          <div className="px-2"><a href="https://www.pinterest.com/bijenkorf/" target="_blank" title="Pinterest">
            <i className="dbk-icon dbk-icon-r_pinterest"></i>
          </a>
          </div>
          <div className="px-2"><a href="https://plus.google.com/+deBijenkorf/" target="_blank" title="Google+">
            <i className="dbk-icon dbk-icon-r_google-plus"></i>
          </a>
          </div>
          <div className="px-2"><a href="https://www.youtube.com/user/debijenkorf" target="_blank" title="Youtube">
            <i className="dbk-icon dbk-icon-r_youtube"></i>
          </a>
          </div>
        </div>
        <div className="container pt-3">
          <div className="row d-flex justify-content-center">
            <span className="col-sm-3 p-0 t-center">
              <a href="/privacy-statement" target="_self">Privacy statement</a>
            </span>
            <span className="col-sm-2 p-0 t-center">
              <a href="/disclaimer" target="_self">Disclaimer</a>
            </span>
            <span className="col-sm-3 p-0 t-center">
              <a href="/algemene-voorwaarden" target="_self">
                Algemene voorwaarden</a>
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
