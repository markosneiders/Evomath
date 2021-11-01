import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import AnwserOption from "../components/AnswerOption/AnwserOption";
import TouchableScale from "react-native-touchable-scale";

function GameScreen({ navigation }) {
	const pgv = useRef(new Animated.Value(1)).current;
	const Progress = () => {
		Animated.timing(pgv, {
			toValue: 0,
			duration: 3000, //time for bar
			useNativeDriver: false,
			easing: Easing.linear,
		}).start();
	};
	const ProgressR = () => {
		Animated.timing(pgv, {
			toValue: 1,
			duration: 300, //time for bar reset
			useNativeDriver: false,
			easing: Easing.linear,
		}).start();
	};
	const pgw = pgv.interpolate({
		//logo rotation value interpolation
		inputRange: [0, 1],
		outputRange: ["0%", "100%"],
	});
	const pgc = pgv.interpolate({
		//logo rotation value interpolation
		inputRange: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.5, 1],
		outputRange: [
			"red",
			"#B22D2D",
			"red",
			"#B22D2D",
			"red",
			"#B22D2D",
			"red",
			"orange",
			"#32DD2E",
		],
	});
	return (
		<View style={styles.root}>
			<View style={styles.questionContainer}>
				<Animated.View
					style={{
						backgroundColor: pgc,
						flex: 1,
						position: "absolute",
						width: pgw,
						height: "100%",
						alignSelf: "flex-start",
					}}
				/>
				<Text
					style={{
						fontSize: 50,
						fontWeight: "700",
					}}
				>
					2 + 2
				</Text>
			</View>
			<View style={styles.scoresContainer}>
				<View style={styles.score}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: "700",
						}}
					>
						10
					</Text>
				</View>
				<View style={styles.score}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: "700",
						}}
					>
						6
					</Text>
				</View>
				<View style={styles.score}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: "700",
						}}
					>
						4
					</Text>
				</View>
			</View>
			<View style={styles.optionsContainer}>
				<TouchableScale style={{ flex: 1 }} onPress={() => Progress()}>
					<AnwserOption text="1" color="#B22D2D" />
				</TouchableScale>
				<TouchableScale style={{ flex: 1 }} onPress={() => ProgressR()}>
					<AnwserOption text="2" color="#5240C0" />
				</TouchableScale>
			</View>
			<View style={[styles.optionsContainer, { marginBottom: 20 }]}>
				<TouchableScale
					style={{ flex: 1 }}
					onPress={() => navigation.navigate("GameOverScreen")}
				>
					<AnwserOption text="3" color="#FEC601" />
				</TouchableScale>
				<TouchableScale style={{ flex: 1 }}>
					<AnwserOption text="4" color="#48A646" />
				</TouchableScale>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: "#f2f2f2",
		alignItems: "center",
		justifyContent: "center",
	},
	questionContainer: {
		flex: 216,
		width: "100%",
		backgroundColor: "#f2f2f2",
		justifyContent: "center",
		alignItems: "center",
	},
	scoresContainer: {
		flex: 61,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	score: {
		flex: 1,
		height: "100%",
		backgroundColor: "#E5E5E5",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderBottomWidth: 2,
		borderTopWidth: 2,
	},
	optionsContainer: {
		flex: 267,
		width: "100%",
		backgroundColor: "#f2f2f2",
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
});

export default GameScreen;
