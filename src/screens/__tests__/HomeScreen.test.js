import React from "react";
import { render } from "@testing-library/react-native";
import { View } from "react-native";

import HomeScreen from "../HomeScreen";
import WeatherCurrent from "../../components/WeatherCurrent";
import WeatherCoordinates from "../../components/WeatherCoordinates";

jest.mock("../../components/WeatherCurrent", () => {
  return jest.fn().mockReturnValue(null);
});

jest.mock("../../components/WeatherCoordinates", () => {
  return jest.fn().mockReturnValue(null);
});

describe("HomeScreen", () => {
  test("should renders correctly", () => {
    const { getByTestId } = render(<HomeScreen />);
    expect(getByTestId("home-screen")).toBeTruthy();
  });

  describe("Title Section", () => {
    beforeAll(() => {
      jest.useFakeTimers("modern");
      jest.setSystemTime(new Date("2021-01-01 00:00:00")); // Fri, 01 Jan 2021 00:00:00 GMT
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    test("should display the weekday", () => {
      const { getByText } = render(<HomeScreen />);
      expect(getByText("Friday")).toBeTruthy();
    });

    test("should display the current date", () => {
      const { getByText } = render(<HomeScreen />);
      expect(getByText("01 Jan 2021")).toBeTruthy();
    });
  });

  test("should contain a section to get the current weather", () => {
    WeatherCurrent.mockReturnValue(<View testID="mock-weather-current" />);

    const { getByTestId } = render(<HomeScreen />);
    expect(getByTestId("mock-weather-current")).toBeTruthy();
  });

  test("should contain a section to get the weather coordinates", () => {
    WeatherCoordinates.mockReturnValue(
      <View testID="mock-weather-coordinates" />
    );

    const { getByTestId } = render(<HomeScreen />);
    expect(getByTestId("mock-weather-coordinates")).toBeTruthy();
  });
});
