import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { CommunStyle } from "../../constants/CommunObjects";
import Animated, {
	interpolateColor,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";
const colors = [
	{ id: 0, value: "red" },
	{ id: 1, value: "cyan" },
	{ id: 2, value: "tomato" },
];

interface BackgroundItemProps {
	color: string;
	onPress: () => void;
}

const BackgrounndItem = ({ color, onPress }: BackgroundItemProps) => {
	return (
		<Pressable
			onPress={onPress}
			style={{
				backgroundColor: color,
				width: 40,
				height: 40,
				borderRadius: 4,
			}}
		></Pressable>
	);
};

const AnimatedBackground = () => {
	const progress = useSharedValue(0);
	console.log(progress.value);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			backgroundColor: interpolateColor(
				progress.value,
				[0, 1, 2],
				["red", "cyan", "tomato"]
			),
		};
	});

	const handlePress = (id: number) => {
		progress.value = withTiming(id, { duration: 500 });
	};
	return (
		<Animated.View style={[styles.container, animatedStyle]}>
			<View style={styles.colorsContainer}>
				{colors.map((e, i) => (
					<BackgrounndItem
						key={e.id}
						color={e.value}
						onPress={() => {
							handlePress(e.id);
							console.log("pressd");
						}}
					/>
				))}
			</View>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	container: {
		...CommunStyle,
		flexDirection: "row",
		paddingBottom: 20,
	},
	colorsContainer: {
		flexDirection: "row",
		gap: 10,
		alignSelf: "flex-end",
	},
});
export default AnimatedBackground;
