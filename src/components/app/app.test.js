import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const COUNT_OFFERS = 312;
const CITY_PLACES = {
  placeNames: [`Big room in stylish apartment`, `Beautiful calm room in Amsterdam`, `Comfortable SKY ROOM 12th floor`, `Private Sweet bedroom near Center, near Metro`, `Luxurious room 25 min away from museum district`],
};

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(<App
      countOffers={COUNT_OFFERS}
      cityPlaces={CITY_PLACES}
      onPlaceCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
