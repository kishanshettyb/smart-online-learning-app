import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "native-base";
import { Colors, Typography } from "../styles";
import { StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function SearchListCard(props) {
	const navigation = useNavigation();

	return (
		<TouchableOpacity onPress={() => navigation.navigate(props.cta)}>
			<View style={styles.card}>
				<Image style={styles.image} source={props.image} />
				<View style={{ flex: 1 }}>
					<Text
						numberOfLines={2}
						ellipsizeMode="tail"
						style={{ ...Typography.title }}
					>
						{props.title}
					</Text>
					<Text style={{ ...Typography.bodyText }}>{props.author}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	card: {
		display: "flex",
		flexDirection: "row",
		marginVertical: 15,
		alignSelf: "flex-start",
		flexWrap: "nowrap",
		width: "100%",
		borderBottomColor: Colors.grayThin,
		borderBottomWidth: 1,
		paddingBottom: 30,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 10,
		marginRight: 15,
	},
});

// props type
SearchListCard.propTypes = {
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	cta: PropTypes.string.isRequired,
	courseImage: PropTypes.oneOfType([
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
SearchListCard.defaultProps = {
	title: "",
	author: "",
	cta: "Home",
	courseImage: require("../assets/img/courses/webdesigning.jpg"),
};
