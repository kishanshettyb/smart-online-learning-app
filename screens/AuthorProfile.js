import React from "react";
import { HeadingWithButton } from "../components";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, StatusBar, Image } from "react-native";
import { Colors, Spacing, Typography } from "../styles/index";
import { Container, Text, View, Tabs, Tab, DefaultTabBar } from "native-base";
// Tab Screens
import Tab1 from "../screens/ExperienceTab";
import Tab2 from "../screens/ReviewsTab";

export function AuthorProfile() {
	const renderTabBar = (props) => {
		props.tabStyle = Object.create(props.tabStyle);
		return <DefaultTabBar {...props} />;
	};
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
				title="Author"
				btnType="whiteBtn"
				backgroundColor={Colors.primary}
				androidStatusBarColor={Colors.primary}
			/>
			<View style={styles.headerContainer}>
				<LinearGradient
					colors={[Colors.primary, Colors.secondary]}
					style={styles.background}
				/>
			</View>
			<View style={styles.body}>
				<View style={styles.profileDetails}>
					<Image
						style={styles.profilePic}
						source={require("../assets/img/profile/profile-2.jpeg")}
					/>
					<Text style={{ ...Typography.title, marginTop: 10, marginBottom: 5 }}>
						Rob Percival
					</Text>
					<Text style={{ ...Typography.bodyText }}>
						Web Developer and Teacher
					</Text>
					<View style={styles.iconsContainer}>
						<Image
							style={styles.icons}
							source={require("../assets/img/facebook.png")}
						/>
						<Image
							style={styles.icons}
							source={require("../assets/img/twitter.png")}
						/>
						<Image
							style={styles.icons}
							source={require("../assets/img/youtube.png")}
						/>
						<Image
							style={styles.icons}
							source={require("../assets/img/linkedin.png")}
						/>
					</View>
				</View>
				<Tabs
					renderTabBar={renderTabBar}
					tabContainerStyle={{ elevation: 0 }}
					tabBarActiveTextColor={Colors.black}
					tabBarInactiveTextColor={Colors.black}
					locked={true}
					tabBarUnderlineStyle={{
						backgroundColor: Colors.primary,
					}}
				>
					<Tab
						heading="Experience"
						activeTabStyle={{ backgroundColor: Colors.white }}
						tabStyle={{ backgroundColor: Colors.white }}
						activeTextStyle={{
							color: Colors.black,
							fontFamily: "Poppins_semi_bold",
						}}
					>
						<Tab1 />
					</Tab>
					<Tab
						heading="Reviews"
						activeTextStyle={{
							color: Colors.black,
							fontFamily: "Poppins_semi_bold",
						}}
						activeTabStyle={{
							backgroundColor: Colors.white,
						}}
						tabStyle={{ backgroundColor: Colors.white }}
					>
						<Tab2 />
					</Tab>
				</Tabs>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: -1,
		height: 100,
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 100,
	},

	body: {
		display: "flex",
		padding: Spacing.base,
		backgroundColor: Colors.white,
		marginTop: -30,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		flex: 1,
	},
	profilePic: {
		width: 125,
		height: 125,
		borderRadius: 100,
		borderWidth: 3,
		borderColor: Colors.white,
	},
	profileDetails: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: -80,
	},
	icons: {
		width: 40,
		height: 40,
	},
	iconsContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		marginVertical: 15,
	},
});
