import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers.js";

const COUNT_OFFERS = 312;

ReactDOM.render(
    <App
      offers={offers}
      countOffers={COUNT_OFFERS}
      onPlaceCardTitleClick={() => {}}
    />,
    document.querySelector(`#root`)
);
