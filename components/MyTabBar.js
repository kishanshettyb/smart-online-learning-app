import React from "react";
import { Colors } from "../styles";
import { Feather } from "@expo/vector-icons";
import { FooterTab, Button } from "native-base";
import { View, SafeAreaView, StyleSheet } from "react-native";

export function MyTabBar({ state, descriptors, navigation }) {
	const focusedOptions = descriptors[state.routes[state.index].key].options;

	if (focusedOptions.tabBarVisible === false) {
		return null;
	}
	return (
		<SafeAreaView style={styles.tabContainer}>
			<View style={styles.tabView}>
				{state.routes.map((route, index) => {
					const { options } = descriptors[route.key];
					const label =
						options.tabBarLabel !== undefined
							? options.tabBarLabel
							: options.title !== undefined
							? options.title
							: route.name;

					const isFocused = state.index === index;

					const onPress = () => {
						const event = navigation.emit({
							type: "tabPress",
							target: route.key,
						});

						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate(route.name);
						}
					};

					const onLongPress = () => {
						navigation.emit({
							type: "tabLongPress",
							target: route.key,
						});
					};

					return (
						<FooterTab
							key={route.key}
							style={
								index === 0
									? styles.borderStart
									: index === 4
									? styles.borderEnd
									: styles.tabButtons
							}
						>
							<Button vertical onPress={onPress} onLongPress={onLongPress}>
								<Feather
									name={label}
									size={24}
									style={isFocused ? styles.activetab : styles.tab}
								/>
							</Button>
						</FooterTab>
					);
				})}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	tabContainer: {
		backgroundColor: "transparent",
		position: "absolute",
		bottom: 0,
		width: "100%",
		shadowColor: Colors.grayLight,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 4,
	},
	tabView: {
		flexDirection: "row",
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10,
		height: 90,
	},
	borderStart: {
		borderTopLeftRadius: 24,
		borderBottomLeftRadius: 24,
		backgroundColor: "#fff",
	},
	borderEnd: {
		borderTopRightRadius: 24,
		borderBottomRightRadius: 24,
		backgroundColor: "#fff",
	},
	tabButtons: {
		borderRadius: 0,
		backgroundColor: "#fff",
	},
	tab: {
		color: Colors.primary,
		opacity: 0.5,
	},
	activetab: {
		color: Colors.primary,
		shadowColor: Colors.primary,
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.7,
		shadowRadius: 10.16,
		elevation: 20,
	},
});
