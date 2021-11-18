import React, { useRef, useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Animated,
	Easing,
	TouchableOpacity,
} from "react-native";
import AnwserOption from "../components/AnswerOption/AnwserOption";
import TouchableScale from "react-native-touchable-scale";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//Generator import
import {
	genAddition,
	genSubtraction,
	genMultiplication,
	genDivision,
} from "../EquationGenerator";

import { settutorial, setscore } from "../Redux/reducer";
import { useSelector, useDispatch } from "react-redux"; //Redux stuff
import TutorialModal from "../components/TutorialModal/TutorialModal";

function GameScreen({ navigation }) {
	const dispatch = useDispatch(); //Redux thing to so we can set values
	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			//triggers when screen gets focused
			onFocus();
		});

		return unsubscribe;
	}, [navigation]);

	const pgv = useRef(new Animated.Value(0)).current; //Animated value for progress bar
	const op = useRef(new Animated.Value(0)).current;
	const op1 = useRef(new Animated.Value(1)).current;
	const op2 = useRef(new Animated.Value(1)).current;
	const op3 = useRef(new Animated.Value(1)).current;
	const op4 = useRef(new Animated.Value(1)).current;

	const [question, setQuestion] = useState(); //Question and respective answers
	const [answer1, setAnswer1] = useState();
	const [answer2, setAnswer2] = useState();
	const [answer3, setAnswer3] = useState();
	const [answer4, setAnswer4] = useState();
	const [countdown, setCountdown] = useState();
	const [correctButton, setCorrectButton] = useState();

	const [score, setScore] = useState(0); //Scores
	const highscore = useSelector((state) => state.highscore); //Highscore from redux

	const [resetTime, setResetTime] = useState(500);
	const [questionTime, setQuestionTime] = useState(5000);
	const [gameState, setGameState] = useState(false); //Value for game state used for determening if buttons should be pressable

	const generated = generation();

	const [modal, setModal] = useState(useSelector((state) => state.tutorial)); //Tutorial stuff

	function generation() {
		const addition = genAddition([1000, 1]);
		const subtraction = genSubtraction([1000, 1]);
		const multiplication = genMultiplication([1000, 1]);
		const division = genDivision([1000, 1]);
		const choice = {
			1: addition,
			2: subtraction,
			3: multiplication,
			4: division,
		};
		return choice[Math.floor(Math.random() * 4 + 1)];
	}

	const startQuestion = () => {
		//starts the timer and if it finishes ends the game
		setCountdown();
		setGameState(true);
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
		// triggers when the correct answer is selected
		setGameState(false);
		setScore(score + 500 + 500 * pgv.__getValue()); //Increases score based on time to answer
		Animated.timing(pgv, {
			toValue: 1,
			duration: resetTime, //time for bar reset
			useNativeDriver: false,
		}).start(() => [textUpdate(), startQuestion()]);
	};
	function textUpdate() {
		//Generates question and answer
		// Changes question and answers on new question
		setQuestion(generated[0]);

		setAnswer1(generated[1]);

		setAnswer2(generated[2]);

		setAnswer3(generated[3]);

		setAnswer4(generated[4]);

		setCorrectButton(generated[5]); //Set the correct button here. When the player presses a button it will compare if the button index is equal to this state.
	}
	const checkAnswer = (buttonIndex) => {
		//Checks if the pressed button index is equal to the correct buutton index. If it is then it procceds to the next question, if not then it's game over.
		if (gameState == true) {
			//Checks if gameState is true which means button input is allowed
			if (buttonIndex == correctButton) {
				nextQuestion();
			} else {
				op1.setValue(0.5);
				op2.setValue(0.5);
				op3.setValue(0.5);
				op4.setValue(0.5);
				eval("op" + correctButton + ".setValue(1)");
				gameEnd();
			}
		}
	};
	const gameEnd = async () => {
		//gets run when the game ends
		pgv.setValue(2); //Sets progess bar value to 2 which makes it go over the scren which you cant notice but importantly 2 is equal to red so you get a full red bar easily
		setTimeout(
			() =>
				Animated.timing(op, {
					//fade out
					toValue: 0,
					duration: 1000,
					useNativeDriver: false,
					easing: Easing.linear,
				}).start(() => navigation.navigate("GameOverScreen", { score: score })),
			2000
		);
	};

	const startup = () => {
		//triggered once when game gets started
		if (modal == false) {
			setCountdown(3);

			setTimeout(() => setCountdown(2), 1000);
			setTimeout(() => setCountdown(1), 2000);
			setTimeout(() => setCountdown(0), 3000);
			setTimeout(() => setCountdown("Go!"), 4000);
			Animated.timing(pgv, {
				toValue: 1,
				duration: 4000,
				useNativeDriver: false,
				easing: Easing.linear,
			}).start(() => [nextQuestion(), setScore(0)]);
		}
	};
	const startupt = () => {
		//triggered once when game gets started from tutorial
		dispatch(settutorial(false));
		setCountdown(3);

		setTimeout(() => setCountdown(2), 1000);
		setTimeout(() => setCountdown(1), 2000);
		setTimeout(() => setCountdown(0), 3000);
		setTimeout(() => setCountdown("Go!"), 4000);
		Animated.timing(pgv, {
			toValue: 1,
			duration: 4000,
			useNativeDriver: false,
			easing: Easing.linear,
		}).start(() => [nextQuestion(), setScore(0)]);
	};
	const onFocus = () => {
		// triggers when screen comes into focus
		pgv.setValue(0);
		setQuestion();
		setAnswer1();
		setAnswer2();
		setAnswer3();
		setAnswer4();
		setCountdown();
		setScore(0);
		op1.setValue(1);
		op2.setValue(1);
		op3.setValue(1);
		op4.setValue(1);
		setTimeout(
			//delay
			() =>
				Animated.timing(op, {
					//animation for fade in
					toValue: 1,
					duration: 1000, //time for bar intializing on screen open
					useNativeDriver: false,
					easing: Easing.linear,
				}).start(() => startup()),
			900 //delay time
		);
	};
	const pgw = pgv.interpolate({
		inputRange: [0, 1],
		outputRange: ["0%", "100%"],
	});
	const pgc = pgv.interpolate({
		//Interpolates the progress bar progress to a color
		inputRange: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.5, 1, 2],
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
			"red",
		],
	});
	return (
		<Animated.View style={[styles.root, { opacity: op }]}>
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
							{Math.floor(score)}
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
							{highscore}
						</Text>
					</View>
				</View>
			</View>
			<View style={{ flex: 267 * 2, marginBottom: 20 }}>
				<View style={styles.optionsContainer}>
					<Animated.View style={{ width: "50%", height: "100%", opacity: op1 }}>
						<TouchableScale style={{ flex: 1 }} onPress={() => checkAnswer(1)}>
							<AnwserOption text={answer1} color="#B22D2D" icon="square" />
						</TouchableScale>
					</Animated.View>
					<Animated.View style={{ width: "50%", height: "100%", opacity: op2 }}>
						<TouchableScale style={{ flex: 1 }} onPress={() => checkAnswer(2)}>
							<AnwserOption text={answer2} color="#5240C0" icon="triangle" />
						</TouchableScale>
					</Animated.View>
				</View>
				<View style={[styles.optionsContainer]}>
					<Animated.View style={{ width: "50%", height: "100%", opacity: op3 }}>
						<TouchableScale style={{ flex: 1 }} onPress={() => checkAnswer(3)}>
							<AnwserOption text={answer3} color="#FEC601" icon="star" />
						</TouchableScale>
					</Animated.View>
					<Animated.View style={{ width: "50%", height: "100%", opacity: op4 }}>
						<TouchableScale style={{ flex: 1 }} onPress={() => checkAnswer(4)}>
							<AnwserOption text={answer4} color="#48A646" icon="circle" />
						</TouchableScale>
					</Animated.View>
				</View>
			</View>
			<View style={{ position: "absolute" }}>
				<Text
					style={{
						fontSize: 200,
						fontWeight: "700",
						shadowColor: "#000",
						shadowOffset: {
							width: 5,
							height: 5,
						},
						shadowOpacity: 0.25,
						shadowRadius: 3.84,
						opacity: 1,
						color: "white",
					}}
				>
					{countdown}
				</Text>
			</View>
			<TutorialModal modal={modal} setModal={setModal} press={startupt} />
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
