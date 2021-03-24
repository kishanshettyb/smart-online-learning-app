import React from "react";
import { Colors } from "../styles";
import { Container, View } from "native-base";
import globalStyles from "../styles/globalStyles";
import { StyleSheet, StatusBar } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import { HeadingWithButton, HeadingSecondary } from "../components";

export function Settings() {
	const [pushNotification, setPushNotification] = React.useState(true);
	const [emailNotification, setEmailNotification] = React.useState(true);
	const [dataSaving, setDataSaving] = React.useState(true);
	const [googleDrive, setGoogleDrive] = React.useState(false);
	const [subscribe, setSubscribe] = React.useState(false);
	const [darkmode, setDarkMode] = React.useState(false);

	return (
		<Container>
			<HeadingWithButton
				transparent={false}
				title="Settings"
				androidStatusBarColor={Colors.white}
			/>
			<StatusBar barStyle={"dark-content"} translucent={false} />
			<View style={globalStyles.container}>
				{/* Push Notifications */}
				<View style={styles.settings}>
					<View>
						<HeadingSecondary
							title="Push Notifications"
							subTitle="Receive Push Notifications"
						/>
					</View>
					<View>
						<ToggleSwitch
							isOn={pushNotification}
							onColor={Colors.primary}
							offColor={Colors.grayLight}
							size="medium"
							onToggle={(isOn) => setPushNotification(isOn)}
						/>
					</View>
				</View>
				{/* Email Notifications */}
				<View style={styles.settings}>
					<View>
						<HeadingSecondary
							title="Email Notifications"
							subTitle="Receive Email Notifications"
						/>
					</View>
					<View>
						<ToggleSwitch
							isOn={emailNotification}
							onColor={Colors.primary}
							offColor={Colors.grayLight}
							size="medium"
							onToggle={(isOn) => setEmailNotification(isOn)}
						/>
					</View>
				</View>
				{/* Data saving mode */}
				<View style={styles.settings}>
					<View>
						<HeadingSecondary
							title="Data saving mode"
							subTitle="Images loaded at the best resolution"
						/>
					</View>
					<View>
						<ToggleSwitch
							isOn={dataSaving}
							onColor={Colors.primary}
							offColor={Colors.grayLight}
							size="medium"
							onToggle={(isOn) => setDataSaving(isOn)}
						/>
					</View>
				</View>
				{/* Save to Google Drive  */}
				<View style={styles.settings}>
					<View>
						<HeadingSecondary
							title="Save to Google Drive "
							subTitle="Images save on Google Drive"
						/>
					</View>
					<View>
						<ToggleSwitch
							isOn={googleDrive}
							onColor={Colors.primary}
							offColor={Colors.grayLight}
							size="medium"
							onToggle={(isOn) => setGoogleDrive(isOn)}
						/>
					</View>
				</View>
				{/* Subscribe  */}
				<View style={styles.settings}>
					<View>
						<HeadingSecondary
							title="Subscribe "
							subTitle="Receive updates via email"
						/>
					</View>
					<View>
						<ToggleSwitch
							isOn={subscribe}
							onColor={Colors.primary}
							offColor={Colors.grayLight}
							size="medium"
							onToggle={(isOn) => setSubscribe(isOn)}
						/>
					</View>
				</View>
				{/* Dark Mode  */}
				<View style={styles.settings}>
					<View>
						<HeadingSecondary
							title="Dark Mode"
							subTitle="Better battery performance"
						/>
					</View>
					<View>
						<ToggleSwitch
							isOn={darkmode}
							onColor={Colors.primary}
							offColor={Colors.grayLight}
							size="medium"
							onToggle={(isOn) => setDarkMode(isOn)}
						/>
					</View>
				</View>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	settings: {
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
		borderBottomColor: Colors.grayLight,
		borderBottomWidth: 1,
		paddingVertical: 15,
	},
});
