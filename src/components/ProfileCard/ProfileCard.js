import React, { useState } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import { firebase } from "../../firebase";

function ProfileCard(props) {
  const [pic, setPic] = useState(".//");

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
    <View style={styles.root}>
      <View style={styles.pictureView}>
        <MaterialCommunityIcons name={"account"} size={120} color={"#fff"} />
        <Text style={styles.pictureText}>Edit</Text>
      </View>
      <View style={styles.mainView}>
        <View style={styles.header}>
          <Text style={styles.text}>{props.username}</Text>
        </View>
        <Button title="Sign out" onPress={() => handleSignout()} />
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
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "lightgray",
    paddingHorizontal: 15,
    height: 40,
  },
});
export default ProfileCard;
