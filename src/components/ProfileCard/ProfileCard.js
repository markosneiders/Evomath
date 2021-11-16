import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
function ProfileCard(props) {
	return (
		<View style={styles.root}>
			<View style={styles.pictureView}>
				<MaterialCommunityIcons name={"account"} size={120} color={"#fff"} />
				<Text style={styles.pictureText}>Edit</Text>
			</View>
			<View style={styles.mainView}>
				<View style={styles.header}>
					<Text style={styles.text}>Username</Text>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	root: {
		alignItems: "center",
		width: "100%",
		flex: 1,
	},
	pictureView: {
		backgroundColor: "#B22D2D",
		borderRadius: 1000,
		width: 200,
		height: 200,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 10,
	},
	pictureText: {
		color: "white",
		fontWeight: "700",
		fontSize: 23,
		textAlign: "center",
	},
	mainView: {
		borderWidth: 2,
		borderRadius: 20,
		borderColor: "gray",
		flex: 1,
		width: "85%",
	},
	text: {
		color: "#5240C0",
		fontSize: 30,
		fontWeight: "700",
	},
	header: {
		alignItems: "flex-start",
		borderBottomWidth: 2,
		borderColor: "lightgray",
		paddingHorizontal: 15,
		height: 40,
	},
});
export default ProfileCard;
