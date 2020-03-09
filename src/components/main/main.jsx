import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import CityList from "../city-list/city-list.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import SortingOptions from "../sorting-options/sorting-options.jsx";
import Map from "../map/map.jsx";
import {cities} from "../../const.js";

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filteredOffers: this.props.offers,
      offerOver: -1,
    };

    this._handlerSelectSortOption = this._handlerSelectSortOption.bind(this);
    this._handlerCardMouseOver = this._handlerCardMouseOver.bind(this);
  }

  _handlerSelectSortOption(newSortOffers) {
    this.setState({
      filteredOffers: newSortOffers,
    });
  }

  _handlerCardMouseOver(offerID) {
    this.setState({
      offerOver: offerID,
    });
  }

  render() {
    const {countOffers, offers, city, onCityNameClick, onPlaceCardTitleClick} = this.props;
    const filteredOffers = this.state.filteredOffers;
    const empty = (filteredOffers.length === 0) ? true : false;

    return (
      <React.Fragment>
        <div className="page page--gray page--main">
          <Header/>
          <main
            className={`page__main page__main--index${(empty) ? ` page__main--index-empty` : ``}`}>
            <CityList
              cities={cities.title}
              cityActive={city}
              onCityNameClick={onCityNameClick}
            />
            <div className="cities">
              <div className={`cities__places-container${(empty) ? ` cities__places-container--empty` : ``} container`}>
                {(!empty) ?
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{countOffers} places to stay in {city}</b>
                    <SortingOptions
                      offers={offers}
                      onSortOptionClick={this._handlerSelectSortOption}
                    />
                    <div className="cities__places-list places__list tabs__content">
                      {<OffersList
                        offers={filteredOffers}
                        onPlaceCardTitleClick={onPlaceCardTitleClick}
                        onCardMouseOver={this._handlerCardMouseOver}
                      />}
                    </div>
                  </section>
                  :
                  <section className="cities__no-places">
                    <div className="cities__status-wrapper tabs__content">
                      <b className="cities__status">No places to stay available</b>
                      <p className="cities__status-description">We could not find any property availbale at the moment in {city}</p>
                    </div>
                  </section>
                }
                <div className="cities__right-section">
                  {(!empty) ?
                    <section className="cities__map map">
                      {<Map
                        cityName={city}
                        offers={offers}
                        offerActive={this.state.offerOver}
                      />}
                    </section>
                    :
                    null
                  }
                </div>
              </div>
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        filteredOffers: this.props.offers,
      });
    }
  }
}

Main.propTypes = {
  countOffers: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  onCityNameClick: PropTypes.func.isRequired,
  onPlaceCardTitleClick: PropTypes.func.isRequired,
};

export default Main;
