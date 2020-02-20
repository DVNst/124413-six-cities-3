import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCards from "./offer-cards.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

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
