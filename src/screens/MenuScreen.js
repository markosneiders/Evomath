import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MenuScreen(props) {
	return (
		<View style={styles.container}>
			<Text>MenuScreen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default MenuScreen;
