import {reducer, ActionType} from "./reducer.js";
import offers from "./mocks/offers.js";

const offerParis = [
  {
    id: 1,
    city: `Paris`,
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
    city: `Paris`,
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
    city: `Paris`,
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
    city: `Paris`,
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
    city: `Amsterdam`,
    offers,
  });
});

it(`Reducer should change city by a given value`, () => {
  expect(reducer({
    city: `Amsterdam`,
    offers,
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Paris`,
  })).toEqual({
    city: `Paris`,
    offers,
  });
});

it(`Reducer should getter new offers by a given values`, () => {
  expect(reducer({
    city: `Paris`,
    offers,
  }, {
    type: ActionType.GET_OFFERS,
    payload: offerParis,
  })).toEqual({
    city: `Paris`,
    offers: offerParis,
  });
});
