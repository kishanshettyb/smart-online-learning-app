import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "native-base";
import { Feather } from "@expo/vector-icons";
import { Typography, Colors } from "../styles";
import { StyleSheet, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function CartItem(props) {
	return (
		<View style={styles.cartListCard}>
			<View>
				<Image
					style={styles.image}
					source={require("../assets/img/courses/webdesigning.jpg")}
				/>
			</View>
			<View>
				<Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
					{props.title}
				</Text>
				<Text numberOfLines={1} ellipsizeMode="tail" style={styles.subTitle}>
					{props.subTitle}
				</Text>
				<TouchableOpacity onPress={props.onClick}>
					<Text style={{ ...Typography.bodyText, color: Colors.error }}>
						<Feather name="trash" /> Remove
					</Text>
				</TouchableOpacity>
			</View>
			<View>
				<Text>
					<Feather name="dollar-sign" size={16} /> 100
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	cartListCard: {
		backgroundColor: "transparent",
		paddingBottom: 25,
		borderRadius: 10,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottomColor: Colors.grayLight,
		borderBottomWidth: 1,
		marginTop: 25,
	},
	image: {
		borderRadius: 10,
		width: 60,
		height: 60,
		marginRight: 15,
	},
	title: {
		...Typography.title,
		width: Dimensions.get("window").width - 190,
	},
	subTitle: {
		...Typography.bodyText,
		width: Dimensions.get("window").width - 190,
	},
	linkBtnWarning: {
		backgroundColor: Colors.warning,
		borderRadius: 5,
		paddingVertical: 5,
		paddingHorizontal: 10,
		marginRight: 10,
		width: 50,
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		...Typography.smallTitleBold,
	},
	linkBtnPrimary: {
		backgroundColor: Colors.primary,
		borderRadius: 5,
		paddingVertical: 5,
		paddingHorizontal: 10,
		marginRight: 10,
		width: 50,
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		...Typography.smallTitleBold,
	},
});

// props type
CartItem.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
};

// Default values for props
CartItem.defaultProps = {
	title: "",
	subTitle: "",
};
