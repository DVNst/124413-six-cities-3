import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";

const offer = {
  city: `Amsterdam`,
  placeName: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  price: 120,
  period: `night`,
  rating: 4.4,
  mark: `Premium`,
  img: `img/apartment-01.jpg`,
  coordinates: [52.3909553943508, 4.85309666406198],
};

const offerWithoutMark = {
  city: `Amsterdam`,
  placeName: `Wood and stone place`,
  type: `Private room`,
  price: 80,
  period: `night`,
  rating: 4,
  mark: ``,
  img: `img/room.jpg`,
  oordinates: [52.3709553943508, 4.89309666406198],
};

it(`Should OfferCard render correctly`, () => {
  const tree = renderer.create(
      <OfferCard
        offer={offer}
        onPlaceCardTitleClick={() => {}}
        onCardMouseOver={() => {}}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should OfferCard without mark render correctly`, () => {
  const tree = renderer.create(
      <OfferCard
        offer={offerWithoutMark}
        onPlaceCardTitleClick={() => {}}
        onCardMouseOver={() => {}}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
