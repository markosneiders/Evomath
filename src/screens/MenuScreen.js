import React, { useEffect, useRef } from "react";
import {
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	Animated,
	Easing,
} from "react-native";
import { out } from "react-native/Libraries/Animated/src/Easing";
import CircleButton from "../components/CircleButton/CircleButton";

import { Dimensions } from "react-native";

function MenuScreen({ navigation }) {
	const windowWidth = Dimensions.get("window").width;
	const windowHeight = Dimensions.get("window").height;
	const rotv = useRef(new Animated.Value(0)).current;
	useEffect(() => {
		rotate(Easing.inOut(Easing.ease));
	}, []);

	const rotate = (easing) => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(rotv, {
					toValue: 1,
					duration: 4000,
					useNativeDriver: true,
					easing,
				}),
				Animated.timing(rotv, {
					toValue: 0,
					duration: 4000,
					useNativeDriver: true,
					easing,
				}),
			])
		).start();
	};

	const rot = rotv.interpolate({
		inputRange: [0, 1],
		outputRange: ["-10deg", "10deg"],
	});

	return (
		<View style={styles.root}>
			<View>
				<Image
					source={require("../assets/photos/evomath-bg-one.png")}
					blurRadius={3}
					style={{
						position: "absolute",
						transform: [{ rotate: "0deg" }],
						resizeMode: "repeat",
						height: windowHeight,
						width: windowWidth,
					}}
				/>
			</View>
			<View style={{ flex: 1 }}>
				<Animated.Image
					source={require("../assets/photos/evomathpng.png")}
					style={{
						resizeMode: "center",
						height: "100%",
						width: "100%",
						transform: [{ rotate: rot }],
						flex: 1,
						top: "20%",
					}}
				/>
			</View>
			<View style={styles.optionContainer}>
				<View style={{ top: "-30%", right: "20%" }}>
					<TouchableOpacity onPress={() => navigation.navigate("GameScreen")}>
						<CircleButton Text={"Quick Play"} Color={"#5240C0"} Size={220} />
					</TouchableOpacity>
				</View>
				<View style={{ top: "-5%", right: "-20%" }}>
					<CircleButton Text={"Modes"} Color={"#FEC601"} Size={200} />
				</View>
				<View style={{ top: "15%", right: "20%" }}>
					<CircleButton Text={"Leaderboards"} Color={"#48A646"} Size={180} />
				</View>
				<View style={{ top: "25%", right: "-28%" }}>
					<CircleButton Text={"A"} Color={"#B22D2D"} Size={100} />
				</View>
				<View style={{ top: "37%", right: "-0%" }}>
					<CircleButton Text={"S"} Color={"#AA6373"} Size={100} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	optionContainer: {
		flex: 3.5,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default MenuScreen;
