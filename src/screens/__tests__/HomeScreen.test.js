import React from "react";
import { render } from "@testing-library/react-native";

import HomeScreen from "../HomeScreen";

describe("HomeScreen", () => {
  test("should renders correctly", () => {
    const wrapper = render(<HomeScreen />);
    const { getByText, getByTestId } = wrapper;

    expect(getByText("HomeScreen")).toBeTruthy();
    expect(getByTestId("home-screen")).toBeTruthy();
  });

  describe("Title Section", () => {
    beforeEach(() => {
      jest.useFakeTimers("modern");
      jest.setSystemTime(new Date("2021-01-01 00:00:00"));
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    test("should display the current date", () => {
      const wrapper = render(<HomeScreen />);
      const { getByText } = wrapper;

      expect(getByText("01-January-2021")).toBeTruthy();
    });
  });
});
