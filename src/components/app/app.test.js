import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const COUNT_OFFERS = 312;
const offers = [
  {
    placeName: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    price: 120,
    period: `night`,
    rating: 80,
    mark: `Premium`,
    img: `img/apartment-01.jpg`,
  }, {
    placeName: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    period: `night`,
    rating: 80,
    mark: ``,
    img: `img/room.jpg`,
  }, {
    placeName: `Canal View Prinsengracht`,
    type: `Apartment`,
    price: 132,
    period: `night`,
    rating: 80,
    mark: ``,
    img: `img/apartment-02.jpg`,
  }, {
    placeName: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    price: 180,
    period: `night`,
    rating: 100,
    mark: `Premium`,
    img: `img/apartment-03.jpg`,
  }, {
    placeName: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    period: `night`,
    rating: 80,
    mark: ``,
    img: `img/room.jpg`,
  },
];

it(`Should App render correctly`, () => {
  const tree = renderer.create(
      <App
        offers={offers}
        countOffers={COUNT_OFFERS}
        onPlaceCardTitleClick={() => {}}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
