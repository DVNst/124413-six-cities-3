import React from "react";
import renderer from "react-test-renderer";
import OfferReviews from "./offer-reviews.jsx";

const reviews = [
  {
    id: 1,
    userName: `Max`,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    rating: 4.8,
    date: `2019-04-24`,
  },
];

const reviewMoreTen = [
  {
    id: 2,
    userName: `Floris`,
    text: `12. Nice atmosphere.`,
    rating: 4.2,
    date: `2020-02-12`,
  }, {
    id: 2,
    userName: `Ademir`,
    text: `11. Nice atmosphere.`,
    rating: 3.8,
    date: `2020-02-11`,
  }, {
    id: 2,
    userName: `Ademir`,
    text: `10. Nice atmosphere.`,
    rating: 3.8,
    date: `2020-02-10`,
  }, {
    id: 2,
    userName: `Ademir`,
    text: `8. Nice atmosphere.`,
    rating: 3.8,
    date: `2020-02-08`,
  }, {
    id: 2,
    userName: `Ademir`,
    text: `9. Nice atmosphere.`,
    rating: 3.8,
    date: `2020-02-09`,
  }, {
    id: 2,
    userName: `Ademir`,
    text: `1. Nice atmosphere.`,
    rating: 3.8,
    date: `2020-02-01`,
  }, {
    id: 2,
    userName: `Ademir`,
    text: `2. Nice atmosphere.`,
    rating: 3.8,
    date: `2020-02-02`,
  }, {
    id: 2,
    userName: `Ademir`,
    text: `3. Nice atmosphere.`,
    rating: 3.8,
    date: `2020-02-03`,
  }, {
    id: 2,
    userName: `Ademir`,
    text: `4. Nice atmosphere.`,
    rating: 3.8,
    date: `2020-02-04`,
  }, {
    id: 2,
    userName: `Ademir`,
    text: `5. Nice atmosphere.`,
    rating: 3.8,
    date: `2020-02-05`,
  }, {
    id: 2,
    userName: `Ademir`,
    text: `6. Nice atmosphere.`,
    rating: 3.8,
    date: `2020-02-06`,
  }, {
    id: 2,
    userName: `Ademir`,
    text: `7. Nice atmosphere.`,
    rating: 3.8,
    date: `2020-02-07`,
  },
];

it(`Should OfferReviews render correctly`, () => {
  const tree = renderer.create(
      <OfferReviews
        reviews={reviews}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should OfferReviews render correctly when the number of reviews exceeds 10`, () => {
  const tree = renderer.create(
      <OfferReviews
        reviews={reviewMoreTen}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
