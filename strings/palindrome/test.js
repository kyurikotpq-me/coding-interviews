const { expect } = require("@jest/globals");
const palindrome = require("./index.js");

test("Palindrome function should exist", () => {
  expect(palindrome).toBeDefined();
});

test("Palindrome '' should return true", () => {
  expect(palindrome("")).toEqual(true);
});

test("Palindrome 'k' should return true", () => {
  expect(palindrome("k")).toEqual(true);
});

test("Palindrome '1221' (str) should return true", () => {
  expect(palindrome("1221")).toEqual(true);
});

test("Non-palindrome 'lmao' should return false", () => {
  expect(palindrome("lmao")).toEqual(false);
});

test("Palindrome '!tacocat!' should return true", () => {
  expect(palindrome("!tacocat!")).toEqual(true);
});

test("Non-palindrome '!taco cat!' should return false", () => {
  expect(palindrome("!taco cat!")).toEqual(false);
});