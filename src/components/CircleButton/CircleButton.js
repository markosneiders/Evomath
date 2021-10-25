import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { Icon } from "react-native-vector-icons/MaterialIcons";
function CircleButton(props) {
  // const windowWidth = Dimensions.get("window").width;
  // const windowHeight = Dimensions.get("window").height;
  return (
    <View
      style={[
        styles.button,
        {
          backgroundColor: props.Color,
          height: props.Size,
          width: props.Size,
          right: props.Size / -2,
          top: props.Size / -2,
        },
      ]}
    >
      <Text style={styles.buttonText}>{props.Text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 23,
  },
});

export default CircleButton;
