import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoriesScreen from "./CategoriesScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavsScreen from "./FavsScreen";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

let deviceWidth = Dimensions.get("screen").width;

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = (props) => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarLabelPosition: "beside-icon",
      }}
    >
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-grid" size={size} color={color} />;
          },
        }}
        name="Categories"
        component={CategoriesScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-heart" size={size} color={color} />;
          },
        }}
        name="Favorites"
        component={FavsScreen}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
