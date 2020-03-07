import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const offers = [
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

it(`Should Main render correctly`, () => {
  const tree = renderer.create(
      <Main
        countOffers={offers.length}
        offers={offers}
        city={`Paris`}
        onCityNameClick={() => {}}
        onPlaceCardTitleClick={() => {}}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
