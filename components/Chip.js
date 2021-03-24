import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "native-base";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Typography, Colors } from "../styles";

export function Chip(props) {
	return (
		<View style={styles.chip}>
			<Text style={{ ...Typography.bodyText, color: Colors.grayDark }}>
				<Feather name={props.iconName} color={Colors.grayDark} size={12} />{" "}
				{props.chipName}
			</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	chip: {
		borderRadius: 20,
		borderWidth: 1,
		borderColor: Colors.grayDark,
		alignItems: "flex-start",
		paddingHorizontal: 15,
		height: 27,
		justifyContent: "center",
		alignSelf: "flex-start",
		marginBottom: 15,
		marginRight: 15,
	},
});

Chip.propTypes = {
	iconName: PropTypes.string.isRequired,
	iconName: PropTypes.string.isRequired,
};

// Default values for props
Chip.defaultProps = {
	iconName: "star",
	chipName: "This is simple chip",
};
