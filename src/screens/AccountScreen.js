import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { firebase } from "../firebase";

import ProfileCard from "../components/ProfileCard/ProfileCard";
import CircleButton from "../components/CircleButton/CircleButton";
function AccountScreen({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<ProfileCard username={firebase.auth().currentUser.displayName} />
			<View style={{ top: "10%", right: "80%", position: "absolute" }}>
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
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginHorizontal: 20,
	},
});

export default AccountScreen;
