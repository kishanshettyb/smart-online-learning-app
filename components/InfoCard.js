import { View, Text } from "native-base";
import React from "react";
import { Typography } from "../styles/index";
import { StyleSheet } from "react-native";
import { Colors } from "../styles/";
import PropTypes from "prop-types";

export function InfoCard(props) {
	return (
		<View style={styles.infoCard}>
			<Text
				numberOfLines={2}
				ellipsizeMode="tail"
				style={{ ...Typography.smallTitle, color: Colors.grayLight }}
			>
				{props.content}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	infoCard: {
		backgroundColor: Colors.white,
		width: "100%",
		paddingVertical: 10,
		paddingHorizontal: 30,
		height: 80,
		justifyContent: "center",
		borderLeftWidth: 4,
		borderLeftColor: Colors.primary,
		borderRadius: 5,
	},
});

// props type
InfoCard.propTypes = {
	content: PropTypes.string.isRequired,
};

// Default values for props
InfoCard.defaultProps = {
	content: " ",
};
