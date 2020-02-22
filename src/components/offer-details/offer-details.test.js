import React from "react";
import renderer from "react-test-renderer";
import OfferDetails from "./offer-details.jsx";

const offer = {
  placeName: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  price: 120,
  period: `night`,
  rating: 80,
  mark: `Premium`,
  img: `img/apartment-01.jpg`,
};

it(`Should OfferDetails render correctly`, () => {
  const tree = renderer.create(
      <OfferDetails
        offer={offer}
      />
  );

  expect(tree).toMatchSnapshot();
});
