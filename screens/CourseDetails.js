import React from "react";
import { lessons } from "../constants";
import { Feather } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";
import { Text, View, Container } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { HeadingWithButton, ListCard } from "../components";
import { Colors, Spacing, Typography } from "../styles/index";
import { StyleSheet, StatusBar, ImageBackground, FlatList } from "react-native";

export function CourseDetails() {
	return (
		<Container style={{ backgroundColor: Colors.input }}>
			<View>
				<ImageBackground
					source={require("../assets/img/courses/webdesigning.jpg")}
					style={styles.bgImage}
				>
					<LinearGradient
						colors={[Colors.overlay, Colors.overlay]}
						style={styles.background}
					>
						<StatusBar
							barStyle={"light-content"}
							translucent={false}
							backgroundColor={Colors.grayThin}
						/>
						<HeadingWithButton
							transparent={false}
							titleColor="white"
							btnType="whiteBtn"
						/>
						<View
							style={{
								paddingHorizontal: Spacing.base,
								position: "absolute",
								bottom: 0,
							}}
						>
							<View
								style={{
									backgroundColor: Colors.warning,
									height: 25,
									alignSelf: "flex-start",
									borderRadius: 5,
									justifyContent: "center",
									alignItems: "flex-start",
									paddingHorizontal: 15,
								}}
							>
								<Text
									style={{
										...Typography.smallTitle,
										color: Colors.white,
									}}
								>
									Web Designing
								</Text>
							</View>
							<Text
								numberOfLines={2}
								ellipsizeMode="tail"
								style={{
									...Typography.title,
									color: Colors.white,
									paddingTop: 10,
								}}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								sa s
							</Text>
							<View
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between",
									paddingVertical: 10,
								}}
							>
								<View>
									<Text
										style={{ ...Typography.smallTitle, color: Colors.white }}
									>
										20 Lesson
									</Text>
								</View>
								<View>
									<Text
										style={{ ...Typography.smallTitle, color: Colors.white }}
									>
										<Feather name="clock" size={12} color={Colors.white} /> 20
										Lesson
									</Text>
								</View>
							</View>
						</View>
					</LinearGradient>
				</ImageBackground>
				<View style={styles.container}>
					<Text style={{ ...Typography.title, paddingVertical: 15 }}>
						All Lessons
					</Text>
					<FlatList
						horizontal={false}
						showsHorizontalScrollIndicator={false}
						showsVerticalScrollIndicator={false}
						data={lessons}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<ListCard
								title={item.lessonName}
								subTitle={item.desc}
								image={item.image}
								cta={item.cta}
								ctaBtnName={item.ctaBtnName}
							/>
						)}
					/>
				</View>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: { ...globalStyles.container },
	bgImage: {
		width: "100%",
		height: 250,
		resizeMode: "cover",
		backgroundColor: null,
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 250,
	},
});
