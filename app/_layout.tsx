import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ title: "Login" }} />
			<Stack.Screen name="register" options={{ title: "register" }} />
			{/* <Stack.Screen name="(tabs)" options={{ title: "tabs" }} /> */}
		</Stack>
	);
};

export default Layout;

const styles = StyleSheet.create({});
