import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const COUNT_OFFERS = 312;
const CITY_PLACES = {
  placeNames: [`Big room in stylish apartment`, `Beautiful calm room in Amsterdam`, `Comfortable SKY ROOM 12th floor`, `Private Sweet bedroom near Center, near Metro`, `Luxurious room 25 min away from museum district`],
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should Title card be pressed`, () => {
  const onPlaceCardTitleClick = jest.fn();

  const main = shallow(
      <Main
        countOffers={COUNT_OFFERS}
        cityPlaces={CITY_PLACES}
        onPlaceCardTitleClick={onPlaceCardTitleClick}
      />
  );

  const placeCardTitles = main.find(`h2.place-card__name`);
  placeCardTitles.forEach((placeCardTitle) => placeCardTitle.props().onClick());

  expect(onPlaceCardTitleClick.mock.calls.length).toBe(CITY_PLACES.placeNames.length);
});
