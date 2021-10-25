import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import CircleButton from "../components/CircleButton/CircleButton";

//import { Dimensions } from "react-native";

function MenuScreen({ navigation }) {
  // const windowWidth = Dimensions.get("window").width;
  // const windowHeight = Dimensions.get("window").height;
  return (
    <View style={styles.root}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../assets/photos/evomathpng.png")}
          style={{
            resizeMode: "cover",
            height: "100%",
            width: "100%",
            transform: [{ rotate: "10deg" }],
            flex: 1,
            top: "20%",
          }}
        />
      </View>
      <View style={styles.optionContainer}>
        <View style={{ top: "-30%", right: "20%" }}>
          <TouchableOpacity onPress={() => navigation.navigate("GameScreen")}>
            <CircleButton Text={"Quick Play"} Color={"#5240C0"} Size={220} />
          </TouchableOpacity>
        </View>
        <View style={{ top: "-5%", right: "-20%" }}>
          <CircleButton Text={"Modes"} Color={"#FEC601"} Size={200} />
        </View>
        <View style={{ top: "15%", right: "20%" }}>
          <CircleButton Text={"Leaderboards"} Color={"#48A646"} Size={180} />
        </View>
        <View style={{ top: "25%", right: "-28%" }}>
          <CircleButton Text={"A"} Color={"#B22D2D"} Size={100} />
        </View>
        <View style={{ top: "37%", right: "-0%" }}>
          <CircleButton Text={"S"} Color={"#AA6373"} Size={100} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  optionContainer: {
    flex: 3.5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MenuScreen;
