import React, { useRef, useEffect, useState } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import AnwserOption from "../components/AnswerOption/AnwserOption";
import TouchableScale from "react-native-touchable-scale";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
function GameScreen({ navigation }) {
	useEffect(() => {
		ProgressS();
		setTimeout(() => setCount(2), 1000);
		setTimeout(() => setCount(1), 2000);
		setTimeout(() => setCount(0), 3000);
	}, []);
	const pgv = useRef(new Animated.Value(0)).current;
	const [count, setCount] = useState(3);
	const Progress = () => {
		Animated.timing(pgv, {
			toValue: 0,
			duration: 3000, //time for bar
			useNativeDriver: false,
			easing: Easing.linear,
		}).start(() => gameEnd());
	};
	const ProgressR = () => {
		Animated.timing(pgv, {
			toValue: 1,
			duration: 300, //time for bar reset
			useNativeDriver: false,
			easing: Easing.linear,
		}).start();
	};
	const ProgressS = () => {
		Animated.timing(pgv, {
			toValue: 1,
			duration: 4000, //time for bar intializing on screen open
			useNativeDriver: false,
			easing: Easing.linear,
		}).start();
	};
	const pgw = pgv.interpolate({
		inputRange: [0, 1],
		outputRange: ["0%", "100%"],
	});
	const pgc = pgv.interpolate({
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
	const gameEnd = () => {
		navigation.navigate("GameOverScreen");
	};
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
				<Animated.Text
					style={{
						fontSize: 70,
						fontWeight: "700",
						shadowColor: "#000",
						shadowOffset: {
							width: 0,
							height: 5,
						},
						shadowOpacity: 0.25,
						shadowRadius: 3.84,
						opacity: 1,
						color: "white",
					}}
				>
					{count}
				</Animated.Text>
			</View>
			<View style={styles.scoresContainer}>
				<View style={styles.score}>
					<View
						style={{
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 2,
							},
							shadowOpacity: 0.25,
							shadowRadius: 3.84,
							marginRight: 10,
							backgroundColor: "#B22D2D",
							borderRadius: 100,
							padding: 5,
						}}
					>
						<MaterialCommunityIcons name="account" size={40} color="white" />
					</View>
					<View
						style={{
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 2,
							},
							shadowOpacity: 0.15,
							shadowRadius: 3.84,
						}}
					>
						<Text
							style={{
								fontSize: 30,
								fontWeight: "700",
							}}
						>
							4726
						</Text>
					</View>
				</View>
				<View style={styles.score}>
					<View
						style={{
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 2,
							},
							shadowOpacity: 0.25,
							shadowRadius: 3.84,
							marginRight: 10,
							backgroundColor: "#B22D2D",
							borderRadius: 100,
							padding: 5,
						}}
					>
						<MaterialCommunityIcons name="trophy" size={40} color="white" />
					</View>
					<View
						style={{
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 2,
							},
							shadowOpacity: 0.15,
							shadowRadius: 3.84,
						}}
					>
						<Text
							style={{
								fontSize: 30,
								fontWeight: "700",
							}}
						>
							5484
						</Text>
					</View>
				</View>
			</View>
			<View style={{ flex: 267 * 2, marginBottom: 20 }}>
				<View style={styles.optionsContainer}>
					<TouchableScale style={{ flex: 1 }} onPress={() => Progress()}>
						<AnwserOption text="1" color="#B22D2D" icon="square" />
					</TouchableScale>
					<TouchableScale style={{ flex: 1 }} onPress={() => ProgressR()}>
						<AnwserOption text="2" color="#5240C0" icon="triangle" />
					</TouchableScale>
				</View>
				<View style={[styles.optionsContainer]}>
					<TouchableScale
						style={{ flex: 1 }}
						onPress={() => navigation.navigate("GameOverScreen")}
					>
						<AnwserOption text="3" color="#FEC601" icon="star" />
					</TouchableScale>
					<TouchableScale style={{ flex: 1 }}>
						<AnwserOption text="4" color="#48A646" icon="circle" />
					</TouchableScale>
				</View>
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
		flexDirection: "row",
		borderWidth: 1,
		borderBottomWidth: 2,
		borderTopWidth: 2,
		borderColor: "gray",
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
