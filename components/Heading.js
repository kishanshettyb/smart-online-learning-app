import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "native-base";
import { StyleSheet } from "react-native";
import { Typography, Colors } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Heading(props) {
	const navigation = useNavigation();

	return (
		<View style={styles.heading}>
			<View>
				<Text style={{ ...Typography.title, marginBottom: 15 }}>
					{props.title}
				</Text>
			</View>
			<View>
				<TouchableOpacity onPress={() => navigation.navigate(props.cta)}>
					<Text style={styles.link}>{props.ctaBtnName}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	heading: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	link: {
		...Typography.bodyText,
		color: Colors.primary,
		fontSize: 18,
	},
});

// props type
Heading.propTypes = {
	title: PropTypes.string.isRequired,
	cta: PropTypes.string.isRequired,
	ctaBtnName: PropTypes.string.isRequired,
};

// Default values for props
Heading.defaultProps = {
	title: "Heading",
	cta: "Home",
	ctaBtnName: "Edit",
};
