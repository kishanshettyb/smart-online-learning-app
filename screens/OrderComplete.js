import React from "react";
import { StatusBar } from "react-native";
import { Colors } from "../styles/index";
import { Container, View } from "native-base";
import globalStyles from "../styles/globalStyles";
import { OrderConfirmedCard } from "../components";

export function OrderComplete() {
	return (
		<Container style={{ backgroundColor: Colors.grayThin }}>
			<StatusBar
				translucent={false}
				backgroundColor={Colors.primary}
				barStyle="dark-content"
			/>
			<View style={globalStyles.container}>
				<OrderConfirmedCard
					bgImage={require("../assets/img/blaster.png")}
					ctaBtnName="Go to home"
					cta="home"
					title="Order Confirmed"
					subTitle="Order No:242466KMG"
					icon="check"
				/>
			</View>
		</Container>
	);
}
