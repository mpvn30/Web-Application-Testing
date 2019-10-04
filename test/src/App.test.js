import { render } from "@testing-library/React";
import React from "react";
import Dashboard, {
  addAwayScore,
  addBall,
  addHits,
  addHomeScore,
  addStrike
} from "./components/Dashboard";

test("Dashboard test", () => {
    render(<Dashboard />);
  });

it("adds 1 when there is a Strike", () => {
  expect(addStrike(1)).toBe(2);
});
it("adds 1 to Ball when event happens", () => {
  expect(addBall(1)).toBe(2);
});
it("adds 1 to Hit when there is a hit", () => {
  expect(addHits(1)).toBe(2);
});
it("adds 1 to home score", () => {
  expect(addHomeScore(1)).toBe(2);
});
it("adds 1 to away score", () => {
  expect(addAwayScore(1)).toBe(2);
});