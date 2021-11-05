import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Animated } from "react-native";

import GameScreen from "../screens/GameScreen"; //Screen imports
import MenuScreen from "../screens/MenuScreen";
import ModeScreen from "../screens/ModeScreen";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import AccountScreen from "../screens/AccountScreen";
import GameOverScreen from "../screens/GameOverScreen";

const Stack = createStackNavigator();

function HomeNavigator() {
	const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
		const progress = Animated.add(
			current.progress.interpolate({
				inputRange: [0, 1],
				outputRange: [0, 1],
				extrapolate: "clamp",
			}),
			next
				? next.progress.interpolate({
						inputRange: [0, 1],
						outputRange: [0, 1],
						extrapolate: "clamp",
				  })
				: 0
		);

		return {
			cardStyle: {
				transform: [
					{
						translateY: Animated.multiply(
							progress.interpolate({
								inputRange: [0, 1, 2],
								outputRange: [
									screen.height, // Focused, but offscreen in the beginning
									0, // Fully focused
									-screen.height, // Fully unfocused
								],
								extrapolate: "clamp",
							}),
							inverted
						),
					},
				],
			},
		};
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
					gestureEnabled: "false",
					cardStyleInterpolator: forSlide,
				}}
			/>
			<Stack.Screen
				name="ModeScreen"
				component={ModeScreen}
				options={{
					headerShown: false,
					gestureEnabled: "false",
					cardStyleInterpolator: forSlide,
				}}
			/>
			<Stack.Screen
				name="GameScreen"
				component={GameScreen}
				options={{
					headerShown: false,
					gestureEnabled: "false",
					cardStyleInterpolator: forSlide,
				}}
			/>
			<Stack.Screen
				name="GameOverScreen"
				component={GameOverScreen}
				options={{
					headerShown: false,
					gestureEnabled: "false",
					cardStyleInterpolator: forSlide,
				}}
			/>
			<Stack.Screen
				name="AccountScreen"
				component={AccountScreen}
				options={{
					headerShown: false,
					gestureEnabled: "false",
					cardStyleInterpolator: forSlide,
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
