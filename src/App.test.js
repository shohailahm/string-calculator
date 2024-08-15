import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders correctly", () => {
    render(<App />);
    expect(screen.getByText("String Calculator")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter numbers separated by comma or newline")
    ).toBeInTheDocument();
    expect(screen.getByText("Calculate")).toBeInTheDocument();
  });

  test("calculates the sum for valid input", () => {
    render(<App />);

    fireEvent.change(
      screen.getByPlaceholderText(
        "Enter numbers separated by comma or newline"
      ),
      { target: { value: "1,2,3" } }
    );
    fireEvent.click(screen.getByText("Calculate"));

    expect(screen.getByText("Result:")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
  });

  test("shows error message for negative numbers", () => {
    render(<App />);

    fireEvent.change(
      screen.getByPlaceholderText(
        "Enter numbers separated by comma or newline"
      ),
      { target: { value: "1,-2,3" } }
    );
    fireEvent.click(screen.getByText("Calculate"));

    expect(
      screen.getByText("Negative numbers not allowed: -2")
    ).toBeInTheDocument();
  });

  test("displays result when input is valid", () => {
    render(<App />);

    fireEvent.change(
      screen.getByPlaceholderText(
        "Enter numbers separated by comma or newline"
      ),
      { target: { value: "4,5" } }
    );
    fireEvent.click(screen.getByText("Calculate"));

    expect(screen.getByText("Result:")).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();
  });
});
