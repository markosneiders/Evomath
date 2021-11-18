import React from "react";
import { View, Animated, StyleSheet, Alert } from "react-native";
import CircleButton from "../components/CircleButton/CircleButton";
function ModeScreen({ navigation }) {
	const transBack = () => {
		//when returning to this screen
		navigation.goBack();
	};
	return (
		<Animated.View style={{ flex: 1, overflow: "hidden" }}>
			<View style={styles.optionContainer}>
				<View style={{ top: "15%", right: "-35%" }}>
					<CircleButton
						Icon={"arrow-up"}
						IconSize={40}
						TextSize={50}
						Color={"#AA6373"}
						Size={70}
						Action={() => transBack()}
						Bobble={false}
					/>
				</View>
				<View style={{ top: "20%", right: "19%" }}>
					<CircleButton
						Text={"Infinite"}
						TextSize={50}
						Color={"#FEC601"}
						Size={220}
						Action={() => navigation.navigate("GameScreen")}
					/>
				</View>
				<View style={{ top: "15%", right: "-19%" }}>
					<CircleButton
						Text={"Practice"}
						TextSize={50}
						Color={"#48A646"}
						Size={220}
						Action={() =>
							Alert.alert("Coming soon!", "Practice mode is coming soon.")
						}
					/>
				</View>
				<View style={{ top: "10%", right: "19%" }}>
					<CircleButton
						Text={"Compe\ntitive"}
						TextSize={50}
						Color={"#5240C0"}
						Size={220}
						Action={() =>
							Alert.alert("Coming soon!", "Competitive mode is coming soon.")
						}
					/>
				</View>
				<View style={{ top: "0%", right: "-23%" }}>
					<CircleButton
						Text={"1v1"}
						TextSize={50}
						Color={"#B22D2D"}
						Size={180}
						Action={() =>
							Alert.alert("Coming soon!", "1v1 mode is coming soon.")
						}
					/>
				</View>
			</View>
		</Animated.View>
	);
}
const styles = StyleSheet.create({
	optionContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
export default ModeScreen;
