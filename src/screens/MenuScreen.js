import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/photos/evomathpng.png")}
        style={{
          resizeMode: "contain",
          height: "70%",
          width: "80%",
          transform: [{ rotate: "10deg" }],
          marginBottom: "-55%",
          marginTop: "-50%",
        }}
      />
      <View style={styles.optionContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("GameScreen")}>
          <View style={styles.quickPlay}>
            <Text style={styles.buttonText}>Quick Play</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.modes}>
          <Text style={styles.buttonText}>Modes</Text>
        </View>
        <View style={styles.leaderboards}>
          <Text style={styles.buttonText}>Leaderboards</Text>
        </View>
        <View style={styles.buttonA}>
          <Text style={styles.buttonText}>A</Text>
        </View>
        <View style={styles.buttonS}>
          <Text style={styles.buttonText}>S</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  optionContainer: {
    width: "90%",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 23,
  },
  quickPlay: {
    backgroundColor: "#5240C0",
    resizeMode: "contain",
    height: 200,
    width: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    alignSelf: "flex-start",
    marginLeft: "2%",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  modes: {
    backgroundColor: "#FEC601",
    resizeMode: "contain",
    height: 190,
    width: 190,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    position: "relative",
    marginTop: "-10%",
    marginRight: "5%",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  leaderboards: {
    backgroundColor: "#48A646",
    resizeMode: "contain",
    height: 166,
    width: 166,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    position: "relative",
    marginLeft: "5%",
    marginTop: "-15%",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  buttonA: {
    backgroundColor: "#B22D2D",
    height: 124,
    resizeMode: "contain",
    width: 124,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    position: "relative",
    marginTop: "-20%",
    marginRight: "10%",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  buttonS: {
    backgroundColor: "#AA6373",
    height: 108,
    width: 108,
    resizeMode: "contain",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: "-10%",
    marginLeft: "30%",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
});

export default MenuScreen;
