import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {countOffers, cityPlaces} = props;

  return (
    <Main
      countOffers={countOffers}
      cityPlaces={cityPlaces}
      onPlaceCardTitleClick={() => {}}
    />
  );
};

App.propTypes = {
  countOffers: PropTypes.number.isRequired,
  cityPlaces: PropTypes.shape({
    placeNames: PropTypes.array.isRequired,
  }).isRequired,
};

export default App;
