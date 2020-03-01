import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";

const offer = {
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
};

const offerWithoutMark = {
  id: 2,
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

const MainClassName = `cities`;

it(`Should OfferCard render correctly`, () => {
  const tree = renderer.create(
      <OfferCard
        offer={offer}
        MainClassName={MainClassName}
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
        MainClassName={MainClassName}
        onPlaceCardTitleClick={() => {}}
        onCardMouseOver={() => {}}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
