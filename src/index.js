import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const COUNT_OFFERS = 312;
const CITY_PLACES = {
  placeNames: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`],
};

ReactDOM.render(
    <App
      countOffers={COUNT_OFFERS}
      cityPlaces={CITY_PLACES}
    />,
    document.querySelector(`#root`)
);
