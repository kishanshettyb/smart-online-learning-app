import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export function LoadingScreen() {
	return (
		<View style={styles.container}>
			<Image
				style={{ width: 100, height: 100 }}
				source={require("../assets/img/loader.gif")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		flex: 1,
		alignItems: "center",
	},
});
