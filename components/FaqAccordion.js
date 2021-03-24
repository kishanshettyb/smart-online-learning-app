import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors, Typography } from "../styles";
import { Accordion, Text, View } from "native-base";
import { faq } from "../constants";

const dataArray = faq;

export class FaqAccordion extends Component {
	_renderHeader(item, expanded) {
		return (
			<View style={styles.heading}>
				<Text style={{ ...Typography.title }}> {item.title}</Text>
				{expanded ? (
					<Feather size={18} name="chevron-up" />
				) : (
					<Feather size={18} name="chevron-down" />
				)}
			</View>
		);
	}
	_renderContent(item) {
		if (typeof item.content == "string") {
			return (
				<Text
					style={{
						backgroundColor: Colors.white,
						padding: 10,
						...Typography.bodyText,
					}}
				>
					{item.content}
				</Text>
			);
		} else {
			return (
				<Text
					style={{
						backgroundColor: Colors.white,
						padding: 10,
						...Typography.bodyText,
					}}
				>
					{item.content[0].title}
				</Text>
			);
		}
	}
	render() {
		return (
			<>
				<Accordion
					style={{ borderWidth: 0 }}
					dataArray={dataArray}
					animation={true}
					expanded={[]}
					renderHeader={this._renderHeader}
					renderContent={this._renderContent}
				/>
			</>
		);
	}
}

const styles = StyleSheet.create({
	heading: {
		flexDirection: "row",
		paddingVertical: 10,
		justifyContent: "space-between",
		alignItems: "center",
		height: 60,
		backgroundColor: Colors.white,
		borderBottomColor: Colors.grayThin,
		borderBottomWidth: 1,
	},
});
