import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "native-base";
import { Typography, Colors } from "../styles";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
export function ImageCard(props) {
	const navigation = useNavigation();

	return (
		<TouchableOpacity onPress={() => navigation.navigate(props.cta)}>
			<ImageBackground
				source={props.bgImage}
				style={styles.imgBackground}
				imageStyle={{ borderRadius: 20 }}
			>
				<LinearGradient
					colors={[
						"rgba(255, 255, 255, 0)",
						"rgba(0, 0, 0, 0.49)",
						" rgba(0, 0, 0, 1)",
					]}
					style={styles.linearGradient}
				>
					<View style={styles.content}>
						<Text
							numberOfLines={2}
							ellipsizeMode="tail"
							style={{
								...Typography.title,
								color: Colors.white,
								flex: 1,
								flexWrap: "wrap",
							}}
						>
							{props.title}
						</Text>
						<Text
							style={{
								...Typography.bodyText,
								color: Colors.white,
								paddingTop: 5,
							}}
						>
							{props.subTitle}
						</Text>
					</View>
				</LinearGradient>
			</ImageBackground>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	linearGradient: {
		width: "100%",
		height: "100%",
		borderRadius: 20,
	},
	imgBackground: {
		height: 185,
		width: 250,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderTopRightRadius: 20,
		borderTopRightRadius: 20,
		marginRight: 20,
	},
	content: {
		position: "absolute",
		bottom: 30,
		left: 30,
		width: 190,
	},
});

// props type
ImageCard.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	cta: PropTypes.string.isRequired,
	bgImage: PropTypes.oneOfType([
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
ImageCard.defaultProps = {
	title: "",
	subTitle: "",
	cta: "Home",
	bgImage: require("../assets/img/courses/webdesigning.jpg"),
};
