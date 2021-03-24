import React from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Screens from "./navigation/Screens";
import { Ionicons } from "@expo/vector-icons";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isReady: false,
		};
	}

	async componentDidMount() {
		await Font.loadAsync({
			Roboto: require("native-base/Fonts/Roboto.ttf"),
			Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
			Poppins_medium: require("./assets/fonts/Poppins-Medium.ttf"),
			Poppins_regular: require("./assets/fonts/Poppins-Regular.ttf"),
			Poppins_semi_bold: require("./assets/fonts/Poppins-SemiBold.ttf"),
			Poppins_bold: require("./assets/fonts/Poppins-Bold.ttf"),
			...Ionicons.font,
		});
		this.setState({ isReady: true });
	}

	render() {
		if (!this.state.isReady) {
			return <AppLoading />;
		}

		return <Screens />;
	}
}
