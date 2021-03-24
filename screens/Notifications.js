import React from "react";
import { notifications } from "../constants";
import { Container, View } from "native-base";
import { Typography, Colors } from "../styles";
import globalStyles from "../styles/globalStyles";
import { StyleSheet, StatusBar, FlatList } from "react-native";
import { HeadingWithButton, NotificationCard } from "../components";

export function Notifications() {
	return (
		<Container style={{ backgroundColor: Colors.input }}>
			<HeadingWithButton
				transparent={false}
				title="Notifications"
				androidStatusBarColor={Colors.grayThin}
			/>
			<StatusBar
				barStyle={"dark-content"}
				backgroundColor={Colors.grayThin}
				translucent={false}
			/>
			<View style={(globalStyles.containerSmall, { marginTop: 30 })}>
				<FlatList
					horizontal={false}
					showsHorizontalScrollIndicator={false}
					data={notifications}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<View style={{ marginHorizontal: 6 }}>
							<NotificationCard
								title={item.tite}
								subTitle={item.subTitle}
								image={item.image}
							/>
						</View>
					)}
				/>
			</View>
		</Container>
	);
}
