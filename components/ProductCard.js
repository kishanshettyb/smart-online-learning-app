import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "native-base";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Typography, Colors } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

export function ProductCard(props) {
	const navigation = useNavigation();

	return (
		<View style={styles.productCard}>
			<TouchableOpacity onPress={() => navigation.navigate(props.cta)}>
				<Image style={styles.image} source={props.image} />
				<Text
					numberOfLines={2}
					ellipsizeMode="tail"
					style={{ ...Typography.title, paddingVertical: 10, height: 75 }}
				>
					{props.title}
				</Text>
				<Text style={{ ...Typography.bodyText }}>{props.subTitle}</Text>
				<View>
					<Text style={{ ...Typography.smallTitleBold, color: Colors.warning }}>
						{props.ratings}
						<Text>
							{" "}
							<Ionicons name="md-star" size={12} color={Colors.warning} />
							<Ionicons name="md-star" size={12} color={Colors.warning} />
							<Ionicons name="md-star" size={12} color={Colors.warning} />
							<Ionicons name="md-star" size={12} color={Colors.warning} />
							<Ionicons name="md-star-half" size={12} color={Colors.warning} />
						</Text>
					</Text>
				</View>
				<Text
					numberOfLines={1}
					ellipsizeMode="tail"
					style={{ ...Typography.title, paddingVertical: 5 }}
				>
					<Feather color={Colors.black} name="dollar-sign" size={18} />
					{props.salePrice}{" "}
					<Text
						numberOfLines={1}
						ellipsizeMode="tail"
						style={{
							...Typography.title,
							paddingVertical: 10,
							color: Colors.placeholder,
							fontSize: 18,
							textDecorationLine: "line-through",
						}}
					>
						{" "}
						<Feather color={Colors.placeholder} name="dollar-sign" size={18} />
						{props.regularPrice}
					</Text>
				</Text>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	image: {
		height: 135,
		width: 200,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		borderTopRightRadius: 5,
		borderTopRightRadius: 5,
	},
	productCard: {
		width: 200,
		display: "flex",
		flexDirection: "row",
		marginRight: 20,
	},
});

// props type
ProductCard.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	cta: PropTypes.string.isRequired,
	salePrice: PropTypes.number.isRequired,
	regularPrice: PropTypes.number.isRequired,
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
ProductCard.defaultProps = {
	title: "",
	subTitle: "",
	cta: "Home",
	salePrice: 0.0,
	regularPrice: 0.0,
	image: require("../assets/img/courses/webdesigning.jpg"),
};
