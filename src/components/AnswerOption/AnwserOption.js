import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AnwserOption = (props) => {
	return (
		<View style={[styles.option, { backgroundColor: props.color }]}>
			<Text
				style={{
					fontSize: 60,
					fontWeight: "700",
					color: "#fff",
				}}
			>
				{props.text}
			</Text>
		</View>
	);
};

export default AnwserOption;

const styles = StyleSheet.create({
	option: {
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 25,
		flex: 1,
		margin: 10,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 7,
		},
		shadowOpacity: 0.43,
		shadowRadius: 2,

		elevation: 15,
	},
});
