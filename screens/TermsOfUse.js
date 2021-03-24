import React from "react";
import { View, Text } from "native-base";
import { StyleSheet, ScrollView } from "react-native";
import { Typography, Colors, Spacing } from "../styles";
import GradientButton from "react-native-gradient-buttons";

export default function TermsOfUse() {
	return (
		<ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
			<View style={styles.container}>
				<Text
					style={{
						...Typography.smallTitle,
						color: Colors.grayLight,
						paddingVertical: 20,
					}}
				>
					Last Updated On: 24 Feb 2021
				</Text>
				<Text style={{ ...Typography.bodyText }}>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit
				</Text>
				<Text style={{ ...Typography.title, paddingVertical: 20 }}>
					1. PERSONAL INFORMATION
				</Text>
				<Text style={{ ...Typography.bodyText }}>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit
				</Text>
				<Text style={{ ...Typography.title, paddingVertical: 20 }}>
					2. THE INFORMATION USER PROVIDES US
				</Text>
				<Text style={{ ...Typography.bodyText }}>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit
				</Text>
				<Text style={{ ...Typography.title, paddingVertical: 20 }}>
					3. HOW WE USE THE INFORMATION WHICH WE COLLECT
				</Text>
				<Text style={{ ...Typography.bodyText }}>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit
				</Text>
				<Text style={{ ...Typography.title, paddingVertical: 20 }}>
					4. HOW LONG WE KEEP YOUR INFORMATION
				</Text>
				<Text style={{ ...Typography.bodyText }}>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit
				</Text>
				<Text style={{ ...Typography.title, paddingVertical: 20 }}>
					5. HOW WE KEEP YOUR INFORMATION SAFE
				</Text>
				<Text style={{ ...Typography.bodyText }}>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit
				</Text>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-evenly",
					}}
				>
					<View
						style={{
							flex: 1,
							justifyContent: "space-evenly",
							alignItems: "center",
						}}
					>
						<GradientButton
							style={{ marginVertical: 35 }}
							text="Accept"
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
					<View
						style={{
							flex: 1,
							justifyContent: "space-evenly",
							alignItems: "center",
							marginHorizontal: 5,
						}}
					>
						<GradientButton
							style={{
								marginVertical: 35,
								borderWidth: 3,
								borderRadius: 15,
								borderColor: Colors.primary,
							}}
							text="Decline"
							textStyle={{
								fontSize: 18,
								fontFamily: "Poppins_semi_bold",
								color: Colors.primary,
							}}
							gradientBegin={Colors.white}
							gradientEnd={Colors.white}
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
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		padding: Spacing.base,
	},
});
