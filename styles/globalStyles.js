import { Spacing, Colors } from "./index";
import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
	droidSafeArea: {
		paddingTop: Platform.OS === "android" ? 30 : 0,
	},
	container: {
		paddingHorizontal: Spacing.base,
	},
	containerSmall: {
		paddingHorizontal: 10,
	},
	inputBoxRegular: {
		borderRadius: 14,
		paddingLeft: 20,
		height: 56,
		backgroundColor: Colors.input,
		borderTopWidth: 0,
		borderBottomWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		marginTop: 30,
	},
	inputField: {
		color: Colors.black,
		fontFamily: "Poppins_regular",
		fontSize: 16,
	},
	shadow: {
		elevation: 10,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 0.5 * 10 },
		shadowOpacity: 0.3,
		shadowRadius: 0.9 * 10,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
	},
	shadowSm: {
		elevation: 4,
		shadowColor: Colors.grayLight,
		shadowOffset: { width: 0, height: 0.9 * 5 },
		shadowOpacity: 0.2,
		shadowRadius: 3 * 4,
	},
	shadowGradientBtn: {
		shadowColor: Colors.primary,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
	},
});
