import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TouchableScale from "react-native-touchable-scale";

import Background from "../components/Background/Background"; //self made component imports
import CircleButton from "../components/CircleButton/CircleButton";
function ModeScreen({ navigation }) {
	return (
		<View style={{ flex: 1 }}>
			<Background />
			<View style={styles.optionContainer}>
				<View style={{ top: "-38%", right: "-35%" }}>
					<TouchableScale onPress={() => navigation.goBack()}>
						<CircleButton
							Icon={"arrow-left"}
							IconSize={40}
							TextSize={50}
							Color={"#AA6373"}
							Size={70}
						/>
					</TouchableScale>
				</View>
				<View style={{ top: "-25%", right: "19%" }}>
					<TouchableScale>
						<CircleButton
							Text={"Infinite"}
							TextSize={50}
							Color={"#FEC601"}
							Size={220}
						/>
					</TouchableScale>
				</View>
				<View style={{ top: "-2%", right: "-19%" }}>
					<TouchableScale>
						<CircleButton
							Text={"Casual"}
							TextSize={50}
							Color={"#48A646"}
							Size={220}
						/>
					</TouchableScale>
				</View>
				<View style={{ top: "20%", right: "19%" }}>
					<TouchableScale>
						<CircleButton
							Text={"Quick Play"}
							TextSize={50}
							Color={"#5240C0"}
							Size={220}
						/>
					</TouchableScale>
				</View>
				<View style={{ top: "37%", right: "-23%" }}>
					<TouchableScale>
						<CircleButton
							Text={"1v1"}
							TextSize={50}
							Color={"#B22D2D"}
							Size={180}
						/>
					</TouchableScale>
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
