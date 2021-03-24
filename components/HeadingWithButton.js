import React from "react";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors, Typography } from "../styles";
import { useNavigation } from "@react-navigation/native";
import GradientButton from "react-native-gradient-buttons";
import { View, Text, Header, Left, Right, Body } from "native-base";

export function HeadingWithButton(props) {
	const navigation = useNavigation();

	return (
		<View>
			{props.transparent ? (
				<SafeAreaView>
					<Header
						androidStatusBarColor={props.androidStatusBarColor}
						style={{
							shadowOffset: { height: 0, width: 0 },
							shadowOpacity: 0,
						}}
						transparent
					>
						<Left style={{ flex: 1 }}>
							<View>
								{props.btnType == "whiteBtn" ? (
									<View
										style={{
											flex: 1,
											justifyContent: "space-evenly",
											alignItems: "center",
											marginVertical: 24,
										}}
									>
										<GradientButton
											style={{ marginVertical: 8 }}
											text={
												<Feather
													color={Colors.black}
													name="arrow-left"
													size={24}
												/>
											}
											textStyle={{ fontSize: 24 }}
											gradientBegin={Colors.white}
											gradientEnd={Colors.white}
											gradientDirection="diagonal"
											height={40}
											width={40}
											radius={12}
											impact
											impactStyle="Light"
											onPressAction={() => navigation.goBack()}
										/>
									</View>
								) : (
									<View
										style={{
											flex: 1,
											justifyContent: "space-evenly",
											alignItems: "center",
											marginVertical: 24,
										}}
									>
										<GradientButton
											style={{ marginVertical: 8 }}
											text={
												<Feather
													color={Colors.white}
													name="arrow-left"
													size={24}
												/>
											}
											textStyle={{ fontSize: 24 }}
											gradientBegin={Colors.primary}
											gradientEnd={Colors.secondary}
											gradientDirection="diagonal"
											height={40}
											width={40}
											radius={12}
											impact
											impactStyle="Light"
											onPressAction={() => navigation.goBack()}
										/>
									</View>
								)}
							</View>
						</Left>
						<Body style={{ flex: 1 }}>
							<Text
								style={{
									...Typography.title,
									color: props.titleColor,
									alignSelf: "center",
								}}
								numberOfLines={1}
								ellipsizeMode="tail"
							>
								{props.title}
							</Text>
						</Body>
						<Right style={{ flex: 1 }} />
					</Header>
				</SafeAreaView>
			) : (
				// <SafeAreaView style={GlobalStyles.droidSafeArea}>
				<Header
					androidStatusBarColor={props.androidStatusBarColor}
					style={{
						backgroundColor: props.backgroundColor,
						elevation: 0,
					}}
				>
					<Left style={{ flex: 1 }}>
						<View>
							{props.btnType == "whiteBtn" ? (
								<View
									style={{
										flex: 1,
										justifyContent: "space-evenly",
										alignItems: "center",
										marginVertical: 24,
									}}
								>
									<GradientButton
										style={{ marginVertical: 8 }}
										text={
											<Feather
												color={Colors.black}
												name="arrow-left"
												size={24}
											/>
										}
										textStyle={{ fontSize: 24 }}
										gradientBegin={Colors.white}
										gradientEnd={Colors.white}
										gradientDirection="diagonal"
										height={40}
										width={40}
										radius={12}
										impact
										impactStyle="Light"
										onPressAction={() => navigation.goBack()}
									/>
								</View>
							) : (
								<View
									style={{
										flex: 1,
										justifyContent: "space-evenly",
										alignItems: "center",
										marginVertical: 24,
									}}
								>
									<GradientButton
										style={{ marginVertical: 8 }}
										text={
											<Feather
												color={Colors.white}
												name="arrow-left"
												size={24}
											/>
										}
										textStyle={{ fontSize: 24 }}
										gradientBegin={Colors.primary}
										gradientEnd={Colors.secondary}
										gradientDirection="diagonal"
										height={40}
										width={40}
										radius={12}
										impact
										impactStyle="Light"
										onPressAction={() => navigation.goBack()}
									/>
								</View>
							)}
						</View>
					</Left>
					<Body style={{ flex: 1 }}>
						<Text
							style={{
								...Typography.title,
								color: props.titleColor,
								alignSelf: "center",
							}}
						>
							{props.title}
						</Text>
					</Body>
					<Right style={{ flex: 1 }} />
				</Header>
				// </SafeAreaView>
			)}
		</View>
	);
}

// props type
HeadingWithButton.propTypes = {
	transparent: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	btnType: PropTypes.string.isRequired,
	titleColor: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string.isRequired,
	// androidStatusBarColor: PropTypes.string.isRequired,
};

// Default values for props
HeadingWithButton.defaultProps = {
	transparent: true,
	title: "",
	btnType: "gradientBtn",
	titleColor: "black",
	backgroundColor: "transparent",
	// androidStatusBarColor: "black",
};
