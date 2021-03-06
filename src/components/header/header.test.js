import React from "react";
import renderer from "react-test-renderer";
import Header from "./header.jsx";

it(`Should Header render correctly`, () => {
  const tree = renderer.create(
      <Header/>
  );

  expect(tree).toMatchSnapshot();
});
