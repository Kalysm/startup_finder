import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import JobOfferScreen from "../screens/JobOfferScreen";
import AccountScreen from "../screens/AccountScreen";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import LikeScreen from "../screens/LikeScreen";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#d2cf7f",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={24} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="JobOffer"
        component={JobOfferScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="stack" size={24} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="LikeScreen"
        component={LikeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="archive" size={24} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
