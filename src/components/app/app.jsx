import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import OfferDetails from "../offer-details/offer-details.jsx";

class App extends PureComponent {
  _renderScreen() {
    const {offers, city, offerScreen, onCityNameClick, onPlaceCardTitleClick} = this.props;
    const countOffers = offers.length;

    if (!offerScreen) {
      return (
        <Main
          countOffers={countOffers}
          offers={offers}
          city={city}
          onCityNameClick={onCityNameClick}
          onPlaceCardTitleClick={onPlaceCardTitleClick}
        />
      );
    } else {
      return (
        <OfferDetails
          offer={offerScreen}
          onPlaceCardTitleClick={onPlaceCardTitleClick}
        />
      );
    }
  }

  render() {
    const {offers, offerScreen, onPlaceCardTitleClick} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderScreen()}
          </Route>
          <Route exact path="/offer">
            <OfferDetails
              offer={offerScreen ? offerScreen : offers[0]}
              onPlaceCardTitleClick={onPlaceCardTitleClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  offerScreen: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  onCityNameClick: PropTypes.func.isRequired,
  onPlaceCardTitleClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  city: state.city,
  offerScreen: state.offerScreen,
});

const mapDispatchToProps = (dispatch) => ({
  onPlaceCardTitleClick(offer) {
    dispatch(ActionCreator.changeOfferScreen(offer));
  },
  onCityNameClick(city) {
    dispatch(ActionCreator.getOffers(city));
    dispatch(ActionCreator.changeCity(city));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
