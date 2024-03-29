import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../constants";
import moment from "moment";

import WeatherCurrent from "../components/WeatherCurrent";
import WeatherCoordinates from "../components/WeatherCoordinates";

export default function App() {
  const now = moment(new Date());

  return (
    <LinearGradient
      testID="home-screen"
      colors={[colors.light_blue, colors.dark_blue]}
      style={styles.container}
    >
      <View style={styles.date_container}>
        <Text style={styles.date}>{now.format("DD MMM YYYY")}</Text>
        <Text style={styles.day}>{now.format("dddd")}</Text>
      </View>

      <WeatherCurrent />
      <Text testID="home-screen-divider">Or</Text>
      <WeatherCoordinates />

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
  date: {
    fontSize: 18,
  },
  day: {
    fontSize: 28,
  },
  date_container: {
    self: "flex-start",
    alignItems: "center",
  },
});
