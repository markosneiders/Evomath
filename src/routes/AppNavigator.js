import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GameScreen from "../screens/GameScreen"; //Screen imports
import MenuScreen from "../screens/MenuScreen";
import ModeScreen from "../screens/ModeScreen";
import AccountScreen from "../screens/AccountScreen";
import GameOverScreen from "../screens/GameOverScreen";
const Stack = createNativeStackNavigator();

function HomeNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="HomeScreen"
				component={MenuScreen}
				options={{
					headerShown: false,
					animation: "fade",
					gestureEnabled: false,
				}}
			/>
			<Stack.Screen
				name="ModeScreen"
				component={ModeScreen}
				options={{
					headerShown: false,
					animation: "fade",
					gestureEnabled: false,
				}}
			/>
			<Stack.Screen
				name="GameScreen"
				component={GameScreen}
				options={{
					headerShown: false,
					animation: "none",
					gestureEnabled: false,
				}}
			/>
			<Stack.Screen
				name="GameOverScreen"
				component={GameOverScreen}
				options={{
					headerShown: false,
					animation: "none",
					gestureEnabled: false,
				}}
			/>
			<Stack.Screen
				name="AccountScreen"
				component={AccountScreen}
				options={{ headerShown: false, gestureEnabled: false }}
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
