import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AnwserOption from "../components/AnwserOption";

function GameScreen() {
  return (
    <View style={styles.root}>
      <View style={styles.questionContainer}>
        <Text
          style={{
            fontSize: 50,
            fontWeight: "700",
          }}
        >
          2 + 2
        </Text>
      </View>
      <View style={styles.scoresContainer}>
        <View style={styles.score}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            12
          </Text>
        </View>
        <View style={styles.score}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            6
          </Text>
        </View>
        <View style={styles.score}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            4
          </Text>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        {/* <AnwserOption text="2" />
        <AnwserOption text="2" />
        <AnwserOption text="2" />
        <AnwserOption text="2" /> */}
        <View style={styles.option}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: "700",
            }}
          >
            9
          </Text>
        </View>
        <View style={styles.option}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: "700",
            }}
          >
            3
          </Text>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <View style={styles.option}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: "700",
            }}
          >
            7
          </Text>
        </View>
        <View style={styles.option}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: "700",
            }}
          >
            4
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  questionContainer: {
    flex: 216,
    width: "100%",
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },
  scoresContainer: {
    flex: 61,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  score: {
    flex: 1,
    height: "100%",
    backgroundColor: "#E5E5E5",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderBottomWidth: 2,
    borderTopWidth: 2,
  },
  optionsContainer: {
    flex: 267,
    width: "100%",
    backgroundColor: "#f2f2f2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  option: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "15%",
    paddingRight: "15%",
    paddingBottom: "20%",
    paddingTop: "20%",
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: "#5240C0",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});

export default GameScreen;
