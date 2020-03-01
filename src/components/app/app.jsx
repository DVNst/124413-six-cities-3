import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import OfferDetails from "../offer-details/offer-details.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offerScreen: false,
    };

    this._handlerPlaceCardTitleClick = this._handlerPlaceCardTitleClick.bind(this);
  }

  _handlerPlaceCardTitleClick(offer) {
    this.setState({
      offerScreen: offer,
    });
  }

  _renderScreen() {
    const {countOffers, offers} = this.props;
    const {offerScreen} = this.state;

    if (!offerScreen) {
      return (
        <Main
          countOffers={countOffers}
          offers={offers}
          onPlaceCardTitleClick={this._handlerPlaceCardTitleClick}
        />
      );
    } else {
      return (
        <OfferDetails
          offer={offerScreen}
          onPlaceCardTitleClick={this._handlerPlaceCardTitleClick}
        />
      );
    }
  }

  render() {
    const {offers} = this.props;
    const {offerScreen} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderScreen()}
          </Route>
          <Route exact path="/offer">
            <OfferDetails
              offer={offerScreen ? offerScreen : offers[0]}
              onPlaceCardTitleClick={this._handlerPlaceCardTitleClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  countOffers: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
};

export default App;
