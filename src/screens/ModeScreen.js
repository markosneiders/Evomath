import React, { useRef, useEffect } from "react";
import { View, Animated, StyleSheet, Easing } from "react-native";
import TouchableScale from "react-native-touchable-scale";

import Background from "../components/Background/Background"; //self made component imports
import CircleButton from "../components/CircleButton/CircleButton";
function ModeScreen({ navigation }) {
  const transBack = () => {
    //when returning to this screen
    navigation.goBack();
  };
  return (
    <Animated.View style={{ flex: 1, overflow: "hidden" }}>
      <Background />
      <View style={styles.optionContainer}>
        <View style={{ top: "15%", right: "-35%" }}>
          <CircleButton
            Icon={"arrow-up"}
            IconSize={40}
            TextSize={50}
            Color={"#AA6373"}
            Size={70}
            Action={() => transBack()}
            Bobble={false}
          />
        </View>
        <View style={{ top: "20%", right: "19%" }}>
          <CircleButton
            Text={"Infinite"}
            TextSize={50}
            Color={"#FEC601"}
            Size={220}
          />
        </View>
        <View style={{ top: "15%", right: "-19%" }}>
          <CircleButton
            Text={"Practice"}
            TextSize={50}
            Color={"#48A646"}
            Size={220}
          />
        </View>
        <View style={{ top: "10%", right: "19%" }}>
          <CircleButton
            Text={"Endija\nTestesana"}
            TextSize={50}
            Color={"#5240C0"}
            Size={220}
            Action={() => navigation.navigate("EndijaTestesana")}
          />
        </View>
        <View style={{ top: "0%", right: "-23%" }}>
          <CircleButton
            Text={"1v1"}
            TextSize={50}
            Color={"#B22D2D"}
            Size={180}
          />
        </View>
      </View>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  optionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ModeScreen;
