import React from "react";
import { View } from "native-base";
import data from "../constants/featured";
import { FONTS, COLORS } from "../theme";
import { FontAwesome } from "@expo/vector-icons";
import { Grid, Col } from "react-native-easy-grid";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, StyleSheet, Image, FlatList } from "react-native";

export default function FeaturedCourses() {
	return (
		<FlatList
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			data={data}
			keyExtractor={(item) => item.title}
			renderItem={({ item }) => (
				<View style={styles.featureCard}>
					<Image style={styles.image} source={item.image} />
					<Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
						{item.title}
					</Text>
					<Text numberOfLines={1} ellipsizeMode="tail" style={styles.subTitle}>
						{item.subtitle}
					</Text>
					<Grid style={{ alignSelf: "flex-start" }}>
						<Col style={{ width: 30 }}>
							<Text style={styles.ratingText}>{item.review}</Text>
						</Col>
						<Col>
							<Text style={styles.icons}>
								<MaterialIcons name="star" size={12} color={COLORS.warning} />
								<MaterialIcons name="star" size={12} color={COLORS.warning} />
								<MaterialIcons name="star" size={12} color={COLORS.warning} />
								<MaterialIcons name="star" size={12} color={COLORS.warning} />
								<MaterialIcons
									name="star-half"
									size={12}
									color={COLORS.warning}
								/>
							</Text>
						</Col>
					</Grid>
					<Grid style={{ alignSelf: "flex-start" }}>
						<Col size={1}>
							<Text style={styles.price}>
								<FontAwesome name="dollar" size={15} color="black" />{" "}
								{item.discountPrice}
							</Text>
						</Col>
						<Col size={3}>
							<Text style={styles.discountPrice}>
								<FontAwesome name="dollar" size={12} color={COLORS.gray} />{" "}
								{item.price}
							</Text>
						</Col>
					</Grid>
				</View>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 200,
		height: 135,
		borderRadius: 5,
		marginRight: 20,
		marginBottom: 20,
	},
	featureCard: {
		width: 200,
		marginRight: 20,
	},
	icons: {
		paddingTop: 7,
		alignSelf: "flex-start",
	},
	title: {
		...FONTS.subTitle,
		marginBottom: 5,
	},
	price: {
		...FONTS.subTitle,
		alignSelf: "flex-start",
	},
	discountPrice: {
		...FONTS.baseFontRegular,
		color: COLORS.grayLight,
		fontFamily: "Poppins_semi_bold",
		textDecorationLine: "line-through",
		alignSelf: "flex-start",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 2,
	},
	subTitle: {
		...FONTS.baseFontRegular,
	},
	ratingText: {
		paddingTop: 5,
		paddingBottom: 5,
		...FONTS.baseFontBold,
		color: COLORS.warning,
	},
});
