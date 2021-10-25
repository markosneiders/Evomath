import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AnwserOption = (props) => {
  return (
    <View>
      <View style={styles.option}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "700",
          }}
        >
          {props.text}
        </Text>
      </View>
    </View>
  );
};

export default AnwserOption;

const styles = StyleSheet.create({
  option: {
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "15%",
    paddingRight: "15%",
    paddingBottom: "20%",
    paddingTop: "20%",
    borderRadius: 25,
    borderTopWidth: 1,
  },
});
