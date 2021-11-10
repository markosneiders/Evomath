import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
function TextIn(props) {
	return (
		<View style={[styles.mainView, { borderColor: props.borderColor }]}>
			<View style={styles.header}>
				<Text style={[styles.headerText, { color: props.color }]}>
					{props.title}
				</Text>
			</View>
			<View style={styles.body}>
				<TextInput
					placeholder={props.title}
					value={props.text}
					onChangeText={props.setText}
					style={styles.bodyText}
					keyboardType={props.keyboardType}
					secureTextEntry={props.secure}
					autoCapitalize={props.caps}
				/>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	mainView: {
		borderWidth: 1.5,
		borderRadius: 20,
		borderColor: "gray",
		marginVertical: 5,
		width: "100%",
	},
	headerText: {
		fontSize: 25,
		fontWeight: "800",
	},
	header: {
		alignItems: "flex-start",
		justifyContent: "center",
		borderBottomWidth: 1,
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
		fontSize: 30,
		color: "black",
	},
});
export default TextIn;
