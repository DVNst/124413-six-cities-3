import {reducer, ActionType} from "./reducer.js";
import {cities} from "./const.js";

const offersParis = [
  {
    id: 11,
    city: `Paris`,
    placeName: `City studio -Hotel de Ville Paris 4`,
    type: `Apartment`,
    price: 69,
    period: `night`,
    rating: 4.5,
    mark: `Premium`,
    img: `img/apartment-01.jpg`,
    coordinates: [48.858638, 2.316295],
  }, {
    id: 12,
    city: `Paris`,
    placeName: `Direct view of Notre Dame Cathedal`,
    type: `Private room`,
    price: 102,
    period: `night`,
    rating: 4.9,
    mark: ``,
    img: `img/room.jpg`,
    coordinates: [48.867564, 2.331307],
  }, {
    id: 13,
    city: `Paris`,
    placeName: `Studio 20m2 Ile Saint Louis - historical center`,
    type: `Apartment`,
    price: 89,
    period: `night`,
    rating: 4.9,
    mark: ``,
    img: `img/apartment-02.jpg`,
    coordinates: [48.858163, 2.362487],
  }, {
    id: 14,
    city: `Paris`,
    placeName: `Notre Dame - Beneath Paris Rooftops`,
    type: `Apartment`,
    price: 140,
    period: `night`,
    rating: 4.7,
    mark: `Premium`,
    img: `img/apartment-03.jpg`,
    coordinates: [48.850958, 2.350929],
  }, {
    id: 15,
    city: `Paris`,
    placeName: `Direct view of Jardin des Plantes`,
    type: `Apartment`,
    price: 109,
    period: `night`,
    rating: 3.7,
    mark: `Premium`,
    img: `img/apartment-03.jpg`,
    coordinates: [48.842110, 2.353682],
  },
];

const offersAmsterdam = [
  {
    id: 1,
    city: `Amsterdam`,
    placeName: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    price: 120,
    period: `night`,
    rating: 4.8,
    mark: `Premium`,
    img: `img/apartment-01.jpg`,
    coordinates: [52.3909553943508, 4.85309666406198],
  }, {
    id: 2,
    city: `Amsterdam`,
    placeName: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    period: `night`,
    rating: 4.2,
    mark: ``,
    img: `img/room.jpg`,
    coordinates: [52.369553943508, 4.85309666406198],
  }, {
    id: 3,
    city: `Amsterdam`,
    placeName: `Canal View Prinsengracht`,
    type: `Apartment`,
    price: 132,
    period: `night`,
    rating: 4.7,
    mark: ``,
    img: `img/apartment-02.jpg`,
    coordinates: [52.3909553943508, 4.929309666406198],
  }, {
    id: 4,
    city: `Amsterdam`,
    placeName: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    price: 180,
    period: `night`,
    rating: 5,
    mark: `Premium`,
    img: `img/apartment-03.jpg`,
    coordinates: [52.3809553943508, 4.939309666406198],
  },
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: cities.title[0],
    offers: offersParis,
    offerScreen: false,
  });
});

it(`Reducer should change city by a given value`, () => {
  expect(reducer({
    city: cities.title[0],
    offers: offersParis,
    offerScreen: false,
  }, {
    type: ActionType.CHANGE_CITY,
    payload: cities.title[3],
  })).toEqual({
    city: cities.title[3],
    offers: offersParis,
    offerScreen: false,
  });
});

it(`Reducer should getter new offers by a given values`, () => {
  expect(reducer({
    city: cities.title[0],
    offers: offersParis,
    offerScreen: false,
  }, {
    type: ActionType.GET_OFFERS,
    payload: cities.title[3],
  })).toEqual({
    city: cities.title[0],
    offers: offersAmsterdam,
    offerScreen: false,
  });
});
