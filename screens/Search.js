import React from "react";
import { courses } from "../constants";
import { Feather } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";
import GradientButton from "react-native-gradient-buttons";
import { Colors, Typography, Spacing } from "../styles/index";
import {
	StyleSheet,
	StatusBar,
	FlatList,
	TouchableOpacity,
} from "react-native";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import CheckBoxList from "../components/CheckBoxList";
import CustomCheckBox from "../components/CustomCheckBox";
import { HeadingWithButton, SearchListCard } from "../components";
import { Container, View, Item, Icon, Input, Text } from "native-base";

export function Search() {
	const bs = React.createRef();
	const fail = new Animated.Value(0);

	const renderHeader = () => (
		<View style={styles.modalHeader}>
			<TouchableOpacity style={styles.centerAlign}>
				<View style={styles.lineBtn} />
			</TouchableOpacity>
		</View>
	);

	const renderContent = () => (
		<View style={styles.filterBody}>
			<Text style={styles.filterTitle}>Set Filters</Text>
			<View style={styles.line}></View>
			<View style={{ padding: Spacing.base }}>
				<Text style={{ ...Typography.title, paddingBottom: 10 }}>
					Top Searches
				</Text>

				<CustomCheckBox />
				<Text style={{ ...Typography.title, paddingVertical: 10 }}>
					Category
				</Text>
				<CheckBoxList />
				<View style={styles.btnWrapper}>
					<GradientButton
						text="Apply Filter"
						textStyle={styles.btn}
						gradientBegin={Colors.primary}
						gradientEnd={Colors.secondary}
						gradientDirection="diagonal"
						height={56}
						width="100%"
						radius={12}
						impact
						impactStyle="Light"
					/>
				</View>
			</View>
		</View>
	);
	return (
		<Container style={{ backgroundColor: Colors.grayThin }}>
			<StatusBar
				translucent={false}
				backgroundColor={Colors.primary}
				barStyle="dark-content"
			/>
			<HeadingWithButton
				transparent={false}
				titleColor="black"
				title="Search"
				btnType="gradientBtn"
				backgroundColor={Colors.grayThin}
				androidStatusBarColor={Colors.grayThin}
			/>
			<View style={globalStyles.container}>
				{/* Start Search bar */}
				<View>
					<Item regular style={globalStyles.inputBoxRegular}>
						<Icon active name="search" style={{ color: Colors.placeholder }} />
						<Input
							placeholder="Search anything..."
							style={globalStyles.inputField}
							returnKeyLabel="Search"
							keyboardAppearance="default"
							keyboardType="web-search"
						/>
					</Item>
					<View style={styles.filterBtn}>
						<GradientButton
							style={{ marginVertical: 8 }}
							text={<Feather color={Colors.white} name="sliders" size={20} />}
							gradientBegin={Colors.primary}
							gradientEnd={Colors.secondary}
							gradientDirection="diagonal"
							height={40}
							width={40}
							radius={12}
							impact
							impactStyle="Light"
							onPressAction={() => bs.current.snapTo(0)}
						/>
					</View>
				</View>
				{/* End Search bar */}
				<View style={styles.filterSection}>
					<CustomCheckBox />
				</View>
				<FlatList
					style={{ marginBottom: 350 }}
					horizontal={false}
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
					data={courses}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<SearchListCard
							title={item.courseTitle}
							image={item.courseImage}
							author={item.author}
							cta={item.cta}
						/>
					)}
				/>
			</View>
			<BottomSheet
				ref={bs}
				snapPoints={[450, 0, 0]}
				initialSnap={1}
				callbackNode={fail}
				renderContent={renderContent}
				renderHeader={renderHeader}
				borderRadius={0}
				enabledGestureInteraction={true}
				enabledInnerScrolling={true}
				enabledContentGestureInteraction={false}
			/>
		</Container>
	);
}

const styles = StyleSheet.create({
	filterBtn: { position: "absolute", top: 30, right: 0 },
	filterBody: {
		backgroundColor: Colors.white,
		height: 600,
	},
	filterTitle: {
		...Typography.title,
		textAlign: "center",
		paddingBottom: 10,
	},
	btnWrapper: {
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
		marginVertical: 25,
	},
	btn: { fontSize: 18, fontFamily: "Poppins_semi_bold" },
	lineBtn: {
		borderTopWidth: 5,
		borderTopColor: Colors.grayThin,
		width: 40,
		margin: 20,
		borderRadius: 10,
	},
	modalHeader: {
		borderTopLeftRadius: 30,
		backgroundColor: Colors.white,
	},
	centerAlign: {
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
	line: {
		borderTopWidth: 1,
		borderTopColor: Colors.grayLight,
	},
	filterSection: {
		marginVertical: 30,
	},
});
