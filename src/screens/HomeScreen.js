import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../constants";
import moment from "moment";

export default function App() {
  const now = moment(new Date());

  return (
    <LinearGradient
      testID="home-screen"
      colors={[colors.light_blue, colors.dark_blue]}
      style={styles.container}
    >
      <Text>HomeScreen</Text>
      <Text>{now.format("DD-MMMM-YYYY")}</Text>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
