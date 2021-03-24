import React from "react";
import { HeadingWithButton } from "../components";
import globalStyles from "../styles/globalStyles";
import { Colors, Typography } from "../styles/index";
import { ScrollView } from "react-native-gesture-handler";
import GradientButton from "react-native-gradient-buttons";
import { View, Container, Text, Item, Input } from "native-base";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";

export function ForgotPassword({ navigation }) {
	const [username, setUsername] = React.useState("");

	return (
		<Container>
			<HeadingWithButton transparent={true} />

			<View style={globalStyles.container}>
				<StatusBar barStyle={"dark-content"} backgroundColor={Colors.white} />
				<SafeAreaView>
					<ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
						<View style={styles.heading}>
							<Text style={{ ...Typography.heading }}>
								Forgot your password?
							</Text>
							<Text style={styles.headingText}>
								Don’t worry, resetting your password is easy, just tell us the
								email address you registered with Smart
							</Text>
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
						<View style={styles.btnWrapper}>
							<GradientButton
								text="Send"
								textStyle={{
									fontSize: 18,
									fontFamily: "Poppins_semi_bold",
								}}
								gradientBegin={Colors.primary}
								gradientEnd={Colors.secondary}
								gradientDirection="diagonal"
								height={56}
								width="100%"
								radius={12}
								impact
								impactStyle="Light"
								onPressAction={() => navigation.navigate("SignIn")}
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
		marginTop: 25,
	},
	headingText: {
		...Typography.bodyText,
		color: Colors.grayLight,
		paddingTop: 15,
	},
});
