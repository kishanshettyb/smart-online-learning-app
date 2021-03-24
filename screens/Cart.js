import React from "react";
import {
	Container,
	Item,
	Input,
	Text,
	View,
	Label,
	Card,
	CardItem,
	ListItem,
	Radio,
	Left,
	Right,
} from "native-base";
import { lessons } from "../constants";
import { Feather } from "@expo/vector-icons";
import { Colors, Typography } from "../styles";
import globalStyles from "../styles/globalStyles";
import { StyleSheet, StatusBar, Image } from "react-native";
import { CartItem, HeadingWithButton } from "../components";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";

export function Cart({ navigation }) {
	const [address, setAddress] = React.useState(
		"ABCD Pvt. Ltd 22314-230 London Rd, Highfield, Sheffield S2  4LW, United Kingdom"
	);
	const [city, setCiy] = React.useState("London");
	const [state, setState] = React.useState("London");
	const [pincode, setPincode] = React.useState("22314-230");
	const [country, setCountry] = React.useState("United Kingdom");
	const [radioValue, setRadioValue] = React.useState(false);

	const orderComplete = () => {
		navigation.navigate("OrderComplete");
	};

	const removeItem = (evt) => {
		console.log("Removed");
	};

	const radioItem = [
		{
			label: "Credit Card",
			value: "creditcard",
			image: require("../assets/img/mastercard.png"),
		},
		{
			label: "PayPal",
			value: "paypal",
			image: require("../assets/img/paypal.png"),
		},

		{
			label: "Google Pay",
			value: "googlepay",
			image: require("../assets/img/google.png"),
		},
	];

	return (
		<Container style={{ backgroundColor: Colors.grayThin }}>
			<StatusBar barStyle={"dark-content"} translucent={false} />
			<HeadingWithButton
				transparent={false}
				titleColor="black"
				btnType="gradientBtn"
				title="Cart"
				backgroundColor={Colors.grayThin}
				androidStatusBarColor={Colors.grayThin}
			/>
			<View style={{ flex: 1 }}>
				{/* Start Steps */}
				<ProgressSteps
					completedCheckColor={Colors.white}
					activeStepIconColor={Colors.primary}
					completedStepIconColor={Colors.primary}
					completedProgressBarColor={Colors.primary}
					activeStepIconBorderColor={Colors.primary}
					activeStepNumColor={Colors.white}
					activeLabelColor={Colors.primary}
					completedLabelColor={Colors.primary}
				>
					{/* Cart Items */}
					<ProgressStep
						nextBtnStyle={styles.nextBtn}
						nextBtnTextStyle={styles.nextBtnText}
						label="Cart"
					>
						<View style={{ alignItems: "center" }}>
							{lessons.slice(0, 3).map((item, index) => {
								return (
									<CartItem
										key={item.id}
										title={item.lessonName}
										subTitle={item.desc}
										image={item.image}
										onClick={removeItem}
									/>
								);
							})}
						</View>
					</ProgressStep>
					{/* Address */}
					<ProgressStep
						nextBtnStyle={styles.nextBtn}
						previousBtnStyle={styles.prevBtn}
						nextBtnTextStyle={styles.nextBtnText}
						previousBtnTextStyle={styles.prevBtnText}
						label="Address"
					>
						<View style={styles.stepperContainer}>
							<View style={{ flex: 1 }}>
								<Label>
									<Text style={styles.label}>Address</Text>
								</Label>
								<Item regular style={styles.inputBoxRegular}>
									<Input
										style={globalStyles.inputField}
										placeholderTextColor={Colors.placeholder}
										placeholder="Address"
										value={address}
										onChangeText={setAddress}
									/>
								</Item>
							</View>
							<View style={styles.addressRow}>
								<View style={{ flex: 1, marginRight: 10 }}>
									<Label>
										<Text style={styles.label}>City</Text>
									</Label>
									<Item regular style={styles.inputBoxRegular}>
										<Input
											style={globalStyles.inputField}
											placeholderTextColor={Colors.placeholder}
											placeholder="City"
											value={city}
											onChangeText={setCiy}
										/>
									</Item>
								</View>
								<View style={{ flex: 1, marginLeft: 10 }}>
									<Label>
										<Text style={styles.label}>State</Text>
									</Label>
									<Item regular style={styles.inputBoxRegular}>
										<Input
											style={globalStyles.inputField}
											placeholderTextColor={Colors.placeholder}
											placeholder="State"
											value={state}
											onChangeText={setState}
										/>
									</Item>
								</View>
							</View>
							<View style={styles.addressRow}>
								<View style={{ flex: 1, marginRight: 10 }}>
									<Label>
										<Text style={styles.label}>Pincode</Text>
									</Label>
									<Item regular style={styles.inputBoxRegular}>
										<Input
											style={globalStyles.inputField}
											placeholderTextColor={Colors.placeholder}
											placeholder="Pincode"
											value={pincode}
											onChangeText={setPincode}
										/>
									</Item>
								</View>
								<View style={{ flex: 1, marginLeft: 10 }}>
									<Label>
										<Text style={styles.label}>Country</Text>
									</Label>
									<Item regular style={styles.inputBoxRegular}>
										<Input
											style={globalStyles.inputField}
											placeholderTextColor={Colors.placeholder}
											placeholder="Country"
											value={country}
											onChangeText={setCountry}
										/>
									</Item>
								</View>
							</View>
						</View>
					</ProgressStep>
					{/* Payment */}
					<ProgressStep
						nextBtnStyle={styles.nextBtn}
						previousBtnStyle={styles.prevBtn}
						nextBtnTextStyle={styles.nextBtnText}
						previousBtnTextStyle={styles.prevBtnText}
						label="Payment"
						onSubmit={orderComplete}
					>
						<View style={styles.stepperContainer}>
							<Card style={{ borderRadius: 10, marginTop: 30 }}>
								<CardItem style={styles.cardHeader} header>
									<Text style={{ ...Typography.title }}>Payment</Text>
								</CardItem>
								<View>
									{radioItem.map((data, key) => {
										return (
											<ListItem key={key}>
												<Left>
													<View style={styles.imageContainer}>
														<Image
															style={styles.radioBtnImage}
															source={data.image}
														/>
													</View>
													<Text>{data.label}</Text>
												</Left>
												<Right>
													<Radio
														onPress={() => setRadioValue(data.value)}
														color={Colors.primary}
														selectedColor={Colors.primary}
														selected={data.value === radioValue}
													/>
												</Right>
											</ListItem>
										);
									})}
								</View>
							</Card>
							<Card
								style={{ borderRadius: 10, marginTop: 30, marginBottom: 30 }}
							>
								<CardItem style={styles.cardHeader} header>
									<Text style={{ ...Typography.title }}>Order Summary</Text>
								</CardItem>
								<View style={globalStyles.container}>
									<View style={[styles.flexContent, styles.padding]}>
										<View>
											<Text style={{ ...Typography.bodyText }}>Total MRP</Text>
										</View>
										<View>
											<Text style={{ ...Typography.bodyText }}>
												<Feather name="dollar-sign" size={12} />
												1000
											</Text>
										</View>
									</View>
									<View style={[styles.flexContent, styles.padding]}>
										<View>
											<Text style={{ ...Typography.bodyText }}>Discount</Text>
										</View>
										<View>
											<Text
												style={{
													...Typography.bodyText,
												}}
											>
												- <Feather name="dollar-sign" size={12} />
												100
											</Text>
										</View>
									</View>
									<View style={[styles.flexContent, styles.padding]}>
										<View>
											<Text style={{ ...Typography.bodyText }}>Tax</Text>
										</View>
										<View>
											<Text style={{ ...Typography.bodyText }}>
												<Feather name="dollar-sign" size={12} />
												10
											</Text>
										</View>
									</View>
								</View>
								<CardItem style={styles.cardFooter} footer>
									<View style={[styles.flexContent]}>
										<View>
											<Text style={{ ...Typography.title }}>Total</Text>
										</View>
										<View>
											<Text style={{ ...Typography.title }}>
												<Feather name="dollar-sign" size={16} /> 910
											</Text>
										</View>
									</View>
								</CardItem>
							</Card>
						</View>
					</ProgressStep>
				</ProgressSteps>
				{/* End Steps */}
				<View style={{ marginBottom: 100 }}></View>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	nextBtn: {
		height: 56,
		justifyContent: "center",
		paddingHorizontal: 30,
		backgroundColor: Colors.primary,
		borderRadius: 10,
	},
	nextBtnText: {
		...Typography.title,
		color: Colors.white,
	},
	prevBtn: {
		height: 56,
		justifyContent: "center",
		paddingHorizontal: 30,
		backgroundColor: Colors.grayThin,
		borderRadius: 10,
	},
	prevBtnText: {
		...Typography.title,
		color: Colors.grayDark,
	},
	inputBoxRegular: {
		borderRadius: 14,
		paddingLeft: 20,
		height: 56,
		backgroundColor: Colors.input,
		borderTopWidth: 0,
		borderBottomWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		marginBottom: 30,
	},
	cardHeader: {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		borderBottomWidth: 1,
		borderColor: Colors.grayLight,
	},
	cardFooter: {
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderTopWidth: 1,
		borderColor: Colors.grayLight,
	},
	flexContent: {
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "row",
		flex: 1,
	},
	padding: {
		paddingVertical: 5,
	},
	inputBoxRegular: {
		borderRadius: 14,
		paddingLeft: 20,
		height: 56,
		backgroundColor: Colors.input,
		borderTopWidth: 0,
		borderBottomWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		marginBottom: 30,
		marginTop: 10,
	},
	label: {
		...Typography.bodyText,
		fontSize: 16,
	},
	stepperContainer: {
		...globalStyles.container,
		marginTop: 20,
	},
	addressRow: {
		display: "flex",
		flexDirection: "row",
	},
	radioBtnImage: {
		width: 20,
		height: 20,
		resizeMode: "contain",
	},
	imageContainer: {
		borderColor: Colors.grayLight,
		margin: 10,
		borderWidth: 1,
		backgroundColor: Colors.white,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 5,
		marginRight: 10,
		padding: 8,
	},
});
