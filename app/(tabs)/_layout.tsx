import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const Layout = () => {
	return (
		<Tabs screenOptions={{}}>
			<Tabs.Screen
				name="one"
				options={{
					title: "home",
					headerTitle: "home",
				}}
			/>
		</Tabs>
	);
};

export default Layout;

const styles = StyleSheet.create({});
