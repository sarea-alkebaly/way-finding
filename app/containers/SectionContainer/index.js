/*
 *
 * SectionContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import makeSelectSectionContainer from './selectors';
import { requestSection, requestFloorGeojson } from './actions';
import Section from '../../components/Section';


export class SectionContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    floorSlug: PropTypes.string.isRequired,
    sectionId: PropTypes.string.isRequired,
    requestSection: PropTypes.func.isRequired,
    requestFloorGeojson: PropTypes.func.isRequired,
    geojson: PropTypes.shape({}).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      geojson: {},
    };
  }

  componentWillMount() {
    this.props.requestSection(this.props.sectionId);
    this.props.requestFloorGeojson(this.props.floorSlug);
  }

  componentWillReceiveProps(newProps) {
    // console.log(newProps);
    if (newProps.geojson.type !== this.props.geojson) {
      this.state.geojson = newProps.geojson;
    }
  }

  render() {
    if (this.state.geojson.type) {
      return (
        <div>
          <Section {...this.props} />
        </div>
      );
    }
    return (
      <div>loading...</div>
    );
  }
}


const mapStateToProps = makeSelectSectionContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestSection: (sectionId) => dispatch(requestSection(sectionId)),
    requestFloorGeojson: (floorSlug) => dispatch(requestFloorGeojson(floorSlug)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer);
