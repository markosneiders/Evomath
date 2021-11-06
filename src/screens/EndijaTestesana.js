import React, { useState } from "react";
import { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
function EndijaTestesana() {
  const global = {};
  const Anwsers = {};
  const addition = {};
  const subtraction = {};
  const multiplication = {};
  const division = {};
  const [problem, setProblem] = useState();
  const [anwser, setAnswer] = useState();
  const [anwser2, setAnswer2] = useState();
  const [anwser3, setAnswer3] = useState();
  const [anwser4, setAnswer4] = useState();
  const [anwser5, setAnswer5] = useState();

  const setup = () => {
    // global variables for player rank and correctStreak
    global.playerRank = 1000;
    global.correctStreak = 1;
    //generate max and min, sum and difference
    global.maxNum = Math.round(
      24 + (1 * global.correctStreak * global.playerRank) / 1000
    );
    global.minNum = 6 - 1 * global.correctStreak;
  };

  //generate Addition
  const genAddition = () => {
    addition.anwser = Math.floor(
      Math.random() * (global.maxNum - global.minNum + 1) + global.minNum
    );

    addition.b = Math.floor(Math.random() * addition.anwser);
    addition.a = addition.anwser - addition.b;
    addition.anwserA = Math.floor(
      Math.random() * (addition.anwser + 10 - addition.anwser + 1 + 1) +
        addition.anwser +
        1
    );
    addition.anwserB = Math.floor(
      Math.random() * (addition.anwser - 1 - addition.anwser - 10 + 1) +
        addition.anwser -
        10
    );
    addition.anwserD =
      Math.floor(
        Math.random() * (addition.anwser - 1 - addition.anwser - 2) +
          addition.anwser -
          2
      ) + 2;

    addition.anwserE = Math.floor(
      Math.random() * (addition.anwser + 2 - addition.anwser + 1) +
        addition.anwser +
        1
    );
    setProblem(addition.a + "+" + addition.b);
  };

  function randomNum(used, Anwser1, Anwser2, Anwser3, Anwser4, Anwser5) {
    newNum = Math.floor(Math.random() * 5 + 1);

    if ($.inArray(newNum, used) === -1) {
    }
  }

  //generate Subtraction
  function genSubtraction() {
    subtraction.anwser = Math.floor(
      Math.random() * (global.maxNum - global.minNum + 1) + global.minNum
    );
    subtraction.b = Math.floor(Math.random() * subtraction.anwser);
    subtraction.a = subtraction.anwser + subtraction.b;

    subtraction.anwserA = Math.floor(
      Math.random() * (subtraction.anwser + 10 - subtraction.anwser + 1 + 1) +
        subtraction.anwser +
        1
    );
    subtraction.anwserB = Math.floor(
      Math.random() * (subtraction.anwser - 1 - subtraction.anwser - 10 + 1) +
        subtraction.anwser -
        10
    );
    subtraction.anwserD =
      Math.floor(
        Math.random() * (subtraction.anwser - 1 - subtraction.anwser - 2) +
          subtraction.anwser -
          2
      ) + 2;

    subtraction.anwserE = Math.floor(
      Math.random() * (subtraction.anwser + 2 - subtraction.anwser + 1) +
        subtraction.anwser +
        1
    );
    setProblem(subtraction.a + "-" + subtraction.b);
  }

  //generate Multiplication
  function genMultiplication() {
    multiplication.a = Math.floor(Math.random() * (10 - 2)) + 2;
    multiplication.b = Math.floor(Math.random() * (10 - 2)) + 2;
    multiplication.anwser = multiplication.a * multiplication.b;
    multiplication.anwserA = Math.floor(
      Math.random() *
        (multiplication.anwser + 10 - multiplication.anwser + 1 + 1) +
        multiplication.anwser +
        1
    );
    multiplication.anwserB = Math.floor(
      Math.random() *
        (multiplication.anwser - 1 - multiplication.anwser - 10 + 1) +
        multiplication.anwser -
        10
    );
    multiplication.anwserD =
      Math.floor(
        Math.random() *
          (multiplication.anwser - 1 - multiplication.anwser - 2) +
          multiplication.anwser -
          2
      ) + 2;

    multiplication.anwserE = Math.floor(
      Math.random() * (multiplication.anwser + 2 - multiplication.anwser + 1) +
        multiplication.anwser +
        1
    );
    setProblem(multiplication.a + "*" + multiplication.b);
  }

  //generate Division
  function genDivision() {
    division.a = Math.floor(Math.random() * (10 - 2)) + 2;
    division.b = Math.floor(Math.random() * (10 - 2)) + 2;
    division.anwser = division.a * division.b;
    division.anwserA = Math.floor(
      Math.random() * (division.anwser + 10 - division.anwser + 1 + 1) +
        division.anwser +
        1
    );
    division.anwserB = Math.floor(
      Math.random() * (division.anwser - 1 - division.anwser - 10 + 1) +
        division.anwser -
        10
    );
    division.anwserD =
      Math.floor(
        Math.random() * (division.anwser - 1 - division.anwser - 2) +
          division.anwser -
          2
      ) + 2;

    division.anwserE = Math.floor(
      Math.random() * (division.anwser + 1 - division.anwser + 1) +
        division.anwser +
        1
    );
    setProblem(division.anwser + "/" + division.b);
  }

  setup();

  return (
    <View style={styles.root}>
      <Button title="Gen +" onPress={() => genAddition()}></Button>
      <Button title="Gen -" onPress={() => genSubtraction()}></Button>
      <Button title="Gen *" onPress={() => genMultiplication()}></Button>
      <Button title="Gen /" onPress={() => genDivision()}></Button>
      <Text>{problem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EndijaTestesana;
