import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions } from "react-native";
import transitions from "./Transition";
import GameScreen from "../screens/GameScreen"; //Screen imports
import MenuScreen from "../screens/MenuScreen";
import ModeScreen from "../screens/ModeScreen";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import AccountScreen from "../screens/AccountScreen";
import GameOverScreen from "../screens/GameOverScreen";
import EndijaTestesana from "../screens/EndijaTestesana";

const Stack = createStackNavigator();

function HomeNavigator() {
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;
  const config = {
    animation: "spring",
    config: {
      stiffness: 2000,
      damping: 500,
      mass: 20,
      overshootClamping: false,
      restDisplacementThreshold: 100,
      restSpeedThreshold: 10,
    },
  };
  return (
    <Stack.Navigator>
      {/*<Stack.Screen
				name="LoginScreen"
				component={LoginScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="SignupScreen"
				component={SignupScreen}
				options={{ headerShown: false }}
			/>*/}
      <Stack.Screen
        name="HomeScreen"
        component={MenuScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="ModeScreen"
        component={ModeScreen}
        options={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "vertical",
          gestureResponseDistance: windowHeight,
          cardStyleInterpolator: transitions.down,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="GameScreen"
        component={GameScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
          cardStyleInterpolator: transitions.up,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="GameOverScreen"
        component={GameOverScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
          cardStyleInterpolator: transitions.fade,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="EndijaTestesana"
        component={EndijaTestesana}
        options={{
          headerShown: false,
          gestureEnabled: false,
          cardStyleInterpolator: transitions.fade,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          headerShown: false,
          gestureEnabled: true,
          gestureResponseDistance: windowWidth,
          cardStyleInterpolator: transitions.right,
          transitionSpec: {
            open: config,
            close: config,
          },
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
