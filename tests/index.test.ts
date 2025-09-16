import { problem } from "../src";

describe("개미수열 테스트", () => {
  it("n=5일 때 가운데 두 자리 수 m은?", () => {
    expect(problem(5)).toBe("12");
  });
  it("n=8일 때 가운데 두 자리 수 m은?", () => {
    expect(problem(8)).toBe("21");
  });
});
