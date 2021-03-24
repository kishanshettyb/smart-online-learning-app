import React from "react";
import { courses } from "../constants";
import { StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Grid, Col, Row } from "react-native-easy-grid";
import CustomCheckBox from "../components/CustomCheckBox";
import { ScrollView } from "react-native-gesture-handler";
import { Colors, Spacing, Typography } from "../styles/index";
import { HeadingWithButton, RegularCard } from "../components";
import { Container, View, Tab, Tabs, DefaultTabBar } from "native-base";

export function CoursesTabScreen({ navigation }) {
	const renderTabBar = (props) => {
		props.tabStyle = Object.create(props.tabStyle);
		return <DefaultTabBar {...props} />;
	};
	return (
		<Container style={{ backgroundColor: Colors.grayThin }}>
			<StatusBar
				translucent={false}
				backgroundColor={Colors.primary}
				barStyle="light-content"
			/>
			<HeadingWithButton
				transparent={false}
				titleColor="white"
				title="Courses"
				btnType="whiteBtn"
				backgroundColor={Colors.primary}
				androidStatusBarColor={Colors.primary}
			/>
			<View style={styles.headerContainer}>
				<LinearGradient
					colors={[Colors.primary, Colors.secondary]}
					style={styles.background}
				/>
			</View>
			<View style={styles.body}>
				<ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
					<Tabs
						renderTabBar={renderTabBar}
						tabContainerStyle={{ elevation: 0 }}
						tabBarActiveTextColor={Colors.black}
						tabBarInactiveTextColor={Colors.black}
						tabBarUnderlineStyle={{
							backgroundColor: Colors.primary,
						}}
					>
						<Tab
							heading="Popular"
							activeTabStyle={{ backgroundColor: Colors.white }}
							tabStyle={{ backgroundColor: Colors.white }}
							activeTextStyle={{
								color: Colors.black,
								fontFamily: "Poppins_semi_bold",
							}}
						>
							<View style={styles.filterSection}>
								<CustomCheckBox />
							</View>
							<Grid>
								{courses.map((item, index) => {
									if (index % 2 == 0) {
										return (
											<Row key={index}>
												<Col
													style={{
														marginRight: 10,
													}}
												>
													<RegularCard
														title={courses[index].courseTitle}
														image={courses[index].courseImage}
														cta={courses[index].cta}
													/>
												</Col>
												<Col
													style={{
														marginLeft: 10,
													}}
												>
													<RegularCard
														title={courses[index + 1].courseTitle}
														image={courses[index + 1].courseImage}
														cta={courses[index + 1].cta}
													/>
												</Col>
											</Row>
										);
									}
								})}
							</Grid>
						</Tab>
						<Tab
							heading="Recent"
							activeTabStyle={{ backgroundColor: Colors.white }}
							tabStyle={{ backgroundColor: Colors.white }}
							activeTextStyle={{
								color: Colors.black,
								fontFamily: "Poppins_semi_bold",
							}}
						>
							<View style={styles.filterSection}>
								<CustomCheckBox />
							</View>
							<Grid>
								{courses.map((item, index) => {
									if (index % 2 == 0) {
										return (
											<Row key={index}>
												<Col
													style={{
														marginRight: 10,
													}}
												>
													<RegularCard
														title={courses[index].courseTitle}
														image={courses[index].courseImage}
														cta={courses[index].cta}
													/>
												</Col>
												<Col
													style={{
														marginLeft: 10,
													}}
												>
													<RegularCard
														title={courses[index + 1].courseTitle}
														image={courses[index + 1].courseImage}
														cta={courses[index + 1].cta}
													/>
												</Col>
											</Row>
										);
									}
								})}
							</Grid>
						</Tab>
					</Tabs>
				</ScrollView>
				<View style={{ marginBottom: 90 }}></View>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: -1,
		height: 100,
	},
	container: {
		flex: 1,
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 100,
	},
	profilePic: {
		width: 60,
		height: 60,
		borderRadius: 100,
	},
	line: {
		borderTopWidth: 1,
		borderTopColor: Colors.grayLight,
		marginVertical: 20,
	},

	textRight: {
		alignSelf: "flex-end",
	},
	btnWrapper: {
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	details: {
		display: "flex",
		flexDirection: "row",
		marginVertical: 5,
	},
	bodyHeading: { ...Typography.title, marginBottom: 15 },
	bodyText: {
		fontFamily: "Poppins_semi_bold",
		fontSize: 16,
		marginTop: -4,
		color: Colors.grayLight,
	},
	profileHead: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 5,
		alignItems: "center",
	},
	body: {
		display: "flex",
		flex: 1,
		padding: Spacing.base,
		backgroundColor: Colors.white,
		marginTop: -30,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		backgroundColor: Colors.input,
	},
	filterSection: {
		marginVertical: 30,
	},
});
