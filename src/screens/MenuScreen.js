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
		<View style={styles.root}>
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
				<View style={{ top: "-30%", right: "20%" }}>
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
