import React from "react";
import globalStyles from "../styles/globalStyles";
import { StatusBar, FlatList } from "react-native";
import { Container, Text, View } from "native-base";
import { Colors, Typography } from "../styles/index";
import { ScrollView } from "react-native-gesture-handler";
// Components
import {
	RegularCard,
	ProductCard,
	SectionHeading,
	ProgressDetailsCard,
	HeadingWithButton,
} from "../components";
// Constants
import { myCoursesList, featuredCourses, popularCourses } from "../constants";

export function MyCourses() {
	return (
		<Container style={{ backgroundColor: Colors.grayThin }}>
			<StatusBar
				translucent={false}
				backgroundColor={Colors.white}
				barStyle="dark-content"
			/>
			<HeadingWithButton
				transparent={false}
				titleColor="black"
				title="My Courses"
				androidStatusBarColor={Colors.grayThin}
				btnType="gradientBtn"
			/>
			<View style={globalStyles.container}>
				<ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
					{/* Start Courses in progress */}
					<Text style={{ ...Typography.title, paddingVertical: 20 }}>
						Courses in Progress
					</Text>
					{myCoursesList.map((item, index) => {
						return (
							<ProgressDetailsCard
								key={item.id}
								progressCardTitle={item.progressCardTitle}
								progressCardImage={item.progressCardImage}
								progressCardDesc={item.progressCardDesc}
								progressBarColor={item.progressBarColor}
								progressBarTotalValue={item.progressBarTotalValue}
								progressBarCompletedValue={item.progressBarCompletedValue}
								progressBarValue={item.progressBarValue}
							/>
						);
					})}
					{/* End Courses in progress */}

					{/* Start My Courses */}
					<SectionHeading heading="My Courses" />
					<FlatList
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						data={popularCourses}
						keyExtractor={(item) => item.id}
						renderItem={({ item, index }) => (
							<View style={{ marginRight: 20 }}>
								<RegularCard
									key={item.id}
									title={item.courseTitle}
									image={item.courseImage}
									cta={item.cta}
								/>
							</View>
						)}
					/>
					{/* End My Courses */}

					{/* Start Courses May you like*/}
					<SectionHeading heading="Courses May You Like" />
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
					{/* End Courses May you like*/}
					<View style={{ marginBottom: 200 }}></View>
				</ScrollView>
			</View>
		</Container>
	);
}
