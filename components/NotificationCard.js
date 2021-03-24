import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "native-base";
import { Feather } from "@expo/vector-icons";
import { Colors, Typography } from "../styles";
import { Image, StyleSheet } from "react-native";
import globalStyles from "../styles/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

export function NotificationCard(props) {
	return (
		<View style={styles.notificationCard}>
			<View>
				<Image style={styles.notificationImage} source={props.image} />
				<Text
					numberOfLines={1}
					ellipsizeMode="tail"
					style={{ ...Typography.title, paddingLeft: 40, width: 200 }}
				>
					{props.title}
				</Text>
				<Text
					numberOfLines={1}
					ellipsizeMode="tail"
					style={{ ...Typography.bodyText, paddingLeft: 40, width: 200 }}
				>
					{props.subTitle}
				</Text>
			</View>
			<View>
				<View style={styles.iconSection}>
					<TouchableOpacity
						style={styles.errorBtn}
						onPress={() => {
							alert("Cancel button pressed ");
						}}
					>
						<Feather color={Colors.error} name="x" size={18} />
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.successBtn}
						onPress={() => {
							alert("Check button pressed ");
						}}
					>
						<Feather color={Colors.success} name="check" size={18} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	notificationCard: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: Colors.white,
		alignItems: "center",
		paddingVertical: 15,
		paddingRight: 15,
		borderRadius: 14,
		marginLeft: 30,
		height: 88,
		elevation: 3,
		marginBottom: 25,
		...globalStyles.shadowSm,
	},
	notificationImage: {
		width: 60,
		height: 60,
		borderRadius: 10,
		top: -6,
		left: -30,
		position: "absolute",
		resizeMode: "cover",
	},
	iconSection: {
		display: "flex",
		flexDirection: "row",
	},
	errorBtn: {
		backgroundColor: "#FAE5E5",
		width: 40,
		height: 40,
		borderRadius: 12,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10,
	},
	successBtn: {
		backgroundColor: "#E5F5E6",
		width: 40,
		height: 40,
		borderRadius: 12,
		justifyContent: "center",
		alignItems: "center",
	},
});

// props type
NotificationCard.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
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
NotificationCard.defaultProps = {
	transparent: true,
	title: "",
	subTitle: "",
	image: require("../assets/img/logo.png"),
};
