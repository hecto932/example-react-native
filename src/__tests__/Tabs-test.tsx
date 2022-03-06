import React from "react";
import Tabs from "../Tabs";
import renderer from "react-test-renderer";

test("Renders snapshot as expected", () => {
  const tree = renderer.create(<Tabs />).toJSON();
  expect(tree).toMatchSnapshot();
});
