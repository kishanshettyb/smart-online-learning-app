import React from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { Typography, Colors } from "../styles";
import globalStyles from "../styles/globalStyles";
import * as Progress from "react-native-progress";
import { MaterialIcons } from "@expo/vector-icons";

export function ReviewBoard() {
	const reviewData = [
		{
			id: "1",
			totalReviews: 35,
			averageRating: 4.5,
			progressData: [
				{
					value: 5,
					progressPoint: 1,
				},
				{
					value: 4,
					progressPoint: 0.8,
				},
				{
					value: 3,
					progressPoint: 0.6,
				},
				{
					value: 2,
					progressPoint: 0.4,
				},
				{
					value: 1,
					progressPoint: 0.2,
				},
			],
		},
	];
	return (
		<>
			<View>
				{reviewData.map((item, index) => {
					return (
						<View key={item.id}>
							<View style={styles.reviewCardBoard}>
								{/* Start Review display */}
								<View style={styles.body}>
									<View style={styles.bigTextContainer}>
										<View>
											<Text style={styles.bigText}>{item.averageRating}</Text>
										</View>
										<View>
											<MaterialIcons
												name="star"
												size={30}
												color={Colors.warning}
											/>
										</View>
									</View>
									<Text style={{ ...Typography.bodyText }}>
										{item.totalReviews} Reviews
									</Text>
								</View>
								{/* End Review display */}

								{/* Start Progress */}
								<View>
									{item.progressData.map((k, index) => (
										<View key={index} style={styles.progressContainer}>
											<View>
												<Text>
													{k.value}{" "}
													<MaterialIcons
														name="star"
														color={Colors.warning}
														size={16}
													/>
												</Text>
											</View>
											<View
												style={{
													marginHorizontal: 10,
												}}
											>
												<Progress.Bar
													progress={k.progressPoint}
													width={150}
													color={Colors.primary}
													height={8}
													borderWidth={0}
												/>
											</View>
										</View>
									))}
								</View>
								{/* End Progress */}
							</View>
						</View>
					);
				})}
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	reviewCardBoard: {
		backgroundColor: Colors.white,
		borderRadius: 25,
		padding: 20,
		marginVertical: 20,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		// Shadow
		...globalStyles.shadowSm,
	},
	body: {
		justifyContent: "space-around",
		alignItems: "center",
		marginHorizontal: 20,
		alignSelf: "center",
	},
	bigTextContainer: {
		alignItems: "center",
		justifyContent: "center",
		display: "flex",
		flexDirection: "row",
	},
	bigText: {
		...Typography.title,
		fontSize: 40,
	},
	progressContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
});
