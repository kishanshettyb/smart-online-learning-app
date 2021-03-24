import React from "react";
import { View } from "native-base";
import { categories } from "../constants";
import { GradientCard } from "../components";
import { Grid, Col, Row } from "react-native-easy-grid";
import { ScrollView } from "react-native-gesture-handler";

export function PopularCategories() {
	return (
		<View>
			<ScrollView>
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
			</ScrollView>
		</View>
	);
}
