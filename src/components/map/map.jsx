import React, {Fragment} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

const MapCity = (props) => {
  const {city} = props;

  const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  });

  const zoomZ = 12;
  const map = leaflet.map(`map`, {
    center: city,
    zoom: zoomZ,
    zoomControl: false,
    marker: true
  });
  map.setView(city, zoomZ);

  leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

  const offerCords = [52.3709553943508, 4.89309666406198];

  leaflet
    .marker(offerCords, {icon})
    .addTo(map);

  return (
    <Fragment>
      <div id="map"></div>
    </Fragment>
  );
};

MapCity.propTypes = {
  city: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default MapCity;
