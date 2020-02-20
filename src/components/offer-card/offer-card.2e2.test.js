import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card.jsx";

Enzyme.configure({adapter: new Adapter()});

const offer = {
  placeName: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  price: 120,
  period: `night`,
  rating: 80,
  mark: `Premium`,
  img: `img/apartment-01.jpg`,
};

it(`Returns a OfferCard on hover`, () => {
  const onCardMouseOver = jest.fn();

  const offerCard = shallow(
      <OfferCard
        offer={offer}
        onPlaceCardTitleClick={() => {}}
        onCardMouseOver={onCardMouseOver}
      />
  );

  offerCard.simulate(`mouseenter`);

  expect(onCardMouseOver).toHaveBeenCalledTimes(1);
  expect(onCardMouseOver.mock.calls[0][0]).toBe(offer);
});
