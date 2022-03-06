import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import RateScreen from "../screens/RateScreen";
import FeedbackScreen from "../screens/FeedbackScreen";
import { HomeOutlined, StarOutlined, WechatOutlined } from "@ant-design/icons";

const TabsName = createBottomTabNavigator();

const Tabs = () => {
  return (
    <TabsName.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffe3d8",
          borderRadius: 15,
          height: 90,
          ...styles.shadow
        }
      }}
    >
      <TabsName.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <HomeOutlined style={{ fontSize: 40 }} />
              <Text style={{ color: "#00000", fontSize: 12 }}>Home</Text>
            </View>
          )
        }}
      />
      <TabsName.Screen
        name="RateScreen"
        component={RateScreen}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <StarOutlined style={{ fontSize: 40 }} />
              <Text style={{ color: "#00000", fontSize: 12 }}>Rate</Text>
            </View>
          )
        }}
      />
      <TabsName.Screen
        name="FeedbackScreen"
        component={FeedbackScreen}
        options={{
          tabBarVisible: false,
          tabBarIcon: () => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <WechatOutlined style={{ fontSize: 40 }} />
              <Text style={{ color: "#00000", fontSize: 12 }}>Chat</Text>
            </View>
          )
        }}
      />
    </TabsName.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#808080",
    shadowOffset: {
      width: 5,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  rateButton: {
    display: "flex",
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f19e89",
    shadowColor: "#f19e89",
    borderRadius: 50,
    shadowOpacity: 5.5,
    borderWidth: 2,
    borderColor: "grey",
    shadowOffset: {
      height: 10,
      width: 10
    },
    shadowRadius: 30
  },
  buttonText: {
    color: "blue",
    fontSize: 30,
    fontFamily: "Savoye LET"
  }
});

export default Tabs;
