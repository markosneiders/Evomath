import React, { useState } from "react";
import { Button, View, StyleSheet, Text, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import { firebase } from "../../firebase";
import TouchableScale from "react-native-touchable-scale";
import { useSelector, useDispatch } from "react-redux";
import { setgames, sethighscore, setimage } from "../../Redux/reducer";
function ProfileCard(props) {
	const dispatch = useDispatch(); //Redux thing to so we can set values
	const [pic, setPic] = useState(useSelector((state) => state.image));
	const highscore = useSelector((state) => state.highscore); //Highscore from redux
	const games = useSelector((state) => state.games); //Games played from redux

	const handleSignout = async () => {
		dispatch(setimage(".//"));
		dispatch(sethighscore(0));
		dispatch(setgames(0));
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
			setPic({ localUri: result.uri });
			dispatch(setimage({ localUri: result.uri }));
		}
	};

	return (
		<View style={styles.root}>
			<View style={styles.pictureView}>
				<TouchableScale onPress={() => pickImage()}>
					{pic == ".//" ? (
						<MaterialCommunityIcons
							name={"account"}
							size={120}
							color={"#fff"}
						/>
					) : null}
					{pic == ".//" ? (
						<Text style={styles.pictureText}>Edit</Text>
					) : (
						<Image
							source={{ uri: pic.localUri }}
							style={{
								width: 160,
								height: 160,
								borderRadius: 100,
							}}
						/>
					)}
				</TouchableScale>
			</View>
			<View style={styles.mainView}>
				<View style={[styles.header, { alignItems: "center", height: 65 }]}>
					<Text style={[styles.text, { color: "#B22D2D", fontSize: 50 }]}>
						{props.username}
					</Text>
				</View>
				<View style={styles.header}>
					<Text style={[styles.text, { color: "#48A646" }]}>Highscore:</Text>
					<Text style={styles.text}>{highscore}</Text>
				</View>
				<View style={styles.header}>
					<Text style={[styles.text, { color: "#48A646" }]}>Games played:</Text>
					<Text style={styles.text}>{games}</Text>
				</View>
			</View>
			<Button title="Sign out" onPress={() => handleSignout()} />
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
		flex: 0.9,
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
		height: 80,
	},
});
export default ProfileCard;
