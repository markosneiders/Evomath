import React from "react";
import { StyleSheet, View, Image } from "react-native";
import SignupForm from "../components/SignupForm/SignupForm";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={{ height: 100, width: 300, resizeMode: "contain" }}
          source={require("../assets/photos/evomathlogo.png")}
        />
      </View>
      <SignupForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },

  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});

export default SignupScreen;
