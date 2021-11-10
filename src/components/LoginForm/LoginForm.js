import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Pressable,
	TouchableOpacity,
	Alert,
} from "react-native";
import { firebase } from "../../firebase";

import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

import TextIn from "../TextInput/TextIn"; //Self made text input component

const LoginForm = ({ navigation }) => {
	const LoginFormSchema = Yup.object().shape({
		email: Yup.string().email().required("An email is required"),
		password: Yup.string()
			.required()
			.min(6, "Your password must contain at least 6 characters"),
	});

	const onLogin = async (email, password) => {
		try {
			await firebase.auth().signInWithEmailAndPassword(email, password);
			// console.log("login successful:", email, password);
		} catch (error) {
			Alert.alert(
				"Oops...",
				error.message + "\n\n Would you like to create an account?",
				[
					{
						text: "cancel",
						onPress: () => console.log("cancel"),
						style: "cancel",
					},
					{
						text: "Sign Up",
						onPress: () => navigation.push("SignupScreen"),
					},
				]
			);
		}
	};

	return (
		<View style={styles.wrapper}>
			<Formik
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => {
					onLogin(values.email, values.password);
				}}
				validationSchema={LoginFormSchema}
				validateOnMount={true}
			>
				{({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
					<>
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

						<View style={{ alignItems: "flex-end", marginBottom: 30 }}>
							<Text style={{ color: "#6BB0F5" }}>Forgot password?</Text>
						</View>
						<View style={styles.buttonContainer}>
							<Pressable
								titleSize={20}
								style={styles.button(isValid)}
								onPress={handleSubmit}
								disabled={!isValid}
							>
								<Text style={styles.buttonText}>Log In</Text>
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
		marginTop: 30,
	},
});

export default LoginForm;
