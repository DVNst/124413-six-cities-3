import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {cities} from "../../const.js";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
  }

  addMarkers(offers) {
    offers.forEach((offer) => {
      this.points.push({
        id: offer.id,
        marker: leaflet.marker(offer.coordinates, {icon: this.icon}).addTo(this.map),
      });
    });
  }

  delMarkers() {
    this.points.forEach((point) => {
      point.marker.remove();
    });
    this.points = [];
  }

  componentDidMount() {
    const {cityName, offers} = this.props;
    const city = cities.coordinates[cities.title.indexOf(cityName)];

    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });

    this.iconActive = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [27, 39]
    });

    // setIcon(<Icon> icon)

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

    this.points = [];
    this.activePoint = false;
    this.addMarkers(offers);
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
      const {cityName, offers} = this.props;
      const city = cities.coordinates[cities.title.indexOf(cityName)];

      this.delMarkers();
      this.addMarkers(offers);
      this.map.setView(city, this.zoom);
    }

    if (prevProps.offerActive !== this.props.offerActive) {
      const {offerActive} = this.props;
      const _activePoint = this.points.find((point) => (point.id === offerActive));

      if (this.activePoint) {
        this.activePoint.marker.setIcon(this.icon);
      }

      if (_activePoint) {
        _activePoint.marker.setIcon(this.iconActive);
        this.activePoint = _activePoint;
      }
    }
  }
}

Map.propTypes = {
  cityName: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  offerActive: PropTypes.number,
};

export default Map;
