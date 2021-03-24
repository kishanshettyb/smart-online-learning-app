import React from "react";
import { Typography, Colors } from "../styles";
import globalStyles from "../styles/globalStyles";
import { Container, Text, View } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import GradientButton from "react-native-gradient-buttons";
import { StyleSheet, StatusBar, FlatList } from "react-native";
// Components
import {
	Chip,
	CheckList,
	ProductCard,
	VideoPoster,
	SectionHeading,
	HeadingWithButton,
	Reviews,
	ReviewBoard,
} from "../components";
import { ProfileCard } from "../components/ProfileCard";
// constants
import {
	chips,
	reviews,
	checklist,
	featuredCourses,
	profileCheckList,
} from "../constants";
// images
import poster from "../assets/img/videobg.jpg";

export function CourseMoreDetails({ navigation }) {
	return (
		<Container style={{ backgroundColor: Colors.grayThin }}>
			<HeadingWithButton
				transparent={false}
				title="Course More"
				androidStatusBarColor={Colors.grayThin}
			/>
			<StatusBar
				barStyle={"dark-content"}
				backgroundColor={Colors.grayThin}
				translucent={false}
			/>
			<ScrollView>
				<View style={globalStyles.container}>
					{/* Start Content */}
					<Text style={styles.title}>
						Web Design for Beginners: Real World Coding in HTML & CSS
					</Text>
					<Text style={styles.desc}>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud
					</Text>
					{/* End Content */}

					{/* Start Chip */}
					<View style={styles.chipList}>
						{chips.map((item, index) => {
							return (
								<Chip
									keyExtractor={item.id}
									key={item.id}
									iconName={item.icon}
									chipName={item.name}
								/>
							);
						})}
					</View>
					{/* End Chip */}

					{/* Start Video Poster */}
					<VideoPoster posterImage={poster} cta="VideoPlayer" />
					{/* End Video Poster */}

					<View style={styles.btnWrapper}>
						<GradientButton
							text="Add to Cart"
							textStyle={styles.btn}
							gradientBegin={Colors.primary}
							gradientEnd={Colors.secondary}
							gradientDirection="diagonal"
							height={56}
							width="100%"
							radius={12}
							impact
							impactStyle="Light"
							onPressAction={() => navigation.navigate("Cart")}
						/>
					</View>

					{/* Start Courses includes  */}
					<View style={styles.checklistCard}>
						<Text style={{ ...Typography.title }}>This course includes</Text>
						{checklist.map((item, index) => {
							return (
								<View key={item.id}>
									<Text style={{ paddingTop: 12 }}>
										<CheckList icon={item.icon} listItem={item.listItem} />
									</Text>
								</View>
							);
						})}
					</View>
					{/* End Courses includes  */}

					{/* Start Profile Card */}
					<ProfileCard
						title="Created by Dr. Angela Yu"
						cta="AuthorProfile"
						ctaBtnName="View Author Profile"
						profileImage={require("../assets/img/profile-1.jpg")}
						checkListData={profileCheckList}
					/>
					{/* End Profile Card */}

					{/* Start Curriculum Accordion */}
					{/* End Curriculum Accordion */}

					{/* Start Feedback */}
					<View style={styles.card}>
						<Text style={{ ...Typography.title }}>Student Feedback</Text>
						<ReviewBoard />
						{reviews.map((item, index) => {
							return (
								<Reviews
									key={index}
									rating={item.rating}
									review={item.review}
									profilePic={item.profilePic}
									name={item.name}
									date={item.date}
								/>
							);
						})}
					</View>
					{/* End Feedback */}

					{/* Start Studens also viewed section */}
					<SectionHeading heading="Students also viewed" />
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
					{/* End Studens also viewed section */}
					<View style={{ marginBottom: 250 }}></View>
				</View>
			</ScrollView>
		</Container>
	);
}

const styles = StyleSheet.create({
	title: {
		...Typography.title,
		paddingVertical: 20,
	},
	desc: {
		...Typography.bodyText,
		marginBottom: 20,
	},
	chipList: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		marginVertical: 20,
	},

	card: {
		backgroundColor: Colors.white,
		borderRadius: 16,
		marginTop: 50,
		marginBottom: 50,
		padding: 20,
	},
	profilePic: {
		width: 70,
		height: 70,
		borderRadius: 16,
		marginRight: 15,
	},
	list: {
		...Typography.bodyText,
		marginBottom: 5,
	},
	content: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	btn: { fontSize: 18, fontFamily: "Poppins_semi_bold" },
	btnWrapper: {
		justifyContent: "space-evenly",
		alignItems: "center",
		marginVertical: 50,
	},
	videoBg: {
		width: "100%",
		height: 350,
		borderRadius: 16,
	},
	playIcon: {
		position: "absolute",
		top: 280 / 2,
	},
	playIconImage: {
		width: 70,
		height: 70,
	},
	chip: {
		borderRadius: 20,
		borderWidth: 1,
		borderColor: Colors.grayDark,
		alignItems: "flex-start",
		paddingHorizontal: 15,
		height: 27,
		justifyContent: "center",
		alignSelf: "flex-start",
		marginBottom: 20,
	},
	checklistCard: {
		padding: 20,
		backgroundColor: Colors.white,
		borderRadius: 16,
		marginBottom: 50,
	},
});
