import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameScreen from "../screens/GameScreen";
import MenuScreen from "../screens/MenuScreen";
import ModeScreen from "../screens/ModeScreen";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
const Stack = createNativeStackNavigator();

function HomeNavigator() {
  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={MenuScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ModeScreen"
        component={ModeScreen}
        options={{
          headerShown: false,
          animation: "fade",
          gestureEnabled: "true",
        }}
      />
      <Stack.Screen
        name="GameScreen"
        component={GameScreen}
        options={{
          headerShown: false,
        }}
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
