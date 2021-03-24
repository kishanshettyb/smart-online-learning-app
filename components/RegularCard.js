import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "native-base";
import { Typography, Colors } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

export function RegularCard(props) {
	const navigation = useNavigation();

	return (
		<View style={styles.regularCard}>
			<TouchableOpacity onPress={() => navigation.navigate(props.cta)}>
				<Image style={styles.image} source={props.image} />
				<View style={styles.content}>
					<Text
						numberOfLines={2}
						ellipsizeMode="tail"
						style={{ ...Typography.title }}
					>
						{props.title}
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	image: {
		height: 160,
		maxWidth: 200,
		minWidth: "100%",
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		resizeMode: "cover",
	},
	regularCard: {
		backgroundColor: Colors.white,
		position: "relative",
		overflow: "hidden",
		maxWidth: 200,
		minWidth: "100%",
		height: 250,
		borderRadius: 10,
		marginBottom: 30,
	},
	content: {
		padding: 20,
	},
});

// props type
RegularCard.propTypes = {
	title: PropTypes.string.isRequired,
	cta: PropTypes.string.isRequired,
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
RegularCard.defaultProps = {
	title: "",
	cta: "Home",
	image: require("../assets/img/courses/webdesigning.jpg"),
};
