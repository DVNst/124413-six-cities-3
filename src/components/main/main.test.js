import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const COUNT_OFFERS = 312;
const offers = [
  {
    id: 1,
    city: `Amsterdam`,
    placeName: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    price: 120,
    period: `night`,
    rating: 4.4,
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
    rating: 3.5,
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
  }, {
    id: 5,
    city: `Amsterdam`,
    placeName: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    period: `night`,
    rating: 4,
    mark: ``,
    img: `img/room.jpg`,
    oordinates: [52.3709553943508, 4.89309666406198],
  },
];

it(`Should Main render correctly`, () => {
  const tree = renderer.create(
      <Main
        offers={offers}
        countOffers={COUNT_OFFERS}
        onPlaceCardTitleClick={() => {}}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
