import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "native-base";
import { StyleSheet } from "react-native";
import { Colors, Typography } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function SectionHeading(props) {
	const navigation = useNavigation();

	return (
		<View style={styles.sectionHeading}>
			<View>
				<Text style={{ ...Typography.title }}>{props.heading}</Text>
			</View>
			<View>
				<TouchableOpacity onPress={() => navigation.navigate(props.btnLink)}>
					<Text style={{ ...Typography.title, color: Colors.primary }}>
						{props.btnName}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	sectionHeading: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingTop: 50,
		paddingBottom: 30,
	},
});

// props type
SectionHeading.propTypes = {
	heading: PropTypes.string.isRequired,
	btnName: PropTypes.string.isRequired,
	btnLink: PropTypes.string.isRequired,
};

// Default values for props
SectionHeading.defaultProps = {
	heading: "",
	btnName: "",
	btnLink: "",
};
