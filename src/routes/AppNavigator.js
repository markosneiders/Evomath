import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameScreen from "../screens/GameScreen";
import MenuScreen from "../screens/MenuScreen";
const Stack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={MenuScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GameScreen"
        component={GameScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
export const AppNavigator = () => (
  //Exports navigator to be imported in App.js
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
