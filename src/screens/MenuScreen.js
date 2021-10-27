import React, { useEffect, useRef } from "react";
import {
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	Animated,
	Easing,
} from "react-native";
import CircleButton from "../components/CircleButton/CircleButton";

import { Dimensions } from "react-native";

function MenuScreen({ navigation }) {
	const windowWidth = Dimensions.get("window").width;
	const windowHeight = Dimensions.get("window").height;
	const rotv = useRef(new Animated.Value(0)).current;
	const bgsv = useRef(new Animated.Value(0)).current;
	useEffect(() => {
		rotate(Easing.inOut(Easing.ease));
		bg();
	}, []);

	const rotate = (easing) => {
		//logo rotation aniamtion loop
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

	const rot = rotv.interpolate({
		//logo rotation value interpolation
		inputRange: [0, 1],
		outputRange: ["-10deg", "10deg"],
	});
	const bgs = bgsv.interpolate({
		//background scroll value interpolation
		inputRange: [0, 1],
		outputRange: [0, windowHeight * 2],
	});

	return (
		<View style={styles.root}>
			<View
				style={{
					transform: [
						{ rotate: "45deg" },
						{ scale: 2 },
						{ translateX: 1 },
						{ translateY: windowHeight * -5 },
					],
				}}
			>
				<Animated.Image
					source={require("../assets/photos/evomath-bg-one.png")}
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
			<View
				style={{
					flex: 1,
					alignItems: "center",
					marginTop: "10%",
					marginHorizontal: "10%",
				}}
			>
				<Animated.Image
					source={require("../assets/photos/evomathpng.png")}
					style={{
						resizeMode: "contain",
						height: "100%",
						width: "100%",
						transform: [{ rotate: rot }],
						flex: 1,
						position: "absolute",
					}}
				/>
			</View>
			<View style={styles.optionContainer}>
				<View style={{ top: "-30%", right: "20%", backgroundColor: "red" }}>
					<TouchableOpacity onPress={() => navigation.navigate("GameScreen")}>
						<CircleButton
							Text={"Quick Play"}
							TextSize={50}
							Color={"#5240C0"}
							Size={220}
						/>
					</TouchableOpacity>
				</View>
				<View style={{ top: "-5%", right: "-20%" }}>
					<CircleButton
						Text={"Modes"}
						TextSize={50}
						Color={"#FEC601"}
						Size={200}
					/>
				</View>
				<View style={{ top: "15%", right: "20%" }}>
					<CircleButton
						Text={"Leaderboards"}
						TextSize={45}
						Color={"#48A646"}
						Size={180}
					/>
				</View>
				<View style={{ top: "25%", right: "-28%" }}>
					<CircleButton
						Icon={"account"}
						IconSize={50}
						TextSize={30}
						Color={"#B22D2D"}
						Size={100}
					/>
				</View>
				<View style={{ top: "37%", right: "-0%" }}>
					<CircleButton
						Icon={"cog"}
						IconSize={50}
						Color={"#AA6373"}
						Size={100}
					/>
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
