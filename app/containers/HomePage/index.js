/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import './style.scss';
import HeaderContainer from '../../containers/HeaderContainer';
import Footer from '../../components/Footer';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: PropTypes.element,
  }

  render() {
    return (
      <div className="">
        <HeaderContainer />
        <div className="homepage-container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

