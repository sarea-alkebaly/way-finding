/*
 *
 * HeaderContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectHeaderContainer from './selectors';
import messages from './messages';
import Header from '../../components/Header';

export class HeaderContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header {...this.props}/>
      </div>
    );
  }
}

HeaderContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  HeaderContainer: makeSelectHeaderContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
