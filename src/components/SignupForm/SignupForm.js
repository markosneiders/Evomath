import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { firebase, db } from "../../firebase";
import TextIn from "../TextInput/TextIn";
const SignupForm = ({ navigation }) => {
  const SignupFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    username: Yup.string().required().min(2, "A username is required"),
    password: Yup.string()
      .required()
      .min(6, "Your password must contain at least 6 characters"),
  });

  // const getRandomProfilePicture = async () => {
  //   const response = await fetch("https://randomuser.me/api");
  //   const data = await response.json();
  //   return data.results[0].picture.large;
  // };

  const onSignup = async (email, password, username) => {
    try {
      const authUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      db.collection("users").doc(authUser.user.email).set({
        owner_uid: authUser.user.uid,
        username: username,
        email: authUser.user.email,
        profile_picture:
          "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg",
        highscore: 0,
        isFirstTimeLoggedIn: true,
      });

      authUser.user.updateProfile({
        displayName: username,
      });
      // console.log("User created successfully", email, password);
    } catch (error) {
      Alert.alert("Oops...", error.message);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={(values) => {
          onSignup(values.email, values.password, values.username);
        }}
        validationSchema={SignupFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <TextIn
              title="Username"
              color="#48A646"
              text={values.username}
              setText={handleChange("username")}
              secure={false}
            />
            <TextIn
              title="E-mail"
              color="#5240C0"
              text={values.email}
              setText={handleChange("email")}
              keyboardType={"email-address"}
              secure={false}
              caps={"none"}
              borderColor={
                values.email.length < 1 || Validator.validate(values.email)
                  ? "gray"
                  : "red"
              }
            />

            <TextIn
              title="Password"
              color="#B22D2D"
              text={values.password}
              setText={handleChange("password")}
              keyboardType={"email-address"}
              secure={true}
              borderColor={
                1 > values.password.length || values.password.length >= 6
                  ? "gray"
                  : "red"
              }
            />
            <View style={styles.buttonContainer}>
              <Pressable
                titleSize={20}
                style={styles.button(isValid)}
                onPress={handleSubmit}
                disabled={!isValid}
              >
                <Text style={styles.buttonText}>Create Account</Text>
              </Pressable>
              <View style={{ paddingVertical: 10 }}>
                <Text style={{ color: "gray" }}>-Or-</Text>
              </View>
              <TouchableOpacity
                style={[styles.button(true), { backgroundColor: "#B22D2D" }]}
                onPress={() => navigation.push("SignupScreen")}
              >
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },

  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "rgba(72,166,70,1)" : "rgba(72,166,70,0.5)",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 20,
    width: "100%",
  }),
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 50,
  },
});

export default SignupForm;
