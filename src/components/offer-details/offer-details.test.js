import React from "react";
import renderer from "react-test-renderer";
import OfferDetails from "./offer-details.jsx";

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
  oordinates: [52.3709553943508, 4.89309666406198],
};

it(`Should OfferDetails render correctly`, () => {
  const tree = renderer.create(
      <OfferDetails
        offer={offer}
        onPlaceCardTitleClick = {() => {}}
      />
  );

  expect(tree).toMatchSnapshot();
});
