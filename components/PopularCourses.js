import React from "react";
import { View } from "native-base";
import data from "../constants/courses";
import { COLORS, FONTS } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet, FlatList, ImageBackground } from "react-native";

export default function PopularCourses() {
	return (
		<FlatList
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			data={data}
			keyExtractor={(item) => item.title}
			renderItem={({ item }) => (
				<View style={styles.imageConatiner}>
					<ImageBackground
						source={item.image}
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
							<Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
								{item.title}
							</Text>
							<Text style={styles.subTitle}>{item.subTitle}</Text>
						</LinearGradient>
					</ImageBackground>
				</View>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	image: {
		height: 185,
		width: 250,
		borderRadius: 10,
	},

	imageConatiner: {
		marginRight: 20,
		height: 205,
		width: 250,
	},
	title: {
		...FONTS.smallTitle,
		color: COLORS.white,
		position: "absolute",
		bottom: 55,
		left: 30,
		width: "80%",
	},
	subTitle: {
		...FONTS.baseFontRegular,
		position: "absolute",
		left: 30,
		bottom: 30,
	},
	imgBackground: {
		height: 185,
		width: 250,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderTopRightRadius: 20,
		borderTopRightRadius: 20,
	},
	linearGradient: {
		width: "100%",
		height: "100%",
		borderRadius: 20,
	},
});
