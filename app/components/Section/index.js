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
    section: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.geoData = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            name: 'boss',
            description: 'here description for boss we can add anything you want',
            name_alt: 'se',
            type: 'brand',
          },
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [4.943676925671269, 52.309052429706355],
                [4.943791459018087, 52.308933221790426],
                [4.943884324402717, 52.30896635699901],
                [4.943765041398791, 52.30908945195503],
                [4.943676925671269, 52.309052429706355],
              ],
            ],
          },
        }, {
          type: 'Feature',
          properties: {
            name: 'gucci',
            description: 'here description for gucci',
            type: 'brand',
          },
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [4.944146786870874, 52.30896175676804],
                [4.944190963693757, 52.30900144014575],
                [4.944238680818046, 52.30905059728957],
                [4.944225350951285, 52.30914057955317],
                [4.944459287774322, 52.30920638771417],
                [4.944501996985025, 52.30910951039672],
                [4.944398866363684, 52.308964423113764],
                [4.94421917303049, 52.308881467543586],
                [4.944146786870874, 52.30896175676804],
              ],
            ],
          },
        }, {
          type: 'Feature',
          properties: {
            name: 'wc',
            icon: 'toilet',
            type: 'service',
          },
          id: 'laasdf',
          geometry: {
            type: 'Point',
            coordinates: [4.94410181425431, 52.308815309345135],
          },
        }, {
          type: 'Feature',
          properties: {
            name: 'restaurant',
            icon: 'restaurant',
            type: 'service',
          },
          id: 'laasdf',
          geometry: {
            type: 'Point',
            coordinates: [4.944099987099094, 52.30906129364328],
          },
        },
      ],
    };
    this.loadMap();
  }

  // componentWillReceiveProps(nextProps) {
  // }

  loadMap = () => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyZWEiLCJhIjoiY2o4NHdjN2J4MGQ3YzMybWpvbXoyanFiYyJ9.4v_zScnofEB7xNyJqrWe2A';
    this.map = new mapboxgl.Map({
      container: this.container,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [4.944029, 52.309020],
      zoom: 18,
      bearing: -74,
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    }));
    this.loadMapLayer(this.geoData);
    this.mapEvents();
    this.renderPointsIcon(this.geoData);
  }

  loadMapLayer = (geoData) => {
    this.map.on('load', () => {
      this.map.addSource('floor', {
        type: 'geojson',
        data: geoData,
      });
      this.map.addLayer({
        id: '111',
        type: 'fill',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [4.9445494, 52.3093038],
                  [4.9445353, 52.3092724],
                  [4.9441457, 52.3091407],
                  [4.9441802, 52.3091031],
                  [4.9441641, 52.3090671],
                  [4.9441684, 52.3090662],
                  [4.9441723, 52.3090648],
                  [4.9441756, 52.309063],
                  [4.9441784, 52.3090608],
                  [4.9441803, 52.3090583],
                  [4.9441815, 52.3090557],
                  [4.9441817, 52.3090529],
                  [4.9441811, 52.3090502],
                  [4.9441796, 52.3090476],
                  [4.9441772, 52.3090452],
                  [4.9441742, 52.3090432],
                  [4.9441706, 52.3090415],
                  [4.9441665, 52.3090404],
                  [4.9441622, 52.3090397],
                  [4.9441577, 52.3090396],
                  [4.9441511, 52.3090405],
                  [4.9441351, 52.3090045],
                  [4.9440738, 52.3089836],
                  [4.9442912, 52.3087456],
                  [4.9442724, 52.3087037],
                  [4.9442808, 52.3087022],
                  [4.9443011, 52.3086798],
                  [4.944265, 52.3086675],
                  [4.9442042, 52.3086779],
                  [4.9441777, 52.3087063],
                  [4.9440927, 52.3086775],
                  [4.9440753, 52.3086805],
                  [4.9438641, 52.3089116],
                  [4.943792, 52.308887],
                  [4.9436431, 52.30905],
                  [4.9437223, 52.3092218],
                  [4.9439881, 52.3093132],
                  [4.9440286, 52.3092693],
                  [4.9444138, 52.3093996],
                  [4.9444258, 52.3093975],
                  [4.944475, 52.3093446],
                  [4.9445181, 52.3093596],
                  [4.9445785, 52.3093491],
                  [4.9445989, 52.3093268],
                  [4.9445634, 52.3093146],
                  [4.9445549, 52.309316],
                  [4.9445494, 52.3093038],
                ],
              ],
            },
          },
        },
        layout: {},
        paint: {
          'fill-color': '#0cf',
          'fill-opacity': 0.2,
        },
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

  renderPointsIcon = (geoData) => {
    geoData.features.forEach((marker) => {
      if (marker.geometry.type !== 'Point') {
        return;
      }
      // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = `icon ${marker.properties.icon}`;

      new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML(`<h4>${marker.properties.name}</h4><p>${marker.properties.type}</p>`))
      .addTo(this.map);
    });
  }

  renderSection = (section) =>
    section.map((s) => (
      <div className="p-3 m-3" key={s.id}>
        <h1 className="p-3 m-3">{s.store.name}</h1>
        <h2 className="p-3 m-3">{s.brand.name}</h2>
      </div>
    )
  );

  renderSectionInfo = (info) => (
    <div className="t-left px-3 m-3">
      <div className="h3 headings-1">Information:</div>
      <div className="h3 t-capitalize">Section name:</div>
      <div className="h5 t-capitalize">{info.name}</div>
      <div className="h3 t-capitalize">Descrobtion:</div>
      <div className="h5 t-capitalize">{info.description}</div>
    </div>
  )

  render() {
    const { section } = this.props;
    const info = this.state.sectionDetails;
    return (
      <div>
        {this.renderSection(section)}
        <div className="p-3 m-3 d-flex justify-content-center">
          <div className="map-container" ref={(x) => { this.container = x; }}></div>
        </div>
        <div className="features">{info ? this.renderSectionInfo(info) : ''}</div>
      </div>
    );
  }
}

export default Section;
