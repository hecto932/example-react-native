import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import InAppReview from "react-native-in-app-review";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../src/RootStackParamList";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../screens/BottomTabParamList";
import { useNavigation } from "@react-navigation/native";

// const navigateToIOSstore = () => {
//deep linkinging for IOS store re-direct
//   if (Platform.OS == "ios") {
//       Linking.openURL(
//         `itms://itunes.apple.com/in/app/apple-store/${APPLE_STORE_ID}`
//       ).catch((err) => alert("Please check for the App Store"));
// };

type RateScreenProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, "App">,
  BottomTabNavigationProp<BottomTabParamList, "RateScreen">
>;

const RateScreen = () => {
  const navigation = useNavigation<RateScreenProp>();

  InAppReview.isAvailable();
  return (
    <View style={styles.centeredView}>
      <TouchableOpacity
        accessibilityLabel="Close Modal Button"
        style={{ marginLeft: 250 }}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.modalHeader}>X</Text>
      </TouchableOpacity>
      <Text style={styles.modalHeader}>Enjoying the App? </Text>
      <Text style={styles.modalText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget
        tempus augue, a convallis velit.
      </Text>
      <View style={styles.buttonsView}>
        <TouchableOpacity
          onPress={() => InAppReview.RequestInAppReview()}
          accessibilityLabel="Seems you are Loving our app!"
          style={styles.buttonStyle}
        >
          <Text style={styles.modalButtonText}>LOVE IT!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsView}>
        <TouchableOpacity
          accessibilityLabel="Seems you are Loving our app!"
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("FeedbackScreen")}
        >
          <Text style={styles.modalButtonText}>COULD BE BETTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    top: 50,
    backgroundColor: "#ffe3d8",
    borderRadius: 15
  },
  modalHeader: {
    fontSize: 20,
    margin: 10,
    fontFamily: "Kohinoor Bangla"
  },
  modalText: {
    margin: 15,
    fontFamily: "Kohinoor Bangla",
    fontSize: 15,
    textAlign: "justify"
  },
  buttonStyle: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    margin: 5,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "#ffffff",
    elevation: 13,
    backgroundColor: "#eead34"
  }
});

export default RateScreen;
