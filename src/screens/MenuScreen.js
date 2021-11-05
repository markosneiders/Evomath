import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Alert, Animated, Easing } from "react-native";

import CircleButton from "../components/CircleButton/CircleButton"; //self made component imports
import Background from "../components/Background/Background";

function MenuScreen({ navigation }) {
	const rotv = useRef(new Animated.Value(0)).current;
	const vmove = useRef(new Animated.Value(0)).current;
	useEffect(() => {
		rotate(Easing.inOut(Easing.ease));
	});

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

	// transiton animations
	const transPlay = (easing) => {
		// when going to play screen
		navigation.navigate("GameScreen");
	};
	const transMode = (easing) => {
		// when going to mode screen

		navigation.navigate("ModeScreen");
	};

	const verticalMove = vmove.interpolate({
		inputRange: [-1, 0, 1],
		outputRange: ["-100%", "0%", "100%"],
	});

	return (
		<Animated.View style={[styles.root, { top: verticalMove }]}>
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
				<View style={{ top: "35%", right: "18%" }}>
					<CircleButton
						Text={"Quick Play"}
						TextSize={50}
						Color={"#5240C0"}
						Size={220}
						Action={() => transPlay()}
					/>
				</View>
				<View style={{ top: "27%", right: "-20%" }}>
					<CircleButton
						Text={"Modes"}
						TextSize={50}
						Color={"#FEC601"}
						Size={200}
						Action={() => transMode()}
					/>
				</View>
				<View style={{ top: "15%", right: "20%" }}>
					<CircleButton
						Text={"Leaderboards"}
						TextSize={45}
						Color={"#48A646"}
						Size={180}
						Action={() =>
							Alert.alert("Coming soon!", "Leaderboards are coming soon.")
						}
					/>
				</View>
				<View style={{ top: "-10%", right: "-28%" }}>
					<CircleButton
						Icon={"account"}
						IconSize={50}
						Color={"#B22D2D"}
						Size={100}
						Action={() => navigation.navigate("AccountScreen")}
						Bobble={false}
					/>
				</View>
				<View style={{ top: "-13%", right: "-7%" }}>
					<CircleButton
						Icon={"cog"}
						IconSize={50}
						Color={"#AA6373"}
						Size={100}
						Action={() =>
							Alert.alert("Coming soon!", "Settings are coming soon.")
						}
						Bobble={false}
					/>
				</View>
			</View>
		</Animated.View>
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
