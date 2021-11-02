import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CircleButton from "../components/CircleButton/CircleButton";
function GameOverScreen({ navigation }) {
	return (
		<View style={styles.root}>
			<View style={styles.textContainer}>
				<Text style={[styles.text, { color: "#B22D2D" }]}>Game </Text>
				<Text style={[styles.text, { color: "#5240C0" }]}>Over</Text>
			</View>
			<View style={styles.messageContainer}>
				<Text style={styles.message}>Better luck next time!</Text>
			</View>
			<View style={styles.buttonContainer}>
				<View style={{ top: "50%", right: "-25%" }}>
					<CircleButton
						Text={"Score: 6375"}
						TextSize={45}
						Color={"#FEC601"}
						Size={170}
					/>
				</View>
				<View style={{ top: "36%", right: "20%" }}>
					<CircleButton
						Text={"Total: 30,2s \n Avg: 2,54s \n Max: 7,23s \n Min: 0,7s"}
						TextSize={27}
						Color={"#5240C0"}
						Size={200}
					/>
				</View>
				<View style={{ top: "23%", right: "-23%" }}>
					<CircleButton
						Text={"Right answers: \n 8/20 \n  40%"}
						TextSize={30}
						Color={"#48A646"}
						Size={180}
					/>
				</View>
				<View style={{ top: "13%", right: "24%" }}>
					<CircleButton
						Text={"Wrong answers: \n 12/20 \n 60%"}
						TextSize={30}
						Color={"#B22D2D"}
						Size={180}
					/>
				</View>
				<View style={{ top: "-17%", right: "-35%" }}>
					<CircleButton
						Icon={"format-list-bulleted-square"}
						IconSize={45}
						Color={"#FEC601"}
						Size={70}
						Action={() => navigation.navigate("ModeScreen")}
						Bobble={false}
					/>
				</View>
				<View style={{ top: "-26.5%", right: "-13%" }}>
					<CircleButton
						Icon={"restore"}
						IconSize={50}
						Color={"#AA6373"}
						Size={70}
						Action={() => navigation.navigate("GameScreen")}
						Bobble={false}
					/>
				</View>
				<View style={{ top: "-27%", right: "-25.5%" }}>
					<CircleButton
						Icon={"close"}
						IconSize={50}
						Color={"#B22D2D"}
						Size={70}
						Action={() => navigation.navigate("MenuScreen")}
						Bobble={false}
					/>
				</View>
			</View>
		</View>
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
