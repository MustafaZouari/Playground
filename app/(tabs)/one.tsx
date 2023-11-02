import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { CommunStyle } from "../../constants/CommunObjects";

interface linkProps {
	onPress: () => void;
	text: string;
}

const PagesLinks = ({ onPress, text }: linkProps) => {
	return (
		<View style={styles.linkContainer}>
			<Pressable onPress={onPress} style={styles.pageLink}>
				<Text style={{ color: "white", fontWeight: "700" }}>
					{text}
				</Text>
			</Pressable>
		</View>
	);
};

const One = () => {
	const router = useRouter();

	const handleLinkPress = () => {
		router.push("/(app)/animatedBackground");
	};
	return (
		<View style={styles.container}>
			<PagesLinks onPress={handleLinkPress} text="Animated background" />
			{/* ¶¶
			<Link href={"/"} replace asChild>
				<Button
					title="GO to Login"
					onPress={() => {
						router.replace("/register");
					}}
				/>
			</Link> */}
		</View>
	);
};

export default One;

const styles = StyleSheet.create({
	container: {
		...CommunStyle,
		backgroundColor: "white",
		// justifyContent: "space-between",
	},
	pageLink: {
		width: 200,
		height: 50,
		borderWidth: 1,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
	},
	linkContainer: {
		backgroundColor: "black",
		borderRadius: 8,
	},
});
