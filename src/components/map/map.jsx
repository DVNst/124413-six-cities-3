import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import "../../const.js";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
  }

  componentDidMount() {
    const {offers} = this.props;
    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(this._mapRef.current, {
      center: city,
      zoom: {zoom},
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.map((offer) => {
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(map);
    });
  }

  render() {
    return (
      <div ref={this._mapRef} style={{height: `100%`}}/>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default Map;
