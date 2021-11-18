import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { firebase } from "../firebase";

import ProfileCard from "../components/ProfileCard/ProfileCard";

function AccountScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileCard username={firebase.auth().currentUser.displayName} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
});

export default AccountScreen;
