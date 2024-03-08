import React from "react";

import { render } from "@testing-library/react-native";

import WeatherCurrent from "../WeatherCurrent";

describe("WeatherCurrent", () => {
  test("should renders correctly", () => {
    const { getByTestId } = render(<WeatherCurrent />);
    expect(getByTestId("weather-current")).toBeTruthy();
  });
});
