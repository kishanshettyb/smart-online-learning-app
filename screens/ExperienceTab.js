import React from "react";
import { View } from "native-base";
import { FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// Constants
import { experience, popularCourses } from "../constants";
// Components
import { ExperienceList, SectionHeading, ImageCard } from "../components";

export default function ExperienceTab() {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			{experience.map((item, index) => {
				return (
					<ExperienceList
						key={item.id}
						companyImage={item.companyImage}
						companyName={item.companyName}
						designation={item.designation}
						experience={item.experience}
					/>
				);
			})}

			{/* Start My Courses */}
			<SectionHeading heading="Courses by Rob Percival" />
			<FlatList
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				data={popularCourses}
				keyExtractor={(item) => item.id}
				renderItem={({ item, index }) => (
					<View style={{ marginRight: 20 }}>
						<ImageCard
							title={item.courseTitle}
							subTitle={item.courseSubtitle}
							cta={item.cta}
							bgImage={item.courseImage}
						/>
					</View>
				)}
			/>
			{/* End My Courses */}
			<View style={{ marginBottom: 200 }}></View>
		</ScrollView>
	);
}
