import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const offers = [
  {
    id: 11,
    city: `Paris`,
    placeName: `City studio -Hotel de Ville Paris 4`,
    type: `Apartment`,
    price: 69,
    period: `night`,
    rating: 4.5,
    mark: `Premium`,
    img: `img/apartment-01.jpg`,
    coordinates: [48.858638, 2.316295],
  }, {
    id: 12,
    city: `Paris`,
    placeName: `Direct view of Notre Dame Cathedal`,
    type: `Private room`,
    price: 102,
    period: `night`,
    rating: 4.9,
    mark: ``,
    img: `img/room.jpg`,
    coordinates: [48.867564, 2.331307],
  }, {
    id: 13,
    city: `Paris`,
    placeName: `Studio 20m2 Ile Saint Louis - historical center`,
    type: `Apartment`,
    price: 89,
    period: `night`,
    rating: 4.9,
    mark: ``,
    img: `img/apartment-02.jpg`,
    coordinates: [48.858163, 2.362487],
  }, {
    id: 14,
    city: `Paris`,
    placeName: `Notre Dame - Beneath Paris Rooftops`,
    type: `Apartment`,
    price: 140,
    period: `night`,
    rating: 4.7,
    mark: `Premium`,
    img: `img/apartment-03.jpg`,
    coordinates: [48.850958, 2.350929],
  }, {
    id: 15,
    city: `Paris`,
    placeName: `Direct view of Jardin des Plantes`,
    type: `Apartment`,
    price: 109,
    period: `night`,
    rating: 3.7,
    mark: `Premium`,
    img: `img/apartment-03.jpg`,
    coordinates: [48.842110, 2.353682],
  },
];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should Title card be pressed`, () => {
  const onPlaceCardTitleClick = jest.fn();

  const main = Enzyme.mount(
      <Main
        countOffers={offers.length}
        offers={offers}
        city={`Paris`}
        onCityNameClick={() => {}}
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
        countOffers={offers.length}
        offers={offers}
        city={`Paris`}
        onCityNameClick={() => {}}
        onPlaceCardTitleClick={onPlaceCardTitleClick}
      />
  );

  const placeCardTitle = main.find(`h2.place-card__name`).at(0);
  placeCardTitle.simulate(`click`);
  expect(onPlaceCardTitleClick.mock.calls.length).toBe(1);

  expect(onPlaceCardTitleClick).toHaveBeenCalledWith(offers[0]);
});

it(`Should redraw the page with the correct city when choosing another city`, () => {
  const onCityNameClick = jest.fn();

  const main = Enzyme.mount(
      <Main
        countOffers={offers.length}
        offers={offers}
        city={`Paris`}
        onCityNameClick={onCityNameClick}
        onPlaceCardTitleClick={() => {}}
      />
  );

  const CitiesTitle = main.find(`a.locations__item-link`).at(3);
  CitiesTitle.simulate(`click`);
  expect(onCityNameClick.mock.calls.length).toBe(1);

  expect(onCityNameClick).toHaveBeenCalledWith(`Amsterdam`);
});
