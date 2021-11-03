import React, { useRef, useEffect, useState } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import AnwserOption from "../components/AnswerOption/AnwserOption";
import TouchableScale from "react-native-touchable-scale";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
function GameScreen({ navigation }) {
	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			//when screen is focused
			transReturn();
		});

		return unsubscribe;
	}, [navigation]);
	const pgv = useRef(new Animated.Value(0)).current;
	const gopacity = useRef(new Animated.Value(0)).current;
	//const pgv = new Animated.Value(0);

	const [question, setQuestion] = useState(3); //Equation and respective answers
	const [answer1, setAnswer1] = useState();
	const [answer2, setAnswer2] = useState();
	const [answer3, setAnswer3] = useState();
	const [answer4, setAnswer4] = useState();

	const [resetTime, setResetTime] = useState(500);
	const [questionTime, setQuestionTime] = useState(5000);

	const startQuestion = () => {
		Animated.timing(pgv, {
			toValue: 0,
			duration: questionTime, //time for bar
			useNativeDriver: false,
			easing: Easing.linear,
		}).start((o) => {
			if (o.finished) {
				gameEnd();
			}
		});
	};
	const nextQuestion = () => {
		Animated.timing(pgv, {
			toValue: 1,
			duration: resetTime, //time for bar reset
			useNativeDriver: false,
		}).start(() => startQuestion());
		setTimeout(
			() => setQuestion(Math.floor(Math.random() * 20) + 10),
			resetTime
		);
		setTimeout(
			() => setAnswer1(Math.floor(Math.random() * 20) + 10),
			resetTime
		);
		setTimeout(
			() => setAnswer2(Math.floor(Math.random() * 20) + 10),
			resetTime
		);
		setTimeout(
			() => setAnswer3(Math.floor(Math.random() * 20) + 10),
			resetTime
		);
		setTimeout(
			() => setAnswer4(Math.floor(Math.random() * 20) + 10),
			resetTime
		);
	};
	const gameEnd = () => {
		Animated.timing(gopacity, {
			toValue: 0,
			duration: 1000, //time for bar intializing on screen open
			useNativeDriver: false,
		}).start(() => navigation.navigate("GameOverScreen"));
	};
	const startup = () => {
		setTimeout(() => setQuestion(2), 1000);
		setTimeout(() => setQuestion(1), 2000);
		setTimeout(() => setQuestion(0), 3000);
		Animated.timing(pgv, {
			toValue: 1,
			duration: 4000, //time for bar intializing on screen open
			useNativeDriver: false,
			easing: Easing.linear,
		}).start(() => nextQuestion());
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
	const transReturn = (easing) => {
		//when returning to this screen
		Animated.timing(gopacity, {
			toValue: 1,
			duration: 500,
			useNativeDriver: false,
			easing,
		}).start(() => startup());
	};
	const globalOpacity = gopacity.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 1],
	});
	return (
		<Animated.View style={[styles.root, { opacity: globalOpacity }]}>
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
					{question}
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
					<TouchableScale style={{ flex: 1 }} onPress={() => startQuestion()}>
						<AnwserOption text={answer1} color="#B22D2D" icon="square" />
					</TouchableScale>
					<TouchableScale style={{ flex: 1 }} onPress={() => nextQuestion()}>
						<AnwserOption text={answer2} color="#5240C0" icon="triangle" />
					</TouchableScale>
				</View>
				<View style={[styles.optionsContainer]}>
					<TouchableScale style={{ flex: 1 }} onPress={() => gameEnd()}>
						<AnwserOption text={answer3} color="#FEC601" icon="star" />
					</TouchableScale>
					<TouchableScale style={{ flex: 1 }}>
						<AnwserOption text={answer4} color="#48A646" icon="circle" />
					</TouchableScale>
				</View>
			</View>
		</Animated.View>
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
