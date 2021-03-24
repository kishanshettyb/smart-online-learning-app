import React from "react";
import { Feather } from "@expo/vector-icons";
import { HeadingWithButton } from "../components";
import globalStyles from "../styles/globalStyles";
import { Container, Text, View } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import GradientButton from "react-native-gradient-buttons";
import { StyleSheet, StatusBar, Image } from "react-native";
import { Colors, Spacing, Typography } from "../styles/index";

export function ContactUs({ navigation }) {
	return (
		<Container>
			<StatusBar
				translucent={false}
				backgroundColor={Colors.white}
				barStyle="dark-content"
			/>
			<HeadingWithButton
				transparent={false}
				titleColor="black"
				title="Contact Us"
				androidStatusBarColor={Colors.white}
				btnType="gradientBtn"
			/>
			<ScrollView
				horizontal={false}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
			>
				<View style={styles.centerAlign}>
					<Image
						style={styles.image}
						source={require("../assets/img/contact.png")}
					/>
				</View>
				<View style={styles.container}>
					<View style={styles.contactCard}>
						<Text style={styles.title}>Contact Us</Text>
						<View style={styles.details}>
							<View>
								<Feather color={Colors.primary} name="map-pin" size={16} />
							</View>
							<View style={{ marginLeft: 10 }}>
								<Text style={styles.bodyText}>
									ABCD Pvt. Ltd 22314-230 London Rd, Highfield, Sheffield S2
									4LW, United Kingdom
								</Text>
							</View>
						</View>
						<View style={styles.details}>
							<View>
								<Feather color={Colors.primary} name="phone" size={16} />
							</View>
							<View style={{ marginLeft: 10 }}>
								<Text style={styles.bodyText}>080-662252</Text>
							</View>
						</View>
						<View style={styles.details}>
							<View>
								<Feather color={Colors.primary} name="mail" size={16} />
							</View>
							<View style={{ marginLeft: 10 }}>
								<Text style={styles.bodyText}>info@example.com</Text>
							</View>
						</View>
					</View>
					<View style={[styles.btnWrapper]}>
						<GradientButton
							text={<Text style={styles.btn}>Get In Touch</Text>}
							textStyle={{ fontSize: 18, fontFamily: "Poppins_semi_bold" }}
							gradientBegin={Colors.primary}
							gradientEnd={Colors.secondary}
							gradientDirection="diagonal"
							height={56}
							width="100%"
							radius={12}
							impact
							impactStyle="Light"
							onPressAction={() => navigation.navigate("GetInTouch")}
						/>
					</View>
					<View style={styles.centerAlign}>
						<Text style={[styles.bodyText, styles.mtb10]}>Follow Us</Text>
					</View>
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
		height: 280,
		width: 280,
		marginVertical: 30,
	},
	centerAlign: {
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
	contactCard: {
		backgroundColor: Colors.white,
		borderRadius: 20,
		padding: 30,
		elevation: 3,
		...globalStyles.shadowSm,
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
	title: { ...Typography.title, marginBottom: 20 },
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
});
