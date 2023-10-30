import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Home = () => {
	const router = useRouter();
	return (
		<View>
			<Text>Home</Text>
			<Button
				title="GO to register"
				onPress={() => {
					router.push("/register");
				}}
			/>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});
