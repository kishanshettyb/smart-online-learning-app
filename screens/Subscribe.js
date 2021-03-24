import React from "react";
import { Feather } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";
import { HeadingWithButton } from "../components";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "react-native-gradient-buttons";
import { StyleSheet, StatusBar, Image } from "react-native";
import { Colors, Spacing, Typography } from "../styles/index";
import { Container, Text, View, Item, Input } from "native-base";

export function Subscribe() {
	const [email, setEmail] = React.useState("");

	return (
		<Container>
			<StatusBar
				translucent={false}
				backgroundColor={Colors.primary}
				barStyle="light-content"
			/>
			<HeadingWithButton
				transparent={false}
				titleColor="white"
				title="Subscribe"
				btnType="whiteBtn"
				backgroundColor={Colors.primary}
				androidStatusBarColor={Colors.primary}
			/>
			<View style={styles.container}>
				<LinearGradient
					colors={[Colors.primary, Colors.secondary]}
					style={styles.background}
				/>
				<View style={styles.card}>
					<View style={styles.centerAlign}>
						<Image
							source={require("../assets/img/subscribe.png")}
							style={styles.cardImage}
						/>
					</View>
					<Text style={[styles.cardTitle, styles.centerAlign]}>
						Stay Tuned !!
					</Text>
					<Text style={[styles.cardSubTitle, styles.centerAlign]}>
						Subscribe to our newsletter & get notification to stay update.
					</Text>
					<Item regular style={[globalStyles.inputBoxRegular, styles.input]}>
						<Input
							style={globalStyles.inputField}
							placeholderTextColor={Colors.placeholder}
							placeholder="Email"
							value={email}
							onChangeText={setEmail}
						/>
					</Item>
					<View style={styles.btnWrapper}>
						<GradientButton
							text={
								<Text style={styles.btn}>
									Subscribe{" "}
									<Feather color={Colors.white} name="send" size={18} />
								</Text>
							}
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
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: -1,
		flex: 1,
		paddingHorizontal: Spacing.base,
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: "100%",
	},
	card: {
		backgroundColor: Colors.white,
		borderRadius: 24,
		width: "100%",
		paddingHorizontal: 30,
		elevation: 3,
		...globalStyles.shadowSm,
	},
	btnWrapper: {
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
		marginBottom: 55,
	},
	btn: {
		fontSize: 18,
		fontFamily: "Poppins_semi_bold",
		color: Colors.white,
	},
	cardTitle: {
		...Typography.title,
	},
	cardSubTitle: {
		...Typography.bodyText,
		marginTop: 10,
		fontFamily: "Poppins_semi_bold",
	},
	centerAlign: {
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
	cardImage: {
		resizeMode: "contain",
		width: 200,
		height: 200,
	},
	input: {
		marginBottom: 50,
	},
});
