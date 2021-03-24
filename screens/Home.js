import React from "react";
import {
	Container,
	Text,
	Header,
	Left,
	View,
	Right,
	Body,
	Input,
	Icon,
	Item,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";
import BottomSheet from "reanimated-bottom-sheet";
import { Grid, Col, Row } from "react-native-easy-grid";
import { Colors, Spacing, Typography } from "../styles";
import GradientButton from "react-native-gradient-buttons";
import { StatusBar, Image, StyleSheet, FlatList } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
// Constants
import { categories, popularCourses, featuredCourses } from "../constants";
// Components
import {
	ImageCard,
	ProductCard,
	GradientCard,
	SectionHeading,
} from "../components";
import Animated from "react-native-reanimated";
import { CarouselCard } from "../components/CarouselCard";
import CustomCheckBox from "../components/CustomCheckBox";
import CheckBoxList from "../components/CheckBoxList";

export function Home({ navigation }) {
	const bs = React.createRef();
	const fail = new Animated.Value(0);

	const renderHeader = () => (
		<View style={styles.modalHeader}>
			<TouchableOpacity style={styles.centerAlign}>
				<View style={styles.lineBtn} />
			</TouchableOpacity>
		</View>
	);

	const renderContent = () => (
		<View style={styles.filterBody}>
			<Text style={styles.filterTitle}>Set Filters</Text>
			<View style={styles.line}></View>
			<View style={{ padding: Spacing.base }}>
				<Text style={{ ...Typography.title, paddingBottom: 10 }}>
					Top Searches
				</Text>

				<CustomCheckBox />
				<Text style={{ ...Typography.title, paddingVertical: 10 }}>
					Category
				</Text>
				<CheckBoxList />
				<View style={styles.btnWrapper}>
					<GradientButton
						text="Apply Filter"
						textStyle={styles.btn}
						gradientBegin={Colors.primary}
						gradientEnd={Colors.secondary}
						gradientDirection="diagonal"
						height={56}
						width="100%"
						radius={12}
						impact
						impactStyle="Light"
						onPressAction={() => navigation.navigate("Search")}
					/>
				</View>
			</View>
		</View>
	);

	return (
		<Container style={{ backgroundColor: Colors.grayThin }}>
			<StatusBar barStyle="dark-content" translucent={false} />
			<Header
				transparent={false}
				backgroundColor={Colors.grayThin}
				androidStatusBarColor={Colors.grayThin}
				style={{ elevation: 0, backgroundColor: Colors.grayThin }}
			>
				<Left>
					<GradientButton
						style={{ marginVertical: 8 }}
						text={<Feather color={Colors.white} name="menu" size={24} />}
						textStyle={{ fontSize: 24 }}
						gradientBegin={Colors.primary}
						gradientEnd={Colors.secondary}
						gradientDirection="diagonal"
						height={40}
						width={40}
						radius={12}
						impact
						impactStyle="Light"
						onPressAction={() => navigation.openDrawer()}
					/>
				</Left>
				<Body style={{ flex: 1 }} />
				<Right>
					<TouchableOpacity onPress={() => navigation.navigate("Profile")}>
						<Image
							style={styles.profilePic}
							source={require("../assets/img/profile.jpg")}
						/>
					</TouchableOpacity>
				</Right>
			</Header>

			<ScrollView style={globalStyles.container}>
				<Text style={{ ...Typography.title, paddingTop: 30 }}>
					Hello, Jennifer !
				</Text>

				{/* Start Search bar */}
				<View>
					<Item regular style={globalStyles.inputBoxRegular}>
						<Icon active name="search" style={{ color: Colors.placeholder }} />
						<Input
							placeholder="Search anything..."
							style={globalStyles.inputField}
							returnKeyLabel="Search"
							keyboardAppearance="default"
							keyboardType="web-search"
						/>
					</Item>
					<View style={styles.filterBtn}>
						<GradientButton
							style={{ marginVertical: 8 }}
							text={<Feather color={Colors.white} name="sliders" size={20} />}
							gradientBegin={Colors.primary}
							gradientEnd={Colors.secondary}
							gradientDirection="diagonal"
							height={40}
							width={40}
							radius={12}
							impact
							impactStyle="Light"
							onPressAction={() => bs.current.snapTo(0)}
						/>
					</View>
				</View>
				{/* End Search bar */}

				{/* Start Carousel */}
				<CarouselCard />
				{/* End Carousel */}

				{/* Start Categories */}
				<SectionHeading
					heading="Categories"
					btnLink="Categories"
					btnName="View All"
				/>
				<Grid>
					{categories.slice(0, 3).map((item, index) => {
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
											bgColorSecondary={categories[index].bgColorSecondary}
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
											bgColorPrimary={categories[index + 1].bgColorPrimary}
											bgColorSecondary={categories[index + 1].bgColorSecondary}
										/>
									</Col>
								</Row>
							);
						}
					})}
				</Grid>
				{/* End Categories */}

				<View style={{ marginTop: -30 }}>
					{/* Start Popular Courses */}
					<SectionHeading
						heading="Popular Courses"
						btnLink="Courses"
						btnName="View All"
					/>
					<FlatList
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						data={popularCourses}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<ImageCard
								title={item.courseTitle}
								subTitle={item.courseSubtitle}
								cta={item.cta}
								bgImage={item.courseImage}
							/>
						)}
					/>
					{/* End Popular Courses */}
				</View>

				{/* Start Featured Courses */}
				<SectionHeading
					heading="Featured Courses"
					btnLink="Courses"
					btnName="View All"
				/>
				<FlatList
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					data={featuredCourses}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<ProductCard
							title={item.courseTitle}
							subTitle={item.courseSubtitle}
							cta={item.cta}
							image={item.courseImage}
							salePrice={item.salePrice}
							regularPrice={item.regularPrice}
							ratings={item.ratings}
						/>
					)}
				/>

				{/* End Popular Courses */}
				<View style={{ marginBottom: 130 }}></View>
			</ScrollView>
			<BottomSheet
				ref={bs}
				snapPoints={[550, 0, 0]}
				initialSnap={1}
				callbackNode={fail}
				renderContent={renderContent}
				renderHeader={renderHeader}
				borderRadius={0}
				enabledGestureInteraction={true}
				enabledInnerScrolling={true}
				enabledContentGestureInteraction={false}
			/>
		</Container>
	);
}

const styles = StyleSheet.create({
	profilePic: {
		width: 40,
		height: 40,
		borderRadius: 14,
	},
	container: {
		paddingHorizontal: Spacing.medium,
	},
	filterBtn: { position: "absolute", top: 30, right: 0 },
	centerAlign: {
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
	line: {
		borderTopWidth: 1,
		borderTopColor: Colors.grayLight,
	},
	btnWrapper: {
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
		marginVertical: 25,
	},
	btn: { fontSize: 18, fontFamily: "Poppins_semi_bold" },
	lineBtn: {
		borderTopWidth: 5,
		borderTopColor: Colors.grayThin,
		width: 40,
		margin: 20,
		borderRadius: 10,
	},
	modalHeader: {
		borderTopLeftRadius: 30,
		backgroundColor: Colors.white,
	},
	//
	shadow: {
		elevation: 5,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 0.5 * 5 },
		shadowOpacity: 0.3,
		shadowRadius: 0.9 * 5,
	},
	filterBody: {
		backgroundColor: Colors.white,
		height: 600,
	},
	filterTitle: {
		...Typography.title,
		textAlign: "center",
		paddingBottom: 10,
	},
});
