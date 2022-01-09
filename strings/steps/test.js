/**
 * Test cases obtained from:
 * https://github.com/StephenGrider/AlgoCasts/blob/master/exercises/steps/test.js
 */
const steps = require("./index");
const { expect } = require("@jest/globals");

// Tell jest to look at the console log
beforeEach(() => {
  jest.spyOn(console, "log");
});

// And tell jest to stop looking at the console log
afterEach(() => {
  console.log.mockRestore();
});

test("steps is a function", () => {
  expect(typeof steps).toEqual("function");
});

test("steps called with n = 1", () => {
  steps(1);
  expect(console.log.mock.calls[0][0]).toEqual("#");
  expect(console.log.mock.calls.length).toEqual(1);
});

test("steps called with n = 2", () => {
  steps(2);
  expect(console.log.mock.calls[0][0]).toEqual("# ");
  expect(console.log.mock.calls[1][0]).toEqual("##");
  expect(console.log.mock.calls.length).toEqual(2);
});

test("steps called with n = 3", () => {
  steps(3);
  expect(console.log.mock.calls[0][0]).toEqual("#  ");
  expect(console.log.mock.calls[1][0]).toEqual("## ");
  expect(console.log.mock.calls[2][0]).toEqual("###");
  expect(console.log.mock.calls.length).toEqual(3);
});

test("steps called with n = 7", () => {
  steps(7);
  expect(console.log.mock.calls[0][0]).toEqual("#      ");
  expect(console.log.mock.calls[1][0]).toEqual("##     ");
  expect(console.log.mock.calls[2][0]).toEqual("###    ");
  expect(console.log.mock.calls[3][0]).toEqual("####   ");
  expect(console.log.mock.calls[4][0]).toEqual("#####  ");
  expect(console.log.mock.calls[5][0]).toEqual("###### ");
  expect(console.log.mock.calls[6][0]).toEqual("#######");
  expect(console.log.mock.calls.length).toEqual(7);
});
