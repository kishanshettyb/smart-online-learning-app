import React from "react";
import { View } from "native-base";
import { reviews } from "../constants";
import globalStyles from "../styles/globalStyles";
import { ReviewBoard, Reviews } from "../components";
import { ScrollView } from "react-native-gesture-handler";

export default function ReviewsTab() {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={globalStyles.container}>
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
		</ScrollView>
	);
}
