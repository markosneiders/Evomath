import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {
  genAddition,
  genSubtraction,
  genMultiplication,
  genDivision,
} from "../EquationGenerator";

function EndijaTestesana() {
  const [problem, setProblem] = useState();
  return (
    <View style={styles.root}>
      <Button
        title="Gen +"
        onPress={() => setProblem(genAddition([1000, 1]))}
      ></Button>
      <Button
        title="Gen -"
        onPress={() => setProblem(genSubtraction([1000, 1]))}
      ></Button>
      <Button
        title="Gen *"
        onPress={() => setProblem(genMultiplication([1000, 1]))}
      ></Button>
      <Button
        title="Gen /"
        onPress={() => setProblem(genDivision([1000, 1]))}
      ></Button>
      <Text>{problem}</Text>
      <Text>--------Anwsers-------</Text>
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
