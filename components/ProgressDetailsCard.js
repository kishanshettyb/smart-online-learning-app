import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import globalStyles from "../styles/globalStyles";
import * as Progress from "react-native-progress";
import { Colors, Typography } from "../styles/index";
import { StyleSheet, Image, Dimensions } from "react-native";

export function ProgressDetailsCard(props) {
	return (
		<View style={styles.progressCard}>
			<View style={styles.content}>
				<View>
					<Image style={styles.cardImage} source={props.progressCardImage} />
				</View>
				<View>
					<Text style={{ ...Typography.smallTitle, marginBottom: 5 }}>
						{props.progressCardTitle}
					</Text>
					<Text style={{ ...Typography.bodyText }}>
						{props.progressCardDesc}
					</Text>
				</View>
			</View>
			<View style={styles.progressBar}>
				<View>
					<Text style={{ ...Typography.bodyText, color: Colors.primary }}>
						{props.progressBarCompletedValue} Completed
					</Text>
				</View>
				<View>
					<Text style={{ ...Typography.bodyText, color: Colors.grayLight }}>
						{props.progressBarTotalValue} Lessons
					</Text>
				</View>
			</View>
			<Progress.Bar
				progress={props.progressBarValue}
				width={Dimensions.get("window").width - 70}
				color={props.progressBarColor}
				height={8}
				borderWidth={0}
				unfilledColor={Colors.primaryLight}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	progressCard: {
		backgroundColor: Colors.white,
		padding: 20,
		borderRadius: 10,
		marginBottom: 20,
		elevation: 3,
		margin: 2,
		...globalStyles.shadowSm,
	},
	cardImage: {
		width: 40,
		height: 40,
		borderRadius: 10,
		marginRight: 15,
	},
	content: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		marginBottom: 20,
	},
	progressBar: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 5,
	},
});

// props type
ProgressDetailsCard.propTypes = {
	progressCardTitle: PropTypes.string.isRequired,
	progressCardDesc: PropTypes.string.isRequired,
	progressBarColor: PropTypes.string.isRequired,
	progressBarTotalValue: PropTypes.number.isRequired,
	progressBarCompletedValue: PropTypes.number.isRequired,
	progressBarValue: PropTypes.number.isRequired,
	progressCardImage: PropTypes.oneOfType([
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
ProgressDetailsCard.defaultProps = {
	progressCardTitle: "Title here",
	progressCardDesc: "Description here",
	progressBarColor: Colors.error,
	progressBarTotalValue: 100,
	progressBarCompletedValue: 50,
	progressBarValue: 0.1,
	progressCardImage: require("../assets/img/courses/webdesigning.jpg"),
};
