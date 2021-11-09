import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
function TextIn(props) {
	return (
		<View style={styles.mainView}>
			<View style={styles.header}>
				<Text style={[styles.headerText, { color: props.color }]}>
					{props.title}
				</Text>
			</View>
			<View style={styles.body}>
				<TextInput placeholder={props.title} style={styles.bodyText} />
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	mainView: {
		borderWidth: 2,
		borderRadius: 20,
		borderColor: "gray",
		width: "85%",
		marginVertical: 5,
	},
	headerText: {
		fontSize: 25,
		fontWeight: "800",
	},
	header: {
		alignItems: "flex-start",
		justifyContent: "center",
		borderBottomWidth: 2,
		borderColor: "lightgray",
		paddingHorizontal: 15,
		height: 30,
	},
	body: {
		height: 40,
		paddingHorizontal: 15,
		justifyContent: "center",
	},
	bodyText: {
		fontSize: 35,
		color: "black",
	},
});
export default TextIn;
