import React, { Component } from "react";
import { Typography } from "../styles";
import { FlatList } from "react-native";
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

export default class CheckBoxList extends Component {
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

	// sendInvites() {
	// 	alert(JSON.stringify(this.state.selectedCheckList));
	// }

	render() {
		return (
			<View>
				<FlatList
					style={{ height: 120 }}
					horizontal={false}
					showsVerticalScrollIndicator={false}
					extraData={this.state}
					keyExtractor={(item, index) => item.id.toString()}
					data={this.state.checklist}
					renderItem={({ item }) => {
						return (
							<ListItem noBorder>
								<CheckBox
									checked={
										this.state.selectedCheckList.includes(item.id)
											? true
											: false
									}
									onPress={() => this.onCheckBoxPressed(item.id)}
								/>
								<Body>
									<Text style={{ ...Typography.bodyText }}>{item.name}</Text>
								</Body>
							</ListItem>
						);
					}}
				/>
			</View>
		);
	}
}
