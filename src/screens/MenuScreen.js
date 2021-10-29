import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Alert, Animated, Easing } from "react-native";
import TouchableScale from "react-native-touchable-scale";

import CircleButton from "../components/CircleButton/CircleButton"; //self made component imports
import Background from "../components/Background/Background";

import { Dimensions } from "react-native";

function MenuScreen({ navigation }) {
	const windowWidth = Dimensions.get("window").width;
	const windowHeight = Dimensions.get("window").height;
	const rotv = useRef(new Animated.Value(0)).current;
	useEffect(() => {
		rotate(Easing.inOut(Easing.ease));
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

	const rot = rotv.interpolate({
		//logo rotation value interpolation
		inputRange: [0, 1],
		outputRange: ["-10deg", "10deg"],
	});

	return (
		<View pointerEvents={false} style={styles.root}>
			<Background />
			<View
				style={{
					flex: 1,
					alignItems: "center",
					marginTop: "10%",
					marginHorizontal: "10%",
				}}
			>
				<Animated.Image
					source={require("../assets/photos/evomathlogo.png")}
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
				<View style={{ top: "-30%", right: "20%" }}>
					<TouchableScale onPress={() => navigation.navigate("GameScreen")}>
						<CircleButton
							Text={"Quick Play"}
							TextSize={50}
							Color={"#5240C0"}
							Size={220}
						/>
					</TouchableScale>
				</View>
				<View style={{ top: "-5%", right: "-20%" }}>
					<TouchableScale onPress={() => navigation.navigate("ModeScreen")}>
						<CircleButton
							Text={"Modes"}
							TextSize={50}
							Color={"#FEC601"}
							Size={200}
						/>
					</TouchableScale>
				</View>
				<View style={{ top: "15%", right: "20%" }}>
					<TouchableScale
						onPress={() =>
							Alert.alert("Coming soon!", "Leaderboards are coming soon.")
						}
					>
						<CircleButton
							Text={"Leaderboards"}
							TextSize={45}
							Color={"#48A646"}
							Size={180}
						/>
					</TouchableScale>
				</View>
				<View style={{ top: "25%", right: "-28%" }}>
					<TouchableScale onPress={() => navigation.navigate("AccountScreen")}>
						<CircleButton
							Icon={"account"}
							IconSize={50}
							Color={"#B22D2D"}
							Size={100}
						/>
					</TouchableScale>
				</View>
				<View style={{ top: "37%", right: "-0%" }}>
					<TouchableScale
						onPress={() =>
							Alert.alert("Coming soon!", "Settings are coming soon.")
						}
					>
						<CircleButton
							Icon={"cog"}
							IconSize={50}
							Color={"#AA6373"}
							Size={100}
						/>
					</TouchableScale>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		overflow: "hidden",
	},
	optionContainer: {
		flex: 3.5,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default MenuScreen;
