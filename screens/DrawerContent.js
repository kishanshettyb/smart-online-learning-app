import React from "react";
import { View, Text } from "native-base";
import { Feather } from "@expo/vector-icons";
import { AuthContext } from "../screens/utils";
import { Image, StyleSheet } from "react-native";
import globalStyles from "../styles/globalStyles";
import { Typography, Colors, Spacing } from "../styles";
import GradientButton from "react-native-gradient-buttons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

export function DrawerContent(props) {
	const { signOut } = React.useContext(AuthContext);

	return (
		<View style={styles.container}>
			<DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
				<View style={styles.userDetailsSection}>
					<Image
						style={styles.profilePic}
						source={require("../assets/img/profile.jpg")}
					/>
					<Text
						style={{ ...Typography.title, paddingTop: 20, paddingBottom: 5 }}
					>
						Jennifer Aniston
					</Text>
					<Text style={{ ...Typography.bodyText, paddingBottom: 20 }}>
						jennifer@gmail.com
					</Text>
					<View style={styles.line}></View>
				</View>
				<View>
					<DrawerItem
						icon={() => (
							<Feather name="user" color={Colors.primary} size={20} />
						)}
						label="Profile"
						labelStyle={styles.labelStyle}
						onPress={() => {
							props.navigation.navigate("Profile");
						}}
					/>
					<DrawerItem
						icon={() => (
							<Feather name="settings" color={Colors.warning} size={20} />
						)}
						label="Settings"
						labelStyle={styles.labelStyle}
						onPress={() => {
							props.navigation.navigate("Settings");
						}}
					/>
					<DrawerItem
						icon={() => (
							<Feather name="play-circle" color={Colors.secondary} size={20} />
						)}
						label="My Courses"
						labelStyle={styles.labelStyle}
						onPress={() => {
							props.navigation.navigate("MyCourses");
						}}
					/>
					<View style={styles.line}></View>
					<DrawerItem
						icon={() => (
							<Feather name="bell" color={Colors.success} size={20} />
						)}
						label="Notifications"
						labelStyle={styles.labelStyle}
						onPress={() => {
							props.navigation.navigate("Notification");
						}}
					/>
					<DrawerItem
						icon={() => (
							<Feather name="mail" color={Colors.warning} size={20} />
						)}
						label="Subscribe"
						labelStyle={styles.labelStyle}
						onPress={() => {
							props.navigation.navigate("Subscribe");
						}}
					/>
					<View style={styles.line}></View>
					<DrawerItem
						icon={() => (
							<Feather name="info" color={Colors.primary} size={20} />
						)}
						label="About Us"
						labelStyle={styles.labelStyle}
						onPress={() => {
							props.navigation.navigate("AboutUs");
						}}
					/>
					<DrawerItem
						icon={() => (
							<Feather name="map-pin" color={Colors.warning} size={20} />
						)}
						label="Contact Us"
						labelStyle={styles.labelStyle}
						onPress={() => {
							props.navigation.navigate("ContactUs");
						}}
					/>
					<DrawerItem
						icon={() => (
							<Feather name="help-circle" color={Colors.secondary} size={20} />
						)}
						label="FAQ's"
						labelStyle={styles.labelStyle}
						onPress={() => {
							props.navigation.navigate("Faq");
						}}
					/>
					<DrawerItem
						icon={() => <Feather name="shield" color={Colors.info} size={20} />}
						label="Privacy Policy"
						labelStyle={styles.labelStyle}
						onPress={() => {
							props.navigation.navigate("PrivacyPolicy");
						}}
					/>
					<View style={styles.btnWrapper}>
						<GradientButton
							text="Sign Out"
							textStyle={styles.btn}
							gradientBegin={Colors.primary}
							gradientEnd={Colors.secondary}
							gradientDirection="diagonal"
							height={56}
							width="100%"
							radius={12}
							impact
							impactStyle="Light"
							onPressAction={() => signOut()}
							style={globalStyles.shadowGradientBtn}
						/>
					</View>
				</View>
			</DrawerContentScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	userDetailsSection: {
		justifyContent: "center",
		alignItems: "center",
	},
	profilePic: {
		width: 100,
		height: 100,
		borderRadius: 100,
	},
	line: {
		borderWidth: 1,
		width: "100%",
		borderColor: Colors.grayThin,
	},
	container: {
		flex: 1,
		paddingHorizontal: Spacing.base,
	},
	labelStyle: {
		...Typography.title,
		marginLeft: -15,
		padding: 0,
	},
	btnWrapper: {
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
		marginVertical: 10,
	},
	btn: { fontSize: 18, fontFamily: "Poppins_semi_bold" },
});
