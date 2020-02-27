import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const COUNT_OFFERS = 312;
const offers = [
  {
    city: `Amsterdam`,
    placeName: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    price: 120,
    period: `night`,
    rating: 4.4,
    mark: `Premium`,
    img: `img/apartment-01.jpg`,
    coordinates: [52.3909553943508, 4.85309666406198],
  }, {
    city: `Amsterdam`,
    placeName: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    period: `night`,
    rating: 4.2,
    mark: ``,
    img: `img/room.jpg`,
    coordinates: [52.369553943508, 4.85309666406198],
  }, {
    city: `Amsterdam`,
    placeName: `Canal View Prinsengracht`,
    type: `Apartment`,
    price: 132,
    period: `night`,
    rating: 3.5,
    mark: ``,
    img: `img/apartment-02.jpg`,
    coordinates: [52.3909553943508, 4.929309666406198],
  }, {
    city: `Amsterdam`,
    placeName: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    price: 180,
    period: `night`,
    rating: 5,
    mark: `Premium`,
    img: `img/apartment-03.jpg`,
    coordinates: [52.3809553943508, 4.939309666406198],
  }, {
    city: `Amsterdam`,
    placeName: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    period: `night`,
    rating: 4,
    mark: ``,
    img: `img/room.jpg`,
    oordinates: [52.3709553943508, 4.89309666406198],
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

it(`Should callback with the correct offer after pressed title card`, () => {
  const onPlaceCardTitleClick = jest.fn();

  const main = Enzyme.mount(
      <Main
        offers={offers}
        countOffers={COUNT_OFFERS}
        onPlaceCardTitleClick={onPlaceCardTitleClick}
      />
  );

  const placeCardTitle = main.find(`h2.place-card__name`).at(0);
  placeCardTitle.simulate(`click`);
  expect(onPlaceCardTitleClick.mock.calls.length).toBe(1);

  expect(onPlaceCardTitleClick).toHaveBeenCalledWith(offers[0]);
});
