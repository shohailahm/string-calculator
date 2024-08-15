import { add } from "./stringCalculator.js";

describe("String Calculator", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself when only one number is provided", () => {
    expect(add("1")).toBe(1);
  });

  test("returns the sum of two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test("handles an unknown amount of numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  test("handles newlines as a delimiter", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("supports different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//!\n2!3!4")).toBe(9);
  });

  test("throws an error for negative numbers", () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
  });

  test("throws an error listing all negative numbers", () => {
    expect(() => add("1,-2,-3,4")).toThrow(
      "Negative numbers not allowed: -2, -3"
    );
  });
});
