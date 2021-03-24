import React from "react";
import { AuthContext } from "../screens/utils";
import globalStyles from "../styles/globalStyles";
import { HeadingWithButton } from "../components";
import { Colors, Typography } from "../styles/index";
import GradientButton from "react-native-gradient-buttons";
import { Container, Text, View, Item, Input } from "native-base";
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from "react-native";

export function SignUp() {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [firstName, setFirstName] = React.useState("");
	const { signIn } = React.useContext(AuthContext);

	return (
		<Container>
			<HeadingWithButton transparent={true} />
			<StatusBar barStyle={"dark-content"} backgroundColor={Colors.white} />
			<View style={globalStyles.container}>
				<SafeAreaView>
					<ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
						<View style={styles.heading}>
							<Text style={{ ...Typography.heading }}>
								Let's start with{"\n"}Register!
							</Text>
						</View>

						<Item regular style={globalStyles.inputBoxRegular}>
							<Input
								style={globalStyles.inputField}
								placeholderTextColor={Colors.placeholder}
								placeholder="First Name"
								value={firstName}
								onChangeText={setFirstName}
							/>
						</Item>
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

						<View style={styles.btnWrapper}>
							<GradientButton
								text="Sign Up"
								textStyle={styles.btn}
								gradientBegin={Colors.primary}
								gradientEnd={Colors.secondary}
								gradientDirection="diagonal"
								height={56}
								width="100%"
								radius={12}
								impact
								impactStyle="Light"
								onPressAction={() => signIn({ username, password })}
								style={globalStyles.shadowGradientBtn}
							/>
						</View>
					</ScrollView>
				</SafeAreaView>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	heading: {
		paddingTop: 35,
	},
	btnWrapper: {
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
		marginVertical: 25,
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
	btn: { fontSize: 18, fontFamily: "Poppins_semi_bold" },
});
