import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";

const offer = {
  placeName: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  price: 120,
  period: `night`,
  rating: 4.4,
  mark: `Premium`,
  img: `img/apartment-01.jpg`,
};

const offerWithoutMark = {
  placeName: `Wood and stone place`,
  type: `Private room`,
  price: 80,
  period: `night`,
  rating: 4.2,
  mark: ``,
  img: `img/room.jpg`,
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
