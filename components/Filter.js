import React from "react";
import { StyleSheet } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import MaterialChip from "react-native-material-chip";
import { Colors, Spacing, Typography } from "../styles";
import GradientButton from "react-native-gradient-buttons";
import { Text, View, Icon, Form, Picker } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Filter({ navigation }) {
	const [selected, setSelected] = React.useState("key1");

	const renderContent = () => (
		<View
			style={{
				backgroundColor: "white",
				height: 500,
			}}
		>
			<TouchableOpacity style={styles.centerAlign}>
				<View style={styles.lineBtn} />
			</TouchableOpacity>

			<Text
				style={{
					...Typography.title,
					textAlign: "center",
					paddingBottom: 10,
				}}
			>
				Set Filters
			</Text>
			<View style={styles.line}></View>
			<View style={{ padding: Spacing.base }}>
				<Text style={{ ...Typography.title }}>Top Searches </Text>
				<View
					style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
				>
					<MaterialChip
						text={<Text style={{ color: Colors.white }}>Big Data</Text>}
						checked={false}
						style={{ backgroundColor: Colors.primary }}
						onPress={() => console.log("press")}
					/>
					<MaterialChip
						text={<Text style={{ color: Colors.white }}>Web Design</Text>}
						checked={false}
						style={{ backgroundColor: Colors.primary }}
						onPress={() => console.log("press")}
					/>

					<MaterialChip
						text={<Text style={{ color: Colors.black }}>Business</Text>}
						checked={false}
						style={{ backgroundColor: Colors.grayThin }}
						onPress={() => console.log("press")}
					/>
					<MaterialChip
						text={<Text style={{ color: Colors.black }}>IT & Software</Text>}
						checked={false}
						style={{ backgroundColor: Colors.grayThin }}
						onPress={() => console.log("press")}
					/>
					<MaterialChip
						text={<Text style={{ color: Colors.black }}>Photography</Text>}
						checked={false}
						style={{ backgroundColor: Colors.grayThin }}
						onPress={() => console.log("press")}
					/>
					<MaterialChip
						text={<Text style={{ color: Colors.black }}>Design</Text>}
						checked={false}
						style={{ backgroundColor: Colors.grayThin }}
						onPress={() => console.log("press")}
					/>
				</View>

				<Text style={{ ...Typography.title, marginTop: 20 }}>Category</Text>
				<Form>
					<Picker
						mode="dropdown"
						iosHeader="Select your category"
						iosIcon={<Icon name="arrow-down" />}
						style={{ width: undefined }}
						selectedValue={selected}
						onValueChange={setSelected}
						style={{
							backgroundColor: Colors.input,
							marginTop: 5,
							marginBottom: 15,
							height: 56,
							width: "100%",
							borderRadius: 12,
						}}
					>
						<Picker.Item label="Category One" value="key0" />
						<Picker.Item label="Category Two" value="key1" />
						<Picker.Item label="Category Three" value="key2" />
						<Picker.Item label="Category Four" value="key3" />
						<Picker.Item label="Category Five" value="key4" />
					</Picker>
				</Form>

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
						onPressAction={() => navigation.navigate("Search")}
					/>
				</View>
			</View>
		</View>
	);
	// const sheetRef = React.useRef(null);
	const bs = React.createRef();
	const fail = new Animated.value(1);
	return (
		<>
			<BottomSheet
				ref={bs}
				snapPoints={[520, 300, 0]}
				initialSnap={1}
				callbackNode={fail}
				renderContent={renderContent}
				borderRadius={30}
				enabledGestureInteraction={true}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	line: {
		borderTopWidth: 1,
		borderTopColor: Colors.grayLight,
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
});
