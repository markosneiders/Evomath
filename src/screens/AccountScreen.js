import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import TouchableScale from "react-native-touchable-scale";
import * as ImagePicker from "expo-image-picker";
import CircleButton from "../components/CircleButton/CircleButton";
import Background from "../components/Background/Background";
function AccountScreen({ navigation }) {
	const [pic, setpic] = useState(".//");
	useEffect(() => {
		//Requests permision to use gallery
		(async () => {
			if (Platform.OS !== "web") {
				const { status } =
					await ImagePicker.requestMediaLibraryPermissionsAsync();
				if (status !== "granted") {
					alert("Sorry, we need camera roll permissions to make this work!");
				}
			}
		})();
	}, []);
	const pickImage = async () => {
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
		<View style={{ flex: 1, overflow: "hidden" }}>
			<Background />

			<View style={styles.container}>
				<View style={{ top: "-18%", right: "0%" }}>
					{pic.localUri != null ? (
						<CircleButton
							Image={pic.localUri}
							ImageWidth={150}
							ImageHeight={150}
							ImageBorder={100}
							Color={"#B22D2D"}
							Size={170}
							Action={() => pickImage()}
							Bobble={false}
						/>
					) : (
						<CircleButton
							Icon={"account"}
							IconSize={100}
							Text={"Edit"}
							TextSize={20}
							Color={"#B22D2D"}
							Size={170}
							Action={() => pickImage()}
							Bobble={false}
						/>
					)}
				</View>
				<View style={{ top: "-45%", right: "35%" }}>
					<CircleButton
						Icon={"arrow-left"}
						IconSize={40}
						Color={"#AA6373"}
						Size={70}
						Action={() => navigation.goBack()}
						Bobble={false}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default AccountScreen;
