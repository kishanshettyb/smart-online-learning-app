import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "native-base";
import { Feather } from "@expo/vector-icons";
import { Typography, Colors } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

export function ProfileCard(props) {
	const navigation = useNavigation();

	return (
		<View style={styles.profileCard}>
			<Text style={styles.title}>{props.title}</Text>
			<View style={styles.content}>
				<View>
					<Image style={styles.profilePic} source={props.profileImage} />
				</View>
				<View>
					{props.checkListData.map((item, index) => {
						return (
							<View key={item.id}>
								<Text style={{ paddingVertical: 2 }}>
									<Text>
										<Feather
											name={item.icon}
											size={12}
											color={Colors.primary}
										/>{" "}
										<Text style={{ ...Typography.bodyText }}>
											{item.listItem}
										</Text>
									</Text>
								</Text>
							</View>
						);
					})}
				</View>
			</View>
			<View>
				<TouchableOpacity onPress={() => navigation.navigate(props.cta)}>
					<Text style={styles.btn}>{props.ctaBtnName}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		...Typography.title,
		marginBottom: 15,
	},
	content: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	btn: {
		...Typography.bodyText,
		color: Colors.primary,
		textAlign: "center",
		marginTop: 15,
	},
	profileCard: {
		backgroundColor: Colors.white,
		borderRadius: 16,
		padding: 20,
	},
	profilePic: {
		width: 70,
		height: 70,
		borderRadius: 16,
		marginRight: 15,
	},
});

// propTypes
ProfileCard.propTypes = {
	title: PropTypes.string.isRequired,
	cta: PropTypes.string.isRequired,
	ctaBtnName: PropTypes.string.isRequired,
	checkListData: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			listItem: PropTypes.string.isRequired,
			icon: PropTypes.string.isRequired,
		})
	),
	profileImage: PropTypes.oneOfType([
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
ProfileCard.defaultProps = {
	title: "Created By:",
	cta: "Home",
	ctaBtnName: "View",
	checkListData: [
		{
			id: "1",
			listItem: "4.7 Average Ratings",
			icon: "star",
		},
		{
			id: "2",
			listItem: "50 Courses",
			icon: "file",
		},
		{
			id: "3",
			listItem: "12,000 Students",
			icon: "users",
		},
	],
	profileImage: require("../assets/img/profile.jpg"),
};
