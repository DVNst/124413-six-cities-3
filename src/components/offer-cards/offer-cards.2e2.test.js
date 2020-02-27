import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCards from "./offer-cards.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

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

it(`Should change state when offer onHover`, () => {
  const cards = mount(
      <OfferCards
        offers={offers}
        onPlaceCardTitleClick={() => {}}
      />
  );

  const card = cards.find(`.place-card`);

  card.at(0).simulate(`mouseenter`);
  expect(cards.state().offerOver).toBe(offers[0]);

  card.at(0).simulate(`mouseleave`);
  expect(cards.state().offerOver).toEqual(null);

  card.at(1).simulate(`mouseenter`);
  expect(cards.state().offerOver).toBe(offers[1]);
});
