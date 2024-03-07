import React from "react";
import { render } from "@testing-library/react-native";

import HomeScreen from "../HomeScreen";

describe("HomeScreen", () => {
  test("should renders correctly", () => {
    const wrapper = render(<HomeScreen />);
    const { getByText } = wrapper;

    expect(getByText("HomeScreen")).toBeTruthy();
  });
});
