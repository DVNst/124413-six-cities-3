import React from "react";
import renderer from "react-test-renderer";
import OfferReview from "./offer-review.jsx";

const review = {
  id: 1,
  userName: `Max`,
  text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  rating: 4.8,
  date: `2019-04-24`,
};

it(`Should OfferReview render correctly`, () => {
  const tree = renderer.create(
      <OfferReview
        review={review}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
