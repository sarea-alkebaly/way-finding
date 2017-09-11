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
      <div className="dbk-footer--flex">
        <div className="parsys dbk-list dbk-list_social">
          <li className="dbk-list--item"><a href="https://www.facebook.com/debijenkorf" target="_blank" rel="nofollow" title="Facebook">
            <i className="dbk-icon dbk-icon-r_facebook"></i>
          </a>
          </li>
          <li className="dbk-list--item"><a href="https://www.instagram.com/debijenkorf" target="_blank" rel="nofollow" title="Instagram">
            <i className="dbk-icon dbk-icon-r_instagram"></i>
          </a>
          </li>
          <li className="dbk-list--item"><a href="https://twitter.com/debijenkorf" target="_blank" rel="nofollow" title="Twitter">
            <i className="dbk-icon dbk-icon-r_twitter"></i>
          </a>
          </li>
          <li className="dbk-list--item"><a href="https://www.pinterest.com/bijenkorf/" target="_blank" rel="nofollow" title="Pinterest">
            <i className="dbk-icon dbk-icon-r_pinterest"></i>
          </a>
          </li>
          <li className="dbk-list--item"><a href="https://plus.google.com/+deBijenkorf/" target="_blank" rel="nofollow" title="Google+">
            <i className="dbk-icon dbk-icon-r_google-plus"></i>
          </a>
          </li>
          <li className="dbk-list--item"><a href="https://www.youtube.com/user/debijenkorf" target="_blank" rel="nofollow" title="Youtube">
            <i className="dbk-icon dbk-icon-r_youtube"></i>
          </a>
          </li>
        </div>
        <div className="dbk-footer--copyright">
          <ul className="dbk-list dbk-list_inline">
            <li className="dbk-list--item">
              <span className="textlink"><a href="/privacy-statement" target="_self"><span>Privacy statement</span></a>
              </span>
              <span className="dbk-list--separator">|</span>
            </li>
            <li className="dbk-list--item">
              <span className="textlink"><a href="/disclaimer" target="_self"><span>Disclaimer</span></a>
              </span>
              <span className="dbk-list--separator">|</span>
            </li>
            <li className="dbk-list--item">
              <span className="textlink"><a href="/algemene-voorwaarden" target="_self">
                <span>Algemene voorwaarden</span></a>
              </span>
              <span className="dbk-list--separator">|</span>
            </li>
          </ul>
        </div>
        <p className="dbk-footer--award">
          <a href="https://www.thuiswinkel.org/leden/de-bijenkorf/certificaat" target="_blank">
            <img src="/etc/designs/debijenkorf-website/img/Thuiswinkel_Waarborg_Kleur_RGB.svg" alt="Thuiswinkel Waarborg logo" />Thuiswinkel Waarborg
          </a>
        </p>
      </div>
    </div>
  );
}

Footer.propTypes = {

};

export default Footer;
