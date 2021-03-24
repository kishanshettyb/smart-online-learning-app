import React from "react";
import { Feather } from "@expo/vector-icons";
import { AuthContext } from "../screens/utils";
import { Container, Text, View } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import { HeadingWithButton, Heading } from "../components";
import GradientButton from "react-native-gradient-buttons";
import { StyleSheet, StatusBar, Image } from "react-native";
import { Colors, Spacing, Typography } from "../styles/index";

export function Profile() {
	const { signOut } = React.useContext(AuthContext);

	return (
		<Container>
			<StatusBar translucent={false} barStyle="light-content" />
			<HeadingWithButton
				transparent={false}
				titleColor="white"
				title="Profile"
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
				<ScrollView
					horizontal={false}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					<View style={styles.profileHead}>
						<View>
							<Text style={{ ...Typography.title, marginTop: 12 }}>
								Jennifer Aniston
							</Text>
							<Text style={{ ...Typography.bodyText }}>jennifer@gmail.com</Text>
						</View>
						<View>
							<Image
								style={styles.profilePic}
								source={require("../assets/img/profile.jpg")}
							/>
						</View>
					</View>
					<View style={styles.line} />
					{/* Personal Details */}
					<Heading
						title="Personal Details"
						cta="EditProfile"
						ctaBtnName="Edit"
					/>
					<View style={styles.details}>
						<View>
							<Feather color={Colors.primary} name="phone" size={16} />
						</View>
						<View style={{ marginLeft: 10 }}>
							<Text style={styles.bodyText}>+91 9123456789</Text>
						</View>
					</View>
					<View style={styles.details}>
						<View>
							<Feather color={Colors.primary} name="user" size={16} />
						</View>
						<View style={{ marginLeft: 10 }}>
							<Text style={styles.bodyText}>Female</Text>
						</View>
					</View>
					<View style={styles.line} />
					{/* Address */}
					<Text style={styles.bodyHeading}>Address</Text>
					<View style={styles.details}>
						<View>
							<Feather color={Colors.primary} name="map-pin" size={16} />
						</View>
						<View style={{ marginLeft: 10, marginRight: 10 }}>
							<Text style={styles.bodyText}>
								ABCD Pvt. Ltd 22314-230 London Rd, Highfield, Sheffield S2 4LW,
								United Kingdom
							</Text>
						</View>
					</View>
					<View style={styles.line} />
					{/* Bank Details */}
					<Text style={styles.bodyHeading}>Bank Details</Text>
					<View style={styles.details}>
						<View>
							<Feather color={Colors.primary} name="credit-card" size={16} />
						</View>
						<View style={{ marginLeft: 10 }}>
							<Text style={styles.bodyText}>
								State Bank Of India{"\n"}A/C:xxxxxxx4519
							</Text>
						</View>
					</View>
					{/* Logout Button */}
					<View style={styles.btnWrapper}>
						<GradientButton
							style={{ marginVertical: 35 }}
							text="Sign Out"
							textStyle={{ fontSize: 18, fontFamily: "Poppins_semi_bold" }}
							gradientBegin={Colors.primary}
							gradientEnd={Colors.secondary}
							gradientDirection="diagonal"
							height={56}
							width="100%"
							radius={12}
							impact
							impactStyle="Light"
							onPressAction={() => signOut()}
						/>
					</View>
				</ScrollView>
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
	profilePic: {
		width: 60,
		height: 60,
		borderRadius: 100,
	},
	line: {
		borderTopWidth: 1,
		borderTopColor: Colors.grayLight,
		marginVertical: 20,
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
	textRight: {
		alignSelf: "flex-end",
	},
	btnWrapper: {
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	details: {
		display: "flex",
		flexDirection: "row",
		marginVertical: 5,
	},
	bodyHeading: { ...Typography.title, marginBottom: 15 },
	bodyText: {
		fontFamily: "Poppins_semi_bold",
		fontSize: 16,
		marginTop: -4,
		color: Colors.grayLight,
	},
	profileHead: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 5,
		alignItems: "center",
	},
});
