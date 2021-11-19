import React from "react";
import { Text, Modal, View, TouchableOpacity, Pressable } from "react-native";
function TutorialModal(props) {
	return (
		<Modal visible={props.modal} transparent={true}>
			<Pressable
				style={{ width: "100%", height: "100%" }}
				onPress={() => props.setModal(false, props.press())}
			>
				<View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
					<View
						style={{
							alignItems: "center",
							paddingTop: "20%",
							paddingHorizontal: "3%",
							backgroundColor: "white",
							flex: 1,
							marginVertical: "20%",
							marginHorizontal: "10%",
							borderRadius: 20,
						}}
					>
						<Text
							style={{
								fontSize: 40,
								textAlign: "center",
								fontWeight: "600",
								marginBottom: "10%",
							}}
						>
							<Text style={{ color: "#B22D2D" }}>Welcome</Text>
							<Text style={{ color: "#5240C0" }}> to</Text>
							<Text style={{ color: "#FEC601" }}> infinite</Text>
							<Text style={{ color: "#48A646" }}> mode!</Text>
						</Text>
						<Text
							style={{ fontSize: 30, textAlign: "center", marginBottom: "10%" }}
						>
							<Text style={{}}>You will be presented with a</Text>
							<Text style={{ color: "#B22D2D", fontWeight: "700" }}>
								{" "}
								question
							</Text>
							<Text style={{}}> and</Text>
							<Text style={{ color: "#5240C0", fontWeight: "700" }}> 4 </Text>
							<Text style={{}}> answers.</Text>
						</Text>
						<Text
							style={{ fontSize: 25, textAlign: "center", marginBottom: "10%" }}
						>
							<Text>You must select the</Text>
							<Text style={{ color: "#48A646", fontWeight: "700" }}>
								{" "}
								right
							</Text>
							<Text> answer in time to continue.</Text>
						</Text>

						<Text style={{ fontWeight: "700", marginBottom: "10%" }}>
							<Text style={{ color: "#B22D2D", textAlign: "center" }}>
								P.S If you run out of time, the points gained in the last
								question will be deducted.
							</Text>
						</Text>

						<Text
							style={{ fontSize: 40, fontWeight: "700", marginBottom: "10%" }}
						>
							<Text style={{ color: "#FEC601" }}>Good</Text>
							<Text style={{ color: "#48A646" }}> luck!</Text>
						</Text>
						<Text style={{ color: "gray" }}>Tap to continue</Text>
					</View>
				</View>
			</Pressable>
		</Modal>
	);
}

export default TutorialModal;
