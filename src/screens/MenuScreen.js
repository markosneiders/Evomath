import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function MenuScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>MenuScreen</Text>
			<Button title="Play" onPress={() => navigation.navigate("GameScreen")} />
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
