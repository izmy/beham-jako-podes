import { describe, expect, it } from "vitest";
import { calculatePace } from "./calculatePace";

describe("calculatePace", () => {
  it('should return "N/A" if distance is 0', () => {
    expect(calculatePace(0, 3600)).toBe("N/A");
  });

  it('should return "N/A" if time is 0', () => {
    expect(calculatePace(10, 0)).toBe("N/A");
  });

  it("should calculate pace correctly for whole minutes", () => {
    expect(calculatePace(10, 600)).toBe("1:00 min/km");
  });

  it("should calculate pace correctly for minutes and seconds", () => {
    expect(calculatePace(5, 620)).toBe("2:04 min/km");
  });

  it("should round seconds correctly", () => {
    expect(calculatePace(3, 625)).toBe("3:28 min/km");
  });

  it("should handle edge case where seconds round to 60", () => {
    expect(calculatePace(1, 61)).toBe("1:01 min/km");
  });
});
