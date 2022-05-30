import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    labeled={false} barStyle={styles.tabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "CreatePost") {
            iconName = focused ? "create" : "create-outline";
          }
          return (
            <Ionicons
              name={iconName}
              color={color}
              size={RFValue(30)}
              style={styles.icon}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "#DAF0FB",
        inactiveTintColor: "#DFF1FD",
      }}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="CreatePost" component={CreatePost} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabStyle: {
    justifyContent: "center",
    alignItems: "justify",
    backgroundColor: "#071D40",
    borderTopWidth: RFValue(1),
    borderColor:'white',
    height: "11%",
    width: "100%",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 200,
    overflow: "hidden",
    position: "absolute",
  },
  icon: {
    height: RFValue(40),
    width: RFValue(40),
  },
});
