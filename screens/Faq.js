import React from "react";
import { HeadingWithButton } from "../components";
import { StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors, Spacing, Typography } from "../styles";
import { FaqAccordion } from "../components/FaqAccordion";
import CustomCheckBox from "../components/CustomCheckBox";
import { Container, View, Text, DefaultTabBar } from "native-base";

export function Faq() {
	const renderTabBar = (props) => {
		props.tabStyle = Object.create(props.tabStyle);
		return <DefaultTabBar {...props} />;
	};
	const dataArray = [
		{ title: "First Element", content: "Lorem ipsum dolor sit amet" },
		{ title: "Second Element", content: "Lorem ipsum dolor sit amet" },
		{ title: "Third Element", content: "Lorem ipsum dolor sit amet" },
	];

	return (
		<Container>
			<StatusBar barStyle={"dark-content"} translucent={false} />
			<HeadingWithButton
				title="FAQ's"
				transparent={false}
				titleColor="white"
				btnType="whiteBtn"
				backgroundColor={Colors.primary}
				androidStatusBarColor={Colors.primary}
			/>
			<View style={styles.headerContainer}>
				<LinearGradient
					colors={[Colors.primary, Colors.secondary]}
					style={styles.background}
				/>
				<Text
					style={{
						...Typography.title,
						color: Colors.white,
						marginTop: -50,
						textAlign: "center",
					}}
				>
					How can we Help{"\n"} you ?
				</Text>
			</View>
			<View style={styles.body}>
				<Text style={{ ...Typography.title }}>Top Questions</Text>
				<View style={styles.filterSection}>
					<CustomCheckBox />
				</View>
				<FaqAccordion />
			</View>
		</Container>
	);
}
const styles = StyleSheet.create({
	headerContainer: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: -1,
		height: 150,
	},
	body: {
		paddingHorizontal: Spacing.base,
		paddingVertical: 45,
		backgroundColor: Colors.white,
		marginTop: -30,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: "100%",
	},
	filterSection: {
		marginVertical: 30,
	},
});
