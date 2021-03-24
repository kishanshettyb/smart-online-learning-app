import React from "react";
import PropTypes from "prop-types";
import { View } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

export function VideoPoster(props) {
	const navigation = useNavigation();

	return (
		<View style={{ alignItems: "center" }}>
			<Image style={styles.videoBg} source={props.posterImage} />
			<TouchableOpacity
				style={styles.playIcon}
				onPress={() => navigation.navigate(props.cta)}
			>
				<Image
					style={styles.playIconImage}
					source={require("../assets/img/play-circle.png")}
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	videoBg: {
		width: "100%",
		height: 350,
		borderRadius: 16,
	},
	playIcon: {
		position: "absolute",
		top: 280 / 2,
	},
	playIconImage: {
		width: 70,
		height: 70,
	},
});

// props type
VideoPoster.propTypes = {
	posterImage: PropTypes.oneOfType([
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
	cta: PropTypes.string.isRequired,
};

// Default values for props
VideoPoster.defaultProps = {
	posterImage: require("../assets/img/courses/webdesigning.jpg"),
	cta: "VideoPlayer",
};
