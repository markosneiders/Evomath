import React from "react";
import { StyleSheet, View, Image } from "react-native";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={{ height: 100, width: 300, resizeMode: "contain" }}
          source={require("../assets/photos/evomathpng.png")}
        />
      </View>
      <LoginForm navigation={navigation} />
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

export default LoginScreen;
