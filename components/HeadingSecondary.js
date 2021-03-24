import React from "react";
import PropTypes from "prop-types";
import { Typography } from "../styles";
import { View, Text } from "native-base";
import { StyleSheet } from "react-native";

export function HeadingSecondary(props) {
	return (
		<View>
			<Text style={{ ...Typography.title }}>{props.title}</Text>
			<Text style={{ ...Typography.bodyText }}>{props.subTitle}</Text>
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
});

// props type
HeadingSecondary.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
};

// Default values for props
HeadingSecondary.defaultProps = {
	title: "Title",
	subTitle: "Sub Title",
};
