import * as React from "react";
import { Video } from "expo-av";
import { Colors } from "../styles/index";
import { View, StyleSheet, Button } from "react-native";

export function VideoPlayer() {
	const video = React.useRef(null);
	const [status, setStatus] = React.useState({});
	return (
		<View style={styles.container}>
			<Video
				ref={video}
				style={styles.video}
				source={{
					uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
				}}
				useNativeControls={true}
				resizeMode="contain"
				isLooping
				onPlaybackStatusUpdate={(status) => setStatus(() => status)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: Colors.black,
	},
	video: {
		alignSelf: "center",
		width: "100%",
		height: 300,
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
});
