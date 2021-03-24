import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "native-base";
import { Typography, Colors } from "../styles";
import { StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export function Reviews(props) {
	return (
		<View>
			<View style={styles.starView}>
				{props.rating == 5 ? (
					<>
						<MaterialIcons color={Colors.warning} size={16} name="star" />
						<MaterialIcons color={Colors.warning} size={16} name="star" />
						<MaterialIcons color={Colors.warning} size={16} name="star" />
						<MaterialIcons color={Colors.warning} size={16} name="star" />
						<MaterialIcons color={Colors.warning} size={16} name="star" />
					</>
				) : props.rating == 4 ? (
					<>
						<MaterialIcons color={Colors.warning} size={16} name="star" />
						<MaterialIcons color={Colors.warning} size={16} name="star" />
						<MaterialIcons color={Colors.warning} size={16} name="star" />
						<MaterialIcons color={Colors.warning} size={16} name="star" />
					</>
				) : props.rating == 3 ? (
					<>
						<MaterialIcons color={Colors.warning} size={16} name="star" />
						<MaterialIcons color={Colors.warning} size={16} name="star" />
						<MaterialIcons color={Colors.warning} size={16} name="star" />
					</>
				) : props.rating == 2 ? (
					<>
						<MaterialIcons color={Colors.warning} size={16} name="star" />
						<MaterialIcons color={Colors.warning} size={16} name="star" />
					</>
				) : (
					<>
						<MaterialIcons color={Colors.warning} size={16} name="star" />
					</>
				)}
			</View>
			<Text style={{ ...Typography.bodyText }}>{props.review}</Text>
			<View style={styles.reviewBody}>
				<View>
					<Image style={styles.avatar} source={props.profilePic} />
				</View>
				<View>
					<Text style={styles.reviewFootText}>{props.name}</Text>
				</View>
				<View>
					<Text style={styles.reviewFootText}>{props.date}</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	// feedback
	avatar: {
		width: 35,
		height: 35,
		borderRadius: 50,
	},
	reviewBody: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingTop: 5,
		paddingBottom: 10,
		borderBottomColor: Colors.grayLight,
		borderBottomWidth: 1,
		marginBottom: 0,
	},
	starView: {
		display: "flex",
		flexDirection: "row",
		marginVertical: 10,
	},
	reviewFootText: {
		...Typography.smallTitle,
		paddingHorizontal: 10,
		color: Colors.grayLight,
	},
});

// props type
Reviews.propTypes = {
	rating: PropTypes.number.isRequired,
	review: PropTypes.string.isRequired,
	profilePic: PropTypes.oneOfType([
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
	name: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
};

// Default values for props
Reviews.defaultProps = {
	rating: 0,
	review: "No reviews",
	profilePic: require("../assets/img/profile.jpg"),
	name: "",
	date: "",
};
