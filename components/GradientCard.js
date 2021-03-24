import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "native-base";
import { Typography, Colors } from "../styles";
import { StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import globalStyles from "../styles/globalStyles";

export function GradientCard(props) {
	const navigation = useNavigation();

	return (
		<TouchableOpacity onPress={() => navigation.navigate(props.cta)}>
			<View style={styles.gradientCard}>
				<LinearGradient
					colors={[props.bgColorPrimary, props.bgColorSecondary]}
					style={styles.background}
				/>
				<Text
					numberOfLines={2}
					ellipsizeMode="tail"
					style={{ ...Typography.title, color: Colors.white }}
				>
					{props.title}
				</Text>
				<Text
					numberOfLines={1}
					ellipsizeMode="tail"
					style={{ ...Typography.bodyText, color: Colors.white }}
				>
					{props.subTitle}
				</Text>
				<View style={styles.centerAlign}>
					<Image style={styles.image} source={props.image} />
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	gradientCard: {
		padding: 20,
		borderRadius: 10,
		marginBottom: 30,
		height: 220,
		...globalStyles.shadow,
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 220,
		borderRadius: 10,
	},
	image: {
		resizeMode: "contain",
		width: 130,
		height: 130,
	},
	centerAlign: {
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
});

// props type
GradientCard.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	cta: PropTypes.string.isRequired,
	bgColorPrimary: PropTypes.string.isRequired,
	bgColorSecondary: PropTypes.string.isRequired,
	image: PropTypes.oneOfType([
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
GradientCard.defaultProps = {
	transparent: true,
	title: "",
	subTitle: "",
	cta: "Home",
	bgColorPrimary: Colors.primary,
	bgColorSecondary: Colors.secondary,
	image: require("../assets/img/logo.png"),
};
