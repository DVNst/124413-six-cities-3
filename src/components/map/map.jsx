import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {cities} from "../../const.js";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
  }

  componentDidMount() {
    const {offers, cityName} = this.props;
    const city = cities.coordinates[cities.title.indexOf(cityName)];

    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });

    this.iconActive = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [27, 39]
    });

    this.zoom = 12;
    this.map = leaflet.map(this._mapRef.current, {
      center: city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(city, this.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    // this.layer = leaflet
    //   .layerGroup()
    //   .addTo(this.map);

    offers.map((offer) => {
      return leaflet
        .marker(offer.coordinates, {icon: this.icon})
        .addTo(this.map);
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div ref={this._mapRef} style={{height: `100%`}}/>
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cityName !== this.props.cityName) {
      const {offers, cityName} = this.props;
      const city = cities.coordinates[cities.title.indexOf(cityName)];
      const icon = this.icon;

      // this.layer.clearLayers();
      this.cStorage = {map: this.map, layerGroup: leaflet.layerGroup().addTo(this.map)};
      prevProps.offers.forEach((offer) => {
        this.map.removeLayer(offer.coordinates);
      });

      this.map.setView(city, this.zoom);

      offers.map((offer) => {
        leaflet
          .marker(offer.coordinates, {icon})
          .addTo(this.map);
      });
    }
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  cityName: PropTypes.string.isRequired,
};

export default Map;
