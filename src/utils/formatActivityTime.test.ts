import { describe, it, expect } from "vitest";
import { formatActivityTime } from "./formatActivityTime";

describe("formatActivityTime", () => {
  it("should format time correctly when there are hours, minutes, and seconds", () => {
    expect(formatActivityTime(3661)).toBe("1h 1m 1s");
  });

  it("should format time correctly when there are only minutes and seconds", () => {
    expect(formatActivityTime(61)).toBe("1m 1s");
  });

  it("should format time correctly when there are only seconds", () => {
    expect(formatActivityTime(59)).toBe("59s");
  });

  it("should format time correctly when there are only hours", () => {
    expect(formatActivityTime(3600)).toBe("1h ");
  });

  it("should format time correctly when there are hours and minutes", () => {
    expect(formatActivityTime(3660)).toBe("1h 1m ");
  });

  it("should format time correctly when there are minutes only", () => {
    expect(formatActivityTime(60)).toBe("1m ");
  });

  it("should return an empty string when time is 0", () => {
    expect(formatActivityTime(0)).toBe("");
  });
});
