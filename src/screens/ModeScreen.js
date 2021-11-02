import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TouchableScale from "react-native-touchable-scale";

import Background from "../components/Background/Background"; //self made component imports
import CircleButton from "../components/CircleButton/CircleButton";
function ModeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, overflow: "hidden" }}>
			<Background />
			<View style={styles.optionContainer}>
				<View style={{ top: "15%", right: "-35%" }}>
					<CircleButton
						Icon={"arrow-left"}
						IconSize={40}
						TextSize={50}
						Color={"#AA6373"}
						Size={70}
						Action={() => navigation.goBack()}
						Bobble={false}
					/>
				</View>
				<View style={{ top: "20%", right: "19%" }}>
					<CircleButton
						Text={"Infinite"}
						TextSize={50}
						Color={"#FEC601"}
						Size={220}
					/>
				</View>
				<View style={{ top: "15%", right: "-19%" }}>
					<CircleButton
						Text={"Casual"}
						TextSize={50}
						Color={"#48A646"}
						Size={220}
					/>
				</View>
				<View style={{ top: "10%", right: "19%" }}>
					<CircleButton
						Text={"Compe\ntitive"}
						TextSize={50}
						Color={"#5240C0"}
						Size={220}
					/>
				</View>
				<View style={{ top: "0%", right: "-23%" }}>
					<CircleButton
						Text={"1v1"}
						TextSize={50}
						Color={"#B22D2D"}
						Size={180}
					/>
				</View>
			</View>
		</View>
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
