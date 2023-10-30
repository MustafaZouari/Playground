import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

const One = () => {
	const router = useRouter();
	return (
		<View>
			<Text>One</Text>
			<Link href={"/"} replace asChild>
				<Button
					title="GO to tabs"
					onPress={() => {
						router.replace("/register");
					}}
				/>
			</Link>
		</View>
	);
};

export default One;

const styles = StyleSheet.create({});
