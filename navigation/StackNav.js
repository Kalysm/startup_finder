import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SelectionScreen from "../screens/SelectionScreen";
import RegisterScreen from "../screens/RegisterScreen";

import CreateJobOfferScreen from "../screens/CreateJobOfferScreen";

import BottomNav from "./BottomNav";
import AccountScreen from "../screens/AccountScreen";

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Selection" component={SelectionScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Main" component={BottomNav} />
      <Stack.Screen name="CreateJobOffer" component={CreateJobOfferScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;
