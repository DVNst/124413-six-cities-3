import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const countOffers = 312;

ReactDOM.render(
    <App
      countOffers={countOffers}
    />,
    document.querySelector(`#root`)
);
