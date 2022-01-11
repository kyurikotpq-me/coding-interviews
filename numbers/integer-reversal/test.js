const { expect } = require("@jest/globals");
const reverseInt = require("./index.js");

test("reverseInt function should exist", () => {
  expect(reverseInt).toBeDefined();
});

test("Reversing 15 should give 51", () => {
  expect(reverseInt(15)).toEqual(51);
});

test("Reversing 8 should give 8", () => {
  expect(reverseInt(8)).toEqual(8);
});

test("Reversing 9911 should give 1199", () => {
  expect(reverseInt(9911)).toEqual(1199);
});

test("Reversing 8109 should give 9018", () => {
  expect(reverseInt(8109)).toEqual(9018);
});

test("Reversing -1234 should give -4321", () => {
  expect(reverseInt(-1234)).toEqual(-4321);
});
