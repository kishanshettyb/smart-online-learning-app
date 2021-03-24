import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors, Typography } from "../styles/index";
import { useNavigation } from "@react-navigation/native";
import GradientButton from "react-native-gradient-buttons";
import { StyleSheet, ImageBackground } from "react-native";

export function OrderConfirmedCard(props) {
	const navigation = useNavigation();

	return (
		<>
			<ImageBackground source={props.bgImage} style={styles.bgImage}>
				<View style={styles.orderConfirmedCard}>
					<View style={styles.roundCheckIcon}>
						<MaterialIcons name={props.icon} color={Colors.primary} size={56} />
					</View>
					<Text style={{ ...Typography.title }}>{props.title}</Text>
					<Text style={{ ...Typography.bodyText }}>{props.subTitle}</Text>
					<View style={styles.btnWrapper}>
						<GradientButton
							text={props.ctaBtnName}
							textStyle={styles.btn}
							gradientBegin={Colors.primary}
							gradientEnd={Colors.secondary}
							gradientDirection="diagonal"
							height={56}
							width={200}
							radius={12}
							impact
							impactStyle="Light"
							onPressAction={() => navigation.navigate(props.cta)}
						/>
					</View>
				</View>
			</ImageBackground>
		</>
	);
}

const styles = StyleSheet.create({
	orderConfirmedCard: {
		justifyContent: "center",
		alignItems: "center",
		padding: 100,
		borderRadius: 20,
	},
	btn: { fontSize: 18, fontFamily: "Poppins_semi_bold" },
	btnWrapper: {
		justifyContent: "space-evenly",
		alignItems: "center",
		marginVertical: 25,
	},
	bgImage: {
		width: "100%",
		resizeMode: "cover",
		height: 400,
		backgroundColor: Colors.white,
		marginTop: 200,
		borderRadius: 20,
	},
	roundCheckIcon: {
		width: 100,
		height: 100,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 2,
		borderRadius: 100,
		borderColor: Colors.primary,
		marginBottom: 30,
	},
});

// props type
OrderConfirmedCard.propTypes = {
	title: PropTypes.string.isRequired,
	cta: PropTypes.string.isRequired,
	ctaBtnName: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	bgImage: PropTypes.oneOfType([
		PropTypes.shape({
			uri: PropTypes.string,
			headers: PropTypes.objectOf(PropTypes.string),
		}),
		PropTypes.number,

		PropTypes.arrayOf(
			PropTypes.shape({
				uri: PropTypes.string,
				width: PropTypes.number,
				height: PropTypes.number,
				headers: PropTypes.objectOf(PropTypes.string),
			})
		),
	]),
};

// Default values for props
OrderConfirmedCard.defaultProps = {
	title: "Order",
	subTitle: "Order NO",
	ctaBtnName: "Go Back",
	cta: "Home",
	icon: "check",
	bgImage: require("../assets/img/blaster.png"),
};
