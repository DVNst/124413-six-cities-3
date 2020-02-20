import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

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

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should Title card be pressed`, () => {
  const onPlaceCardTitleClick = jest.fn();

  const main = Enzyme.mount(
      <Main
        offers={offers}
        countOffers={COUNT_OFFERS}
        onPlaceCardTitleClick={onPlaceCardTitleClick}
      />
  );

  const placeCardTitles = main.find(`h2.place-card__name`);
  placeCardTitles.forEach((placeCardTitle) => placeCardTitle.props().onClick());

  expect(onPlaceCardTitleClick.mock.calls.length).toBe(offers.length);
});
