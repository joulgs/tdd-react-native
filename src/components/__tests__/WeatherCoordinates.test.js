import React from "react";

import { render } from "@testing-library/react-native";

import WeatherCoordinates from "../WeatherCoordinates";

describe("WeatherCoordinates", () => {
  test("should renders correctly", () => {
    const { getByTestId } = render(<WeatherCoordinates />);
    expect(getByTestId("weather-coordinates")).toBeTruthy();
  });
});
