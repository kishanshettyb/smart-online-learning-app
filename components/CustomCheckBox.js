import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Colors, Typography } from "../styles";
import { ScrollView } from "react-native-gesture-handler";
import { View, Text, ListItem, CheckBox, Body } from "native-base";

var checklist = [
	{
		id: 1,
		name: "Python",
	},
	{
		id: 2,
		name: "Java",
	},
	{
		id: 3,
		name: "BigData",
	},
	{
		id: 4,
		name: "MBA",
	},
	{
		id: 5,
		name: "Web Design",
	},
	{
		id: 6,
		name: "Graphic Design",
	},
];

const initialState = {
	checklist: [],
	selectedCheckList: [],
};

export default class CustomCheckBox extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}
	componentDidMount() {
		this.setState({
			checklist: checklist.map((contact) => {
				return {
					id: contact.id,
					name: contact.name,
				};
			}),
		});
	}

	onCheckBoxPressed(id) {
		let tmp = this.state.selectedCheckList;
		if (tmp.includes(id)) {
			tmp.splice(tmp.indexOf(id), 1);
		} else {
			tmp.push(id);
		}
		this.setState({
			selectedCheckList: tmp,
		});
	}

	sendInvites() {
		alert(JSON.stringify(this.state.selectedCheckList));
	}
	render() {
		return (
			<View style={styles.checkBoxContainer}>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					{this.state.checklist.map((item, index) => {
						return (
							<ListItem
								key={item.id}
								noBorder
								style={
									this.state.selectedCheckList.includes(item.id)
										? styles.checkBoxActive
										: styles.checkBoxInactive
								}
								onPress={() => this.onCheckBoxPressed(item.id)}
							>
								<CheckBox
									color={Colors.primary}
									style={{
										borderRadius: 10,
										width: 0,
										borderColor: "transparent",
									}}
									checked={
										this.state.selectedCheckList.includes(item.id)
											? true
											: false
									}
									onPress={() => this.onCheckBoxPressed(item.id)}
								/>
								<Body style={styles.checkBoxBody}>
									<Text
										style={
											this.state.selectedCheckList.includes(item.id)
												? styles.active
												: styles.inactive
										}
									>
										{item.name}
									</Text>
								</Body>
							</ListItem>
						);
					})}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	checkBoxContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	checkBoxActive: {
		backgroundColor: Colors.primary,
		borderRadius: 20,
		paddingHorizontal: 30,
		height: 30,
		borderWidth: 1,
		borderColor: Colors.primary,
	},
	checkBoxInactive: {
		backgroundColor: "transparent",
		borderRadius: 20,
		paddingHorizontal: 30,
		borderColor: Colors.grayLight,
		borderWidth: 1,
		height: 30,
	},
	active: {
		...Typography.bodyText,
		color: Colors.white,
	},
	inactive: {
		...Typography.bodyText,
		color: Colors.grayLight,
	},
	checkBoxBody: {
		height: 18,
		justifyContent: "center",
		alignSelf: "center",
		alignItems: "center",
		marginLeft: -15,
	},
});
