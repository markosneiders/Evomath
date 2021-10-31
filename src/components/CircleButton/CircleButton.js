import React, { useRef, useEffect } from "react";
import { Text, Easing, Animated, StyleSheet, Image, View } from "react-native";
import { Dimensions } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TouchableScale from "react-native-touchable-scale";
function CircleButton(props) {
	// const windowWidth = Dimensions.get("window").width;
	// const windowHeight = Dimensions.get("window").height;
	const sizv = useRef(new Animated.Value(0)).current;
	useEffect(() => {
		{
			props.Bobble == null ? sizing(Easing.inOut(Easing.ease)) : null;
		}
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
		<Animated.View style={{ top: siz }}>
			<TouchableScale onPress={props.action}>
				<View
					style={[
						styles.button,
						{
							backgroundColor: props.Color,
							height: props.Size,
							width: props.Size,
						},
					]}
				>
					{props.Icon != null && (
						<MaterialCommunityIcons
							name={props.Icon}
							size={props.IconSize}
							color={"#fff"}
						/>
					)}
					{props.Image != null && (
						<Image
							source={{ uri: props.Image }}
							style={{
								width: props.ImageWidth,
								height: props.ImageHeight,
								borderRadius: props.ImageBorder,
							}}
						/>
					)}
					{props.Text != null && (
						<Text style={[styles.buttonText, { fontSize: props.TextSize }]}>
							{props.Text}
						</Text>
					)}
				</View>
			</TouchableScale>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	button: {
		zIndex: 1,
		borderRadius: 1000,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 5,
			height: 10,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		paddingHorizontal: 10,
	},
	buttonText: {
		color: "white",
		fontWeight: "700",
		fontSize: 23,
		textAlign: "center",
	},
});

export default CircleButton;
