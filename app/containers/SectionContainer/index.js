/*
 *
 * SectionContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import makeSelectSectionContainer from './selectors';
import { requestSection } from './actions';
import Section from '../../components/Section';


export class SectionContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    // departmentSlug: PropTypes.string.isRequired,
    sectionId: PropTypes.string.isRequired,
    requestSection: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.requestSection(this.props.sectionId);
  }

  render() {
    return (
      <div>
        <Section {...this.props} />
      </div>
    );
  }
}


const mapStateToProps = makeSelectSectionContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestSection: (sectionId) => dispatch(requestSection(sectionId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer);
