import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers.js";

const COUNT_OFFERS = 312;

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        offers={offers}
        countOffers={COUNT_OFFERS}
        onPlaceCardTitleClick={() => {}}
      />
    </Provider>,
    document.querySelector(`#root`)
);
