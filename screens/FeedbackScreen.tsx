import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../src/RootStackParamList";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../screens/BottomTabParamList";
import { useNavigation } from "@react-navigation/native";

type FeedbackScreenProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, "App">,
  BottomTabNavigationProp<BottomTabParamList, "FeedbackScreen">
>;

const FeedbackScreen = () => {
  const navigation = useNavigation<FeedbackScreenProp>();
  const [feedbackText, setFeedbackText] = useState("");

  return (
    <View style={styles.centeredView}>
      <Text style={styles.modalHeader}>We are all ears... </Text>
      <Text style={styles.modalText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget
        tempus augue, a convallis velit.
      </Text>
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
      <View>
        <TouchableOpacity
          accessibilityLabel="Seems you are Loving our app!"
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text>NOT RIGHT NOW</Text>
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

export default FeedbackScreen;
