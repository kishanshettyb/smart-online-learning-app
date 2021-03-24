import React from "react";
import { HeadingWithButton } from "../components";
import { AirbnbRating } from "react-native-ratings";
import { Container, View, Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { Colors, Spacing, Typography } from "../styles";
import GradientButton from "react-native-gradient-buttons";
import { StyleSheet, StatusBar, Image } from "react-native";

export function RateUs() {
	return (
		<Container>
			<StatusBar barStyle={"dark-content"} translucent={false} />
			<HeadingWithButton
				transparent={false}
				titleColor="white"
				btnType="whiteBtn"
				backgroundColor={Colors.primary}
				androidStatusBarColor={Colors.primary}
				title="Rate Us"
			/>
			<View style={styles.containerGradient}>
				<LinearGradient
					colors={[Colors.primary, Colors.secondary]}
					style={styles.background}
				/>
			</View>
			<View style={styles.container}>
				<View style={styles.centerAlign}>
					<Image
						style={styles.wave}
						source={require("../assets/img/wave_white.png")}
					/>
					<Image
						style={styles.rateUsImage}
						source={require("../assets/img/rate_us.png")}
					/>
				</View>
				<View style={styles.containerPadding}>
					<View style={styles.centerAlign}>
						<Image
							style={styles.googlePlayBtn}
							source={require("../assets/img/google_play.png")}
						/>
						<Text style={{ ...Typography.title, marginBottom: 24 }}>
							Your opinion matters to us!
						</Text>
						<Text
							style={{
								...Typography.bodyText,
								textAlign: "center",
								marginHorizontal: 30,
							}}
						>
							We work super hard to serve you better and would love to know how
							would you rate our app ?
						</Text>

						<AirbnbRating
							size={24}
							defaultRating={3}
							selectedColor={Colors.primary}
							reviewSize={14}
							reviewColor={Colors.primary}
							// onFinishRating
						/>

						<GradientButton
							style={{ marginTop: 30 }}
							text="Submit"
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
	containerGradient: {
		flex: 0.3,
		marginTop: -1,
	},
	container: {
		flex: 0.7,
		backgroundColor: Colors.white,
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: "100%",
	},
	wave: {
		width: "100%",
		height: 100,
		marginTop: -80,
	},
	googlePlayBtn: {
		width: 170,
		height: 65,
		marginTop: 40,
		marginBottom: 55,
	},
	centerAlign: {
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
	containerPadding: {
		paddingHorizontal: Spacing.base,
		marginTop: -1,
	},
	rateUsImage: {
		width: 300,
		resizeMode: "contain",
		height: 300,
		marginTop: -280,
	},
});
