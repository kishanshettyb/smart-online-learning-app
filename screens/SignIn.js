import React from "react";
import { AuthContext } from "../screens/utils";
import globalStyles from "../styles/globalStyles";
import { Colors, Typography } from "../styles/index";
import GradientButton from "react-native-gradient-buttons";
import { View, Container, Text, Item, Input } from "native-base";
import { SafeAreaView, StyleSheet, Image, StatusBar } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export function SignIn({ navigation }) {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const { signIn } = React.useContext(AuthContext);

	return (
		<Container style={globalStyles.container}>
			<StatusBar
				barStyle={"dark-content"}
				backgroundColor={Colors.white}
				translucent={false}
			/>
			<SafeAreaView>
				<ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
					<View style={styles.heading}>
						<Text style={{ ...Typography.heading }}>
							Let's start with{"\n"}Login!
						</Text>
					</View>
					<View style={styles.centerAlign}>
						<Image
							style={styles.loginImg}
							source={require("../assets/img/login_img.png")}
						/>
					</View>
					<Item regular style={globalStyles.inputBoxRegular}>
						<Input
							style={globalStyles.inputField}
							placeholderTextColor={Colors.placeholder}
							placeholder="Email"
							value={username}
							onChangeText={setUsername}
						/>
					</Item>
					<Item regular style={globalStyles.inputBoxRegular}>
						<Input
							style={globalStyles.inputField}
							placeholderTextColor={Colors.placeholder}
							placeholder="Password"
							value={password}
							onChangeText={setPassword}
							secureTextEntry
						/>
					</Item>
					<TouchableOpacity
						onPress={() => navigation.navigate("ForgotPassword")}
					>
						<Text style={styles.forgotPassword}>Forgot Password</Text>
					</TouchableOpacity>
					<View style={styles.btnWrapper}>
						<GradientButton
							text="Login"
							textStyle={{ fontSize: 18, fontFamily: "Poppins_semi_bold" }}
							gradientBegin={Colors.primary}
							gradientEnd={Colors.secondary}
							gradientDirection="diagonal"
							height={56}
							width="100%"
							radius={12}
							impact
							impactStyle="Light"
							onPressAction={() => signIn({ username, password })}
							// style={globalStyles.shadowGradientBtn}
						/>
					</View>
					<TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
						<Text style={styles.footerText}>
							Don't have an account? <Text style={styles.btnLink}>Sign Up</Text>
						</Text>
					</TouchableOpacity>
				</ScrollView>
			</SafeAreaView>
		</Container>
	);
}

const styles = StyleSheet.create({
	heading: {
		marginTop: 100,
	},
	loginImg: {
		height: 200,
		width: "100%",
		resizeMode: "contain",
	},
	centerAlign: {
		justifyContent: "center",
		alignItems: "center",
	},
	btnWrapper: {
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
		...globalStyles.shadowGradientBtn,
	},
	forgotPassword: {
		...Typography.titleBase,
		color: Colors.placeholder,
		alignSelf: "flex-end",
		paddingVertical: 25,
	},
	footerText: {
		...Typography.titleBase,
		fontFamily: "Poppins_semi_bold",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		paddingVertical: 25,
	},
	btnLink: {
		...Typography.titleBase,
		color: Colors.primary,
		fontFamily: "Poppins_semi_bold",
	},
});
