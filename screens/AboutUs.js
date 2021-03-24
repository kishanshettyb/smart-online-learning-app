import React from "react";
import { Feather } from "@expo/vector-icons";
import { HeadingWithButton } from "../components";
import { Container, View, Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { Colors, Spacing, Typography } from "../styles";
import { ScrollView } from "react-native-gesture-handler";
import GradientButton from "react-native-gradient-buttons";
import { StyleSheet, StatusBar, Image } from "react-native";

export function AboutUs({ navigation }) {
	return (
		<Container>
			<StatusBar barStyle={"dark-content"} translucent={false} />
			<HeadingWithButton
				transparent={false}
				titleColor="black"
				btnType="gradientBtn"
				androidStatusBarColor={Colors.white}
				title="About Us"
			/>
			<ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<View style={styles.centerAlign}>
						<Image
							source={require("../assets/img/about.png")}
							style={styles.cardImage}
						/>
					</View>
					<View style={styles.btnWrapper}>
						<GradientButton
							text={<Text style={styles.btn}>Rate Us</Text>}
							textStyle={{ fontSize: 18, fontFamily: "Poppins_semi_bold" }}
							gradientBegin={Colors.primary}
							gradientEnd={Colors.secondary}
							gradientDirection="diagonal"
							height={56}
							width="100%"
							radius={12}
							impact
							impactStyle="Light"
							onPressAction={() => navigation.navigate("RateUs")}
						/>
					</View>
				</View>
				<View style={styles.containerGradient}>
					<Image
						style={styles.wave}
						source={require("../assets/img/wave.png")}
					/>
					<View style={styles.gradientPadding}>
						<LinearGradient
							colors={[Colors.primary, Colors.secondary]}
							style={styles.background}
						/>
						<Text
							style={{
								...Typography.title,
								color: Colors.white,
								marginTop: 50,
								marginBottom: 10,
							}}
						>
							About Us
						</Text>
						<Text style={{ ...Typography.bodyText, color: Colors.white }}>
							We work super hard to serve you better and would love to know how
							would you rate our app ?
						</Text>
						<View style={styles.card}>
							<Text style={{ ...Typography.title }}>Our Vision</Text>
							<Text style={{ ...Typography.bodyText }}>
								We work super hard to serve you better and would love to know
								how would you rate our app ?
							</Text>
						</View>

						{/* Start Our Mission */}
						<View style={[styles.card, styles.mb50]}>
							<Text style={{ ...Typography.title }}>Our Mission</Text>
							<Text style={{ ...Typography.bodyText }}>
								We work super hard to serve you better and would love to know
								how would you rate our app ?
							</Text>
						</View>
						{/* End Our Mission */}

						{/* Start Contact */}
						<Text style={{ ...Typography.title, color: Colors.white }}>
							Contact Us
						</Text>
						<View style={[styles.contactCard, styles.card, styles.mb50]}>
							<View>
								<View style={styles.details}>
									<View>
										<Feather color={Colors.primary} name="map-pin" size={16} />
									</View>
									<View style={{ marginLeft: 10 }}>
										<Text style={styles.bodyText}>
											Brooklyn Pvt. Ltd 224-230 London Rd, Highfield, Sheffield
											S2 4LW, United Kingdom
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
							<View style={[styles.btnWrapper, styles.mb0]}>
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
						</View>
						{/* End Contact */}
					</View>
				</View>
			</ScrollView>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: Spacing.base,
		flex: 1,
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
	centerAlign: {
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
	cardImage: {
		resizeMode: "contain",
		width: 300,
		height: 300,
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: "100%",
	},
	containerGradient: {
		alignItems: "flex-start",
		justifyContent: "flex-start",
		flex: 1,
		marginTop: 90,
	},
	card: {
		backgroundColor: Colors.white,
		padding: 20,
		borderRadius: 16,
		width: "100%",
		marginTop: 50,
	},
	contactCard: {
		marginTop: 20,
	},
	mb50: {
		marginBottom: 50,
	},
	mb0: {
		marginBottom: 0,
	},
	details: {
		flexDirection: "row",
		marginBottom: 30,
	},
	wave: {
		width: "100%",
		height: 100,
		marginTop: -100,
	},
	gradientPadding: {
		paddingHorizontal: Spacing.base,
		marginTop: -1,
	},
	bodyText: {
		...Typography.bodyText,
		marginTop: -1,
	},
});
