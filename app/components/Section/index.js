/**
*
* Section
*
*/

import React, { PropTypes } from 'react';
import mapboxgl from 'mapbox-gl';
import './style.scss';

class Section extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    section: PropTypes.shape({
      content: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    geojson: PropTypes.shape({}).isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.geojson = this.props.geojson;
    this.defaultSection = this.props.section.content.name;
    this.loadMap();
  }

  loadMap = () => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyZWEiLCJhIjoiY2o4NHdjN2J4MGQ3YzMybWpvbXoyanFiYyJ9.4v_zScnofEB7xNyJqrWe2A';
    const data = 'http://wayfinding-backend.herokuapp.com/api/floor-source/parterre';
    this.map = new mapboxgl.Map({
      container: this.container,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [4.859124511549453, 52.303587900577185],
      zoom: 18,
      bearing: 22.800000000000182,
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    }));
    this.loadMapLayer(data);
    this.mapEvents();
    this.renderPointsIcon(this.geojson);
  }

  loadMapLayer = (geojson) => {
    this.map.on('load', () => {
      this.map.addSource('floor', {
        type: 'geojson',
        data: geojson,
      });
      this.map.addLayer({
        id: 'default-section',
        type: 'fill',
        source: 'floor',
        layout: {},
        paint: {
          'fill-color': '#000',
          'fill-opacity': 0.7,
        },
        filter: ['==', 'name', `${this.defaultSection}`],
      });
      this.map.addLayer({
        id: 'section-fills',
        type: 'fill',
        source: 'floor',
        layout: {},
        paint: {
          'fill-color': '#627BC1',
          'fill-opacity': 0.5,
        },
      });
      this.map.addLayer({
        id: 'section-borders',
        type: 'line',
        source: 'floor',
        layout: {},
        paint: {
          'line-color': '#627BC1',
          'line-width': 1,
        },
      });
      this.map.addLayer({
        id: 'section-fills-hover',
        type: 'fill',
        source: 'floor',
        layout: {},
        paint: {
          'fill-color': '#627BC1',
          'fill-opacity': 1,
        },
        filter: ['==', 'name', ''],
      });
      this.map.addLayer({
        id: 'brand-text',
        type: 'symbol',
        source: 'floor',
        layout: {
          'text-field': '{name}',
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          // 'text-offset': [0, 0.6],
          'text-anchor': 'center',
          'text-size': 12,
          'text-allow-overlap': true,
        },
        paint: {
          'text-color': '#fff',
        },
        filter: ['==', 'type', 'brand'],
      });
    });
  }

  mapEvents = () => {
    this.map.on('click', 'section-fills', (e) => {
      const features = e.features[0].properties;
      this.setState({ sectionDetails: features });
      this.map.setFilter('section-fills-hover', ['==', 'name', e.features[0].properties.name]);
    });
  }

  renderPointsIcon = (geojson) => {
    if (geojson.type) {
      geojson.features.forEach((marker) => {
        if (marker.geometry.type !== 'Point') {
          return;
        }
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = `icon ${marker.properties.name.toLowerCase()}`;

        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(`<h4>${marker.properties.name}</h4><p>${marker.properties.type}</p>`))
        .addTo(this.map);
      });
    }
  }

  renderSection = (section) => (
    <div className="p-3 m-3">
      <h1 className="p-3 m-3">{section.content.name}</h1>
      <h2 className="p-3 m-3">{section.department.name}</h2>
    </div>
  );

  renderSectionInfo = (info) => (
    <div className="t-left px-3 m-3 row">
      <div className="col-sm-5">
        <div className="h3 headings-1">Information:</div>
        <div className="h3 t-capitalize">Section name:</div>
        <div className="h5 t-capitalize">{info.name}</div>
        <div className="h3 t-capitalize">Department:</div>
        <div className="h5 t-capitalize">{info.department}</div>
      </div>
      <div className="col-sm-7">
        <img className="logo-img" src={info.logo} alt={info.name} />
      </div>
    </div>
  )

  render() {
    const { section } = this.props;
    const info = this.state.sectionDetails;
    return (
      <div>
        {(section.content) ? this.renderSection(section) : ''}
        <div className="p-3 m-3 d-flex justify-content-center">
          <div className="map-container" ref={(x) => { this.container = x; }}></div>
        </div>
        <div className="features">{info ? this.renderSectionInfo(info) : ''}</div>
      </div>
    );
  }
}

export default Section;
