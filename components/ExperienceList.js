import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "native-base";
import { StyleSheet, Image } from "react-native";
import { Colors, Typography } from "../styles/index";

export function ExperienceList(props) {
	return (
		<View style={styles.experienceList}>
			<View>
				<View style={styles.imageContainer}>
					<Image style={styles.companyImage} source={props.companyImage} />
				</View>
			</View>
			<View>
				<Text style={{ ...Typography.title, paddingTop: 10, paddingBottom: 2 }}>
					{props.designation}
				</Text>
				<Text style={styles.subTitle}>{props.companyName}</Text>
				<Text style={{ ...Typography.bodyText }}>{props.experience}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	experienceList: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		flexDirection: "row",
		marginTop: 30,
	},
	companyImage: {
		width: 32,
		height: 32,
		margin: 10,
	},
	imageContainer: {
		borderColor: Colors.grayLight,
		margin: 10,
		borderWidth: 2,
		alignSelf: "center",
		borderRadius: 5,
	},
	subTitle: {
		...Typography.smallTitleBold,
		fontSize: 16,
		color: Colors.grayLight,
		paddingBottom: 10,
	},
});

// props type
ExperienceList.propTypes = {
	companyName: PropTypes.string.isRequired,
	designation: PropTypes.string.isRequired,
	experience: PropTypes.string.isRequired,
	companyImage: PropTypes.oneOfType([
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
ExperienceList.defaultProps = {
	companyName: "Company Name here",
	designation: "Designation Here",
	experience: "0 Experience",
	companyImage: require("../assets/img/google.png"),
};
