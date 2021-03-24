import React, { Component } from "react";
import {
	Text,
	View,
	SafeAreaView,
	StyleSheet,
	ImageBackground,
	Dimensions,
	Platform,
	Image,
} from "react-native";
import { Colors, Typography } from "../styles";
import Carousel from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";

export class CarouselCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeIndex: 0,
			carouselItems: [
				{
					title: "Data Science",
					text: "40 Cources",
					bgColor: Colors.error,
					bgImage: require("../assets/img/sliders/datascience.jpeg"),
					cta: "CourseMoreDetails",
				},
				{
					title: "Business",
					text: "20 COurses",
					bgColor: Colors.info,
					bgImage: require("../assets/img/sliders/business.jpeg"),
					cta: "CourseMoreDetails",
				},
				{
					title: "Programming",
					text: "60 Courses",
					bgColor: Colors.primary,
					bgImage: require("../assets/img/courses/webdesigning.jpg"),
					cta: "CourseMoreDetails",
				},
				{
					title: "Artifical Intelligence",
					text: "80 Courses",
					bgColor: Colors.black,
					bgImage: require("../assets/img/sliders/ai.jpeg"),
					cta: "CourseMoreDetails",
				},
				{
					title: "Cloud Computing",
					text: "24 Cources",
					bgColor: Colors.secondary,
					bgImage: require("../assets/img/sliders/cloud.jpeg"),
					cta: "CourseMoreDetails",
				},
				{
					title: "Autonomus System",
					text: "50 Courses",
					bgColor: Colors.info,
					bgImage: require("../assets/img/sliders/autonomus.jpeg"),
					cta: "CourseMoreDetails",
				},
			],
		};
	}

	_renderItem({ item, index }) {
		return (
			<View style={styles.card}>
				<ImageBackground
					source={item.bgImage}
					style={styles.imgBackground}
					imageStyle={{ borderRadius: 25 }}
				>
					<LinearGradient
						start={{ x: 0.0, y: 0.1 }}
						end={{ x: 0.0, y: 0.9 }}
						colors={["transparent", item.bgColor]}
						style={styles.background}
					/>
					<View style={styles.centerAlign}>
						<TouchableOpacity>
							<Image
								style={styles.play}
								source={require("../assets/img/play-circle.png")}
							/>
						</TouchableOpacity>
						<View style={[styles.content]}>
							<Text style={{ ...Typography.title, color: Colors.white }}>
								{item.title}
							</Text>
							<Text style={{ ...Typography.bodyText, color: Colors.grayThin }}>
								{item.text}
							</Text>
						</View>
					</View>
				</ImageBackground>
			</View>
		);
	}

	render() {
		return (
			<SafeAreaView
				style={{ flex: 1, backgroundColor: "transparent" }}
				onPress={() => navigation.navigate("Courses")}
			>
				<View
					style={{
						flex: 1,
						flexDirection: "row",
						justifyContent: "center",
					}}
				>
					<Carousel
						layout={"stack"}
						firstItem={2}
						ref={(ref) => (this.carousel = ref)}
						data={this.state.carouselItems}
						sliderWidth={300}
						itemWidth={300}
						renderItem={this._renderItem}
						onSnapToItem={(index) => this.setState({ activeIndex: index })}
					/>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: Colors.primary,
		borderRadius: 25,
		height: 380,
		width: "100%",
		...Platform.select({
			ios: {
				marginLeft: 0,
			},
			android: {
				marginLeft: 40,
			},
		}),
		marginTop: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 380,
		borderRadius: 25,
	},
	imgBackground: {
		height: "100%",
		width: "100%",
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
	centerAlign: {
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		flex: 1,
	},
	content: {
		width: Dimensions.get("window").width - 150,
		height: 60,
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		borderWidth: 1,
		borderColor: Colors.grayThin,
		marginTop: 30,
		borderRadius: 8,
	},
	play: {
		width: 70,
		height: 70,
		marginTop: 100,
	},
});
