import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "native-base";
import { Typography, Colors } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import globalStyles from "../styles/globalStyles";

export function ListCard(props) {
	const navigation = useNavigation();

	return (
		<View style={styles.listCard}>
			<View>
				<Image style={styles.image} source={props.image} />
			</View>
			<View>
				<Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
					{props.title}
				</Text>
				<Text numberOfLines={1} ellipsizeMode="tail" style={styles.subTitle}>
					{props.subTitle}
				</Text>
			</View>
			<View>
				<TouchableOpacity
					style={
						props.ctaBtnName == "Free"
							? styles.linkBtnWarning
							: styles.linkBtnPrimary
					}
					onPress={() => navigation.navigate(props.cta)}
				>
					<Text style={{ ...Typography.smallTitle, color: Colors.white }}>
						{props.ctaBtnName}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	listCard: {
		backgroundColor: Colors.white,
		padding: 10,
		borderRadius: 10,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 20,
		marginHorizontal: 2,
		// shadow
		elevation: 3,
		...globalStyles.shadowSm,
	},
	image: {
		borderRadius: 10,
		width: 50,
		height: 50,
		marginRight: 10,
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
ListCard.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	cta: PropTypes.string.isRequired,
	ctaBtnName: PropTypes.string.isRequired,
};

// Default values for props
ListCard.defaultProps = {
	title: "",
	subTitle: "",
	cta: "Home",
	ctaBtnName: "Free",
};
