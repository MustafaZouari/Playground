import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

const Register = () => {
	const router = useRouter();
	return (
		<View>
			<Text>Register</Text>
			<Link href={"/(tabs)/one"} replace asChild>
				<Button
					title="GO to tabs"
					onPress={() => {
						router.push("/register");
					}}
				/>
			</Link>
		</View>
	);
};

export default Register;

const styles = StyleSheet.create({});
