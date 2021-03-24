import React from "react";
import { categories } from "../constants";
import { Colors, Spacing } from "../styles/index";
import { LinearGradient } from "expo-linear-gradient";
import { Grid, Col, Row } from "react-native-easy-grid";
import CustomCheckBox from "../components/CustomCheckBox";
import { HeadingWithButton, GradientCard } from "../components";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { Container, View, Tabs, Tab, DefaultTabBar } from "native-base";

export function Categories({ navigation }) {
	const renderTabBar = (props) => {
		props.tabStyle = Object.create(props.tabStyle);
		return <DefaultTabBar {...props} />;
	};
	return (
		<Container>
			<StatusBar
				translucent={false}
				backgroundColor={Colors.primary}
				barStyle="light-content"
			/>
			<HeadingWithButton
				transparent={false}
				titleColor="white"
				title="Categories"
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
				{/* Start Categories */}
				{/* Start Categories */}
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
								{categories.map((item, index) => {
									if (index % 2 == 0) {
										return (
											<Row key={index}>
												<Col
													style={{
														marginRight: 10,
													}}
												>
													<GradientCard
														title={categories[index].categoryName}
														subTitle={categories[index].desc}
														cta={categories[index].cta}
														image={categories[index].categoryImage}
														bgColorPrimary={categories[index].bgColorPrimary}
														bgColorSecondary={
															categories[index].bgColorSecondary
														}
													/>
												</Col>
												<Col
													style={{
														marginLeft: 10,
													}}
												>
													<GradientCard
														title={categories[index + 1].categoryName}
														subTitle={categories[index + 1].desc}
														cta={categories[index + 1].cta}
														image={categories[index + 1].categoryImage}
														bgColorPrimary={
															categories[index + 1].bgColorPrimary
														}
														bgColorSecondary={
															categories[index + 1].bgColorSecondary
														}
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
							activeTextStyle={{
								color: Colors.black,
								fontFamily: "Poppins_semi_bold",
							}}
							activeTabStyle={{
								backgroundColor: Colors.white,
							}}
							tabStyle={{ backgroundColor: Colors.white }}
						>
							<View style={styles.filterSection}>
								<CustomCheckBox />
							</View>
							<Grid>
								{categories.map((item, index) => {
									if (index % 2 == 0) {
										return (
											<Row key={index}>
												<Col
													style={{
														marginRight: 10,
													}}
												>
													<GradientCard
														title={categories[index].categoryName}
														subTitle={categories[index].desc}
														cta={categories[index].cta}
														image={categories[index].categoryImage}
														bgColorPrimary={categories[index].bgColorPrimary}
														bgColorSecondary={
															categories[index].bgColorSecondary
														}
													/>
												</Col>
												<Col
													style={{
														marginLeft: 10,
													}}
												>
													<GradientCard
														title={categories[index + 1].categoryName}
														subTitle={categories[index + 1].desc}
														cta={categories[index + 1].cta}
														image={categories[index + 1].categoryImage}
														bgColorPrimary={
															categories[index + 1].bgColorPrimary
														}
														bgColorSecondary={
															categories[index + 1].bgColorSecondary
														}
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
			</View>
			{/* End Categories */}
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
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 100,
	},
	body: {
		display: "flex",
		padding: Spacing.base,
		backgroundColor: Colors.white,
		marginTop: -30,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		marginBottom: 200,
	},
	filterSection: {
		marginVertical: 30,
	},
});
