import React from "react";
import renderer from "react-test-renderer";
import OfferReviews from "./offer-reviews.jsx";

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

it(`Should OfferReviews render correctly`, () => {
  const tree = renderer.create(
      <OfferReviews
        offer={offer}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
