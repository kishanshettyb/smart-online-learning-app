import React from "react";
import { HeadingWithButton } from "../components";
import globalStyles from "../styles/globalStyles";
import { ScrollView } from "react-native-gesture-handler";
import GradientButton from "react-native-gradient-buttons";
import { StyleSheet, StatusBar, Image } from "react-native";
import { Colors, Spacing, Typography } from "../styles/index";
import { Container, Text, View, Item, Input } from "native-base";

export function GetInTouch({ navigation }) {
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [message, setMessage] = React.useState("");
	return (
		<Container>
			<StatusBar
				translucent={false}
				backgroundColor={Colors.white}
				barStyle="dark-content"
			/>
			<HeadingWithButton
				transparent={true}
				titleColor="black"
				title="Get In Touch"
				androidStatusBarColor={Colors.white}
				btnType="gradientBtn"
			/>
			<ScrollView
				horizontal={false}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
			>
				<View style={styles.container}>
					<View style={styles.centerAlign}>
						<Image
							style={styles.image}
							source={require("../assets/img/getintouch.png")}
						/>
					</View>
					<View style={styles.centerAlign}>
						<Text style={{ ...Typography.title }}>Contact Us</Text>
						<Text
							style={{
								...Typography.bodyText,
								textAlign: "center",
								marginTop: 10,
							}}
						>
							Send us message we will respond{"\n"} as soon as possible
						</Text>
					</View>

					<Item regular style={globalStyles.inputBoxRegular}>
						<Input
							style={globalStyles.inputField}
							placeholderTextColor={Colors.placeholder}
							placeholder="Name"
							value={name}
							onChangeText={setName}
						/>
					</Item>
					<Item regular style={globalStyles.inputBoxRegular}>
						<Input
							style={globalStyles.inputField}
							placeholderTextColor={Colors.placeholder}
							placeholder="Email"
							value={email}
							onChangeText={setEmail}
						/>
					</Item>
					<Item regular style={[globalStyles.inputBoxRegular, styles.message]}>
						<Input
							style={globalStyles.inputField}
							placeholderTextColor={Colors.placeholder}
							placeholder="Message"
							value={message}
							onChangeText={setMessage}
						/>
					</Item>
					<View style={[styles.btnWrapper, styles.mb0]}>
						<GradientButton
							text={<Text style={styles.btn}>Submit</Text>}
							textStyle={{ fontSize: 18, fontFamily: "Poppins_semi_bold" }}
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
			</ScrollView>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: Spacing.base,
	},
	image: {
		alignItems: "center",
		justifyContent: "center",
		height: 140,
		width: "100%",
		marginVertical: 30,
		resizeMode: "contain",
	},
	centerAlign: {
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
	contactCard: {
		backgroundColor: Colors.input,
		borderRadius: 20,
		padding: 30,
	},
	details: {
		display: "flex",
		flexDirection: "row",
		marginBottom: 20,
	},
	bodyText: {
		...Typography.bodyText,
		marginTop: -1,
		fontFamily: "Poppins_semi_bold",
	},
	title: {
		...Typography.title,
		marginBottom: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	btn: {
		fontSize: 18,
		fontFamily: "Poppins_semi_bold",
		color: Colors.white,
	},
	btnWrapper: {
		justifyContent: "space-evenly",
		alignItems: "center",
		marginTop: 30,
	},
	mtb10: {
		paddingVertical: 20,
	},
	icons: {
		width: 40,
		height: 40,
	},
	iconsContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
	},
	message: {
		height: 150,
	},
});
