import offers from "./mocks/offers.js";
import {cities} from "./const.js";

const CITY_DEFAULT = cities.title[0];

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const offersCurrentCity = (city) => {
  return offers.filter((offer) => {
    return offer.city === city;
  });
};

const initialState = {
  city: CITY_DEFAULT,
  offers: offersCurrentCity(CITY_DEFAULT),
  offerScreen: false,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_OFFER_SCREEN: `CHANGE_OFFER_SCREEN`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffers: (city) => ({
    type: ActionType.GET_OFFERS,
    payload: city,
  }),
  changeOfferScreen: (offer) => ({
    type: ActionType.CHANGE_OFFER_SCREEN,
    payload: offer,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: offersCurrentCity(action.payload),
      });
    case ActionType.CHANGE_OFFER_SCREEN:
      return extend(state, {
        offerScreen: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
