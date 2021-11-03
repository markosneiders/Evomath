import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const AnwserOption = (props) => {
	return (
		<View style={[styles.option, { backgroundColor: props.color }]}>
			<View
				style={{ position: "absolute", alignSelf: "flex-start", margin: 15 }}
			>
				<MaterialCommunityIcons name={props.icon} size={35} color="white" />
			</View>

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
		flexDirection: "row",

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
