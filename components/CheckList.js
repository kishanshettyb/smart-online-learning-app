import React from "react";
import PropTypes from "prop-types";
import { Text } from "native-base";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Typography, Colors } from "../styles";

export function CheckList(props) {
	return (
		<>
			<Text>
				<Feather name={props.icon} size={12} color={Colors.primary} />{" "}
				<Text style={styles.list}>{props.listItem}</Text>
			</Text>
		</>
	);
}

const styles = StyleSheet.create({
	list: { ...Typography.bodyText },
});

// props type
CheckList.propTypes = {
	icon: PropTypes.string.isRequired,
	listItem: PropTypes.string.isRequired,
};

// Default values for props
CheckList.defaultProps = {
	icon: "check-circle",
	listItem: "List Item",
};
