import React, { useEffect, useRef } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";
import CircleButton from "../components/CircleButton/CircleButton";
function GameOverScreen({ navigation }) {
	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			//when screen is focused
			transReturn();
		});

		return unsubscribe;
	}, [navigation]);

	const gopacity = useRef(new Animated.Value(0)).current;
	const messageopacity = useRef(new Animated.Value(0)).current;
	const yellowopacity = useRef(new Animated.Value(0)).current;
	const blueopacity = useRef(new Animated.Value(0)).current;
	const greenopacity = useRef(new Animated.Value(0)).current;
	const redopacity = useRef(new Animated.Value(0)).current;
	const utilityopacity = useRef(new Animated.Value(0)).current;
	const transReturn = () => {
		//when returning to this screen
		//animation sequence for individual bubble appearance

		Animated.sequence([
			Animated.timing(gopacity, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,
			}),
			Animated.timing(messageopacity, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,
			}),
			Animated.timing(yellowopacity, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,
			}),
			Animated.timing(blueopacity, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,
			}),
			Animated.timing(greenopacity, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,
			}),
			Animated.timing(redopacity, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,
			}),
			Animated.timing(utilityopacity, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,
			}),
		]).start();
	};
	const transMenu = () => {
		navigation.popToTop();
	};
	const transMode = () => {
		navigation.navigate("ModeScreen");
	};
	const transPlay = () => {
		navigation.navigate("GameScreen");
	};

	return (
		<Animated.View style={[styles.root, { opacity: gopacity }]}>
			<View style={styles.textContainer}>
				<Text style={[styles.text, { color: "#B22D2D" }]}>Game </Text>
				<Text style={[styles.text, { color: "#5240C0" }]}>Over</Text>
			</View>
			<Animated.View
				style={[styles.messageContainer, { opacity: messageopacity }]}
			>
				<Text style={styles.message}>Better luck next time!</Text>
			</Animated.View>
			<View style={styles.buttonContainer}>
				<Animated.View
					style={{
						top: "50%",
						right: "-25%",
						opacity: yellowopacity,
					}}
				>
					<CircleButton
						Text={"Score: 6375"}
						TextSize={45}
						Color={"#FEC601"}
						Size={170}
					/>
				</Animated.View>
				<Animated.View
					style={{
						top: "36%",
						right: "20%",
						opacity: blueopacity,
					}}
				>
					<CircleButton
						Text={"Total: 30,2s \n Avg: 2,54s \n Max: 7,23s \n Min: 0,7s"}
						TextSize={27}
						Color={"#5240C0"}
						Size={200}
					/>
				</Animated.View>
				<Animated.View
					style={{
						top: "23%",
						right: "-23%",
						opacity: greenopacity,
					}}
				>
					<CircleButton
						Text={"Right answers: \n 8/20 \n  40%"}
						TextSize={30}
						Color={"#48A646"}
						Size={180}
					/>
				</Animated.View>
				<Animated.View
					style={{
						top: "13%",
						right: "24%",
						opacity: redopacity,
					}}
				>
					<CircleButton
						Text={"Wrong answers: \n 12/20 \n 60%"}
						TextSize={30}
						Color={"#B22D2D"}
						Size={180}
					/>
				</Animated.View>

				<Animated.View
					style={{ top: "-17%", right: "-35%", opacity: utilityopacity }}
				>
					<CircleButton
						Icon={"format-list-bulleted-square"}
						IconSize={45}
						Color={"#FEC601"}
						Size={70}
						Action={() => transMode()}
						Bobble={false}
					/>
				</Animated.View>
				<Animated.View
					style={{ top: "-26.5%", right: "-13%", opacity: utilityopacity }}
				>
					<CircleButton
						Icon={"restore"}
						IconSize={50}
						Color={"#AA6373"}
						Size={70}
						Action={() => transPlay()}
						Bobble={false}
					/>
				</Animated.View>
				<Animated.View
					style={{ top: "-27%", right: "-25.5%", opacity: utilityopacity }}
				>
					<CircleButton
						Icon={"close"}
						IconSize={50}
						Color={"#B22D2D"}
						Size={70}
						Action={() => transMenu()}
						Bobble={false}
					/>
				</Animated.View>
			</View>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	textContainer: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		marginTop: "15%",
		marginBottom: "5%",
	},
	messageContainer: {
		alignItems: "center",
		justifyContent: "center",
		marginHorizontal: "15%",
	},
	message: {
		fontSize: 40,
		textAlign: "center",
		color: "gray",
		fontWeight: "700",
	},
	buttonContainer: {
		flex: 2.8,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 50,
		fontWeight: "700",
	},
});

export default GameOverScreen;
