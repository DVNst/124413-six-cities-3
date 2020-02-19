import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {countOffers, offers} = props;

  return (
    <Main
      offers={offers}
      countOffers={countOffers}
      onPlaceCardTitleClick={() => {}}
    />
  );
};

App.propTypes = {
  countOffers: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
};

export default App;
