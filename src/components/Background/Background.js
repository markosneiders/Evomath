import React, { useRef, useEffect } from "react";
import { View, Animated, Easing } from "react-native";
import { Dimensions } from "react-native";
function Background(props) {
	const windowWidth = Dimensions.get("window").width;
	const windowHeight = Dimensions.get("window").height;
	const bgsv = useRef(new Animated.Value(0)).current;
	useEffect(() => {
		bg();
	}, []);

	const bg = () => {
		//infinte background scroll loop
		Animated.loop(
			Animated.timing(bgsv, {
				toValue: 1,
				duration: 40000, //regulates backgorund scroll speed (higher = slower)
				useNativeDriver: true,
				easing: Easing.linear,
			})
		).start();
	};

	const bgs = bgsv.interpolate({
		//background scroll value interpolation
		inputRange: [0, 1],
		outputRange: [0, windowHeight * 3],
	});
	return (
		<View
			style={{
				transform: [
					{ rotate: "45deg" },
					{ scale: 1.5 },
					{ translateX: 1 },
					{ translateY: windowHeight * -5 },
				],
			}}
		>
			<Animated.Image
				source={require("../../assets/photos/evomath-bg-one.png")}
				blurRadius={3}
				style={{
					position: "absolute",
					transform: [{ translateY: bgs }],
					height: windowHeight * 10,
					width: windowWidth * 10,
					resizeMode: "repeat",
				}}
			/>
		</View>
	);
}

export default Background;
