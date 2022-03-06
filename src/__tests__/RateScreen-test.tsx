import React from "react";
import RateScreen from "../../screens/RateScreen";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";

test("Renders snapshot as expected", () => {
  const tree = renderer.create(<RateScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Testing Buttons", () => {
  it("Handling onPress event on Love it button", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <View>
        <TextInput
          style={{
            height: 40,
            borderColor: "#808080",
            borderWidth: 2,
            paddingHorizontal: 10
          }}
          onChangeText={(text) => setFeedbackText(text)}
          value={feedbackText}
          placeholder="Your feedback..."
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen")}
          accessibilityLabel="Seems you are Loving our app!"
          style={styles.buttonStyle}
        >
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
    fireEvent.press(getByText("SUBMIT"));
    expect(onPressMock).toHaveBeenCalled();
  });
  it("Handling onPress event on Could be better button", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
    <View>
      <TouchableOpacity
        accessibilityLabel="Seems you are Loving our app!"
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text>NOT RIGHT NOW</Text>
      </TouchableOpacity>
    </View>;
    fireEvent.press(getByText("NOT RIGHT NOW"));
    expect(onPressMock).toHaveBeenCalled();
  });
});

