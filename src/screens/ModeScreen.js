import React, { useRef, useEffect } from "react";
import { View, Animated, StyleSheet, Easing } from "react-native";
import TouchableScale from "react-native-touchable-scale";

import Background from "../components/Background/Background"; //self made component imports
import CircleButton from "../components/CircleButton/CircleButton";
function ModeScreen({ navigation }) {
	const vmove = useRef(new Animated.Value(1)).current;
	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			//when screen is focused
			transReturn(Easing.out(Easing.ease));
		});

		return unsubscribe;
	}, [navigation]);
	const transReturn = (easing) => {
		//when returning to this screen
		Animated.timing(vmove, {
			toValue: 0,
			duration: 1000,
			useNativeDriver: false,
			easing,
		}).start();
	};
	const transBack = () => {
		//when returning to this screen
		Animated.timing(vmove, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: false,
		}).start(() => navigation.goBack());
	};
	const verticalMove = vmove.interpolate({
		inputRange: [-1, 0, 1],
		outputRange: ["-100%", "0%", "100%"],
	});
	return (
		<Animated.View style={{ flex: 1, overflow: "hidden", top: verticalMove }}>
			<Background />
			<View style={styles.optionContainer}>
				<View style={{ top: "15%", right: "-35%" }}>
					<CircleButton
						Icon={"arrow-up"}
						IconSize={40}
						TextSize={50}
						Color={"#AA6373"}
						Size={70}
						Action={() => transBack(Easing.out(Easing.ease))}
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
						Text={"Casual"}
						TextSize={50}
						Color={"#48A646"}
						Size={220}
					/>
				</View>
				<View style={{ top: "10%", right: "19%" }}>
					<CircleButton
						Text={"Compe\ntitive"}
						TextSize={50}
						Color={"#5240C0"}
						Size={220}
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
