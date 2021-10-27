import React, { useRef, useEffect } from "react";
import { Text, Easing, Animated, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { Icon } from "react-native-vector-icons/MaterialIcons";
function CircleButton(props) {
	// const windowWidth = Dimensions.get("window").width;
	// const windowHeight = Dimensions.get("window").height;
	const sizv = useRef(new Animated.Value(0)).current;
	useEffect(() => {
		sizing(Easing.inOut(Easing.ease));
	}, []);
	const time = (Math.floor(Math.random() * 40) + 20) * 100;
	const move = (Math.floor(Math.random() * 20) + 10) * 1;

	const sizing = (easing) => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(sizv, {
					toValue: 1,
					duration: time,
					useNativeDriver: false,
					easing,
				}),
				Animated.timing(sizv, {
					toValue: 0,
					duration: time,
					useNativeDriver: false,
					easing,
				}),
			])
		).start();
	};

	const siz = sizv.interpolate({
		inputRange: [0, 1],
		outputRange: [props.Size / -2, props.Size / -2 - move],
	});
	return (
		<Animated.View
			style={[
				styles.button,
				{
					backgroundColor: props.Color,
					height: props.Size,
					width: props.Size,
					right: props.Size / -2,
					top: siz,
				},
			]}
		>
			<Text style={styles.buttonText}>{props.Text}</Text>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 1000,
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		shadowColor: "#000",
		shadowOffset: {
			width: 5,
			height: 10,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
	},
	buttonText: {
		color: "white",
		fontWeight: "700",
		fontSize: 23,
	},
});

export default CircleButton;
