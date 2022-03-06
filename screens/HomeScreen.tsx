import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SmileOutlined } from "@ant-design/icons";

const HomeScreen = () => {
  return (
    <View style={styles.centeredView}>
      <SmileOutlined style={{ fontSize: 40 }} />
      <Text>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  }
});

export default HomeScreen;
