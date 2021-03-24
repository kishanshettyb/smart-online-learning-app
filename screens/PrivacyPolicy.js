import React from "react";
import Tab1 from "../screens/Policy";
import Tab2 from "../screens/TermsOfUse";
import { StatusBar } from "react-native";
import { Colors } from "../styles/index";
import { HeadingWithButton } from "../components";
import { Container, Tabs, Tab, DefaultTabBar } from "native-base";

export function PrivacyPolicy() {
	const renderTabBar = (props) => {
		props.tabStyle = Object.create(props.tabStyle);
		return <DefaultTabBar {...props} />;
	};
	return (
		<Container>
			<StatusBar
				translucent={false}
				backgroundColor={Colors.white}
				barStyle="light-content"
			/>
			<HeadingWithButton
				transparent={false}
				titleColor="black"
				title="Privacy"
				btnType="gradientBtn"
				backgroundColor={Colors.white}
				androidStatusBarColor={Colors.white}
			/>
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
					heading="Privacy Policy"
					activeTabStyle={{ backgroundColor: Colors.white }}
					tabStyle={{ backgroundColor: Colors.white }}
					activeTextStyle={{
						color: Colors.black,
						fontFamily: "Poppins_semi_bold",
					}}
				>
					<Tab1 />
				</Tab>
				<Tab
					heading="Terms of Use"
					activeTextStyle={{
						color: Colors.black,
						fontFamily: "Poppins_semi_bold",
					}}
					activeTabStyle={{
						backgroundColor: Colors.white,
					}}
					tabStyle={{ backgroundColor: Colors.white }}
				>
					<Tab2 />
				</Tab>
			</Tabs>
		</Container>
	);
}
