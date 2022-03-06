import React from "react";
import HomeScreen from "../../screens/HomeScreen";
import renderer from "react-test-renderer";

test("Renders snapshot as expected", () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
