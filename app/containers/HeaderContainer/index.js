/*
 *
 * HeaderContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
// import { createStructuredSelector } from 'reselect';
import makeSelectHeaderContainer from './selectors';
// import messages from './messages';
import Header from '../../components/Header';

import { toggleOffCanvas } from './actions';

export class HeaderContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header {...this.props} />
      </div>
    );
  }
}

// HeaderContainer.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = makeSelectHeaderContainer();

function mapDispatchToProps(dispatch) {
  return {
    toggleOffCanvas: () => dispatch(toggleOffCanvas()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
