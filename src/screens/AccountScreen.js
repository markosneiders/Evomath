import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	SafeAreaView,
	Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { firebase, db } from "../firebase";

import CircleButton from "../components/CircleButton/CircleButton";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import TextIn from "../components/TextInput/TextIn";

function AccountScreen({ navigation }) {
	const [pic, setpic] = useState(".//");
	const [test, setTest] = useState("Walter Fitzroy");
	// const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);

	// const getUsername = () => {
	//   const user = firebase.auth().currentUser;
	//   const unsubscribe = db
	//     .collection("users")
	//     .where("owner_uid", "==", user.uid)
	//     .limit(1)
	//     .onSnapshot((snapshot) =>
	//       snapshot.docs.map((doc) => {
	//         setCurrentLoggedInUser({
	//           username: doc.data().username,
	//           profilePicture: doc.data().profile_picture,
	//         });
	//       })
	//     );
	//   return unsubscribe;
	// };

	// useEffect(() => {
	//   getUsername();
	// }, []);

	const handleSignout = async () => {
		try {
			await firebase.auth().signOut();
			console.log("Signed Out Successfully!");
		} catch (error) {
			console.log(error);
		}
	};

	const pickImage = async () => {
		//Requests permission for gallery
		if (Platform.OS !== "web") {
			const { status } =
				await ImagePicker.requestMediaLibraryPermissionsAsync();
			if (status !== "granted") {
				alert("Sorry, we need camera roll permissions to make this work!");
			}
		}
		//Opens image picker
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		if (!result.cancelled) {
			//If an image is chosen it assigns it to a temporary variable
			setpic({ localUri: result.uri });
		}
	};
	return (
		<SafeAreaView style={styles.container}>
			<TextIn
				title="E-mail"
				color="#5240C0"
				text={test}
				setText={setTest}
				keyboardType={"email-address"}
				secure={false}
			/>
			<TextIn title="Password" color="#B22D2D" />
			<Text>{test}</Text>
			<Button title="Sign out" onPress={() => handleSignout()} />
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
