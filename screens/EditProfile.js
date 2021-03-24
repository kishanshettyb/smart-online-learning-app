import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Typography, Colors } from "../styles";
import * as ImagePicker from "expo-image-picker";
import globalStyles from "../styles/globalStyles";
import GradientButton from "react-native-gradient-buttons";
import { HeadingWithButton } from "../components";
import { Container, Text, View, Item, Input } from "native-base";
import {
	StyleSheet,
	StatusBar,
	Image,
	Modal,
	Pressable,
	TouchableOpacity,
	Dimensions,
	Alert,
} from "react-native";

export function EditProfile() {
	const [name, setName] = React.useState("Jennifer Aniston");
	const [phone, setPhone] = React.useState("+91 9123456789");
	const [email, setEmail] = React.useState("jennifer@gmail.com");
	const [modalVisible, setModalVisible] = useState(false);
	const [imageUrl, setImageUrl] = useState("");

	let openImagePickerAsync = async () => {
		let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (permissionResult.granted === false) {
			alert("Permission to access camera roll is required!");
			return;
		}

		let pickerResult = await ImagePicker.launchImageLibraryAsync();
		setImageUrl(pickerResult.uri);
	};

	return (
		<Container>
			<HeadingWithButton
				transparent={false}
				title="Edit Profile"
				androidStatusBarColor={Colors.grayThin}
			/>
			<StatusBar
				barStyle={"dark-content"}
				backgroundColor={Colors.grayThin}
				translucent={false}
			/>

			{/* Start Modal */}
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<TouchableOpacity
							style={styles.innerView}
							onPress={openImagePickerAsync}
						>
							<Image
								style={styles.imagePlaceholder}
								source={require("../assets/img/image_dummy.png")}
							/>
							<Text style={{ ...Typography.title }}>
								Drop Your here, or browse
							</Text>
							<Text
								style={{ ...Typography.smallTitle, color: Colors.grayLight }}
							>
								Supports JPEG, png
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.closeBtn}
							onPress={() => setModalVisible(!modalVisible)}
						>
							<Feather
								color={Colors.white}
								name="x"
								size={24}
								style={styles.closeIcon}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
			{/* End Modal */}

			<View style={globalStyles.container}>
				<Text style={{ ...Typography.title, paddingVertical: 30 }}>
					Update your profile
				</Text>
				<View>
					<Image
						style={styles.profile}
						source={
							imageUrl !== ""
								? { uri: "" + imageUrl + "" }
								: require("../assets/img/profile.jpg")
						}
					/>
					<Pressable
						onPress={() => setModalVisible(true)}
						style={styles.editBtn}
					>
						<Text style={{ color: "white" }}>EDIT</Text>
					</Pressable>
				</View>
				<View>
					<Item regular style={globalStyles.inputBoxRegular}>
						<Input
							style={globalStyles.inputField}
							placeholderTextColor={Colors.placeholder}
							placeholder="Full Name"
							value={name}
							onChangeText={setName}
						/>
					</Item>
					<Item regular style={globalStyles.inputBoxRegular}>
						<Input
							style={globalStyles.inputField}
							placeholderTextColor={Colors.placeholder}
							placeholder="Phone Number"
							value={phone}
							onChangeText={setPhone}
						/>
					</Item>
					<Item regular style={globalStyles.inputBoxRegular}>
						<Input
							style={globalStyles.inputField}
							placeholderTextColor={Colors.placeholder}
							placeholder="Email address"
							value={email}
							onChangeText={setEmail}
						/>
					</Item>
					<View style={styles.btnWrapper}>
						<GradientButton
							text="Save"
							textStyle={styles.btn}
							gradientBegin={Colors.primary}
							gradientEnd={Colors.secondary}
							gradientDirection="diagonal"
							height={56}
							width="100%"
							radius={12}
							impact
							impactStyle="Light"
						/>
					</View>
				</View>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	title: {
		...Typography.title,
	},
	profile: {
		width: 80,
		height: 80,
		borderRadius: 100,
	},
	centerAlign: {
		justifyContent: "center",
		alignItems: "center",
	},
	btn: { fontSize: 18, fontFamily: "Poppins_semi_bold" },
	btnWrapper: {
		justifyContent: "space-evenly",
		alignItems: "center",
		marginVertical: 25,
	},
	//
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		backgroundColor: "white",
		borderRadius: 20,
		paddingVertical: 10,
		paddingHorizontal: 20,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		width: Dimensions.get("window").width - 50,
		height: 200,
	},
	editBtn: {
		backgroundColor: Colors.primary,
		borderWidth: 2,
		borderColor: Colors.white,
		position: "absolute",
		top: 40,
		left: 50,
		borderRadius: 30,
		paddingHorizontal: 15,
		paddingVertical: 2,
	},
	innerView: {
		margin: 10,
		borderWidth: 2,
		flex: 1,
		width: "100%",
		borderRadius: 10,
		borderColor: Colors.primary,
		borderStyle: "dashed",
		justifyContent: "center",
		alignItems: "center",
	},
	imagePlaceholder: {
		width: 65,
		height: 40,
		resizeMode: "contain",
	},
	closeBtn: {
		position: "absolute",
		backgroundColor: Colors.primary,
		borderRadius: 100,
		width: 30,
		height: 30,
		right: -15,
		textAlign: "center",
		textAlignVertical: "center",
		top: -15,
	},
	closeIcon: {
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		textAlignVertical: "center",
		lineHeight: 30,
	},
});
