/*
 *
 * SectionContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectSectionContainer from './selectors';
import Section from '../../components/Section';


export class SectionContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Section {...this.props} />
      </div>
    );
  }
}

SectionContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
// const mapStateToProps = makeSelectSectionContainer();

const mapStateToProps = createStructuredSelector({
  SectionContainer: makeSelectSectionContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer);
