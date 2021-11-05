//seperate file to handle screen transition directions so AppNavigator.js isn't cluttered
import { Animated, Dimensions } from "react-native";

const transitions = {
	up: function ({ current, next, inverted }) {
		const windowHeight = Dimensions.get("window").height;

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
									-windowHeight, // Focused, but offscreen in the beginning
									0, // Fully focused
									windowHeight, // Fully unfocused
								],
								extrapolate: "clamp",
							}),
							inverted
						),
					},
				],
			},
		};
	},
	down: function ({ current, next, inverted }) {
		const windowHeight = Dimensions.get("window").height;
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
									windowHeight, // Focused, but offscreen in the beginning
									0, // Fully focused
									-windowHeight, // Fully unfocused
								],
								extrapolate: "clamp",
							}),
							inverted
						),
					},
				],
			},
		};
	},
	right: function ({ current, next, inverted }) {
		const windowWidth = Dimensions.get("window").width;
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
						translateX: Animated.multiply(
							progress.interpolate({
								inputRange: [0, 1, 2],
								outputRange: [
									windowWidth, // Focused, but offscreen in the beginning
									0, // Fully focused
									-windowWidth, // Fully unfocused
								],
								extrapolate: "clamp",
							}),
							inverted
						),
					},
				],
			},
		};
	},
	left: function ({ current, next, inverted }) {
		const windowWidth = Dimensions.get("window").width;
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
						translateX: Animated.multiply(
							progress.interpolate({
								inputRange: [0, 1, 2],
								outputRange: [
									-windowWidth, // Focused, but offscreen in the beginning
									0, // Fully focused
									windowWidth, // Fully unfocused
								],
								extrapolate: "clamp",
							}),
							inverted
						),
					},
				],
			},
		};
	},
	fade: function ({ current, next, inverted }) {
		const windowWidth = Dimensions.get("window").width;
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
				opacity: Animated.multiply(
					progress.interpolate({
						inputRange: [0, 1, 2],
						outputRange: [
							0, // Focused, but offscreen in the beginning
							1, // Fully focused
							0, // Fully unfocused
						],
						extrapolate: "clamp",
					}),
					inverted
				),
			},
		};
	},
};
export default transitions;
