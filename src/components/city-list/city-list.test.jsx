import React from "react";
import renderer from "react-test-renderer";
import CityList from "./city-list.jsx";

const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

it(`Should OfferDetails render correctly`, () => {
  const tree = renderer.create(
      <CityList
        cities = {cities}
        cityActive = {cities[3]}
        onCityNameClick = {() => {}}
      />
  );

  expect(tree).toMatchSnapshot();
});
